const fs = require("fs").promises;
const path = require("path");

console.log(__dirname);
// ...\Desktop\Projects\learn-nodejs\find-files

console.log(path.extname("sales.json"));
// .json

console.log(path.parse("stores/201/sales.json"));
// { root: '', dir: 'stores/201', base: 'sales.json', ext: '.json', name: 'sales' }

const salesTotalsDir = path.join(__dirname, "stores", "2012", "salesTotals");

async function mkdir() {

    // create the salesTotal directory if it doesn't exist
    try {
      await fs.mkdir(salesTotalsDir, {
          recursive: true
      });
    } catch {
      console.log(`${salesTotalsDir} already exists.`);
    }
}

mkdir();

async function mkfiles() {
    await fs.writeFile(path.join(salesTotalsDir, "greeting.txt"), "Hello World!");
    await fs.writeFile(path.join(salesTotalsDir, "greeting.txt"), String());
}

mkfiles();