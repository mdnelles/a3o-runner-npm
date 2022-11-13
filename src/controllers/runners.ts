var shell = require('shelljs');
const env = require("dotenv").config().parsed;
import { bumpNpmVersion, moveNewFiles, pause } from "../utils/git";

export const hook = async (req: any, res: any): Promise<any> => {
    try {

        await shell.exec('rm -rf ../tmp');
        await shell.exec('mkdir ../tmp');
        await shell.exec('cd ../tmp && git clone https://github.com/mdnelles/anim-3d-obj.git');
        await shell.exec('cd ../tmp && git clone https://github.com/mdnelles/anim-3d-obj-npm-publisher.git');


        const newVersion = await bumpNpmVersion();
        console.log("--(5) new version: " + newVersion);
        
        console.log(" --(4) move new files: " + await moveNewFiles());
        await pause(.5); // pause in seconds second for files to register
        await shell.exec('npm --prefix ../tmp/anim-3d-obj-npm-publisher/ install');
        await pause(.5); // pause in seconds second for files to register
        await shell.exec('npm --prefix ../tmp/anim-3d-obj-npm-publisher/ run build');

        //await shell.exec(`git --prefix ../tmp/anim-3d-obj push https://mdnelles:${process.env.ACCESS_TOKEN}@github.com/mdnelles/anim-3d-obj.git`);
        await shell.exec(`cd ../tmp/anim-3d-obj-npm-publisher && git add .`);
        await shell.exec(`cd ../tmp/anim-3d-obj-npm-publisher && git commit -m "auto - update"`);
        await shell.exec(`cd ../tmp/anim-3d-obj-npm-publisher && git push https://mdnelles:${process.env.ACCESS_TOKEN}@github.com/mdnelles/anim-3d-obj-npm-publisher.git`);
        //await shell.exec('cd ../tmp/anim-3d-obj && ls');

        //git push https://mdnelles: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@github.com/mdnelles/anim-3d-obj.git

        res.json({ status: 201, err: false, msg: "basic api" });
    } catch (error) {
        res.json({ status: 201, err: true, msg: "basic api",error });
    }
    
 };