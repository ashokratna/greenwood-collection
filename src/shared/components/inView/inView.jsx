import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const THRESHOLD = [0, 0.25, 0.75, 1];

/**
 * InViewComponent is used to find which component is in view
 * it takes that div as ref and find inview according to that div
 * @param {*} props 
 */
const InViewComponent = props => {


    const { ref, inView } = useInView({
        /* Optional options */
        threshold: THRESHOLD,
    });

    useEffect(() => {
        props.setInview(inView);
    }, [props.setInview, inView, props]);

    return <Wrapper ref={ ref } inView={ inView } className={ props.className || '' } >
        {/* <div > */ }
        { props.children }
        {/* </div> */ }
    </Wrapper >;
};

const Wrapper = React.forwardRef(({ style, ...props }, ref) => {
    return <div ref={ ref } className={ `${props.inView ? 'active' : 'in-active'}  ${props.className}` }>{ props.children }</div>;
});

export default InViewComponent;