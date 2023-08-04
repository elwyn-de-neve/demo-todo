import './button.css'

function Button({ children, buttonType, handleClick, variant }) {
    return (
        <button
            type={ buttonType }
            className={`button button--${variant}`}
            onClick={ handleClick }>
            {  children }
        </button>
    );
}

export default Button;