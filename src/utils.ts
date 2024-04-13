export const replacePlaceholder = (config: object, html: string): string => {
    const handleValue = (key: string, value: any) => {
        if (Array.isArray(value)) {
            // Handle arrays
            for (let i = 0; i < value.length; i++) {
                html = handleValue(`${key}[${i}]`, value[i]);
            };
        } else if (typeof value === "object") {
            // Handle objects
            for (const [nestedKey, nestedValue] of Object.entries(value)) {
                html = handleValue(`${key}.${nestedKey}`, nestedValue);
            };
        } else {
            // Replace directly for other types
            const regex = new RegExp(`{{\\s*${key.replace(/\./g, '\\.').replace(/\[/g, '\\[').replace(/\]/g, '\\]')}\\s*}}`, "g");
            html = html.replace(regex, value.toString()); // Ensure value is string
        };
        return html;
    };

    for (const [key, value] of Object.entries(config)) {
        html = handleValue(key, value);
    };

    return html;
};
