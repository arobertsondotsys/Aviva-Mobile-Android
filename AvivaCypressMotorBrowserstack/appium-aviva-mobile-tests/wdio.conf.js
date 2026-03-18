// wdio.conf.js
const { execSync } = require('node:child_process');
const path = require('node:path');
const fs = require('node:fs');

exports.config = {
  runner: 'local',

  // --- Your existing capabilities (kept as-is) ---
  capabilities: [{
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Android Emulator',
    'appium:browserName': 'Chrome',
    'appium:newCommandTimeout': 180,
    'appium:uiautomator2ServerInstallTimeout': 120000,
  }],

  // --- Use WDIO's Appium service (you already have this) ---
  services: [
    ['appium', {
      // args: { basePath: '/' } // optional; Appium 2 default path is '/'
    }]
  ],

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 180000
  },

  // --- Mochawesome: write JSON per spec ---
  reporters: [
    'spec',
    ['mochawesome', {
      outputDir: './reports/mochawesome',
      outputFileFormat: (opts) => `result-${opts.cid}-${opts.cidIndex || 0}.json`,
      mochawesomeOpts: {
        reportDir: './reports/mochawesome',
        quiet: true,
        overwrite: false,
        html: false,   // JSON first
        json: true
      }
    }]
  ],

  logLevel: 'info',
  waitforTimeout: 30000,
  connectionRetryTimeout: 180000,
  connectionRetryCount: 2,

  // --- Auto-merge & generate HTML like Cypress does ---
  onComplete: async function () {
    const reportDir = path.resolve(__dirname, 'reports', 'mochawesome');
    if (!fs.existsSync(reportDir)) {
      console.warn('[mochawesome] report directory not found, skipping merge.');
      return;
    }
    try {
      const mergedJson = path.join(reportDir, 'merged.json');
      // Merge all mochawesome JSON into one (no shell redirection; cross-platform)
      const merged = execSync(`npx mochawesome-merge "${reportDir}/*.json"`, { stdio: 'pipe' }).toString();
      fs.writeFileSync(mergedJson, merged);

      // Generate a single self-contained HTML (inline assets)
      execSync(`npx marge "${mergedJson}" --reportDir "${reportDir}" --inline`, { stdio: 'inherit' });

      console.log(`[mochawesome] HTML report generated: ${path.join(reportDir, 'merged.html')}`);
    } catch (err) {
      console.error('[mochawesome] merge/generate failed:', err?.message || err);
      // Do not fail the test suite only because report generation failed
    }
  }
};