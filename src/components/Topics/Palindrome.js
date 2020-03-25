import React, {Component} from 'react'

class Palindrome extends Component {
    constructor(){
        super()
            this.state = {
                userInput: '',
                palindrome: ''
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
    render(){
        return (
            <div className="puzzleBox palindromePB">
            <h4>Palindrome</h4>
            <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
            <button className="confirmationButton" onClick={() => this.filterArray(this.state.userInput)}>Filter</button>
        <span className="resultsBox"> Palindrome: {this.state.palindrome} </span>
        </div>
        )
    }
}

export default Palindrome