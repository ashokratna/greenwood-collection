import React from 'react';
import { NavLink } from 'react-router-dom';
const Button = (props) => {
    return (
        <>
            {
                props.isOutside ? <NavLink className={ `button ${props.className}` }
                    onMouseEnter={ props.onMouseEnter }
                    to={ props.to || '/' }
                    rel="noreferrer"
                    target={ props.target !== "" ? "_blank" : "_self" }
                > { props.children }</NavLink > :
                    <a className={ `button ${props.className}` }
                        onMouseEnter={ props.onMouseEnter }
                        href={ props.to || '/' }
                        rel="noreferrer"
                        target={ props.target !== "" ? "_blank" : "_self" }
                    > { props.children }</a >
            }
        </>
    );
};

export default Button;
