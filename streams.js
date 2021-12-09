const fs = require('fs');
const readStream = fs.createReadStream('./docs/streamdata.txt',{encoding:'utf-8'});
const writestream = fs.createWriteStream('./docs/Newstreamdata.txt')
//on is an event listener
// readStream.on('data',(chunk)=>{
//     console.log("__new chunks__");
//     console.log(chunk);
//     writestream.write('\ln NEW CHUNK\ln');
//     writestream.write(chunk)
// } );


readStream.pipe(writestream );