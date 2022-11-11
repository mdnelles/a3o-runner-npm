var shell = require('shelljs');
import { bumpNpmVersion, moveNewFiles } from "../utils/git";

export const hook = async (req: any, res: any): Promise<any> => {
    try {

        //await shell.exec('rm -rf ./tmp');
        //await shell.exec('mkdir tmp');
        //await shell.exec('git clone https://github.com/mdnelles/anim-3d-obj.git');
        //await shell.exec('mv anim-3d-obj ./tmp');
        //await shell.exec('git clone https://github.com/mdnelles/Component-Library.git');
        //await shell.exec('mv Component-Library ./tmp');

        await shell.exec('ls -la ./tmp/Component-Library/');
        await bumpNpmVersion();
        await moveNewFiles();

        res.json({ status: 201, err: false, msg: "basic api" });
    } catch (error) {
        res.json({ status: 201, err: true, msg: "basic api",error });
    }
    
 };