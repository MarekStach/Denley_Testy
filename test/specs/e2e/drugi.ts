
import prodPage from "../../pages/prodPage";
import frontPage from "../../pages/frontPage";
import basketPage from "../../pages/basketPage";


describe("nowy testowy",async () => {

  

    it("Should add the third product to the basket",async () => {

      browser.url("https://www.denley.pl/product-pol-85889-T-shirt-meski-bez-nadruku-blekitny-Denley-2005.html");

      if (await frontPage.rodoFrameVisible()) {
        console.log("byłem tu");
        await frontPage.clickRodoConfBtn();
        console.log (await frontPage.rodoFrameVisible());
        
        }

      await prodPage.size2xlClick();
      await prodPage.addToBasketBtnClick();
      //await browser.pause(3000);
      await prodPage.doKasyBtnClick();
     
      await browser.pause(3000);
      console.log("cena elementu to: " + await basketPage.firstProdPrix())
      console.log("jest tu " + await basketPage.ileElement()) ;
      expect(await basketPage.firstProdPrix()).toContain(await basketPage.AllProdPrix());
      await basketPage.pokazCeny();



      
    })


  


})
