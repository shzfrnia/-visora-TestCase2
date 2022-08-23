import React from "react";
import ReactDOM from "react-dom";

import MainContainer from "./components/MainContainer";

require("./style.scss");

if (module.hot)
{
  module.hot.accept();
}

document.addEventListener("DOMContentLoaded", async () => 
{
  const rootElementID = "TestDiv";
  const rootElement = document.getElementById(rootElementID);

  ReactDOM.render(
    <MainContainer
      rootElement={rootElement}
    />,
    rootElement
  );
});