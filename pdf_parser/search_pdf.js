const fs = require('fs');
const path = require('path');

const pdfPath = path.join(__dirname, '..', 'materials', '[Lush] Monthly topic June - Hair Reading.pdf');
const data = fs.readFileSync(pdfPath);

console.log('PDF Length:', data.length);

// Let's search for text strings like "/Text", "/Font", "/Page", "/Encrypt"
const stringsToSearch = ['/Encrypt', '/Page', '/Font', '/BT', '/ET', 'da đầu', 'tóc'];

for (const str of stringsToSearch) {
    let count = 0;
    let pos = data.indexOf(str);
    while (pos !== -1) {
        count++;
        pos = data.indexOf(str, pos + 1);
    }
    console.log(`String "${str}" occurred ${count} times`);
}

// Let's print the first 1000 characters of the PDF as text
console.log('\n--- First 1000 chars ---');
console.log(data.toString('ascii', 0, 1000));
