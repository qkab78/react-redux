import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            title:'',
            body:''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
        const post = {
            title:this.state.title,
            body:this.state.body,
        }
        this.props.createPost(post);
    }
    render(){
        return (
            <div>
                <h1>PostForm</h1>
                <hr />
                <form onSubmit={this.onSubmit}>
                    <label>Title: </label><br/>
                    <input type="text" name="title" placeholder="title" onChange={this.onChange} /><br/>
                    <label>Body: </label><br/>
                    <textarea type="text" name="body" placeholder="body" onChange={this.onChange}></textarea><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

PostForm.propTypes = {
    createPost:PropTypes.func.isRequired
};
export default connect(null,{ createPost })(PostForm);