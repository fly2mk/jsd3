var fs = require('fs')
var sys = require('sys')


function parseCsvFile(fileName, callback){
  var stream = fs.createReadStream(fileName)
  var iteration = 0, header = [], buffer = ""
  var pattern = /(?:^|,)("(?:[^"]+)*"|[^,]*)/g
  stream.addListener('data', function(data){
    buffer+=data.toString()

    var parts = buffer.split('\r\n')
    parts.forEach(function(d, i){
      if(i == parts.length-1) return
      if(iteration++ == 0 && i == 0){
        header = d.split(pattern)
        console.log(d);
      }else{
        console.log(d)
        callback(buildRecord(d))
      }
    })
    buffer = parts[parts.length-1]
  })

  function buildRecord(str){
    var record = {}
    str.split(pattern).forEach(function(value, index){
       console.log(value,header[index]);
      if(header[index] != '')
        record[header[index].toLowerCase()] = value.replace(/"/g, '')
    });
    return record
  }
}


parseCsvFile('sample.csv', function(rec){

  sys.puts(rec.Firstname + " in " + rec.Zipcode);
  console.log(rec.Firstname + " in " + rec.Zipcode);

  //console.log('MUUUUUUUUUUUUU');
});