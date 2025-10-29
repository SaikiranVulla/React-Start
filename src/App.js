import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// React.createElement => ReactElement-JS Object => HTMLElement(render)

// JSX - (transpiled before it reaches the JS Engine) => PARCEL - Babel
// JSX - HTML like or XML Structured syntax code

// JSX code => React.createElement => ReactElement-JS Object => HTMLElement 

// React Element
// React Element is a JSX element.

// React Components are of Two Types
// Class Based Components - Old
// Functional Components - New

// React Functional Components
// Is a functional Components which return the piece of JSX code.
// ComponentComposition

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)
