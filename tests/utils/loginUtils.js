const fs = require('fs');
const path = require('path');

class LoginUtils {
    /**
     * Get login credentials from JSON file
     * @returns {Object} Login credentials
     */
    static getLoginCredentials() {
        const filePath = path.join('TestData', 'login.json');
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }

    /**
     * Validate login credentials
     * @param {string} username 
     * @param {string} password 
     * @returns {boolean}
     */
    static validateCredentials(username, password) {
        return username.trim() !== '' && password.trim() !== '';
    }

    /**
     * Check if user is logged in by verifying dashboard elements
     * @param {Object} page - Playwright page object
     * @returns {Promise<boolean>}
     */
    static async isUserLoggedIn(page) {
        try {
            await page.waitForSelector('//h6[text()="Dashboard"]', { timeout: 5000 });
            return true;
        } catch (error) {
            return false;
        }
    }
}