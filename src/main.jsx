import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import App from './App.jsx'
//import './index.css'

import StarRatting from "./StarRatting";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*<App />*/}
    <StarRatting maxRating={5} />
    <StarRatting maxRating={10} />
  </StrictMode>
);
