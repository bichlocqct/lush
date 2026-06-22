const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const pdfjs = require('pdfjs-dist/legacy/build/pdf.js');

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;
global.DOMParser = dom.window.DOMParser;

const pdfPath = path.join(__dirname, '..', 'materials', '[Lush] Monthly topic June - Hair Reading.pdf');

async function run() {
    try {
        console.log('Loading document...');
        const data = new Uint8Array(fs.readFileSync(pdfPath));
        const loadingTask = pdfjs.getDocument({ data });
        const pdf = await loadingTask.promise;
        console.log(`Document loaded successfully. Pages: ${pdf.numPages}`);
        
        for (let i = 1; i <= pdf.numPages; i++) {
            console.log(`Rendering Page ${i} to SVG...`);
            const page = await pdf.getPage(i);
            const viewport = page.getViewport({ scale: 1.0 });
            
            const operatorList = await page.getOperatorList();
            const svgGfx = new pdfjs.SVGGraphics(page.commonObjs, page.objs);
            const svgElement = await svgGfx.getSVG(operatorList, viewport);
            
            const svgString = svgElement.outerHTML || svgElement.toString();
            const outPath = path.join(__dirname, `page_${i}.svg`);
            fs.writeFileSync(outPath, svgString);
            console.log(`Saved page ${i} SVG to ${outPath} (${svgString.length} bytes)`);
        }
    } catch (e) {
        console.error('Error during SVG rendering:', e);
    }
}

run();
