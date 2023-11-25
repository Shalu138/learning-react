


// ************ Using React **************
    /*** Example
     * <div id="parent">
     *      <div id="child1">
     *          <h1>H1 tag</h1>
     *          <h2>H2 tag</h2>
     *      </div>
     *      <div id="child2">
     *          <h1>H1 tag</h1>
     *          <h2>H2 tag</h2>
     *      </div>
     * </div>
    ***/

const parent = React.createElement(
    "div", 
    {id: "parent"}, 
    [
        React.createElement(
            "div", 
            {id: "child1"}, 
            [
                React.createElement(
                    "h1",{}, "H1 tag"
                ),
                React.createElement(
                    "h2",{}, "H2 tag"
                )
            ],
        ),
        React.createElement(
            "div", 
            {id: "child2"}, 
            [
                React.createElement(
                    "h1",{}, "H1 tag"
                ),
                React.createElement(
                    "h2",{}, "H2 tag"
                )
            ],
        )
    ],
);       
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent);


// const heading = React.createElement("h1", {id: "heading", attr: "attribute"}, "Hello World from React!");       
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
// root.render(heading);


// *********** Pure JS **********
        // let h1 = document.createElement("h1");
        // h1.innerHTML = "Hello World!";
        // let root = document.getElementById("root");
        // root.appendChild(h1);