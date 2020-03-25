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
    filterPokemon(value){
        let pokemon = this.state.pokemon
        let filteredPokemon = []
        for(let key in pokemon){
            // console.log(key)
            if(pokemon.hasOwnProperty(value)){
                filteredPokemon.push(pokemon[key])
                console.log(pokemon[key])
            }
        }
        this.setState({filteredPokemon: filteredPokemon})
    }
    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
        <span className="puzzleText"> Original: {JSON.stringify(this.state.pokemon,null ,10)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.filterPokemon(this.state.userInput)}>Filter</button>
        <span className="resultsBox filterObjectRB"> Filtered: {JSON.stringify(this.state.filteredPokemon, null, 10)}</span>
            </div>
        )
    }
}

export default FilterObject