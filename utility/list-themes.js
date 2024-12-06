const fs = require('fs');
const path = require('path');

const THEMES_DIR = './../themes';

function listThemes() {
    fs.readdirSync(THEMES_DIR).forEach(mode => {
        const modePath = path.join(THEMES_DIR, mode);
        if (fs.statSync(modePath).isDirectory()) {
            console.log(`Mode: ${mode}`);
            fs.readdirSync(modePath).forEach(themeName => {
                console.log(`  - ${themeName}`);
            });
        }
    });
}

listThemes();
