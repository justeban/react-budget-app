![cf](http://i.imgur.com/7v5ASc8.png) 31: Budget Tracker
===

## Submission Instructions
* Follow the instructions in the "Lab Instructions" documentation in the reference folder of the class repository
  

## Learning Objectives
* Students will learn to create frontend routes using react-router-dom
* Students will learn to restructure their applications into modules
* Students will learn the difference between view state and application state
* Students will learn to lift application state to better control one way data flow
* Students will learn to create and import sass partials

## Requirements
#### Configuration
Your lab directory must include
* **README.md** -- with documention about your lab
* **.babelrc** -- with all dependencies and dev-dependencies
* **.eslintrc.json** -- with the class .eslintrc.json file
* **.gitignore** -- with a robust .gitignore
* **.eslintignore** -- with the class .eslintignore
* **yarn.lock** -- with the yarn lockfile
* **package.json** -- with all dependencies and dev-dependencies
* **webpack.config.js** -- with webpack config
* **src/** -- containing the frontend code
* **src/main.js** -- for appending your app to the DOM
* **src/action/** -- containing your action creators
* **src/reducer/** -- containing your reducers
* **src/lib/** -- containing your redux
* **src/component/** -- containing your component folders
* **src/component/app.js** -- containing App component, provider, browser router, and route to Dashboard
* **src/component/dashboard/index.js** -- containing Dashboard component
* **src/component/category-form/index.js** -- containing CategoryForm component
* **src/component/category-item/index.js** -- containing CategoryItem component
* **src/style** -- containing your sass
* **src/style/main.scss** -- for importing and including reset and base
* **src/style/_vars.scss** -- sass variables
* **src/style/_reset.scss** -- sass reset
* **src/style/_base.scss** -- base styles
* **src/style/_layout.scss** -- layout styles

#### Feature Tasks
##### category
* in this app a category should contain at least the following properties
  * `id` a uuid
  * `timestamp` a date from when the category was created
  * `name` a string that is the name of the category
  * `budget` a number that is the total amount of $ in the category
  * feel free to add more to your categories

##### redux
###### reducer
* create a category reducer in your reducer directory
* this reducer should support the following interactions
  * `CATEGORY_CREATE`
  * `CATEGORY_UPDATE`
  * `CATEGORY_DESTROY`

###### action creators
* you should create an action creator for each interaction supported by your category reducer

###### store
* in `lib/store.js` export a function that will return a new redux store from your category reducer

##### Components
Create the following components and structure them according to the following diagram.
```
App
  Provider
    BrowserRouter
      Route / Dashboard
        CategoryForm -- for creating categories
        [Category Item]
           CategoryForm  -- for updating categories
```

###### App Component
The App component should set up the Provider for the redux store and the Router.

###### Dashboard Component
* should be displayed on the `/` route
* should use react-redux's `connect` to map state and dispatchable methods to props
* should display a `CategoryForm` for adding categories to the app state
* should display a `CategoryItem` for each category in the app state

###### CategoryForm Component
* should expect an `onComplete` prop to be a function
  * that function should be invoked with the CategoryForms state when the form is submitted
* should expect a `buttonText` prop to configure the submit buttons text
* should support an optional `category` prop that will initialize the state of the form

###### CategoryItem Component
* should display the category's name and budget
* should display a delete button
  * `onClick` the category should be removed from the application state
* should display a CategoryForm
  * `onComplete` the form should update the component in the application state

#### Test
* Test each interaction of your category reducer

#### Documentation
Write a description of the project in your README.md
