describe("actiomns", ()=>{
    it("sample1", async function(){
        browser.url("https://www.google.com/")
        browser.maximizeWindow()
        await browser.pause(1000)
        await browser.saveScreenshot("fullpage.png")
        await $("#APjFqb").saveScreenshot("Textbox.png")
        await browser.pause(2000)
    })
})