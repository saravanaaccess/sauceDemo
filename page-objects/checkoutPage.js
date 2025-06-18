class checkoutPage {
    
    elements = {
        firstnametxt: () => '//input[@id="first-name"]',
        lastnametxt: () => '//input[@id="last-name"]',
        postcodetxt: () => '//input[@id="postal-code"]',
        continuebutton: () => '//input[@id="continue"]', 
        finishbutton: () => '//button[@id="finish"]',   
        successtxt: () => '//h2[text()="Thank you for your order!"]',
    };   

    async submitorder(fname,lname,postcode) {
        await page.fill(this.elements.firstnametxt(), fname);
        await page.fill(this.elements.lastnametxt(), lname);
        await page.fill(this.elements.postcodetxt(), postcode);
        await page.click(this.elements.continuebutton());
        await page.click(this.elements.finishbutton());
        await page.isVisible(this.elements.successtxt());
    }
}
module.exports = {
    checkoutPage
};
