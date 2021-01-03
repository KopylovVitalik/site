import React from "react";
import GlobalState from "./src/context/GlobalState";
export const wrapRootElement = ({ element }) => (
  <GlobalState>{element}</GlobalState>
);

require("prism-themes/themes/prism-vsc-dark-plus.css");
