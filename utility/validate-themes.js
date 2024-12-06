const fs = require('fs');
const path = require('path');

const THEMES_DIR = './../themes';
const REQUIRED_KEYS = ['background', 'foreground', 'primary', 'secondary', 'accent'];

// Validate a single theme
function validateTheme(themePath) {
    const theme = JSON.parse(fs.readFileSync(themePath, 'utf-8'));
    const missingKeys = REQUIRED_KEYS.filter(key => !(key in theme.colors));
    if (missingKeys.length > 0) {
        console.error(`Theme ${themePath} is missing keys: ${missingKeys.join(', ')}`);
        return false;
    }
    return true;
}

// Validate all themes
function validateAllThemes() {
    let valid = true;
    fs.readdirSync(THEMES_DIR).forEach(mode => {
        const modePath = path.join(THEMES_DIR, mode);
        if (fs.statSync(modePath).isDirectory()) {
            fs.readdirSync(modePath).forEach(themeName => {
                const themePath = path.join(modePath, themeName, `${themeName}.json`);
                if (fs.existsSync(themePath)) {
                    valid = validateTheme(themePath) && valid;
                }
            });
        }
    });
    return valid;
}

// Run validation
if (validateAllThemes()) {
    console.log("All themes are valid!");
} else {
    console.error("Some themes have issues. Check the errors above.");
}
