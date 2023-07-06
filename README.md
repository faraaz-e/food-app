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

#### Ep - 03 : Laying the foundation

* Adding scripts to _package.json_ to avoid using `npx parcel index.html` to start the server.
  ```JSON
  "scripts": {
    "start": "parcel index.html", /** to start the server (localhost:1234) */
    "build": "parcel build index.html", /** production build of project */
    ...
  },
  ```
* After adding the above, now run the app using `npm run start` or `npm start`

> React Element
  `const test = React.createElement("h1", {id: "demo"}, "Hello World!")` results an object and not a html element. It converts to HTML element after rendering i.e. `root.render(test)`

> JSX
  It is not HTML in Javascript, it looks like HTML syntax. JSX is basically a combination of HTML & Javascript.

> Babel

  Babel is a transpiler / js-compiler which converts JSX to React behind the scenes.

> React Components

  * Class based components (old method)
  * Function based components (new method)

> React Fragments

  As JSX allows only one parent in component, so we need to wrap it with `<div></div>` to add more than one parent element, example,
  ```HTML
  <div>
    <div class="parent">
      <h1 class="child"></h1>
    </div>
    <div class="parent">
      <h2 class="child"></h2>
    </div>
  </div>
  ``` 
  To avoid using `<div>...</div>` (which looks inappropriate in html structure) instead, we can use `<React.Fragment>...</React.Fragment>` or an empty tag `<>...</>`