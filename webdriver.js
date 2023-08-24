const os = require('os');

const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const chromeOptions = new chrome.Options();
chromeOptions.setChromeBinaryPath('browsers/bin/chrome-unstable');
const driver = new webdriver.Builder()
  .setChromeOptions(chromeOptions)
  .setChromeService(
      new chrome.ServiceBuilder().addArguments('--disable-build-check')
  ).forBrowser('chrome')
  .build();

  driver.get('chrome://version')
    .then(() => driver.sleep(5000))
    .then(() => driver.quit());
