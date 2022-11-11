//import fs from "fs-extra"
const fs = require('fs-extra');
var shell = require('shelljs');

export const bumpNpmVersion = async() => {
    return new Promise(async(resolve)=>{
        try {

            fs.readFile("./tmp/Component-Library/package.json", "utf8",function (err: any, data: any) {
                if (err) throw err;
                //console.log(data);
                let newFile ="";
                const lines = data.split("\n");
                lines.map((d: any)=> {

                    if(d.toString().includes(`"version":`)){
                        let tmp1 = d.split(`"`);
                        console.log(tmp1[3]);
                        let tmp2 =tmp1[3].split(".");
                        let num = parseInt(tmp2[2])+1;
                        const version = `    "version": "${tmp2[0]}.${tmp2[1]}.${num}",`;
                        newFile += "\n"+version;
                    } else {
                        newFile += "\n"+d;
                    }
                });
                console.log(newFile);

            });
            
            resolve(true);
        } catch(error){
            console.log(error);
            resolve(false);
        }
    })
}

export const moveNewFiles = async() =>{
    return new Promise(async(resolve) => {
        try {
            await shell.exec('rm -rf ./tmp/Component-Library/src/components');
            fs.copy('/tmp/anim-3d-obj/src/anim-3d/components', './tmp/Component-Library/src/components', (err: any) => {
                if (err) {
                    console.log(err);
                    resolve(false)
                }
                resolve(true)
              }) 
        } catch(error) {
            resolve(true);
        }
    })
}