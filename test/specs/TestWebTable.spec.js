const webTableTest = require("../../webTableTest")


describe("checkbox", ()=>{
    it("dropdown", async function(){
        browser.url("https://testautomationpractice.blogspot.com/")
        await browser.pause(1000)
        console.log(await webTableTest.getRowCount())
        console.log(await webTableTest.getHeaderCount())
        console.log(await webTableTest.getCellCount())
        console.log(await webTableTest.getCellValue(2, 1))
        console.log(await webTableTest.getTableValues())
        await browser.pause(1000)
    })
})