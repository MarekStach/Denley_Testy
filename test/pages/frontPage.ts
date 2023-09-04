class frontPage {

    get rodoConfBtn() {

        return $("div.iai_cookie__consentsActions a.acceptAll");
    }


    get rodoFrame(){

        return $("div.iai_cookie__box");
    }

    get saleLnk(){

        //return $("li.man_version ul.mx-md-n3 li:nth-child(7) a[title='Sale' ]");
        return $("ul#version_menu_top li.man_version  ul.navbar-nav li[rel='Sale']");
    }

    get bestsellerLnk(){

        return $("ul#version_menu_top li.man_version  ul.navbar-nav li[rel='Sale'] ul.navbar-subnav li.menu_additional ul.navbar-subsubnav li.btn-slub a ");
    }

    async bestsellerLnkClick (){

           const lnk:WebdriverIO.Element = await this.bestsellerLnk;
           //await lnk.waitForDisplayed()
           await lnk.click();


    }

    async saleLnkClick() {
        const lnk:WebdriverIO.Element = await this.saleLnk;
        await lnk.waitForDisplayed();
        await lnk.scrollIntoView();
        //console.log (await lnk.getCSSProperty('display'));
        await lnk.click();
        
       
    }

    async saleLnkM0veTo() {
        const lnk:WebdriverIO.Element = await this.saleLnk;
        await lnk.waitForDisplayed();
        //await lnk.scrollIntoView();
        //console.log (await lnk.getCSSProperty('display'));
        await lnk.moveTo();
        
       
    }

    async rodoFrameVisible(): Promise<boolean> {
        const frame:WebdriverIO.Element = await this.rodoFrame;
        if (await frame.isDisplayed()) {
            return true;
        } else {
            return false;
        }

    }

    async clickRodoConfBtn(){

        const btn:WebdriverIO.Element = await this.rodoConfBtn;
        await btn.waitForDisplayed();
        await btn.click();
    }

}

export default new frontPage();

