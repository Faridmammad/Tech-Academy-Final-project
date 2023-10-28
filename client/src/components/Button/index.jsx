import "./Button.css"


const Button = ({  label, className, onClick }) => {
    return (
      <button className={`custom-button ${className}`}  onClick={onClick}>
        {label}
      </button>
    );
  };
  
  export default Button;