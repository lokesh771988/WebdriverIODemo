var WebTable = function(webTable) {
    // get the number of rows present
    this.megetRowCountthods = function(){
        console.log("Fetching number rows")
        return this.webTable.$$("tr").count() -1
    }

    // get the number of columns present
    this.getColumnCount= function(){
        return this.webTable.all(by.css("th")).count()
        // if you donot have header then above will not work
        // use this if no header is there
        // return this.webTable.all(by.xpath("//tr[0]/td")).count()
    }

    // get row data and return it as list
    this.rowData = function(rowNumber){
        if(rowNumber == 0){
            throw new Error("Row number starts from 1");
        }
        rowNumber = rowNumber + 1;
        return this.webTable.$$("//tr["+rowNumber+"]/td").getText()
    }

    // get the column data and return as list in webdriverio
    this.columnData = function(columnNumber){
        if(columnNumber == 0){
            throw new Error("Column number starts from 1");
        }
        columnNumber = columnNumber + 1;
        return this.webTable.$$("//tr/td["+columnNumber+"]").getText()
    }
    // get all the data from the table
	this.describegetAllData = function(){
		return this.webTable.$$("td").getText()
    }

    // verify presence of the text/data
    this.presenceOfData = function(data){
        // verify the data by getting the size of the element matches based on the text/data passed
        return this.webTable.$$("//td[normalize-space(text())='"+data+"']")
        .size().then(function(dataSize){
            if(dataSize > 0){
                return true;
            }
            else{
                return false
            }
        })
    }
     // get the data from a specific cell
    this.getCellData = function(rowNumber, columnNumber) {
        if(rowNumber == 0){
            throw new Error("Row number starts from 1");
        }
        rowNumber = rowNumber+1;
        let cellData = this.webTable.$$("//tr["+rowNumber+"]/td["+columnNumber+"]").getText();
        return cellData;
    }
    // click checkbox with webdriverio
    this.clickCheckBox = function(data){
        this.webTable.$$("//td[normalize-space(text())='"+data+"']/..//input").click()
    }
  };
module.exports = new WebTable();