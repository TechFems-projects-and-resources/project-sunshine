## Project Sunshine

### The goal of this project is to create a simple React app and practice working with useState()

We will use HTML, CSS, JavaScript and React for our project. This project is for students who know the basics of JavaScript and React/React Hooks.

**Basic functionality:** we want our app to show a sunshine image or a rain image when the button is clicked.

A simple example looks like this:  

<img src="sun_example.png" width="300" />  <img src="rain_example.png" width="300" /> 

---

### For more advanced students

**State** and **hooks** are not easy to grasp. When you create a functional component, you add state by using useState() with an initial value. You need to tell React that you will use this by adding `import React, { useState } from "react"`. If you set the state of a variable, you can change it. In this example, you can change the state of the image from **sun** to **rain** and see the images switch between sun and rain.

1. Create a new project on your local computer using `npx create-react-app project-sunshine'
1. Delete the css from the App.css and index.css files and use `index.css` for your css (look at your previous projects how you set the initial general CSS)
1. Delete the code in the App.js file between `<div className="App">` and the closing `</div>`
1. Create a `components` folder inside your `src` folder
1. Create a component called `SunOrRain.jsx` and create a functional component SunOrRain inside this file (remember the React syntax!)
1. Create a folder called `images` in your `public` folder and add the two images that are provided in this repo
1. In the `return` of the component, add `<h1>Is it sunny?</h1>` to test the component
1. To test if your React app is working, make sure you are in the project folder in your terminal and type `npm start` (you should see the text "Is it sunny?" as title on the page)
1. Create a hook with `image` and `setImage` and set the state with `"sun-image"` as default
1. Create a button that will change the image when you click on it
1. Create a `div` with class name `image-container`.
1. Create a `handleClick()` function that uses the `setImage` hook (you can test if this works by doing a console.log 'sun' and 'rain' on click)
1. Now this can be difficult: you have to create a path to the images that changes when you click the button! You can use a **template literal** for this. In the `image-container` div, add `<img>` with `src={}` and inside the curly brackets add a template literal that holds the path to the images in your project's public/images folder (hint: you already have the variable `image` ...)
1. Add CSS to style the page as you like (the color used for the title and the button is `rgb(97, 3, 247)`)
1. **If you would like to build on this app** and add more features, you can think about adding weather information for your city, using a fetch request to the Weatherbit API (`https://api.weatherbit.io`). For example, using the latitude and longitude for Barcelona you make the following fetch request:  
```js
fetch("https://api.weatherbit.io/v2.0/current?lat=41.390205&lon=2.154007&key=2ac7e0a6ea244c14ae97c936f6d045c1")
```
You can add weather info and link that to icons or images, show the weather description, etc. etc. Ask for help from the coaches if you want to create more functionality in this app 👩🏾‍💻 😊

---

## Please note:
If you want to download a project on your local machine, do not fork it but clone the repo locally, on your computer. After that, create a new repo in your own GitHub account *with exactly the same project name*, and link the local repo to the remote repo in your GitHub account (see below). Why should you clone and not fork? It will show the project as **your own project** and not a fork of someone else's project. You can use it as a project for your portfolio.

You can connect a local project to a new, empty GitHub repo [as follows](https://docs.github.com/en/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line). We can do this together during a CodeWomen coding session: it is very good to know this so that you can start a project locally and afterwards link it with a remote GitHub repo.

If you clone the project without forking it, you will have to change the 'remote origin' repository after cloning. Check the remote of your local project using `git remote -v`. You will probably see:  
`origin  https://github.com/CodeWomen-Barcelona/some-codewomen-project.git (fetch)`  
`origin  https://github.com/CodeWomen-Barcelona/some-codewomen-project.git (push)`

To link your local project to your own GitHub repo, you need to change the remote origin. Have a look at this article: https://devconnected.com/how-to-change-git-remote-origin/. With `git remote -v` you can again check if remote origin has been reset and now shows the name of your GitHub account.


PS: if you work for a company that has a corporate social responsibility policy and wants to support women in tech, then here is the link to the [fundraising overview of MigraCode](https://docs.google.com/spreadsheets/d/1Zs-Mmi39bcjVw2U-iEQWSHSjkb-EmET-j1WB2oJF45Q/edit#gid=0).

---
