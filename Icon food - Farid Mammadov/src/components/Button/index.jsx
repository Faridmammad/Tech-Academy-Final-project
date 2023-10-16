import "./Button.css"


const Button = ({  label, className }) => {
    return (
      <button className={`custom-button ${className}`} >
        {label}
      </button>
    );
  };
  
  export default Button;