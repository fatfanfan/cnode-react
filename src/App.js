import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Layout } from 'antd';
import './App.css';




import VHeader from "./components/Header";
import VListView from "./components/ListView.js";
import VFooter from "./components/Footer";
import VArtical from "./components/Artical";
import VSiderBar from "./components/SiderBar";


const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <div>
      <Layout theme="light">
        <Header style={ { background: "#444444" } }>
          <VHeader />
        </Header>
        <Content style={ { background: "#e1e1e1" } }>
          <Switch>
            <Route path="/artical/:id">
              <VArtical />
            </Route>
            <Route path="/user/:username">
              <VSiderBar />
            </Route>
            <Route path="/">

              <VListView />

            </Route>
          </Switch>
        </Content>
        <Footer>
          <VFooter />
        </Footer>
      </Layout>

    </div>
  );
}


export default App;
