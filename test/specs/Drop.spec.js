describe("Element", ()=>{
    it("sample", async function(){
        browser.url("https://demo.automationtesting.in/Register.html")
        await browser.pause(1000)
        await $('#country').selectByIndex(2);
        await browser.pause(2000)
        await $('#country').selectByVisibleText('India');
        await browser.pause(2000)
        await $('#country').selectByAttribute('value','Australia');
        await browser.pause(2000)
    })
})