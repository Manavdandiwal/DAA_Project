const ShowTable = (props) => {
  console.log(props.table);
  return (
    <div className={props.table.length > 1 ? "show" : ""}>
      <div className={props.table.length > 1 ? "table" : ""}>
        <h1>{props.table.length > 1 ? "DP Table" : ""}</h1>
        {props.table.length > 1 ? (
          <table>
            <thead>
              <td className="noBorder"></td>
              {props.table[0].map((val, index) => {
                return <th>{index}</th>;
              })}
            </thead>
            <tbody>
              {props.table.map((row, index) => {
                return (
                  <tr>
                    <td>{index}</td>
                    {row.map((val) => {
                      return <td>{val}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default ShowTable;
