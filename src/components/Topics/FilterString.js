import React, {Component} from 'react'

class FilterString extends Component{
    constructor(){
        super()
        this.state = {
            unFilteredArray: ['wood', 'work', 'pokemon', 'inception', 'hollow', 'knight', 'dota2'],
            userInput: '',
            filteredArray: []
        }
    }
    handleChange(val){
        this.setState({userInput: val})
    }
    filterArray(userInput){
        let unFilteredArray = this.state.unFilteredArray
        let filteredArray = []
        for( let i = 0; i < unFilteredArray.length; i ++){
            if(unFilteredArray[i].includes(userInput)){
            filteredArray.push(unFilteredArray[i])
            }
        }
        this.setState({ filteredArray: filteredArray})
    }
    //start on step 5
    render (){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter String</h4>
        <span className="puzzleText"> Original: {JSON.stringify(this.state.unFilteredArray,null ,10)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.filterArray(this.state.userInput)}>Filter</button>
        <span className="resultsBox filterObjectRB"> Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterString