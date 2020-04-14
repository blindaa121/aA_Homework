import React from "react";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        // your code here
        this.state = { // object with 3 keys, result, num1 and num2 (user input)
            result: 0,
            num1: "",
            num2: ""
        }
        this.setNum1 = this.setNum1.bind(this);
        this.setNum2 = this.setNum2.bind(this);
        this.addNums = this.addNums.bind(this);
        this.subtractNums = this.subtractNums.bind(this);
        this.multiplyNums = this.multiplyNums.bind(this);
        this.divideNums = this.divideNums.bind(this);
        this.clearNums = this.clearNums.bind(this);
    }

    // your code here
    setNum1(event) {
        const num1 = event.target.value ? parseInt(event.target.value) : "";
        this.setState({ num1 });
    }
    setNum2(event) {
        const num2 = event.target.value ? parseInt(event.target.value) : "";
        this.setState({ num2 });
    }

    addNums(event) {
        event.preventDefault();
        const result = this.state.num1 + this.state.num2;
        this.setState({ result });
    }

    subtractNums(event) {
        event.preventDefault();
        const result = this.state.num1 - this.state.num2;
        this.setState({ result });
    }

    multiplyNums(event) {
        event.preventDefault();
        const result = this.state.num1 * this.state.num2;
        this.setState({ result });
    }   

    divideNums(event) {
        event.preventDefault();
        const result = this.state.num1 / this.state.num2;
        this.setState({ result });
    }

    clearNums(event) {
        event.preventDefault();
        this.setState({ num1: "", num2: "", result: 0 });
    }

    render() {
        const { num1, num2, result } = this.state;
        return (
            <div> 
                <input onChange={this.setNum1} value={num1}/>
                <input onChange={this.setNum2} value={num2}/>
                <br />
                <button onClick={this.addNums}>+</button>
                <button onClick={this.subtractNums}>-</button>
                <button onClick={this.multiplyNums}>*</button>
                <button onClick={this.divideNums}>/</button>
                <button onClick={this.clearNums}>Clear</button>
                <h1>{result}</h1> 
            </div>
        );
    }
}

export default Calculator;