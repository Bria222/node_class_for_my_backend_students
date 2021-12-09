const fs = require('fs');
//reading files
//fs.readFile('./docs/msg.txt',(err,data)=>{
//     if (err){
//         console.log(err)
//     }
//     console.log(data.toString());
// });

// //writing files

// fs.writeFile('./docs/msg.txt','mr bree this file is just written from the code ', ()=>{
//     console.log('the file was successfully written');
// });
// //writing the file if it does not exist
// fs.writeFile('./docs/programming.txt','javascript,python,java  ', ()=>{
//     console.log('the file was successfully written');
// });

// //DIRECTORIES
// if (!fs.existsSync('./assets')) { //checks if the folder does not exist 
    

// fs.mkdir('./assets',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('folder was created successfully');
// });

// }else{
//     fs.rmdir('./assets',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('folder removed successfully')
//     });
// }

//deleting files

if(fs.existsSync('./docs/deleteme.txt')){

    fs.unlink('./docs/deleteme.txt',()=>{
        console.log('file deleted successfully')
    })
}