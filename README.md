To reproduce,
* set BROWSER=chrome BVER=unstable
* run node_modules/travis-multirunner/setup.sh
* run node webdriver.js
This should open a browser and navigates to chrome://version which should show the Chrome canary version (currently M118)
It does in 4.10.0 and throws an error in 4.11.1:
  WebDriverError: unknown error: no chrome binary at "browsers/bin/chrome-unstable"
