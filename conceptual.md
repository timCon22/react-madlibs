### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

	React is a front end framework, and you would use it to make reuseable components and to make it easier to build modular components

- What is Babel?

	Babel is a react dependency that translate readable html into javascript

- What is JSX?

	JSX is the portion of babel that creates the html in javascript

- How is a Component created in React?

	A component is created by making a react class with a render method

- What are some difference between state and props?

	A state can be changing where props cannot be changed but is reusable like an arguement in a function

- What does "downward data flow" refer to in React?

	

- What is a controlled component?

	It is a component in which a forms data is handled by a components state

- What is an uncontrolled component?

	It is a component that stores its own state internally

- What is the purpose of the `key` prop when rendering a list of components?

	It is to keep track of a prop

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

	If you decide to change something in the list of components you will then get errors or react will return whatever is at the current index in the array

- Describe useEffect.  What use cases is it used for in React components?

	It is a built in hook in react that only runs when there is a change on the DOM

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

	It returns a mutable object with a key of current whose value is equal to the initial value passed into the hook

- When would you use a ref? When wouldn't you use one?

	You would use it to access an underlying DOM element and setting up or clearing timers. You wouldnt use it when you dont need an object to change at any time

- What is a custom hook in React? When would you want to write one?

	It is a Javascript function that typically uses built in hooks. You would make one to use abstract logic, handle repeated tasks, or to generate your own JSX