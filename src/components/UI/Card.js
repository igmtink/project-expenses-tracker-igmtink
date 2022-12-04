const Card = (props) => {
  let customClass = "rounded-md " + props.className;

  return <div className={customClass}>{props.children}</div>;
};

export default Card;
