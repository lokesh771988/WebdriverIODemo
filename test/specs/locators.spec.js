describe("sameple Locators", function(){
    it("demo locators", async ()=>{
        browser.url("https://the-internet.herokuapp.com/login")
        await browser.pause(1000)
        await $('//input[@name="username"]').setValue('tomsmith')
        await $('=Elemental Selenium').click()
        await browser.pause(2000)
    })
})