import React, { Component } from 'react';
import {Link} from 'react-router';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedCategory:'',
      search: '',
      data:[]
    }

    //BINDINGS
    this.getCategory = this.getCategory.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);

  }

  //FUNCTIONS

  handleCategoryChange(e){
    this.setState({
      selectedCategory: e.target.value
    });
  }

 getCategory(){
    return axios.get(`http://swapi.co/api/${this.state.selectedCategory}/?search=${this.state.search}`)
      .then((result)=>{
        this.setState({
          data:result.data.results
        });
      })
      .catch((error)=>{
        console.log(error);
      })
  }

  handleSubmit(e){
    e.preventDefault();
    this.getCategory();
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
  
    return (
      <div className="App">
            
            {React.cloneElement(this.props.children, { 
              handleCategoryChange:this.handleCategoryChange,
              getCategory:this.getCategory,
              handleSubmit:this.handleSubmit,
              handleChange:this.handleChange,
              data:this.state.data,
              selectedCategory:this.state.selectedCategory,
              search:this.state.search
            })}   
      </div>
    );
  }
}

export default App;