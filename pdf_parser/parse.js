const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const materialsDir = path.join(__dirname, '..', 'materials');
const workshopPdf = path.join(materialsDir, 'LUSH_HAIR WORKSHOP_OPERATION FILE (1).pdf');
const hairReadingPdf = path.join(materialsDir, '[Lush] Monthly topic June - Hair Reading.pdf');

async function extractText(pdfPath, outputPath) {
    try {
        console.log(`Reading PDF: ${pdfPath}...`);
        const dataBuffer = fs.readFileSync(pdfPath);
        const data = await pdf(dataBuffer);
        fs.writeFileSync(outputPath, data.text);
        console.log(`Extracted text to ${outputPath} (${data.text.length} chars, ${data.numpages} pages)`);
    } catch (error) {
        console.error(`Error processing ${pdfPath}:`, error);
    }
}

async function run() {
    await extractText(workshopPdf, path.join(__dirname, 'workshop_operation.txt'));
    await extractText(hairReadingPdf, path.join(__dirname, 'hair_reading.txt'));
}

run();
