import React from 'react';
import { withRouter } from 'react-router-dom';

const NoData = props => {
    return (

        <div className='noData-box'>
            <div className="container">
                <div className="row-wrap">
                    <div className="box-12">
                        <div className="inner-box text-center">
                            <h2 >{ props.text }</h2>
                            <div className='button button-solid' onClick={ () => props.history.goBack() }>Go Back</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(NoData);