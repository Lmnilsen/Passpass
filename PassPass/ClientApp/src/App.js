import React, { Component } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';

export default class App extends Component {
  static displayName = App.name;

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };

    this.updateLoginStatus = this.updateLoginStatus.bind(this);
  }

  updateLoginStatus = (isLoggedIn) => {
    console.log("Her" + isLoggedIn);
    this.setState({ isLoggedIn });
    const navigate = useNavigate();
    navigate('/passwords');
    // if (isLoggedIn) {
    //   return <Navigate to="/passwords" />;
    // }
  }

  render() {
    const { isLoggedIn } = this.state;

    return (
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { path, element } = route;
            return (
              <Route
                key={index}
                path={path}
                element={React.cloneElement(element, {
                  isLoggedIn,
                  updateLoginStatus: this.updateLoginStatus
                })}
              />
            );
          })}
        </Routes>
      </Layout>
    );
  }
}