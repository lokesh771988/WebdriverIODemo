describe("Navigate", ()=>{
    it("sample", async ()=>{
        browser.url("https://www.google.com")
        await browser.pause(1000)
        browser.navigateTo("https://the-internet.herokuapp.com/login")
        await browser.pause(1000)
        await browser.back()
        await console.log("back title ==", browser.getTitle())
        await browser.pause(1000)
        await browser.forward()
        await console.log("Forward title ==", browser.getTitle())
        await browser.pause(1000)
        await browser.refresh()
        await browser.pause(1000)
    })
})