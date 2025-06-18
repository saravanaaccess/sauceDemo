class homePage {

    elements = {
        usernameTxt: () => '//*[@id="user-name"]',
        passwordTxt: () => '//*[@id="password"]',
        loginButton: () => '//*[@id="login-button"]'
    };

    async typeusername(username) {
        
        await page.fill(this.elements.usernameTxt(), username);
    }

    async typepassword(password) {
        
        await page.click(this.elements.passwordTxt());
        await page.fill(this.elements.passwordTxt(), password);
        
    }
    async clickloginButton() {
        
        await page.click(this.elements.loginButton());
        await page.waitForTimeout(10000);
    }
    
    async open(url) {
        
        await page.goto(url);        
        page.waitForTimeout(5000);
    }
}
module.exports = {
  homePage
};
