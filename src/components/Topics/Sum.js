import React, {Component} from 'react'

class Sum extends Component {
    constructor(){
        super()
        this.state = {
            num1:0,
            num2:0,
            sum:null
        }
    }
    handleChange1(val){
        this.setState({num1: +val})
        console.log(val)
    }
    handleChange2(val){
        this.setState({num2: +val})
        console.log(val)
    }
    sumTheNumbers(){
        let num1 = this.state.num1
        let num2 = this.state.num2
        //stuck here, i dont know how to add them together... then assign them to sum as dumb as that sounds. 
        this.setState({sum: num1+num2})
    }
    render(){
        return(
          <div className="puzzleBox sumPB">
              <h4>Sum</h4>
              <input
               className='inputLine'
               onChange={(e) => this.handleChange1(e.target.value)}
               />
              <input
               className='inputLine'
                onChange={(e) => this.handleChange2(e.target.value)}
               />
              <button
               className='confirmationButton'
               onClick={() => this.sumTheNumbers(this.state.sum)}
               >Add em up</button>
              <span className='resultsBox'>{`Sum: ${this.state.sum}`}</span>

          </div>
        )
    }
}

export default Sum