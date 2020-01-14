import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Layout , BackTop } from 'antd';
import './App.css';




import VHeader from "./components/Header";
import VListView from "./components/ListView.js";
import VArtical from "./components/Artical";
import VUserInfo from "./components/UserInfo";


const { Header,  Content } = Layout;
function App() {
  return (
    <div className="cnode-container">
      <BackTop>
      </BackTop>
      <Layout theme="light" style={{display:"flex", height:"100%", flexDirection:"column"}}>
        <Header style={ { background: "#444444" } }>
          <VHeader />
        </Header>
        <Content style={{ background: "#e1e1e1", flexGrow:"1",minHeight:"calc(100vh - 64px)"}}>
          <Switch>
            <Route path="/artical/:id">
              <VArtical />
            </Route>
            <Route path="/user/:username">
              <VUserInfo />
            </Route>
            <Route path="/">
              <VListView />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </div>
  );
}


export default App;
