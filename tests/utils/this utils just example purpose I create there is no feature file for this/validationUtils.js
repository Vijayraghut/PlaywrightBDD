class ValidationUtils {
    /**
     * Validates email format
     * @param {string} email - Email to validate
     * @returns {boolean} True if email is valid
     */
    static isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Validates phone number format
     * @param {string} phone - Phone number to validate
     * @returns {boolean} True if phone number is valid
     */
    static isValidPhone(phone) {
        const phoneRegex = /^\d{10}$/;  // Simple 10-digit validation
        return phoneRegex.test(phone);
    }

    /**
     * Checks if string contains only letters
     * @param {string} text - Text to validate
     * @returns {boolean} True if text contains only letters
     */
    static isAlphaOnly(text) {
        return /^[A-Za-z]+$/.test(text);
    }

    /**
     * Validates password strength
     * @param {string} password - Password to validate
     * @returns {Object} Validation result with status and message
     */
    static validatePassword(password) {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (password.length < minLength) {
            return { valid: false, message: 'Password must be at least 8 characters long' };
        }
        if (!hasUpperCase || !hasLowerCase) {
            return { valid: false, message: 'Password must contain both upper and lowercase letters' };
        }
        if (!hasNumbers) {
            return { valid: false, message: 'Password must contain at least one number' };
        }
        if (!hasSpecialChar) {
            return { valid: false, message: 'Password must contain at least one special character' };
        }

        return { valid: true, message: 'Password meets all requirements' };
    }
}