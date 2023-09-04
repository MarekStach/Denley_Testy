class searchPage {

    
    get numberOfArt(){

        return $$("section#search div.product");
    }
    
    get thirdArticle(){

        return $("div#content section#search div[data-prod_position='3']");
    }

    get ThirdProdDesc(){

        return $("section#search div[data-prod_position='3'] h3")
    }

    get thirdProdPrice(){

        return $("section#search div[data-prod_position='3']  div.product__prices strong");
    }


    async returnThirdProdPrice(): Promise<string> {

        const price:WebdriverIO.Element = await this.thirdProdPrice;

        return await price.getText();
    }

    async countArticle(): Promise<number> {
        const articles: WebdriverIO.ElementArray = await this.numberOfArt;
            return await articles.length
    }

    async returnThirdProdDesc(): Promise<string> {

        const desc:WebdriverIO.Element = await this.ThirdProdDesc;
        return await desc.getText();

    }

}

export default new searchPage();