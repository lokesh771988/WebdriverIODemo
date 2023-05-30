describe("actiomns", ()=>{
    it("sample1", async function(){
        browser.url("https://testautomationpractice.blogspot.com/")
        browser.maximizeWindow()
        await browser.pause(1000)
        const moved = await $('//button[text()="Copy Text"]')
        await moved.doubleClick()
        const sour = await $('#draggable')
        const targ = await $('#droppable')
        await sour.dragAndDrop(targ)
        await browser.pause(2000)
    })
})