## Pre-rendering & Data Fetching Intro

### Type of pre-rendering
1. Static Generation
  - without data
  - with data
  - incremental Static Generation
  - dynamic parameters when fetchin data
2. Server-side Rendering
  - data Fetching

3. Client-side data Fetching
  - Combing pre-rendering with client-side data fetching

### React vs Next JS
  - By default, Next JS pre-renders every page in the application.

### What does pre-render mean?
  - Next JS generates HTML for each page in advance instead of having it all done by client-side JavaScript.
  - Pre-render just means render in advance of sending it to the browser.
  - Pre-rendering is done by default in a Next JS app.

### Why pre-render?
  1. Pre-rendering improve performance
    - In a React app, you need to wait for the JavaScript to be executed
    - Perhaps fetch data from an external API and then render the UI
    - There is a wait time for the user
    - With a pre-rendered page, the HTML is already generated and loads faster
  2. Pre-rendering helps whith SEO
    - If you building a blog or an e-commerce site, SEO is a  concern
    - With a React app, if the search engine hits your page, it only sees a div tag with id equal to root
    - If search engine hits a pre-rendered page though, all the content is present in the source code which will help index that page

### Pre-rendering Summary
  - Pre-rendering refers to the process of generating HTML with the necessary data for a page in our application
  - Pre-rendering can result in better performance and SEO

## Static Generation
  - A method of pre-rendering where the HTML pages are generated at build time
  - The HTML with all the data that makes up the content of the web page are generated in advance when you build your application
  - Recommended method to pre-render pages whenever possible
  - Page can be build once, cached by a CDN and served to the client almost instantly
  - Ex: Blog pages, e-commerce Product pages, documentation and marketing pages

### Static Generation - How?
  - Next JS, by default will pre-render every page in our app
  - The HTML for every page will automatically be statically generated when we build our application

  - Prod Server - An optimozed build is created once and you deploy that build. You do not make code changes on the go once it is deployde
  - Dev Server - We should be able to make changes in our code and we want that code to immediately reflect in the browser

  - For production builds, a page will be pre-rendered once when we run the build command
  - In development mode, the page is pre-rendered for every request you make

### getStaticProps

  1.
    - getStaticProps runs only on the server side
    - The function will never run client-side
    - The code you write inside getStaticProps will not even be included in the JS bundle that is sent to the browser

  2.
    - You can write server-side code directly in getStaticProps
    - Accessing the file system using the fs module querying database can be done inside getStaticProps
    - You also do not have about including API keys in getStaticProps as that will not make it to the browser

  3.
    - getStaticProps is allowed only in a page and cannot be run from a regular component file
    - It is used only for pre-rendering and not client-side data fetching

  4.
    - getStaticProps should return an object and object should be contain a props key which is an object
    - In our example, we returned an object & the object contained a props key which was an object as well.

  5.
    - getStaticProps wil run at build time.