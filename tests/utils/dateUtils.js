class DateUtils {
    /**
     * Gets current date in specified format
     * @param {string} format - Format of the date (default: 'YYYY-MM-DD')
     * @returns {string} Formatted date string
     */
    static getCurrentDate(format = 'YYYY-MM-DD') {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        
        return format
            .replace('YYYY', year)
            .replace('MM', month)
            .replace('DD', day);
    }

    /**
     * Adds days to current date
     * @param {number} days - Number of days to add
     * @returns {Date} New date
     */
    static addDays(days) {
        const date = new Date();
        date.setDate(date.getDate() + days);
        return date;
    }

    /**
     * Formats date object to string
     * @param {Date} date - Date object to format
     * @param {string} format - Format string
     * @returns {string} Formatted date string
     */
    static formatDate(date, format = 'YYYY-MM-DD') {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        
        return format
            .replace('YYYY', year)
            .replace('MM', month)
            .replace('DD', day);
    }
}