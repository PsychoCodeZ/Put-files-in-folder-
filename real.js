import fs from "fs/promises" // create to use fs with promises
import fsn from "fs" // create to use fs normally to check that file exist or not 
import path from "path"

let basepath = "C:\\Users\\singh\\OneDrive\\Desktop\\sigma_web_Devlopment\\Sigma_devloper\\backendex1"

// this will read the directory 
let files = await fs.readdir(basepath)

for (const item of files) {

    console.log("running for",item)
    let ext = item.split(".")[item.split(".").length - 1]
    // console.log(path.join(basepath,ext))
    if (ext.includes("js") == false && item.split(".").length > 1) {
        if (fsn.existsSync(ext)) {
            // move the file to this directory if its not js and json 
             fs.rename(path.join(basepath,item ), path.join(basepath,ext,item))
        }
        else {
            // make the folder with the name
            fs.mkdir(ext)
            fs.rename(path.join(basepath,item ), path.join(basepath,ext,item))
        }
    }
}