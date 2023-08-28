# food-app


### Ep - 01 : Inception
---

* Use React CDN links
* Concept - React.createElement and ReactDOM.render


### Ep - 02 : Igniting our App
---

* Setup github and add/push project on github
* Type `npm init` to add _package.json_ file
* Adding a bundler/dependency - *parcel* 
    `npm install -D parcel` (-D is for dev dependency i.e. development)
* Creating a _.gitignore_ file to avoid those file to push on github
* Ignite the app: `npx parcel index.html` - builds the app and provides server (localhost:1234) to run the app

* Remove React CDN links from the project and install React & React DOM using 
    `npm install react` & 
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


### Ep - 03 : Laying the foundation
---

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


### Ep - 04 : Talk is cheap, show me the code
---

* Planning a layout and building an app.

> Props

  Passing _props_ to a component is just like passing an argument to a function

* Passing dynamic data (json data) using props

> Key

_key_ property is passed to the component to identify it uniquely. This is done so that DOM does not need to re-render all the child nodes after adding a new node on the same level. _key_ property will help it to just render a new component. Always use _key_ property while looping component.
Note: React does not recommend using indexes as keys (as per the docs). Indexes can be used as the last option in-case we don't have unique id to pass in _key_ property.


### Ep - 05 : Let's get hooked
---

* Restructuring the app with folders and create a seperate file for each components.

* App Hompage Layout

  * Header
    - Logo
    - Nav Items
  * Body
    - Search
    - Filter
    - RestaurantContainer
      - RestaurantCard
        - Image
        - Name of Restaurant, Star rating, cuisine, delivery time, cost for two
  * Footer
    - Copyright
    - Links
    - Address
    - Contact

 > Types of Export/Import

  * Default export/import

    - Used to export one variable/component in a file, example;
        `export default Header;`
      And import as,
        `import Header from "./Header";`

  * Named export/import

    - Used to export more than one variable/component in a file, example;
        `export const test = "Hello World!";`
        `export const demo = "Hello React!";`
      And import as,
        `import {test, demo} from "./folder.js"`;

> React Hooks - useState()

  (Normal JS utility functions)
  
  * useState()

    - Also known as State variables
    - useState(__) takes in a parameter like [] or json data variable as initial data to load/display before effect/changes in DOM.
    - Whenever a state variable updates/changes, React re-renders the component.

    `const [count, setCount] = useState([])`

> Reconciliation Algorithm

  * React uses Reconciliation Algorithm also known as React Fiber is a technique of finding a difference and updating a DOM.
  * Virtual DOM is basically a representation of actual DOM. It is just an object representing a UI.
  * **Diff Algorithm** finds out the difference between the two virtual DOM - previous virtualDOM/object and the updated virtualDOM/object and then update the actual DOM. This is how React becomes fast.


### Ep - 06 : Exploring the world
---

> Monolithic Architecture

  It has all different services like Backend/APIs, UI, Auth, DB etc. in a single/same project. Traditionally apps were developed based on this architecture. Example, creating all services in a single tech stack.

> Microservices Architecture

  Different services like Backend/APIs, UI, Auth, DB etc. are created as different projects. Nowadays, companies are moving towards this architecture. Example, creating different services in different tech stack like UI in React, Backend APIs in Java, SMS services in GoLang etc. These services run on different ports and interact with each other forming a working application.


* 2 methods to load the UI data using API
  
  -    UI Loads ==>> API (eg. takes 500ms to load) ==>> RENDER UI   (Poor technique)
  -    UI Loads ==>> RENDER UI ==>> API (eg. takes 500ms to load) ==>> RENDER    (Better UX)

> React Hooks - useEffect()

  * useEffect()

    - useEffect(__) takes in two arguments - a callback function and dependency array.
    - useEffect's callback function will be called after the component renders.
    - If dependency array [] is not provided (in the second argument), useEffect will be called on every component render.
    - If empty dependency array is provided, useEffect will be called once on initial render.
    - If a variable is added inside dependency array, useEffect will be called only when the variable data gets updated/changed.
    - In simple words, If you need to do something after the component renders, you need to write it inside useEffect.

      `useEffect( ()=>{}, [] )`


### Ep - 07 : Finding the path
---

* Install 'React Router' using command - `npm i react-router-dom`

* 2 types of Routing

  - Server-side Routing

    When a page is requested, eg. about.html, by clicking on anchor tag, it reloads the whole page and sends a network call to the aboutus.html, fetches the html and renders to the webpage.  

  - Client-side Routing

    Here, we are not making a network call while moving towards a page eg. about section, because all the components are already loaded in to our app when loaded the first time. Hence, fetching a page does not reloads the whole app.


### Ep - 08 : Let's get Classy
---

* Function-based components is basically a normal javascript function which returns a piece of JSX and Class-based components is a class which has a render method which returns a piece of JSX.

> Class-based Components

* `React.Component` is a class which is given by React and the class component inherits the properties from it.
  
    ```JAVASCRIPT
    import React from "react";
    
    class User extends React.Component {
      render() {
        return (
          <div>
          ...
          </div>
        );
      }
     }

     export default User;
    ```

* Lifecycle of React Class-based components

- It works in such a way that when class is instantiated or loaded, its works in the following order.

  1.  _constructor_ is called first
  2.  _render_ will be called
  3.  _componentDidMount() will be called

- But there are 2 cases in such lifecycle :

  1. If there is one child in the parent class component

      Example;

      ```JAVASCRIPT
        class About extends Component {
          constructor(props) {
            super(props);

            console.log("Parent Constructor");
          }

          componentDidMount() {
            console.log("Parent ComponentDidMount");
          }

          render() {
            console.log("Parent Render");

            return (
              <div>
                <h1>About</h1>
                <h2>This is About page</h2>

                <UserClass name={"First"} /> /** Child component */
              </div>
            );
          }
        }
      ```

      This will works in such a way;


      ```JAVASCRIPT
        Parent Constructor
        Parent Render
        Child Constructor
        Child Render
        Child ComponentDidMount
        Parent ComponentDidMount
      ```
    
    2. If there are multiple childs in the parent class component

        Example (same as above) ;

        ```JAVASCRIPT
          return (
            <div>
              <h1>About</h1>
              <h2>This is About page</h2>

              <UserClass name={"First"} /> /** First Child component */
              <UserClass name={"Second"} /> /** Second Child component */
            </div>
          );
        ```

        This will works in such a way;


        ```JAVASCRIPT
          Parent Constructor
          Parent Render
            First Child Constructor
            First Child Render
            Second Child Constructor
            Second Child Render
            First Child ComponentDidMount
            Second Child ComponentDidMount
          Parent ComponentDidMount
        ```

    The reason it works in above way is explained in the below diagram -
    https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

    If we connect the above example withe provided diagram, React actually batches the render phase (constructor + render) of all chld components and later compoentDidMount of all childs. This is done by React for better optimization.

* `componentDidMount()`

  - It is used in class-based components usually to make API calls. The reason we do this, is because the _componentDidMount_ will be called at last after the mounting/loading of component completes. Just like _useEffect_ in function-based components.

* `componentDidUpdate()`

  - This is called after the data is updated using _componentDidMount_.

* `componentWillUnmount()`

  - Unmounting means when the component will disappear from UI. It is called after componentDidUpdate.


### Ep - 09 : Optimising our App
---

* Building Custom Hooks

> Chunking / Code Splitting / Dynamic Bundling / Lazing loading / On-demand loading / Dynamic import 
  
  - Making smaller bundles
  - To breakdown the app into smaller logical chunks
  - Usually all components load on initial load of the page and to avoid the javascript file's size to be larger, such components are lazy loaded which are not immediately required They are loaded when those page/components are clicked. This is called Lazy loading or On-demand loading.
  - This technique is used to reduce the bundle size and make the app optimized and faster.


### Ep - 10 : Jo dikhta hai, vo bikta hai
---

* Using Tailwind CSS


### Ep - 11 : Data is the new Oil
---

> Higher Order Components

  - Higher Order Component is a function that takes a component and returns a component. 
  - It takes an existing and enhances or modifies it and returns it back.

* Controlled and Uncontrolled Components

* Lifting State up

> Props Drilling

  - Passing data from a parent component down to its child component and then those children passes the same data down to its own children.

  * React Context : It is kind of global place where data is kept and it can accessed anywhere.


### Ep - 12 : Let's build our store
---

* **Redux** is primarly used for handling state of an application.
* It acts as a centralized store.
* This centralized store has slices each indicating a specific functionality i.e. cart, user etc.

Example: Consider a Cart functionality in a food app, you cannot modify the cart directly on 'Add to cart' button click this process actually works in such a way that when you click on the 'Add to Cart' button, it _dispatches_ an action which call the **Reducer** function which results in updating the slice of our redux store. This helps you to _write_ data to the cart. 
But you also need to display it on the cart, i.e. get data or _read_ data from the redux store and display it to your cart, so here we will use a **Selector** to read he data from the store. This selector phenomena is known as 'subscribing to the store'. It actually syncs with the store so whenever you update the redux store it auto-updates the cart.

'Add to cart' btn => dispatches (action) =>  Calls Reducer fn() => Updates the store => Selector (subscribed to store) =>  Updates the cart

> Redux Toolkit

  1. `npm install @reduxjs/toolkit` and `npm install react-redux`
  2. Build our store
  3. Connect our store to our app
  4. Create a Slice (cart slice)
  5. Dispatch an action
  6. Selector


### Ep - 13 : Time for the test
---

* Types of Testing (that Developers do)

  1. Unit testing - Testing one/single component in isolation
  2. Integration testing - Testing multiple components that are interacting with each other
  3. End to End testing (E2E testing) - Testing the application from user lands till the user leaves the app

* Install [React testing library](https://testing-library.com/docs/react-testing-library/intro/) - `npm install -D @testing/react`
* Install [Jest](https://jestjs.io/docs/getting-started) - `npm i -D jest`
* Install Babel dependencies - `npm install --save-dev babel-jest @babel/core @babel/preset-env`
* Configure babel.config.js
* Configure [parcel config file to disable default babel transpilation](https://parceljs.org/languages/javascript/#usage-with-other-tools)