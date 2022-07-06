import './Footer.scss';
import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    const appEnv = process.env.REACT_APP_ENV;
    const appVersion = process.env.REACT_APP_VER;
    return (
        <div className="app-footer card border-0 rounded-0">
          <small>Environment: { appEnv } | Version: { appVersion }</small>
        </div>
    )
  }
}
