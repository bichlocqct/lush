const fs = require('fs');
const path = require('path');

async function main() {
    try {
        const { getDocumentProxy, extractText } = await import('unpdf');
        
        const pdfPath = path.join(__dirname, '..', 'materials', '[Lush] Monthly topic June - Hair Reading.pdf');
        const buffer = fs.readFileSync(pdfPath);
        
        console.log('Loading document with unpdf...');
        const pdf = await getDocumentProxy(new Uint8Array(buffer));
        console.log('Document loaded. Total pages:', pdf.numPages);
        
        const textResult = await extractText(pdf);
        console.log('Extracted text lines:', textResult.text.length);
        console.log('Extracted text content:');
        console.log(textResult.text);
        
        // Also let's output to a file
        fs.writeFileSync(path.join(__dirname, 'unpdf_extracted.txt'), JSON.stringify(textResult, null, 2));
    } catch (e) {
        console.error('Error with unpdf:', e);
    }
}

main();
