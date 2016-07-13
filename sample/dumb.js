var dumb = function() {
i=0;

	while(i<10){
		//console.log(i);
		++i;
	}

}

setImmediate(dumb);
dumb();
console.log('finished');
