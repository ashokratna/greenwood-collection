import React from 'react';
import SiteLoader from '../../../shared/components/loader/siteLoader';
import { API_CONFIG } from '../../../shared/constants/api';
import httpService from '../../../shared/services/http.services';
import HomeComponent from '../component/home';
import '../component/homeStyle.css';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            content: null
        };
    }

    componentDidMount = () => {
        this.getHomePageContent();
        window.scrollTo({ behavior: 'smooth', top: 0 });
    };

    /**
     * getHomePageContent method calls home page api
     * it sets data and loading false
     */
    getHomePageContent = async () => {
        try {
            const content = await httpService.get(API_CONFIG.path.home);
            if (content) {
                this.setState({
                    isLoading: false,
                    content: content.acf
                });
            }
        } catch (error) {
            console.log(error, 'errro');
        }
    };
    render() {
        return (<>
           <HomeComponent content={null} />
        </>);
    }
}

export default Home;