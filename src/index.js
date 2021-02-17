import React from 'react';
import ReactDOM from 'react-dom';
import { Portafolio } from './Portafolio';
import { Provider } from 'react-redux';
import Store from './Redux/Store';

ReactDOM.render(
    <Provider store={Store}>
        <Portafolio />
    </Provider>,
    document.getElementById('root')
);

