import React, { PureComponent } from "react";
import { withRouter } from "react-router";

import "./generic-page.css";

function NotFound(props) {
  const handleBackClick = () => {
    // props.history.goBack();
    props.history.go(-1); //This is equivalent to before line
  };
  const handleForwardClick = () => {
    // props.history.goForward();
    props.history.go(1);
  };
  const handleRandomClick = () => {
    // Generate a random number between 1 and 10
    // 10 is max number and 1 the min, plus 1 is to indicate that starts from 1
    // Round floor goes from to 0.1 - 0.49 and upper from 0.5
    // Example: Math.round(0.4 * 9) = 3.6 + 1 = 4.6 = 5
    const random = Math.round(Math.random() * (10 - 1) + 1);
    props.history.push(`/videos?id=${random}`, { id: random });
  };
  return (
    <div className="Page NotFound">
      <h1>404 Not Found..!!</h1>
      <h3 className="SadFace">:(</h3>
      <button className="Button" onClick={handleForwardClick}>
        Ir a la siguiente página 👉
      </button>
      <button className="Button" onClick={handleBackClick}>
        Ir a la ruta anterior 👈
      </button>
      <button className="Button" onClick={handleRandomClick}>
        Video Random 🔀
      </button>
    </div>
  );
}

export default withRouter(NotFound);
