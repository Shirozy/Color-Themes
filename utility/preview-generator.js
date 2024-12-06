const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

const THEMES_DIR = './../themes';
const OUTPUT_DIR = './previews';
const PREVIEW_SIZE = { width: 500, height: 300 };

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
}

function generatePreview(themePath, outputFile) {
    const theme = JSON.parse(fs.readFileSync(themePath, 'utf-8'));
    const canvas = createCanvas(PREVIEW_SIZE.width, PREVIEW_SIZE.height);
    const ctx = canvas.getContext('2d');
    const colors = Object.values(theme.colors);

    const rectWidth = PREVIEW_SIZE.width / colors.length;
    colors.forEach((color, index) => {
        ctx.fillStyle = color;
        ctx.fillRect(index * rectWidth, 0, rectWidth, PREVIEW_SIZE.height);
    });

    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(outputFile, buffer);
    console.log(`Generated preview: ${outputFile}`);
}

fs.readdirSync(THEMES_DIR).forEach(mode => {
    const modePath = path.join(THEMES_DIR, mode);
    if (fs.statSync(modePath).isDirectory()) {
        fs.readdirSync(modePath).forEach(themeName => {
            const themePath = path.join(modePath, themeName, `${themeName}.json`);
            const outputFile = path.join(OUTPUT_DIR, `${themeName}.png`);
            if (fs.existsSync(themePath)) {
                generatePreview(themePath, outputFile);
            }
        });
    }
});
