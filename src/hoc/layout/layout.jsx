import React from 'react';
import Header from '../../shared/components/header/header';
import Footer from '../../shared/components/footer/footer';
import { Context as HeaderFooterContext } from '../../shared/context/Assets-Context';

import './layout.css';
class Layout extends React.PureComponent {

    render() {
        const cookieBox = this.context && this.context.state.headerFooterContent && this.context.state.headerFooterContent.cookie_box_content;
        return (
            <div>
                <Header />
                <div className="main-wrapper">
                    { this.props.children }
                </div>
                {/* {cookieBox && <CookieBox cookieBox={cookieBox} />}  */}
                <Footer />
            </div>
        );
    }
}

Layout.contextType = HeaderFooterContext

export default Layout;