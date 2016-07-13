
var myObj = 

[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},

{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},

{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},

{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},

{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},

{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

var programmerObj=[];
var programmerData=[];

for(i=0;i<myObj.length;i++){

	if(myObj[i].occupation=='Programmer'){
		programmerData.push({'name':myObj[i].name, 'age':myObj[i].age })
	}
}

programmerObj=JSON.stringify({'Programmer': programmerData});

console.log(programmerObj);


//TL
var teamleaderObj=[];
var teamleaderData=[];

for(i=0;i<myObj.length;i++){

	if(myObj[i].occupation=='Team Leader'){
		teamleaderData.push({'name':myObj[i].name, 'age':myObj[i].age })
	}
}

teamleaderObj=JSON.stringify({'TeamLeader': teamleaderData});

console.log(teamleaderObj);
