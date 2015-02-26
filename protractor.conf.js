var config = {};

config.baseUrl = 'http://localhost:3000/';

        config.sauceUser = process.env.SAUCE_USERNAME;
        config.sauceKey = process.env.SAUCE_ACCESS_KEY;
if (process.env.TRAVIS) {
        config.capabilities['tunnel-identifier'] = process.env.TRAVIS_JOB_NUMBER;
        config.capabilities.build = process.env.TRAVIS_BUILD_NUMBER;
}

module.exports = config;
