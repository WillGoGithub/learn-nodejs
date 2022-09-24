const fs = require("fs").promises;

async function findFiles(folderName) {
    const items = await fs.readdir(folderName, { withFileTypes: true });
    items.forEach((item) => {
      if (item.isDirectory()) {
        findFiles(`${folderName}/${item.name}`);
      } else {
        console.log(`Found file: ${item.name} in folder: ${folderName}`);
      }
    });
  }

findFiles("stores");
