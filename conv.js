var fs = require("fs");

fs.unlink('final.csv', function(err) {
  if (err) throw err;
});

var appendNewFile = function(filename){

	var fileData = fs.readFileSync(filename, "utf8");
	var fileDataSplit = fileData;

	fs.appendFile('final.csv', fileDataSplit, encoding='utf8', function (err) {
	    if (err) throw err;
	});

}

var appendExFile = function(filename){

	var appendAFile = fs.readFileSync(filename, "utf8");
	var appendFileDataArr = appendAFile.split("\r");

	for(i=1;i<appendFileDataArr.length;i++){

		var AFsplitRowData = appendFileDataArr[i];
		var AFsplittedData = AFsplitRowData.split("\r");

		fs.appendFile('final.csv', AFsplittedData, encoding='utf8', function (err) {
			if (err) throw err;
		});

	}

}

appendNewFile("file1.csv");
appendExFile('file2.csv');
appendExFile('file3.csv');

var getData = function(strData, strDelimiter) {

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

var myJSON = function(csv) {
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

var data = fs.readFileSync("India2011.csv", "utf8");
var dataSplit = data;
var res = dataSplit.split("\r");
var jsonDataP = myJSON(data);
var jsonData = JSON.parse(myJSON(data));

var newJsonData = [];
var stateJKJSON = [];

var getRandomColor = function() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

for(i=0;i<jsonData.length;i++){
	newJsonData.push({'stateCode':jsonData[i].StateCode,'areaType':jsonData[i].AreaType,'ageGroup':jsonData[i].AgeGroup, 'literate':jsonData[i].Literate});
}

for(i=0;i<newJsonData.length;i++){	

	if((newJsonData[i].stateCode=='1') && (newJsonData[i].areaType=='Total') && (newJsonData[i].ageGroup!='All ages')){
		stateJKJSON.push({'label': newJsonData[i].ageGroup, 'value': parseInt(newJsonData[i].literate),'color': getRandomColor()});
	}

}

console.log('stateJKJSON',stateJKJSON);

fs.writeFile('census.json', JSON.stringify(stateJKJSON),  function(err) {
   if (err) {
       return console.error(err);
	}
});

