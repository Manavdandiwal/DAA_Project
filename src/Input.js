import { useState } from "react";
import Knapsack from "./Knapsack";
import ShowTable from "./ShowResult";

const profit = [];
const weight = [];

const InputKnapsack = () => {
  const [N, updateN] = useState(0);
  const [flag, updateFlag] = useState(0);
  const [W, updateW] = useState(0);
  const [dp, updateDP] = useState([[]]);

  return (
    <div className="form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateFlag(1);
          console.log(N);
          console.log(flag);
        }}
      >
        <label className="center">
          Number of Items:
          <input
            value={N > 0 ? N : ""}
            onChange={(e) => {
              updateN(+e.target.value);
              updateFlag(0);
            }}
          />
        </label>
        <button>Generate Table</button>
      </form>
      <div className={flag === 1 ? "knap" : ""}>
        {flag === 1 ? (
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                updateDP(Knapsack(profit, weight, W));
              }}
            >
              {[...Array(N)].map((e, i) => {
                return (
                  <div key={i} className="center">
                    <h2 className="items-input">ITEM-{i + 1}</h2>
                    <label className="inline">
                      Weight:
                      <input
                        onChange={(e) => {
                          weight[i] = +e.target.value;
                          console.log(weight);
                        }}
                      />
                      Profit:
                      <input
                        onChange={(e) => {
                          profit[i] = +e.target.value;
                          console.log(profit);
                        }}
                      />
                    </label>
                  </div>
                );
              })}
              <label className="center">
                <h2 className="items-input">Weight of Knapsack:</h2>
                <input
                  value={W > 0 ? W : ""}
                  onChange={(e) => {
                    updateW(+e.target.value);
                  }}
                />
              </label>
              <button>Submit</button>
            </form>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <ShowTable table={dp} />;
    </div>
  );
};

export default InputKnapsack;
