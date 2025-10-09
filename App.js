import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement-JS Object => HTMLElement(render)

const heading = React.createElement("div",{id:'container',key:'container',},[
  React.createElement('h1',{id:"heading",key:'heading'}, 'Namaste React'),
  React.createElement('div',{id:'subContainer',key:'subContainer'},[
    React.createElement('h1',{id:'mainHeading',key:'mainHeading',style:{color:'pink'}},"Main Heading"),
    React.createElement('h2',{id:'subHeading',key:'subHeading',style:{color:'orange'}},"Sub Heading")
  ])
])

// JSX - (transpiled before it reaches the JS Engine) => PARCEL - Babel
// JSX - HTML like or XML Structured syntax code

// JSX code => React.createElement => ReactElement-JS Object => HTMLElement 
const mount = <h1 id="heading" className="container">Namaste React using JSX</h1>

// React Element
// React Element is a JSX element.

// React Components are of Two Types
// Class Based Components - Old
// Functional Components - New

// React Functional Components
// Is a functional Components which return the piece of JSX code.
// ComponentComposition
const HeadingComponent = () => (
  <>
  {ele}
  {Title()}
  <Title/>
  <SubHeading/>
  <h1>Namaste React Functional Component</h1>
  </>
)

const ele = (
  <h1>Namaste React Element</h1>
)

const Title = () => (
  <h1>Namaste React using JSX</h1>
)

const SubHeading =() => <h1>Namaste Heading Component</h1>

console.log("mount >>>",mount)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<HeadingComponent/>)
