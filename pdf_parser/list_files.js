const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'node_modules', 'pdfjs-dist');

function listFiles(dir, depth = 0) {
    if (!fs.existsSync(dir)) {
        console.log('Dir does not exist:', dir);
        return;
    }
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        const indent = '  '.repeat(depth);
        if (stat.isDirectory()) {
            console.log(`${indent}[Dir] ${file}`);
            if (depth < 2) { // only list up to 2 levels
                listFiles(fullPath, depth + 1);
            }
        } else {
            console.log(`${indent}[File] ${file}`);
        }
    }
}

listFiles(targetDir);
