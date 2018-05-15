import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { connect } from 'react-redux'
import store from '../store';
import Posts from './Posts';
import PostForm from './PostForm';

class App extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Provider store={store}>
                <div>
                    <h1>Hello from React</h1>
                    <PostForm />
                    <Posts />
                </div>
            </Provider>
        )
    }
}

export default App;