import React, { Component } from 'react';
import './bank.css';

class Bank extends Component {
    state = {
        valueState: '',
        sum: 0
    }
    handleChange = (event) => {
        this.setState({ valueState: event.target.value });
    }
    plus = () => {
        console.log(this.state.valueState)
        this.setState({ sum: this.state.sum * 1 + this.state.valueState * 1 });
        setTimeout(() => this.setState({ valueState: '' }), 500)
    }
    min = () => {
        this.setState({ sum: this.state.sum * 1 - this.state.valueState * 1 }, () => this.setState({ valueState: '' }));
    }
    render() {
        return (
            <section>
                <h1 id="anima">Banana Bank</h1>
                <h2>BUDGET:</h2>
                <h1 id="show" >{this.state.sum === 0 ? 0 : this.state.sum}$</h1>
                <form action="" id="form">
                    <input id="eingabe" type="Number" value={this.state.valueState} onChange={this.handleChange} placeholder="summe" /><br></br>
                </form>
                <br></br>
                <div>
                    <button id="xbutton" onClick={this.plus} >+</button>
                    <button id="ybutton" onClick={this.min} >-</button>
                </div>
            </section >
        );
    }
}

export default Bank;

