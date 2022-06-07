import "./Button.css";

const Button = ({ children, action, type = "button" }) => {
  return (
    <button className="button shadow" type={type} onClick={action}>
      {children}
    </button>
  );
};

export default Button;
