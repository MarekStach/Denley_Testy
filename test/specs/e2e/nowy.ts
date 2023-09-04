import { denleyUrl, thirdProdUrl } from "../../library/urls";
import General from "../../pages/General";
import frontPage from "../../pages/frontPage";
import searchPage from "../../pages/searchPage";
import { opisProd, cenaProd} from "../../library/data";
import prodPage from "../../pages/prodPage";

describe("nowy testowy",async () => {

  
    it("Should verify lack of re-direction of the page",async () => {
        
        await General.verifyPageUrl(denleyUrl);
        
    })

    it("Should click rodo button",async () => {

        if (await frontPage.rodoFrameVisible()) {
            console.log("byłem tu");
            await frontPage.clickRodoConfBtn();
            console.log (await frontPage.rodoFrameVisible());
            
        }
        
    })

   /** it('should get html for certain elements', async () => {
        var outerHTML = await $("ul#version_menu_top li.man_version  ul.navbar-nav li[rel='Sale']").getHTML();
        console.log(outerHTML);
        // outputs:
        // "<div id="test"><span>Lorem ipsum dolor amet</span></div>"
    
        var innerHTML = await $("ul#version_menu_top li.man_version  ul.navbar-nav li[rel='Sale']").getHTML(false);
        console.log(innerHTML);
        // outputs:
        // "<span>Lorem ipsum dolor amet</span>"
    }); */

    it("Should click the Sale link and verify number of articles",async () => {
        

        await frontPage.saleLnkClick();
        expect (await searchPage.countArticle()).toEqual(60);
        expect (await searchPage.returnThirdProdDesc()).toContain(opisProd);
        //console.log("to to : " + await searchPage.returnThirdProdDesc())
        //await browser.pause(5000);
        //await frontPage.saleLnkClick();
        //await frontPage.bestsellerLnkClick();
        //const generatedElement = await browser.$("ul#version_menu_top li.man_version  ul.navbar-nav li[rel='Sale'); // Pobierz rzeczywisty element za pomocą selektora CSS
        //await generatedElement.click();
        ////////////
   /**     const webdriverio = require('webdriverio');

(async () => {
  const options = {
    capabilities: {
      browserName: 'chrome', // Wybierz przeglądarkę
    },
  };

  const browser = await webdriverio.remote(options);

  // Otwórz stronę
  await browser.url('https://denley.pl');

  if (await frontPage.rodoFrameVisible()) {
    console.log("byłem tu");
    await frontPage.clickRodoConfBtn();
    console.log (await frontPage.rodoFrameVisible());
    
    }

  // Wykonaj skrypt JavaScript, aby zmienić styl pseudo-elementu
  await browser.execute(() => {
    const pseudoElement = window.getComputedStyle(document.querySelector(frontPage.saleLnk), '::before');
    pseudoElement.content = '"Kliknij mnie!"'; // Przykładowa zmiana treści pseudo-elementu
    pseudoElement.color = 'green'; // Przykładowa zmiana koloru
    // Możesz dodać inne zmiany stylu według potrzeb
  });

  // Poczekaj, aby dać czas na załadowanie zmian stylu (opcjonalne)
  await browser.pause(2000);

  // Kliknij na rzeczywisty element wygenerowany przez pseudo-element
  const generatedElement = await browser.$("ul#version_menu_top li.man_version  ul.navbar-nav li[rel='Sale'::before"); // Pobierz rzeczywisty element za pomocą selektora CSS
  await generatedElement.click();

  // Poczekaj na pewien czas (opcjonalne)
  await browser.pause(2000);

  // Zamknij przeglądarkę
  await browser.deleteSession();

})();
*/ 

        //////////
 

        
        //await browser.pause(5000);

    }) 
 
 
    it("Should enter the third prod page an verify description and price", async () => {
      await browser.url(thirdProdUrl);
      expect (await prodPage.retProdDesc()).toContain(opisProd);
      expect (await prodPage.retProdPrice()).toContain(cenaProd);

      
      
    })

   

})
