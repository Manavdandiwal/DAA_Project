const ShowString = (props) => {
  return (
    <div>
      {props.str.length > 0 ? (
        <h2 className="LCS">LCS String: {props.str}</h2>
      ) : (
        <h2></h2>
      )}
    </div>
  );
};

export default ShowString;
