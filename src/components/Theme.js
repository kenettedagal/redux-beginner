import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "../features/theme";

function Theme() {
  const dispatch = useDispatch();
  const [color, setColor] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setColor(e.target.value);
          dispatch(setTheme(color));
        }}
      />
    </div>
  );
}

export default Theme;
