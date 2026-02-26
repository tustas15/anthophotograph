const fs = require('fs');
const path = require('path');

const framesDir = path.join(__dirname, '..', 'public', 'frames');
const outputFile = path.join(framesDir, 'manifest.json');

let files = fs.readdirSync(framesDir)
    .filter(f => /\.(jpe?g|png|webp)$/i.test(f))
    .sort((a, b) => {
        const na = parseInt((a.match(/\d+/) || ['0'])[0], 10);
        const nb = parseInt((b.match(/\d+/) || ['0'])[0], 10);
        return na - nb;
    })
    .map(f => `/frames/${f}`);

fs.writeFileSync(outputFile, JSON.stringify(files, null, 2), 'utf8');
console.log(`Generated manifest with ${files.length} frames -> ${outputFile}`);
