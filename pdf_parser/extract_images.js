const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');

const pdfPath = path.join(__dirname, '..', 'materials', '[Lush] Monthly topic June - Hair Reading.pdf');

async function run() {
    try {
        console.log('Reading PDF file...');
        const pdfBytes = fs.readFileSync(pdfPath);
        console.log('Loading PDF Document with pdf-lib...');
        const pdfDoc = await PDFDocument.load(pdfBytes);
        console.log('Pages count:', pdfDoc.getPageCount());

        const pages = pdfDoc.getPages();
        let imageCount = 0;

        for (let i = 0; i < pages.length; i++) {
            console.log(`Processing page ${i + 1}...`);
            const page = pages[i];
            
            // Access the page's resources to find images
            const resources = page.node.Resources();
            if (!resources) {
                console.log(`No resources on page ${i + 1}`);
                continue;
            }

            const xObjects = resources.get(PDFDocument.name = 'XObject');
            if (!xObjects) {
                console.log(`No XObjects on page ${i + 1}`);
                continue;
            }

            const xObjectNames = xObjects.keys();
            console.log(`Page ${i + 1} has XObjects:`, xObjectNames);

            for (const name of xObjectNames) {
                const xObject = xObjects.get(name);
                const subtype = xObject.get(PDFDocument.name = 'Subtype');
                if (subtype && subtype.toString() === '/Image') {
                    imageCount++;
                    console.log(`Found image: ${name}`);
                    
                    // Extract image bytes
                    let imageBytes;
                    const filter = xObject.get(PDFDocument.name = 'Filter');
                    console.log(`Image filter: ${filter ? filter.toString() : 'None'}`);

                    try {
                        imageBytes = xObject.contents; // Raw bytes
                        const ext = filter && filter.toString().includes('DCTDecode') ? 'jpg' : 'png';
                        const outPath = path.join(__dirname, `extracted_img_p${i+1}_${imageCount}.${ext}`);
                        fs.writeFileSync(outPath, imageBytes);
                        console.log(`Saved image to ${outPath} (${imageBytes.length} bytes)`);
                    } catch (err) {
                        console.error(`Error saving image ${name}:`, err);
                    }
                }
            }
        }
        console.log(`Done. Found and extracted ${imageCount} images.`);
    } catch (e) {
        console.error('Error during image extraction:', e);
    }
}

run();
