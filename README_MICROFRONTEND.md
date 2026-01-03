# Gen AI Document - Microfrontend

This application is configured as a **microfrontend (remote)** that can be loaded into the Shell application using Module Federation.

## 🏗️ Microfrontend Configuration

This app exposes its main component as a remote module that can be consumed by the Shell application.

### Configuration Details

- **Name:** `genAiDocument`
- **Port:** 5001
- **Remote Entry:** `http://localhost:5001/assets/remoteEntry.js`
- **Exposed Modules:**
  - `./App` - Main application component

## 🚀 Running as a Microfrontend

### Development Mode

```bash
npm run dev
```

The app will start on `http://localhost:5001` and expose its remote entry for the Shell application.

### Building for Production

```bash
npm run build
```

This will generate production-ready files including `remoteEntry.js` in the `dist/assets` folder.

### Preview Production Build

```bash
npm run preview
```

## 🔗 Integration with Shell

The Shell application loads this microfrontend using:

```javascript
// In Shell App
const GenAiDocumentApp = lazy(() => import('genAiDocument/App'))
```

## 📦 Module Federation Setup

The Module Federation is configured in `vite.config.js`:

```javascript
federation({
  name: 'genAiDocument',
  filename: 'remoteEntry.js',
  exposes: {
    './App': './src/App.jsx',
  },
  shared: ['react', 'react-dom']
})
```

## 🎯 Key Features

- **Independent Development** - Can be developed and deployed separately
- **Shared Dependencies** - React and React-DOM are shared with the Shell
- **Hot Module Replacement** - Fast refresh during development
- **Production Ready** - Optimized build for production deployment

## 🛠️ Standalone Mode

This application can also run standalone (not as a microfrontend):

1. Just access `http://localhost:5001` directly in your browser
2. The full application will work independently

## 📝 Notes

- The application uses React 19 and Vite 7
- Tailwind CSS is configured for styling
- Port 5001 must be available for development
- The Shell application must be able to access this app's URL for Module Federation to work

## 🐛 Troubleshooting

### CORS Issues

If you encounter CORS errors, ensure:
- Both Shell and Microfrontend are running
- Ports are not blocked by firewall
- URLs in Shell's `vite.config.js` match this app's running port

### Version Mismatches

Ensure React and React-DOM versions match between Shell and this microfrontend:
- Check `package.json` in both projects
- Reinstall dependencies if necessary

