import React, {Component} from 'react'

class FilterObject extends Component{
    constructor(){
        super()
        this.state = {
            pokemon: [
                {
                    name: 'Pikachu',
                    big: false,
                    color: 'yellow',
                },
                 {
                name: 'Snorlax',
                big: true,
                location: 'walkways'
                 },
                 {
                     name: 'Charizard',
                     big: true,
                     ability: 'Fire Blast!'
                 }
            ],
            userInput: "",
            filteredPokemon: []
        }
    }
    handleChange(val){
        this.setState({userInput: val})
    }
    filterPokemon(prop){
        
    }
    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
        <span className="puzzleText"> Original: {JSON.stringify(this.state.pokemon,null ,10)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClock={() => this.filterPokemon(this.state.userInput)}>Filter</button>
        <span className="resultsBox filterObjectRB"> Filtered: {JSON.stringify(this.state.filteredPokemon, null, 10)}</span>
            </div>
        )
    }
}

export default FilterObject