class cartPage {
    
    elements = {
        cartitemlist: () => '//div[@id="cart_contents_container"]//div[@class="cart_item"]',
        productname: (nth) => `(//div[@id="cart_contents_container"]//div[@class="cart_item"])[${nth}]//div[@class="inventory_item_name"]`,
        productprice: (nth) => `(//div[@id="cart_contents_container"]//div[@class="cart_item"])[${nth}]//div[@class="inventory_item_price"]`,
        
    };
    async validateaddedproductexistincart(productnametoverify) {
        const count = await page.locator(this.elements.cartitemlist()).count();
        let matchfound = false;
        for (let i = 1; i <= count; i++) {
            const productname = await page.locator(this.elements.productname(i)).textContent();
            const productprice = await page.locator(this.elements.productprice(i)).textContent();
            if (productnametoverify == productname) {
                matchfound = true;
            }
        }
        return matchfound;
    }
}
module.exports = {
    cartPage
};
