import React from 'react';

class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null
        };
    }

    componentDidCatch(error) {
        this.setState({ error: error });
    }
    render() {
        if (this.state.error) {
            this.logError();
        }
        return <>
            {
                this.state.error ? <p>
                    Application has some errors
                </p> : this.props.children
            }
        </>;
    }

    logError() {
        console.error(this.state.error);
    }
}

export default ErrorBoundary;