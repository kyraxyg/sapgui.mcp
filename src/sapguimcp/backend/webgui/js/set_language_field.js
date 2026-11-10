(params) => {
    const { language } = params;

    // Set hidden language input
    const hiddenField = document.querySelector('#sap-language, input[name="sap-language"]');
    if (hiddenField) {
        hiddenField.value = language;
        hiddenField.dispatchEvent(new Event('input', { bubbles: true }));
        hiddenField.dispatchEvent(new Event('change', { bubbles: true }));
    }

    // Also try to update the visible dropdown display if it exists
    const dropdown = document.querySelector('#sap-language-dropdown');
    if (dropdown) {
        const langNames = { EN: 'English', DE: 'Deutsch', TR: 'Türkçe' };
        const langDisplay = langNames[language] || language;
        dropdown.value = langDisplay;
    }
};
