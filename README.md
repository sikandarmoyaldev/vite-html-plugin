# Vite HTML Plugin

The Vite HTML Plugin simplifies managing HTML files in Vite projects by parsing, replacing template arguments, and optimizing/minifying HTML files during the build process.

## Installation

You can install the plugin using npm:
```bash
npm install -D sikandarmoyaldev/vite-html-plugin 
```

## Usage

### Configuration

In your Vite configuration file `vite.config.js`, import the plugin and define your configuration options:

```js
import { defineConfig } from "vite";
import htmlPlugin from "sikandarmoyaldev/vite-html-plugin";


export default defineConfig({
    plugins: [
        htmlPlugin({
            config: {
                // Define template arguments for HTML files
                title: "My Website",
                description: "This is a description",
                urls: ["https://example.com", "https://example.com"],
                user: {
                    name: "John Doe",
                    role: "Developer"
                }
            },
            // Specify the build configuration
            build: {
                // Enable/disable HTML minification
                minify: true,
                // Specify HTML minification options
                minifyOptions: {
                    collapseWhitespace: true,
                    removeComments: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    minifyJS: true,
                    minifyCSS: true,
                }
            }
        }),
    ],
    // Additional build configurations
    build: {
        // Define the output directory for the build process
        outDir: "dist",
        // Specify additional rollup options
        rollupOptions: {
            // Specify the entry HTML files for the build process
            input: [
                // Add entry HTML files as needed
                "pages/index.html",
                "pages/contact/index.html",
                "pages/about.html"
                ...
            ]
        }
    }
});
```

### Template Arguments Usage

In your HTML files, use template arguments within double curly braces (`{{ }}`). For example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ title }}</title>
</head>
<body>
        
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
        
    <!-- Example usage with arrays -->
    <ul>
        <li>{{ urls[0] }}</li>
        <li>{{ urls[1] }}</li>
        <!-- Add more items as necessary -->
    </ul>

    <!-- Example usage with objects -->
    <ul>
        <li>{{ user.name }}</li>
        <li>{{ user.role }}</li>
        <!-- Add more items as necessary -->
    </ul>

</body>
</html>
```

## Contributing

If you want to contribute to this project, feel free to fork the repository, make changes, and submit a pull request. Please make sure to review the [Contribution Guidelines](CONTRIBUTING.md) before contributing.
