describe("checkbox", ()=>{
    it("dropdown", async function(){
        browser.url("https://demo.automationtesting.in/Register.html")
        await browser.pause(1000)
        await $$('[name="radiooptions"]').forEach(element => {
            const value = element.getAttribute('value')
            console.log(value)
        });

        await $('[value="Male"]').click()
        await browser.pause(1000)
        await console.log($('[value="Male"]').isSelected())
        await browser.pause(1000)
        await $('#checkbox1').click();
        await console.log($('#checkbox1').isSelected())
        await browser.pause(1000)

    })
})