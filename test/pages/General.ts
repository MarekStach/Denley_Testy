class General{

        async verifyPageUrl(url:string){

        const page:string = url;
        await browser.url(page);
        await expect(browser).toHaveUrl(url);

        }

}

export default new General();