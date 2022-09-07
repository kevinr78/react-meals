const Card = (props) => {
  const myStyle = {
    backgroundColor: "#E94F37",
    borderRadius: "10px",
    padding: "10px",
  };

  return <div style={myStyle}>{props.children}</div>;
};

export default Card;
