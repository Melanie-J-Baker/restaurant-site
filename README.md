# restaurant-site

Instructions taken from the Odin Project at: https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page

![image](https://github.com/Melanie-J-Baker/restaurant-site/assets/104843873/d4ed34f7-c188-4c62-b9f1-b541ab9fe8a2)
![image](https://github.com/Melanie-J-Baker/restaurant-site/assets/104843873/e0ddb226-681c-4fca-8dda-069a0f5ae006)
![image](https://github.com/Melanie-J-Baker/restaurant-site/assets/104843873/77dc5233-5a9d-40ac-8d71-fa0173b0ca84)

Let’s continue practicing DOM manipulation by dynamically rendering a simple restaurant homepage! By the end, we are going to be using JavaScript alone to generate the entire contents of the website!

Note: DOM elements should be created using JavaScript but styling can be done in a separate CSS file.

Assignment

Create a src and dist directory with the following contents:
- an index.js file in src
- an index.html file in dist. Go ahead and link the main.js file in a script tag. main.js is the file that will be generated by webpack.
- create a webpack.config.js file that looks just like our file from the tutorial.

Set up an HTML skeleton inside of dist/index.html with single div id="content".

Create a bare-bones homepage for a restaurant. Include an image, headline, and some copy about how wonderful the restaurant is. It’s okay to hard-code these into the HTML for now just to see how they look on the page. Now remove those elements from the HTML (so leave only the html, body, and div id="content" tags) and instead create them by using JavaScript only, e.g. by appending each new element to div#content once the page is first loaded. Since we’re all set up to write our code in multiple files, let’s write this initial page-load function inside of its own module and then import and call it inside of index.js.

Next, set up your restaurant site to use tabbed browsing to access the Contact and Menu pages. Look at the behavior of this student solution for visual inspiration. Put the contents of each ‘tab’ inside of its own module. Each module will export a function that creates a div element, adds the appropriate content and styles to that element and then appends it to the DOM. Write the tab-switching logic inside of index.js. You should have event listeners for each tab that wipes out the current contents and then runs the correct ‘tab module’ to populate it again.
