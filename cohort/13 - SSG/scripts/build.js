import fs from 'fs-extra';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { personsData as data } from '../src/data.js';
import { fileURLToPath } from 'url';
import App from '../src/app.js';

// get __dirname and __filename in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// get path of dist directory
const distPath = path.resolve(__dirname, '../dist');

// get path of template.html
const templateHTMLPath = path.resolve(__dirname, '../src/template.html');

// create index.html in dist directory
const indexHTMLPath = path.resolve(distPath, 'index.html');

// read content of template.html
const templateContent = await fs.readFile(templateHTMLPath, 'utf-8');

// convert app to static HTML
const generatedAppHTML = ReactDOMServer.renderToStaticMarkup(React.createElement(App, { data }));

// replace the placeholder in template with generated app HTML
const finalHTMLContent = templateContent.replace('<!-- app -->', generatedAppHTML);

// write the final HTML to index.html in dist directory after ensuring the directory exists
await fs.ensureDir(distPath);
await fs.writeFile(indexHTMLPath, finalHTMLContent);
