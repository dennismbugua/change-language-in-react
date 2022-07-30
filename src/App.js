import React from "react";
import "./styles.css";
import { Translation } from "react-i18next";
import ChangeLang from "./components/ChangeLang";
export default function App() {
  return (
    <div className="App">
      <Translation>{t => <ChangeLang t={t} />}</Translation>
    </div>
  );
}
