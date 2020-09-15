import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { DecodeProvider, useDecode } from "@decode/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MyTable from "./MyTable";

function App() {
  return (
    <Router>
      <Route path="/production">
        <DecodeProvider env="production" cacheToken={false}>
          <MyTable />
        </DecodeProvider>
      </Route>
      <Route path="/staging">
        <DecodeProvider env="staging" cacheToken={false}>
          <MyTable />
        </DecodeProvider>
      </Route>
    </Router>
  );
}

function MyComponent() {
  let { data } = useDecode("listUsers");
}

export default App;
