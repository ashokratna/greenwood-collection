import React from 'react';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { ReactComponent as ArrowSvg } from '../../../assets/images/arrow/icon_arrow_down.svg';
import { NavLink } from 'react-router-dom';



export default function CustomizedAccordions(props) {
    const [expanded, setExpanded] = React.useState('');
    const [subExpanded, setSubExpanded] = React.useState('');

    /**
     * handleChange is used to open main panel
     * this is used to open drop down menu on mobile and tab view
     * @param {*} panel 
     */
    const handleChange = (panel) => {
        setExpanded(expanded === 'panel1' ? '' : 'panel1');
    };

    /**
     * handleSubChange method is used to open submenu in mobile view
     * @param {*} panel 
     */
    const handleSubChange = (panel) => (event, newExpanded) => {
        setSubExpanded(newExpanded ? panel : false);
    };

    return (
        <div style={ { display: `${props.className === "open" ? 'block' : 'none'}` } }>
            <MuiAccordion className='main-root' square expanded={ expanded === 'panel1' } >
                <MuiAccordionSummary className='main-summary' aria-controls="panel1d-content" IconButtonProps={ { onClick: () => handleChange('panel1') } } id="panel1d-header" expandIcon={

                    <div className="hamburger" >
                        <div className={ `hamburger-box ${expanded === 'panel1' ? 'open' : 'close'}` }>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                }>
                    <NavLink to="/" className='logo' >
                        <img src={ `${process.env.PUBLIC_URL}/images/demivolt.svg` } alt="site-logo" />
                    </NavLink>
                </MuiAccordionSummary>
                <MuiAccordionDetails className='main-content'>
                    {
                        props.headerContent && props.headerContent.map((obj, index) => {
                            return (
                                <MuiAccordion className='sub-root' key={ index } square expanded={ subExpanded === `subpanel${index + 1}` } onChange={ handleSubChange(`subpanel${index + 1}`) } >
                                    <MuiAccordionSummary aria-controls={ `panel${index + 1}d-content` } id={ `panel${index + 1}d-header` } expandIcon={ <ArrowSvg className='icon' /> }>
                                        { obj.title }
                                    </MuiAccordionSummary>
                                    <MuiAccordionDetails>
                                        <ul className='navList'>
                                            {
                                                obj.subNav && obj.subNav.map((subNav, subNavIndex) => {
                                                    return (
                                                        <li key={ `${index}-${subNavIndex}` }><NavLink
                                                            to={ subNav.path } onClick={ () => handleChange('') } >{ subNav.name }</NavLink></li>
                                                    );

                                                })
                                            }
                                        </ul>
                                    </MuiAccordionDetails>
                                </MuiAccordion>
                            );
                        })
                    }
                </MuiAccordionDetails>
            </MuiAccordion>
        </div>
    );
}