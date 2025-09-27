
const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
  // Required
  jsonDir: 'reports', // ** Path to the JSON report directory **
  reportPath: 'reports/html', // ** Path to save the HTML report **
  // Optional metadata provided to show in the report
  metadata:{
      browser: {
          name: 'chromium',
          version: 'latest'
      },
      device: 'Local test machine',
      platform: {
          name: 'windows', // or macOS, Linux
          version: 'windows 11'
      }
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'PlaywrightBDD' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Cycle', value: 'B11221.34321' },
      { label: 'Execution Start Time', value: new Date().toLocaleString() },
      { label: 'Execution End Time', value: new Date().toLocaleString() }
    ]
  }
});