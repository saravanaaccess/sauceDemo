const { Given, When, Then } = require('@cucumber/cucumber')
const { homePage } = require('../page-objects/homePage.js')
const { productlistingPage } = require('../page-objects/productlistingPage.js')
const { cartPage } = require('../page-objects/cartPage.js')
const { test, expect } = require('@playwright/test');

const homepage = new homePage();
const productlistingpage = new productlistingPage();
const cartpage = new cartPage();

let productsadded;
Given('open swaglabs thru {string}', async function(url){
    await homepage.open(url);
});

When('login with {string} and {string}', async function(username,password){
    await homepage.typeusername(username);
    await homepage.typepassword(password);
    await homepage.clickloginButton();
});

When('Add all products under $25 into cart', async () => {
    productsadded = await productlistingpage.addtocart(25);
});

Then('verify the products are added into cart successfully', async () => {
    await productlistingpage.navigatetocart();
    for (let i = 0; i < productsadded.length; i++) {
        var actual = await cartpage.validateaddedproductexistincart(productsadded[i]);
        if (actual == false) {
            console.log(productsadded[i] + 'is not available in cart');
        }
        expect(actual).toBe(true);
    }
});