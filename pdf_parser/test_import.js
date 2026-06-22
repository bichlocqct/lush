try {
    const pdfjs = require('pdfjs-dist');
    console.log('pdfjs-dist imported successfully. Keys:', Object.keys(pdfjs));
} catch (e) {
    console.error('Import failed:', e);
}
