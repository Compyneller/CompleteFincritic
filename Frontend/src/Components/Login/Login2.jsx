import React, { useState } from "react";
import Dropdown from "./Dropdown";
import "./Login2.css";

const Login2 = () => {
  const [selected, setSelected] = useState("");

  return (
    <div>
      <Dropdown selected={selected} setSelected={setSelected} />
    </div>
  );
};

export default Login2;
