# Shopify Landing Page Simulator 🚀

This project simulates a custom Shopify landing page using Liquid, HTML, CSS/SCSS, and JavaScript. It is designed to run locally via an Express server and be compiled using Webpack.

## 📁 Project Structure

```
LANDING-SHOPIFY-SIMULATOR
│
├── assets/                  # Static assets
├── config/                 
│   ├── settings_data.json   # Theme configuration
│   └── settings_schema.json # Visual editor schema
├── data/                   
│   ├── collections.json     # Simulated collection data
│   └── products.json        # Simulated product data
├── public/                 
│   ├── assets/              # Public assets (images, fonts...)
│   ├── data/                # Public data files
│   └── main.js              # Compiled JavaScript and injected styles
├── sections/               # Custom sections in Liquid
│   ├── collections-section.liquid
│   ├── hero-banner.liquid
│   └── ...
├── snippets/               # Reusable Liquid components
│   └── product-card.liquid
├── src/                    
│   ├── app.js               # Main app logic
│   └── styles.scss          # SCSS styles
├── templates/              # Main template index.liquid
├── .gitignore              
├── package.json            # Node project configuration
├── webpack.config.js       # Webpack configuration
└── server.js               # Local Express server
```

## 🛠️ Project Setup

### 1. Clone the repository:
```bash
git clone https://github.com/ivancho1212/landing-Shopify-Simulator
cd landing-shopify-simulator
```

### 2. Install dependencies:
```bash
npm install
```

This installs both runtime and development dependencies such as:
- `express` for the local server.
- `liquidjs` for rendering Liquid templates.
- `sass`, `sass-loader`, `css-loader`, `style-loader` for SCSS support.
- `webpack`, `webpack-cli`, and `webpack-dev-server` for building and bundling.

### 3. Start the local server:
```bash
npm run start
```
This will launch a local Express server at `http://localhost:3000` to render the Liquid templates.

### 4. Build the project (SASS/JS):
```bash
npm run build
```
This uses Webpack to compile and inject styles and logic into the `public/main.js` file.

> 💡 Every time you make changes to `src/app.js` or `src/styles.scss`, run `npm run build` to reflect updates in the browser.

---

## 🧩 Features Implemented

- `hero-banner` section with background image and button.
- Button navigates directly to the collections section (`#collections`).
- `collections-section` dynamically rendered using `collections.json`.
- Reusable `product-card` Liquid component.
- Subtle animations and visual effects.
- SCSS styling compiled and injected via Webpack.
- Shopify-like simulation using `liquidjs` and templating logic.

---

## 📜 Additional Documentation

- Liquid sections live in `/sections/` and are loaded via `templates/index.liquid`.
- Content is injected via `src/app.js`, which reads from `/data/collections.json` and generates HTML.
- Styles written in `src/styles.scss` are compiled and injected through JavaScript (`main.js`).
- The build process is handled entirely by Webpack.

---

## 🧪 Development Notes

- Webpack is configured in `webpack.config.js`.
- SASS/SCSS is compiled using `sass-loader` and included via `style-loader` and `css-loader`.
- JavaScript and styles are bundled together.
- This project is not directly connected to Shopify but mimics its environment for prototyping purposes.

---

## 🔗 Repository Link

> [https://github.com/ivancho1212/landing-Shopify-Simulator](https://github.com/ivancho1212/landing-Shopify-Simulator)

---

Feel free to contribute or suggest improvements by creating an issue or a pull request.

Thanks for checking out this project! 💚

