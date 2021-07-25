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