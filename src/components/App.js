import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import Overview from './overview/Overview';

import { Provider } from 'react-redux';
import store from '../store';

import '../assets/css/sb-admin-2.css';
import '../assets/vendor/fontawesome-free/css/all.min.css';

import $ from 'jquery';
import jQuery from 'jquery';


// require('../assets/vendor/bootstrap/js/bootstrap.bundle.min.js');
// require('../assets/vendor/jquery-easing/jquery.easing.min.js');
// require('../assets/js/sb-admin-2.min.js');

class App extends Component {
    render(){
        return (
            <Provider store={store}>
                <Fragment>
                    <Header />
                    <div className="container">
                        <Overview />
                    </div>
                </Fragment>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))