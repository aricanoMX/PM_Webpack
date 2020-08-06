import "../css/index.css";
import React from "react";
import { render } from "react-dom";
import App from "./components/app";
render(<App />, document.getElementById("root"));

// import search from "./search";
// import render from "./render";

// const id = prompt("Quien es ese pokemon? ");

// search(id)
//   .then((data) => {
//     render(data);
//   })
//   .catch(() => {
//     console.log("no hubo pokemon");
//   });

// import text from "./text.js";
// text();
// if (module.hot) {
//   module.hot.accept("./text.js", function () {
//     console.log("se recargo el archivo");
//     text();
//   });
// }
