//import fs from "fs-extra"
const fs = require('fs-extra');
var shell = require('shelljs');

export const bumpNpmVersion = async() => {
    return new Promise(async(resolve)=>{
        let version:number | string = 0;
        let newFile ="";
        let packageFile = "../tmp/anim-3d-obj-npm-publisher/package.json";
        try {

            await fs.readFile(packageFile, "utf8",async function (err: any, data: any) {
                if (err) throw err;
                //console.log(data);

                const lines = data.split("\n");
   
                if(newFile === ""){
                    lines.map((d: any)=> {
                        if(d.toString().includes(`"version":`)){

                            let tmp1 = d.split(`"`);
                            console.log("--(1) old version:"+tmp1[3]);
                            let tmp2 =tmp1[3].split(".");
                            let num = parseInt(tmp2[2])+1;
                            version = `    "version": "${tmp2[0]}.${tmp2[1]}.${num}",`;
                            newFile += "\n"+version;
                        } else {
                            newFile += "\n"+d;
                        }
                    });
                }

                console.log("--(2) NEWFILE ---");

                await fs.writeFile(packageFile, newFile,async  function (err:any) {
                    if (err) {

                        resolve(false);
                        throw err;
                    } else {
                        console.log('--(3) Saved!');
                        await pause(.5);
          
                        console.log("--(4) end pause")
                        resolve(version);
                    }

                  });
 
            });

            
        } catch(error){
            console.log(error);
            resolve(version);
        }
    })
}

export const moveNewFiles = async() =>{
    return new Promise(async(resolve) => {
        try {
            await shell.exec('rm -rf ../tmp/anim-3d-obj-npm-publisher/src/components');
            await fs.copy('../tmp/anim-3d-obj/src/components', '../tmp/anim-3d-obj-npm-publisher/src/components', (err: any) => {
                if (err) {
                    console.log("folders move error")
                    console.log(err);
                    resolve(false)
                } else {
                    console.log("folders move success")
                    resolve(true);
                }

              }) 
        } catch(error) {
            resolve(true);
        }
    })
}
export const pause = async(seconds:number) => {
    return new Promise(async(resolve)=>{
        setTimeout(() => {
            resolve(true)
        }, seconds * 1000);
    })
}