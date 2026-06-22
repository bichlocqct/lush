const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'materials', 'LUSH_Training_Toolkit (2).html');
const content = fs.readFileSync(htmlPath, 'utf8');

const keywords = ['da đầu', 'tóc', 'khô', 'dầu', 'hỗn hợp', 'phân loại', 'soi da'];

console.log('HTML Length:', content.length);

keywords.forEach(kw => {
    let count = 0;
    let pos = content.indexOf(kw);
    while (pos !== -1) {
        count++;
        pos = content.indexOf(kw, pos + 1);
    }
    console.log(`Keyword "${kw}": ${count} matches`);
});

// Let's print sections containing "da đầu" or "hỗn hợp" or "dầu"
console.log('\n--- Sample matches for "da đầu" or "hỗn hợp" ---');
const regex = /da đầu/gi;
let match;
while ((match = regex.exec(content)) !== null) {
    const start = Math.max(0, match.index - 100);
    const end = Math.min(content.length, match.index + 100);
    console.log(`[Pos ${match.index}]: ...${content.slice(start, end).replace(/\n/g, ' ')}...`);
}
