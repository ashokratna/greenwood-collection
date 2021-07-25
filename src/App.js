// @ts-nocheck
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import { Home } from "./routes";

import { Provider as HeaderProvider } from "./shared/context/Header-Context";
import { Provider as HeaderFooterAssetsProvider } from "./shared/context/Assets-Context";
import Layout from "./hoc/layout/layout";

class App extends React.PureComponent {
  render() {
    return (
      <div className='App'>
        <HeaderProvider>
          <HeaderFooterAssetsProvider>
            <Layout>
              <Switch>
                <Route path='/' component={Home} exact />
                <Redirect from='' to='/' />
              </Switch>
            </Layout>
          </HeaderFooterAssetsProvider>
        </HeaderProvider>
      </div>
    );
  }
}

export default App;
