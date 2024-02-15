//declaring variables
let variableThatCanChangeValue = "this is a string"
const variableWithConstantValue = 2

//logging to the console
console.log(variableWithConstantValue)

//query for

// get html-elements from the DOM
// document.querySelector will return the first matching element, you can query for element with id:s, elements with class or element-types
const ElementWithIdClear = document.querySelector("#clear")
const FirstElementWithClassButton = document.querySelector(".button")
const FirstButtonELement = document.querySelector("button")

// This query will collect all elements with class button, they are stored in an array in the variable allElementsWithClassNameButton
const allElementsWithClassNameButton = document.querySelectorAll(".button")

// eventlisteners

element.addEventListener("click", () => {
  // code inside here will execute when the element i clicked
})

//this does not work, everything encapsuled by those curly-brackets is out of reach for us here
