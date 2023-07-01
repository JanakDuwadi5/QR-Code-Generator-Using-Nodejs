
import inquirer from "inquirer";
import qr from "qr-image"
import fs from "fs"
inquirer
  .prompt([
    {   message:"Type in your URL : ",
        name:"URL",
    }
  ])
  .then((answers) => {
    const url=answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_scan.png'));
    
    fs.writeFile("URL1.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      });
    
var svg_string = qr.imageSync('I love QR!', { type: 'svg' });
    })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });