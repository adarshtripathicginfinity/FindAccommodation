import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MultiStepContext } from "./components/stepContext/stepContext";
import StepContext from "./components/stepContext/stepContext";
import { AuthProvider } from "./components/context/authProvider";
import { BrowserRouter , Route , Routes } from "react-router-dom";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <StepContext>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </StepContext>
      </AuthProvider>
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
