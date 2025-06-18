class productlistingPage {
    
    elements = {
        inventoryitemlist: () => '//div[@id="inventory_container"]//div[@class="inventory_item"]',
        productname: (nth) => `(//div[@id="inventory_container"]//div[@class="inventory_item"])[${nth}]//div[@class="inventory_item_name "]`,
        productprice: (nth) => `(//div[@id="inventory_container"]//div[@class="inventory_item"])[${nth}]//div[@class="inventory_item_price"]`,
        productaddtocart: (nth) => `(//div[@id="inventory_container"]//div[@class="inventory_item"])[${nth}]//button[text()="Add to cart"]`,
        cartbutton: () => '//div[@id="shopping_cart_container"]',        
    };
    
    async addtocart(pricelimit) {        
        const productadded = []; 
        const count = await page.locator(this.elements.inventoryitemlist()).count();

        for (let i = 1; i <= count; i++) {
            const productname = await page.locator(this.elements.productname(i)).textContent();
            const productprice = await page.locator(this.elements.productprice(i)).textContent();
            var price = productprice.replace("$", "");
            if (price < pricelimit) {
                await page.click(this.elements.productaddtocart(i));
                productadded.push(productname);
            }
        }
        return productadded;
    }

    async navigatetocart() {
        await page.click(this.elements.cartbutton());
    }   
}
module.exports = {
    productlistingPage
};
