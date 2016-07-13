
var myObj = 

[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},

{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},

{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},

{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},

{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},

{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];


function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

myObj = sortByKey(myObj, 'age');
console.log(myObj);