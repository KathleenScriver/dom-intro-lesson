# DOM Lesson

## Objectives
1. Understand how to create html elements with DOM manipulation.
1. Understand how to manipulate DOM elements.

## What is the DOM?
  It's all a string, the browser takes that string and makes an Object out of it.
  It's a model of the object as a document.
  Turns the html into nodes (node tree)
  ```
               document
                  |
          ----------------
          |               |
        head            body
                          |
                    (all the nodes)
  ```

#### Basic DOM Manipulation
  Show how we can interact with the DOM using the console/inspector of some webpage.
  `dir(document)` in console will show you that the document is just made up of key/value pairs. (`dir` shows you all the properties on an object)
  Also try: `dir(document.body)`

  Show `document.querySelector()` in the console.
  - Tag name (finds the _first_ one)
  - class name
  - id name (can also use `getElementById`)
  - stacked (`div#card`)

`const ol = document.querySelector('ol')`

Set it equal to a variable, then can see `ol.firstElementChild` to see it's child. This is a built in method, can call on any element.

Let's change the text on the page! Can then call `ol.firstElementChild.innerText = "Got ya!"`

**Adding a node element**
```
let li = document.createElement('li')
li.innerText = "Doing more fun things!"
ol.appendChild(li)
```
**Now you try!** - Pick a learn lab and add an objective to the list using DOM manipulation (don't just change the html).

Now, let's do our own. With our files here, only importing `app.js` into the html with `<script src='app.js'></script>`, now create a div with a class name of `card` and a p tag inside of it. So use only DOM manipulation in the `app.js` file.


### Wrap up

Three basic steps to manipulating DOM elements.
1. Make the element
1. Do something to the element (innerText, etc)
1. Append element
