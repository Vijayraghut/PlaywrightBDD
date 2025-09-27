class EmployeeUtils {
    /**
     * Generate random employee data
     * @returns {Object} Employee data
     */
    static generateEmployeeData() {
        const firstNames = ['John', 'Jane', 'Michael', 'Sarah', 'David', 'Emma'];
        const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia'];
        
        return {
            firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
            lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
            employeeId: Math.floor(Math.random() * 10000).toString().padStart(4, '0')
        };
    }

    /**
     * Validate employee form fields
     * @param {Object} employeeData 
     * @returns {Object} Validation result
     */
    static validateEmployeeData(employeeData) {
        const errors = [];
        
        if (!employeeData.firstName || employeeData.firstName.trim() === '') {
            errors.push('First Name is required');
        }
        
        if (!employeeData.lastName || employeeData.lastName.trim() === '') {
            errors.push('Last Name is required');
        }

        return {
            isValid: errors.length === 0,
            errors: errors
        };
    }

    /**
     * Check if employee details page is loaded
     * @param {Object} page - Playwright page object
     * @returns {Promise<boolean>}
     */
    static async isEmployeeDetailsPageLoaded(page) {
        try {
            await page.waitForSelector("//a[text()='Personal Details']", { timeout: 5000 });
            return true;
        } catch (error) {
            return false;
        }
    }

    /**
     * Get error message selectors for required fields
     * @returns {Object} Selectors for error messages
     */
    static getErrorMessageSelectors() {
        return {
            firstNameError: "(//span[text()='Required'])[1]",
            lastNameError: "(//span[text()='Required'])[2]"
        };
    }
}