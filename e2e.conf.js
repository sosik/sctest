var config = require('./protractor.conf.js');

config.suites = ['test.spec.js'];

if (process.env.TRAVIS) {
	        config.capabilities.name = "[" + process.env.TRAVIS_REPO_SLUG + "#" + process.env.TRAVIS_BRANCH + "] [e2e] Build " + process.env.TRAVIS_BUILD_NUMBER;
}

module.exports.config = config;

