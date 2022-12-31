import ButtonCss from "./Button.module.css";

const Button = ({ children, ...rest }) => (
  <button className={ButtonCss["federated-button"]} {...rest}>
    {children}
  </button>
);

export default Button;
