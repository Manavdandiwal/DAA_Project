import { useState } from "react";
import LCS from "./FindLCS";
import ShowTable from "./ShowResult";
import ShowString from "./ShowString";

const Select = () => {
  const [str1, updateStr1] = useState("");
  const [str2, updateStr2] = useState("");
  const [dp, updateDP] = useState([[]]);
  const [str, updateStr] = useState("");

  return (
    <div>
      <div className="form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const json = LCS(str1, str2);
            updateDP(json.dp);
            updateStr(json.str);
          }}
        >
          <label htmlFor="string1">
            String 1:
            <input
              id="string1"
              placeholder="string 1"
              value={str1}
              onChange={(e) => {
                updateStr1(e.target.value);
              }}
            />
          </label>

          <label htmlFor="string2">
            String 2:
            <input
              id="string2"
              placeholder="string 2"
              value={str2}
              onChange={(e) => {
                updateStr2(e.target.value);
              }}
            />
          </label>

          <button>Submit</button>
        </form>
      </div>

      <ShowTable str1={str1} str2={str2} table={dp} str={str} />
      <ShowString str={str} />
    </div>
  );
};

export default Select;
