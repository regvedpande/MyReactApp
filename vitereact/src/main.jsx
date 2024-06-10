import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensure this file exists in the src directory


//This type is not allowed in the React it has its own below you can see it
// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit Google'
// };

//This is how we declare variable in react and below we are injecting it babel inject it
const variable = "solar system"

// React.createElement is the method here 
//and the whole syntaxing is object here
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target:"_blank"},
  'click me to visit the google',
  variable //injecting it
)

// const anotherElement = (
//   <a href='htt[s://google.com' target='_blank'>Visit Google</a>
// )


ReactDOM.createRoot(document.getElementById('root')).render(
   reactElement

);