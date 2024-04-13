import { Plugin } from "vite";
import { minify, Options as MinifyOptions } from "html-minifier-terser";
import { replacePlaceholder } from "./utils";


interface Options {
    config: object;
    build: {
        outDir?: string;
        minify: boolean;
        minifyOptions: MinifyOptions;
    }
};


const defaultOptions: Options = {
    config: {},
    build: {
        minify: true,
        minifyOptions: {
            // Specify your minification options here
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            minifyJS: true,
            minifyCSS: true,
        }
    }
};


export default function htmlPlugin(userOption: Options): Plugin {
    // Merge user options with default options
    const options = { ...defaultOptions, ...userOption };

    return {
        name: "vite-html-plugin",
        async transformIndexHtml(html: string) {
            // Minify HTML if in production mode and minify option is enabled
            if (process.env.NODE_ENV === "production" && options.build.minify) {
                html = await minify(html, {
                    ...defaultOptions.build.minifyOptions,
                    ...options.build.minifyOptions
                });
            };

            // Replace placeholders with configuration values
            html = replacePlaceholder(options.config, html);
            return html;
        },
    };
};
