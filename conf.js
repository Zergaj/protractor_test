exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['login_yandex_test.js'],
  capabilities: {
	browserName: 'chrome'
  }
};