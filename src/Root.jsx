import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './shared/components/errorBoundary/errorBoundary';

import App from './App';
import WithErrorHandler from './hoc/withErrorHandler';

const Root = () => {
    return <BrowserRouter>
        <ErrorBoundary>
            <WithErrorHandler>
                <App />
            </WithErrorHandler>
        </ErrorBoundary>
    </BrowserRouter>;
};

export default Root;