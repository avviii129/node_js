import fs from 'fs';
// console.log("starting");

// for creating the file
// fs.writeFile("WF.js",`console.log("hey there")`, function (){
//     console.log("done");
// });

// fs.writeFileSync("WF.js",`console.log("hey")`);

// for reading the file
fs.readFile("./WF.js", (error,data)=>{
    if(error==true){
        console.log(error);
    } 
    else {
        console.log("All good");
    }
    console.log(data.toString());
})


// console.log("finish");