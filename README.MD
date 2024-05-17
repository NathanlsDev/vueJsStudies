# Intro to Vue 2 | Vue Mastery School
## Lesson 1 - The Vue Instance
- How to begin writing a Vue application with a Vue instance, and how to load basic data onto the webpage.
- The Vue instance is the root of every Vue application
- The Vue instance plugs into an element in the DOM
- The Vue instance’s data can be displayed using the mustache-like syntax {{ }} called an expression.
- Vue is reactive

## Lesson 2 - Attribute Binding
- Data can be bound to HTML attributes.
- Syntax is v-bind: or : for short.
- The attribute name that comes after the : specifies the attribute we’re binding data to.
- Inside the attribute’s quotes, we reference the data - we’re binding to.

## Lesson 3 - Conditional rendering
- There are Vue directives to conditionally render elements:
  - v-if
  - v-else-if
  - v-else
  - v-show
- If whatever is inside the directive’s quotes is truthy, the element will display.
- You can use expressions inside the directive’s quotes.
- V-show only toggles visibility, it does not insert or remove the element from the DOM.

## Lesson 4 - List rendering
- The v-for directive allows us to iterate over an array to display data.
- We use an alias for the element in the array being iterated on, and specify the name of the array we are looping through. Ex: v-for="item in items"
- We can loop over an array of objects and use dot notation to display values from the objects.
- When using v-for it is recommended to give each rendered element its own unique key.

## Lesson 5 - Event handling
- The ```v-on``` directive is used to allow elements to listen for events
- The shorthand for ```v-on``` is ```@```
- You can specify the type of event to listen for:
  - click
  - mouseover
  - any other DOM event
- The ```v-on``` directive can trigger a method
- Triggered methods can take in arguments
- ```this``` refers to the current Vue instance’s data as well as other methods declared inside the instance

## Lesson 6 - Class & Style Binding
- Data can be bound to an element’s ```style``` attribute
- Data can be bound to an element’s ```class```
- We can use expressions inside an element’s class binding to evaluate whether a class should appear or not

## Lesson 7 - Computed properties
- Computed properties calculate a value rather than store a value.
- Computed properties can use data from your app to calculate its values.

## Lesson 8 - Components
- Components are blocks of code, grouped together within a custom element
- Components make applications more manageable by breaking up the whole into reusuable parts that have their own structure and behavior
- Data on a component must be a function
- Props are used to pass data from parent to child
- We can specify requirements for the props a component is receiving
- Props are fed into a component through a custom attribute
- Props can be dynamically bound to the parent’s data
- Vue dev tools provide helpful insight about your components