class basketPage {
 
    
    get basketBlocks() {

    return $$("div.basket__productslist div.basket__block span.basket__price");
    }

    get basketPrices() {

        return $("div.basket__productslist div.basket__block:nth-child(2) div.basket__item.--prices span");
    }


    get productSum() {

        return $("div.basketedit_summary_container strong[data-worth]");
    }


    async firstProdPrix(): Promise<string>{

        const prix:WebdriverIO.Element = await this.basketPrices;
        await prix.waitForDisplayed();
        return await prix.getText();
    }
     

    async AllProdPrix(): Promise<string>{

        const prix:WebdriverIO.Element = await this.productSum;
        await prix.waitForDisplayed();
        return await prix.getText();
    }

    async ileElement() : Promise <number>{

        const ile:WebdriverIO.ElementArray = await this.basketBlocks;
        
        return ile.length;

    }


    async pokazCeny(){

        const ile:WebdriverIO.ElementArray = await this.basketBlocks;
        
        for (let i=0; i<ile.length; i++) {

            console.log("cena" + i + " = " + ile[i].getText());

        }
        
     

    }

}

export default new basketPage();