describe("Element", ()=>{
    it("sample", async function(){
        browser.url("https://demo.automationtesting.in/Register.html")
        await browser.pause(1000)
        await console.log($('//label[contains(text(),"Full Name* ")]').getText())
        await console.log($('[placeholder="First Name"]').isDisplayed())
        await console.log($('[placeholder="First Name"]').isEnabled())
        await console.log($('[placeholder="First Name"]').isExisting())
        await console.log($('[placeholder="First Name"]').isFocused())
        await browser.pause(1000)
        await $('[placeholder="First Name"]').setValue("Lokesh")
        await browser.pause(1000)
        await $('[placeholder="First Name"]').clearValue()
        await browser.pause(1000)
        await $('#Button1').click()
        await browser.pause(1000)
        await $('[placeholder="First Name"]').addValue("lokesh")
        await browser.pause(1000)
        await $('[placeholder="First Name"]').addValue("Gorantla")
        await browser.pause(1000)
        await console.log($('#checkbox3').getValue())
    })
})