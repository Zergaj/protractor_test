describe('login to yandex mailbox', function() {
  it('login to yandex mailbox', function() {
	var login = 'test-protractor@yandex.ru';
	var passwd = 'Idoru256';
	  
	var loginField = element(by.name('login'));
	var passwdField = element(by.name('passwd'));
	var signinButton = element(by.className('button auth__button domik3__auth-button button_theme_bordergray button_size_m i-bem button_js_inited'))
	
	browser.driver.manage().window().maximize();
	browser.waitForAngularEnabled(false);
    browser.get('https://yandex.ru');

	loginField.click();
    loginField.sendKeys(login);
	
	passwdField.click();
    passwdField.sendKeys(passwd);

	signinButton.click();
	
    expect(browser.getCurrentUrl()).toContain('mail.yandex');
  });
});

