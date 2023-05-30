class WebTablePage{

    async getRowCount(){
        return await $$('//table[@name="BookTable"]/tbody/tr').length;
    }

    async getHeaderCount(){
        return await $$('//table[@name="BookTable"]/tbody/tr/th').length;
    }

    async getCellCount(){
        return await $$('//table[@name="BookTable"]/tbody/tr/td').length;
    }

    async getCellValue(row, column){
        let cellValue = await $('//table[@name="BookTable"]/tbody/tr['+row+']/td['+column+']')
        return await cellValue.getText();
    }

    async getTableValues(){
        let cells = $$('//table[@name="BookTable"]/tbody/tr/td');

        await cells.forEach(async element => {
            let cellValue1 = await element.getText();
            

            return await element.getText();
        });
    }
}

module.exports = new WebTablePage();