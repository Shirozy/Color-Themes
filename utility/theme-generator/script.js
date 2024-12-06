const previewButton = document.getElementById('preview-button');
const exportButton = document.getElementById('export-button');

const colorInputs = {
    primaryBg: document.getElementById('primary-bg'),
    secondaryBg: document.getElementById('secondary-bg'),
    textColor: document.getElementById('text-color'),
    buttonBg: document.getElementById('button-bg'),
    accentColor: document.getElementById('accent-color')
};

function openPreview() {
    const styles = {
        primaryBg: colorInputs.primaryBg.value,
        secondaryBg: colorInputs.secondaryBg.value,
        textColor: colorInputs.textColor.value,
        buttonBg: colorInputs.buttonBg.value,
        accentColor: colorInputs.accentColor.value,
    };

    const previewHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Theme Preview - Login</title>
        <style>
            :root {
                --primary-bg: ${styles.primaryBg};
                --secondary-bg: ${styles.secondaryBg};
                --text-color: ${styles.textColor};
                --button-bg: ${styles.buttonBg};
                --button-hover-bg: ${styles.accentColor};
            }
            body {
                background-color: var(--primary-bg);
                color: var(--text-color);
                font-family: "Open Sans", sans-serif;
                display: grid;
                place-items: center;
                height: 100vh;
                margin: 0;
            }
            .grid {
                width: 90%;
                max-width: 20rem;
            }
            .form {
                display: grid;
                gap: 1rem;
            }
            .form__field {
                display: flex;
                align-items: center;
                background-color: var(--secondary-bg);
                border-radius: 5px;
                overflow: hidden;
            }
            .form__field label {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0.5rem;
                background-color: var(--secondary-bg);
                color: var(--text-color);
            }
            .form__field input {
                flex-grow: 1;
                border: none;
                outline: none;
                padding: 0.75rem;
                background-color: var(--secondary-bg);
                color: var(--text-color);
                font-size: 1rem;
            }
            .form__field input:hover,
            .form__field input:focus {
                background-color: var(--secondary-bg); /* No color change on hover or focus */
            }
            .form__field input[type="submit"] {
                background-color: var(--button-bg);
                color: var(--text-color);
                font-weight: bold;
                text-transform: uppercase;
                cursor: pointer;
                transition: background-color 0.3s ease; /* Smooth fade effect */
            }
            .form__field input[type="submit"]:hover {
                background-color: var(--button-hover-bg); /* Fades to accent color on hover */
            }
            .text--center {
                text-align: center;
                margin-top: 1rem;
                font-size: 0.9rem;
            }
            .text--center a {
                color: var(--button-hover-bg);
                text-decoration: none;
            }
            .text--center a:hover {
                text-decoration: underline;
            }
            .icons {
                display: none;
            }
        </style>
    </head>
    <body>
        <div class="grid">
            <form action="#" class="form login">
                <div class="form__field">
                    <label for="login__username">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" style="width: 1.5rem; height: 1.5rem;">
                            <path d="M1600 1405q0 120-73 189.5t-194 69.5H459q-121 0-194-69.5T192 1405q0-53 3.5-103.5t14-109T236 1084t43-97.5 62-81 85.5-53.5T538 832q9 0 42 21.5t74.5 48 108 48T896 971t133.5-21.5 108-48 74.5-48 42-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-320-893q0 159-112.5 271.5T896 896 624.5 783.5 512 512t112.5-271.5T896 128t271.5 112.5T1280 512z" fill="currentColor"/>
                        </svg>
                    </label>
                    <input id="login__username" type="text" name="username" placeholder="Username">
                </div>
                <div class="form__field">
                    <label for="login__password">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" style="width: 1.5rem; height: 1.5rem;">
                            <path d="M640 768h512V576q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28H416q-40 0-68-28t-28-68V864q0-40 28-68t68-28h32V576q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z" fill="currentColor"/>
                        </svg>
                    </label>
                    <input id="login__password" type="password" name="password" placeholder="Password">
                </div>
                <div class="form__field">
                    <input type="submit" value="Sign In">
                </div>
            </form>
            <p class="text--center">Not a member? <a href="#">Sign up now</a></p>
        </div>
    </body>
    </html>
    `;

    const previewWindow = window.open("", "_blank");
    previewWindow.document.write(previewHTML);
    previewWindow.document.close();
}

function exportThemeFiles() {
    const theme = {
        name: "custom-theme",
        type: "light",
        colors: {
            primaryBackground: colorInputs.primaryBg.value,
            secondaryBackground: colorInputs.secondaryBg.value,
            textColor: colorInputs.textColor.value,
            buttonBackground: colorInputs.buttonBg.value,
            accentColor: colorInputs.accentColor.value
        }
    };

    const cssContent = `
:root {
    --primary-bg: ${theme.colors.primaryBackground};
    --secondary-bg: ${theme.colors.secondaryBackground};
    --text-color: ${theme.colors.textColor};
    --button-bg: ${theme.colors.buttonBackground};
    --accent-color: ${theme.colors.accentColor};
}
    `;

    const markdownContent = `
| Color             | Hex Value |
|-------------------|-----------|
| Primary Background | ${theme.colors.primaryBackground} |
| Secondary Background | ${theme.colors.secondaryBackground} |
| Text Color         | ${theme.colors.textColor} |
| Button Background  | ${theme.colors.buttonBackground} |
| Accent Color       | ${theme.colors.accentColor} |
`;

    downloadFile('theme.json', JSON.stringify(theme, null, 4));
    downloadFile('theme.css', cssContent);
    downloadFile('theme.md', markdownContent);
}

function downloadFile(filename, content) {
    const blob = new Blob([content], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
}

previewButton.addEventListener('click', openPreview);
exportButton.addEventListener('click', exportThemeFiles);
