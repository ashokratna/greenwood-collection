import React from 'react';
import { axiosInstance } from '../shared/services/http.services';

let resInterceptor;

/**
 * WithErrorHandler - handle notification display on Success/Error
 */
class WithErrorHandler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            type: ''
        };
    }

    /**
     * add response interceptor before component gets mounted
     * check if response data contains isError = true, if yes, show an error message
     * if response gives a non-200 error code, show error from error data
     * if response contains a message to show, show success notification
     */
    componentDidMount = () => {
        resInterceptor = axiosInstance.interceptors.response.use(res => {

            if (res.data && res.data.isError) {
                this.setState({ message: res.data.message, type: 'error' });
                throw new Error(res.data.message);
            }
            // if (res.data.message !== 'OK') {
            // 	this.setState({ message: res.data.message, type: 'success' });
            // }
            return res;
        }, error => {
            if (error.response && error.response.data && error.response.data.message) {
                this.setState({ message: error.response.data.message, type: 'error' });
            }
            throw error;
        });
    };

    /**
     * eject response interceptor on when component is about to unmount
     */
    componentWillUnmount = () => axiosInstance.interceptors.response.eject(resInterceptor);

    /**
     * set message and message-type as blank after 2 seconds
     */
    closeNotification = () => this.setState({ message: '', type: '' });
    render() {
        return (
            <React.Fragment>
                { this.props.children }
            </React.Fragment>
        );
    }
}
export default WithErrorHandler;
