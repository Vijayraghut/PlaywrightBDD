const fs = require('fs');
const path = require('path');

class CommonUtils {
    /**
     * Generates a random string of specified length
     * @param {number} length - Length of the random string
     * @returns {string} Random string
     */
    static generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    /**
     * Waits for a specified time
     * @param {number} ms - Time to wait in milliseconds
     */
    static async wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * Takes screenshot and saves it with timestamp
     * @param {Object} page - Playwright page object
     * @param {string} name - Name of the screenshot
     */
    static async takeScreenshot(page, name) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        await page.screenshot({ 
            path: path.join('reports', 'screenshots', `${name}-${timestamp}.png`)
        });
    }

    /**
     * Reads test data from JSON file
     * @param {string} filename - Name of the JSON file
     * @returns {Object} Parsed JSON data
     */
    static readTestData(filename) {
        const filePath = path.join('TestData', filename);
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
}