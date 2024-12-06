# **Color Themes Repository**

A curated collection of color themes for various modes (e.g., light, dark) and purposes (web development, design, terminal themes, etc.). Each theme includes detailed descriptions, color palettes, and exportable formats such as JSON, CSS, and more.

### Add a theme easily here: [Theme Ceator](https://n8n.subversion.life/form/43118566-d40a-4c00-807b-9df35c50b1e7)
---

## **Table of Contents**
- [Project Overview](#project-overview)
- [Folder Structure](#folder-structure)
- [Utilities](#utilities)
  - [Preview Generator](#preview-generator)
  - [Color Converter](#color-converter)
  - [Theme Validator](#theme-validator)
  - [Listing Themes](#listing-themes)
- [Contributing](#contributing)
- [License](#license)

---

## **Project Overview**

This repository provides:
- A collection of **light** and **dark** themes.
- Each theme includes:
  - A description in markdown format (`.md`).
  - Configurations in JSON and CSS formats.
  - Optional formats such as SASS, palettes (`.pal`), etc.
- Utility scripts to manage, preview, and validate themes.

---

## **Folder Structure**

```plaintext
/
├── README.md               # Main project overview
├── LICENSE                 # License for the project
├── themes/                 # Directory containing all themes
│   ├── light/              # Light mode themes
│   │   ├── theme-name/     
│   │   │   ├── theme-name.md
│   │   │   ├── theme-name.json
│   │   │   ├── theme-name.css
│   └── dark/               # Dark mode themes
│       ├── tokyonight/
│       │   ├── tokyonight.md
│       │   ├── tokyonight.json
│       │   ├── tokyonight.css
├── utils/                  # Utility scripts for the project
│   ├── preview-generator.js
│   ├── color-converter.py
│   ├── validate-themes.js
│   ├── list-themes.js
└── previews/               # Generated previews for themes
```

---

## **Utilities**

### **Preview Generator**
**File**: `utils/preview-generator.js`

**Description**:  
Generates preview images for themes, showcasing color swatches for each theme.

**Usage**:
1. Make sure Node.js and the `canvas` library are installed:
   ```bash
   npm install canvas
   ```
2. Run the script:
   ```bash
   node utils/preview-generator.js
   ```
3. Preview images will be saved in the `./previews` directory.

---

### **Color Converter**
**File**: `utils/color-converter.py`

**Description**:  
Converts colors between HEX, RGB, and HSL formats.

**Usage**:
1. Run the script:
   ```bash
   python utils/color-converter.py
   ```
2. Modify the script's input to test different conversions:
   - Convert HEX to RGB.
   - Convert RGB to HSL.
   - Convert HSL back to HEX.

---

### **Theme Validator**
**File**: `utils/validate-themes.js`

**Description**:  
Ensures all themes follow a consistent structure and include required keys (e.g., `background`, `primary`, etc.).

**Usage**:
1. Run the script:
   ```bash
   node utils/validate-themes.js
   ```
2. The script will:
   - Check all JSON theme files in the `themes/` directory.
   - Report missing keys or formatting errors.

---

### **Listing Themes**
**File**: `utils/list-themes.js`

**Description**:  
Lists all available themes in the repository, organized by mode (e.g., light, dark).

**Usage**:
1. Run the script:
   ```bash
   node utils/list-themes.js
   ```
2. Example output:
   ```plaintext
   Mode: light
     - theme-name-1
     - theme-name-2
   Mode: dark
     - tokyonight
     - dracula
   ```

---

## **How to Add a New Theme**

1. **Create a directory** for your theme under the appropriate mode (`light/` or `dark/`):
   ```plaintext
   themes/dark/my-awesome-theme/
   ```
2. **Add the following files**:
   - `my-awesome-theme.md`: A description of the theme, including swatches and accessibility notes.
   - `my-awesome-theme.json`: The theme’s color definitions in JSON format.
   - `my-awesome-theme.css`: The theme’s CSS variables.

3. **Validate the theme**:
   Run the `validate-themes.js` script to ensure the new theme is properly structured:
   ```bash
   node utils/validate-themes.js
   ```

4. Optionally, **generate a preview**:
   ```bash
   node utils/preview-generator.js
   ```

---

## **Contributing**

We welcome contributions! Here's how to get started:

1. **Fork this repository** and clone it locally.
2. Create a new branch:
   ```bash
   git checkout -b my-new-theme
   ```
3. Add your theme under the appropriate mode directory (`light/` or `dark/`).
4. Validate your theme using the provided scripts.
5. Submit a pull request with a brief description of your theme.

---

## **License**

This repository is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the content in this repository.

---

## **Notes**
- **Naming Convention**: Use lowercase names for directories and files, with hyphens (`-`) separating words (e.g., `tokyonight`).
- **Theme Keys**: Ensure every theme JSON includes the following keys:
  - `background`
  - `foreground`
  - `primary`
  - `secondary`
  - `accent`
- **Accessibility**: Aim for WCAG AA contrast compliance where possible.
