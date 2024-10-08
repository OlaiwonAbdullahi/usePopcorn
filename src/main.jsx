import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App-v1.jsx";
import "./index.css";

//import StarRatting from "./StarRatting";

/*function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div className="">
      <StarRatting color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This Movie was rated {movieRating} stars</p>
    </div>
  );
}*/

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/*<StarRatting
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amaizing"]}
    />
    <StarRatting size={24} color="green" defaultRating={3} />
    <Test />*/}
  </StrictMode>
);
