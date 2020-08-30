import React from "react";
import { hydrate } from "react-dom";
import App from "../pages/containers/app";

import { BrowserRouter } from "react-router-dom";

const homeContainer = document.getElementById("home-container");

// El método render se recomienda cuando se trabaja desde el cliente
// Para el renderizado en el servidor, se recomienda otro método llamado hydrate, es menos
// pesado porque ya parte del trabajo lo viene haciendo el server, no se tiene que re renderizar toda
// la app, es para optimizar
hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  homeContainer
);
