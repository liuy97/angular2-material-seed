# Introduction
Angular2 (2.4.0) + Material(2.0.0-beta.1) + Seed
[![Build Status](https://travis-ci.org/liuy97/angular2-material-seed.svg?branch=master)](https://travis-ci.org/liuy97/angular2-material-seed)

# How to start

```bash
# install the project's dependencies
npm install
# watches your files and uses livereload by default
npm start

# dev build
npm run build.dev
# prod build
npm run build.prod
```

# Configuration

Default application server configuration

```javascript
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var DOCS_PORT        = 4003;
var APP_BASE         = '/';
```

Configure at runtime

```bash
npm start -- --port 8080 --reload-port 4000 --base /my-app/
```

```bash
npm test
```

# License

MIT
