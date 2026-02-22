1- Difference between getElementById, getElementsByClassName, querySelector /
querySelectorAll

getElementById: Returns one element using its ID.

getElementsByClassName: Returns HTMLCollection of elements using class name.

querySelector: Returns the first element that matches a CSS selector.

querySelectorAll: Returns NodeList of all matching elements.

---

2- How to create and insert a new element into the DOM?

Use document.createElement() Then append it using appendChild() or append().

Example:

const div = document.createElement("div"); div.innerText = "Hello";
document.body.appendChild(div);

---

3- What is Event Bubbling?

Event Bubbling means an event starts from the target element and bubbles up to
its parent elements.

If you click a button inside a div, the click event will also trigger on the div
and then body.

---

4- What is Event Delegation? Why useful?

Event Delegation means attaching an event listener to a parent element instead
of multiple child elements.

It is useful because: Better performance Works for dynamically created elements

---

5- Difference between preventDefault() and stopPropagation()

preventDefault(): Prevents the default browser action (like form submission).

stopPropagation(): Stops the event from bubbling up to parent elements.
