
var myObj = 

[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},

{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},

{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},

{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},

{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},

{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

var occupation=[];
for(i=0;i<myObj.length;i++){

	if(myObj[i].occupation=='Programmer'){
		occupation.push({'name':myObj[i].name, 'age':myObj[i].age, 'occupation':myObj[i].occupation})
	}
}

console.log(occupation);