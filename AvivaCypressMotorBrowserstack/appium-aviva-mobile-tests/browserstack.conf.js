// CommonJS export
// browserstack.conf.js  (Automate / Selenium on real devices — no Appium keys)
module.exports = {
  userName: "andyrobertson_bcS6X2",
  accessKey: "8GtG9L3ANKqDsEAfvaqv",

  capabilities: {
    browserName: "Chrome",
    "bstack:options": {
      deviceName: "Samsung Galaxy S25",  
      osVersion: "15.0",            
      realMobile: "true",
      projectName: "Aviva Mobile (Automate)",
      buildName: "Android Web Test",
      sessionName: "Sanity (Automate)",
      debug: true,
      networkLogs: true,
      local: true,
    }
  }
};
