

class prodPage {

get prodDesc(){

    return $("#projector_productname h1");
}


get prodPrice(){

    return  $("#projector_price_value");
}

get size2XL (){

    //return $("div.sizes__sub.row.mx-0 div.p-1 a[data-type='7']");
    return $("[class='sizes__sub row mx-0'] [data-type='7']");

}

get addToBasketBtn() {
    return $("button#projector_button_basket")
    //return $("div.projector_buttons button#projector_button_basket");
}


get doKasyBtn(){
    //return $("div#dialog_wrapper_sub div.basketToplayer div.basketToplayer__sub div.basketToplayer__btns a[class='btn --outline --medium basketToplayer__close']");
    return $(".--medium.--secondary.--solid.btn");
    
}   

async retProdDesc() : Promise<string> {

    const desc:WebdriverIO.Element = await this.prodDesc;
    return desc.getText();
}

async size2xlClick(){

    const size: WebdriverIO.Element = await this.size2XL; 

    await size.waitForDisplayed();
    await size.click();
    
}

async addToBasketBtnClick(){

    const btn: WebdriverIO.Element = await this.addToBasketBtn; 

    await btn.waitForDisplayed();
    await btn.scrollIntoView(); // tu jest ten problem
    await btn.click();
    await console.log("hahaha");
    

}


async doKasyBtnClick(){

    const btn: WebdriverIO.Element = await this.doKasyBtn; 

    await btn.waitForDisplayed();
    //await btn.scrollIntoView();
    await btn.click();

}

async retProdPrice() : Promise<string> {

    const price:WebdriverIO.Element = await this.prodPrice;

    return  price.getText();
}



}

export  default new prodPage();