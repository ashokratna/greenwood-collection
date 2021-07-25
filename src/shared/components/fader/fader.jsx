import React, { useEffect } from 'react';
import Aos from 'aos';

import "aos/dist/aos.css";
import Fade from 'react-reveal/Fade';
const FaderComponent = (props) => {
    return <Fade { ...props } >
        {
            props.isCustomComponentExist ? <div>
                { props.children }
            </div> : props.children
        }

    </Fade>;
};

const AosAnimation = (props) => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);
    return <div data-aos={ props.animationType } data-aos-duration={ props.duration } className={ props.className }>
        { props.children }
    </div>;
};

export { AosAnimation, FaderComponent };