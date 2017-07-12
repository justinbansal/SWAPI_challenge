import React, { Component } from 'react';
import {Link} from 'react-router';

class Main extends Component {
    render(){

        //PRESENTING THE CATEGORIES AS A LIST 
        let listArray = this.props.data.map((object)=>{
            return (
                <div className={`${this.props.selectedCategory === 'starships'?'starships': this.props.selectedCategory === 'planets' ? 'planets'  :  'people'} object col s12 m6 l4`}>
                    <li><Link to={`/details/${this.props.selectedCategory}/`+object.url.replace(/\D/gi,'')}>{object.name}</Link></li>
                </div>
            )
        })

        return(
            <div className="container">
                <img className="logo responsive-img" src="../images/logo.png" alt="Star Wars Logo"/>
                <h4>Search by:</h4>
                <form className="container" onSubmit={this.props.handleSubmit}>
                    <div className="row">
                        <p className="radio col s12 l4">
                            <input type="radio" value="people" id="people" checked={this.props.selectedCategory === 'people'} onChange={this.props.handleCategoryChange}/>
                            <label htmlFor="people">People</label>
                        </p>
                        <p className="radio col s12 l4">
                            <input type="radio" id="planets" value="planets" checked={this.props.selectedCategory === 'planets'} onChange={this.props.handleCategoryChange}/>
                            <label htmlFor="planets">Planets</label>
                        </p>
                        <p className="radio col s12 l4">
                            <input type="radio" id="starships" value="starships" checked={this.props.selectedCategory === 'starships'} onChange={this.props.handleCategoryChange}/>
                            <label htmlFor="starships">Starships</label>
                        </p>
                        </div>
                    <input type="text" className="search-bar" name="search" placeholder="Search the Universe" onChange = {this.props.handleChange} value={this.props.search}/>
                    <button className="btn yellow waves-effect waves-light" type="submit" name="action">Go!
                    <i className="material-icons right">send</i>
                    </button>
                </form>
                
                <ul className="row">
                {listArray}
                </ul>
                
            </div>
        )
    }
}

export default Main;