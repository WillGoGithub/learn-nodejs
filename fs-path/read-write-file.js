const fs = require("fs").promises;
const path = require("path");
const salesFilePath = path.join(__dirname, "stores", "sales.json");
const totalsFilePath = path.join(__dirname, "stores", "totals.txt");

var readSales = async function() {
    const bufferData = await fs.readFile(salesFilePath);
    const data = JSON.parse(bufferData)
    console.log(data);
    return data;
};

var appendSales = async function () {
    const data = await readSales();

    await fs.writeFile(path.join(totalsFilePath), `${data.total}\r\n`, {
        flag: "a"
    });
}();