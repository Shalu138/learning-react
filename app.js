import React from "react"
import ReactDOM from "react-dom/client"  //




// ************ Basic React ************

// ReactElemet(javascript object) => HTML(Browser understands)
const parent = React.createElement("div", { }, 
    [
        React.createElement("h1", { }, "Hello React1!"),
        React.createElement("h2", { }, "Hello React2!")
    ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent); // javascript object
root.render(parent);


// ***************************
// const h1 = React.createElement("h1", {}, "Hello React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(h1);



// ************* Pure Javascript ************
// const h1 = document.createElement("h1");
// h1.innerHTML = "Hello World!";
// const root = document.getElementById("root");
// root.appendChild(h1);
