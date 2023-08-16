import React from 'react'
import './Button.css'

const Button = ({ text, click, cssClass="green" }) => {
    return (
        <div>
            <button className={cssClass} onClick={click}>{text}</button>
        </div>
    )
}

export default Button