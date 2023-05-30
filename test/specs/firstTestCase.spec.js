describe("First Demo", () => {
    it("Sample Demo", async ()=>{
        browser.url("https://www.google.com/")
        browser.pause(2000)
        await $('[name="q"]').setValue("Lokesh")
        browser.pause(2000)
        await $('[name="btnK"]').click()
    })
})