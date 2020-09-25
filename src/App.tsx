import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  DecodeProvider,
  useDecode,
  ShowDecodeError,
  useLogout,
} from "@decode/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyTable from "./MyTable";

function App() {
  return (
    <Router>
      <Switch>
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
        <Route path="/">
          <DecodeProvider cacheToken={false}>
            <MyTable />
          </DecodeProvider>
        </Route>
        <Route path="/noEnv">
          <DecodeProvider>
            <MyTable />
          </DecodeProvider>
        </Route>
        <Route path="/cached" env="production" cacheToken={true}>
          <DecodeProvider>
            <MyTable />
          </DecodeProvider>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
