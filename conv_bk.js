var fs = require("fs");


//console.log(data);





function getData(strData, strDelimiter) {

    strDelimiter = (strDelimiter || ",");

    var objPattern = new RegExp((

    "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +

    "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +

    "([^\"\\" + strDelimiter + "\\r\\n]*))"), "gi");

    var arrData = [[]];

    var arrMatches = null;

    while (arrMatches = objPattern.exec(strData)) {

        var strMatchedDelimiter = arrMatches[1];

        if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter)) {
            arrData.push([]);
        }
        if (arrMatches[2]) {
            var strMatchedValue = arrMatches[2].replace(
            new RegExp("\"\"", "g"), "\"");
        } else {
            var strMatchedValue = arrMatches[3];
        }
        arrData[arrData.length - 1].push(strMatchedValue);
    }
    return (arrData);
}

function myJSON(csv) {
    var array = getData(csv);
    var objArray = [];
    for (var i = 1; i < array.length; i++) {
        objArray[i - 1] = {};
        for (var k = 0; k < array[0].length && k < array[i].length; k++) {
            var key = array[0][k];
            objArray[i - 1][key] = array[i][k]
        }
    }

    var json = JSON.stringify(objArray);
    var str = json.replace(/},/g, "},\r\n");

    return str;
}




var data = fs.readFileSync("sample.csv", "utf8");
var dataSplit = data;
var res = dataSplit.split("\r");
//console.log(res.length);

for(i=0;i<res.length;i++){
	//console.log(res[i]+'\n')

	var splitRowData = res[1];
	var splittedData = splitRowData.split(",");

	//console.log(splittedData);

}

var jsonData = JSON.parse(myJSON(data));

console.log(jsonData.length);
console.log(jsonData[0].Area);