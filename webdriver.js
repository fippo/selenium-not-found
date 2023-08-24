const os = require('os');

const webdriver = require('selenium-webdriver');
const logging = require('selenium-webdriver/lib/logging')
logger = logging.getLogger('webdriver')
logger.setLevel(logging.Level.ALL)
console.log('LOGGER', logger);
logging.installConsoleHandler()
const chrome = require('selenium-webdriver/chrome');

const chromeOptions = new chrome.Options();
//chromeOptions.setChromeBinaryPath(process.cwd() + '/browsers/bin/chrome-unstable');
chromeOptions.setChromeBinaryPath(process.cwd() + '/node_modules/travis-multirunner/browsers/chrome/unstable/chrome');
const driver = new webdriver.Builder()
  .setChromeOptions(chromeOptions)
  /*
  .setChromeService(
      new chrome.ServiceBuilder().addArguments('--disable-build-check')
  )
  */
  .forBrowser('chrome')
  .build();

  driver.get('chrome://version')
    .then(() => driver.sleep(5000))
    .then(() => driver.quit());
