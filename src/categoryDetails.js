import React, {Component} from 'react';
import {Link} from 'react-router';

class categoryDetails extends Component {
    render() {

        //FILTERING DATA TO FIND MATCHING ID AND CATEGORY AND THEN RENDERING PARAGRAPH TEXT
        let newList = this.props.data
        
        .filter((object)=>{

            if (parseInt(object.url.replace(/\D/gi,'')) === parseInt(this.props.params.id)) {
                return object 
            }
        
        }).map((object)=>{
                        
            if (this.props.selectedCategory === 'starships') {
                return <div className="starships-content">
                            <p>A long time ago in a galaxy far, far away....</p>
                            <p>There was a starship by the name of {object.name} with a cargo capacity of {object.cargo_capacity/1000} tons.</p>
                            <p>The manufacturer was {object.manufacturer}.</p>
                            <p>It had {object.crew} crew member(s).</p>
                            <p>It had {object.passengers} passengers and appeared in {object.films.length} film(s).</p>
                        </div>
            } else if (this.props.selectedCategory === 'people') {
                return <div className="people-content">
                            <p>A long time ago in a galaxy far, far away....</p>
                            <p>There lived {object.name} born in {object.birth_year} with {object.eye_color} eyes and {object.hair_color} hair.</p>
                            <p>{object.name} had {object.starships.length} starships and {object.vehicles.length} vehicles.</p>
                            <p>{object.name} was also in {object.films.length} film(s).</p>
                    </div>
            } else {
                return <div className="planets-content">
                            <p>A long time ago in a galaxy far, far away....</p>
                            <p>There was a planet by the name of {object.name} with a population of {object.population} people.</p>
                            <p>The climate was {object.climate} and it had an orbital period of {object.orbital_period} days.</p>
                            <p>The terrain included {object.terrain}.</p>
                            <p>{object.name} was also in {object.films.length} film(s).</p>
                        </div>
            }
    });
               

        return (
            <div>
                <div id="titles">
                    <div id="titlecontent">
                    {newList}
                    </div>
                </div>
                <Link to="/"><button className="waves-effect waves-light btn-large back-btn">Back</button></Link>
            </div>
        )
    }
}

export default categoryDetails;