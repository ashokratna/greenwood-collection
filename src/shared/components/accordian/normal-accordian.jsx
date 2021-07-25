import React, { useState } from 'react';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';


const NormalAccordians = props => {
    const [expanded, setExpanded] = useState('panel-0');

    /**
     * handleChange is used to open main panel
     * this is used to open drop down menu on mobile and tab view
     * @param {*} panel 
     */
    const handleChange = (panel) => {
        setExpanded(expanded === panel ? '' : panel);
    };
    return (
        <>
            {
                !!props.options.length && props.options.map((obj, index) => {
                    return (
                        <MuiAccordion className={ props.className } square expanded={ expanded === `panel-${index}` } key={ index } TransitionProps={ {
                            timeout: {
                                appear: 300,
                                enter: 1000,
                                exit: 800
                            }
                        } } >
                            <MuiAccordionSummary
                                onClick={ () => handleChange(`panel-${index}`) }
                                className={ props.summaryClassName }
                                aria-controls={ `panel${index}-content` }
                                IconButtonProps={ { onClick: () => handleChange(`panel-${index}`) } }
                                id={ `panel${index}-header` }
                                expandIcon={ props.expandIcon }>
                                <p>
                                    { obj.title }
                                </p>
                            </MuiAccordionSummary>
                            <MuiAccordionDetails className={ props.detailClassName }>
                                <div className={props.detailDivClassName || ''} dangerouslySetInnerHTML={ { __html: obj.content } }></div>
                            </MuiAccordionDetails>
                        </MuiAccordion>
                    );
                })
            }
        </>
    );
};

export default NormalAccordians;