# food-app

#### Ep - 01 : Inception

* Use React CDN links
* Concept - React.createElement and ReactDOM.render

#### Ep - 02 : Igniting our App

* Setup github and add/push project on github
* Type `npm init` to add _package.json_ file
* Adding a bundler/dependency - *parcel* 
    `npm install -D parcel` (-D is for dev dependency i.e. development)
* Creating a _.gitignore_ file to avoid those file to push on github
* Ignite the app: `npx parcel index.html` - builds the app and provides server (localhost:1234) to run the app

* Remove React CDN links from the project and install React & React DOM 
    `npm install react`
    `npm i react-dom`

> Parcel

* Provides a Dev build
* Local Server
* HMR = Hot Module Replacement (auto refreshes the page on saving the file).
  This is fulfilled because Parcel uses File Watching Algorithm (written in C++) to read the file on saving and update the page accordingly.
* Caching - Faster builds
* Image optimization
* Minification
* Bundling
* Compressing
* Content hashing
* Code splitting
* Differential bundling - support older browsers
* Diagnostic
* Error handling
* HTTPS
* Tree Shaking - remove unused code
* Different dev and production bundles

> Browserslist

* It is package that enables our application to be compatible with the older version of browsers
* To configure it, add it in package.json (refer the documentation / browserslist.dev)
