const fs = require('fs');
const path = require('path');
const pdfjs = require('pdfjs-dist/legacy/build/pdf.js');

const pdfPath = path.join(__dirname, '..', 'materials', '[Lush] Monthly topic June - Hair Reading.pdf');

async function run() {
    try {
        const data = new Uint8Array(fs.readFileSync(pdfPath));
        console.log('Loading document...');
        const loadingTask = pdfjs.getDocument({ data });
        const pdf = await loadingTask.promise;
        console.log(`Document loaded successfully. Pages: ${pdf.numPages}`);
        
        for (let i = 1; i <= pdf.numPages; i++) {
            console.log(`--- Page ${i} ---`);
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            console.log(`Text items count: ${textContent.items.length}`);
            const text = textContent.items.map(item => item.str).join(' ');
            console.log(`Text content length: ${text.length}`);
            console.log(`Text preview (first 500 chars): "${text.substring(0, 500)}"`);
            
            // Output all items to see if there is text
            textContent.items.forEach((item, idx) => {
                console.log(`  [${idx}]: "${item.str}"`);
            });
        }
    } catch (e) {
        console.error('Error during inspection:', e);
    }
}

run();
