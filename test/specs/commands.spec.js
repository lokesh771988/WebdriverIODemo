describe("commands", ()=>{
    it("sample commands", async ()=>{
        browser.url("https://www.google.com")
        browser.maximizeWindow()
        await browser.pause(2000) 
        await console.log("Title ===", browser.getTitle())
        await console.log("URL === ", browser.getUrl())
        await console.log("getPageSource == ", browser.getPageSource())
        await browser.pause(2000)
    })
})