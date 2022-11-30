import React from 'react';
import './App.css';

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.myclick = this.myclick.bind(this);
    }


    myclick () {
        document.querySelector('.wrapper').style.backgroundColor = "#F9F5A6FF";
    }


    render() {
        return(
            <button onClick={this.myclick} className='clicker'>Change Design</button>
        )
    }
}
export default Button;
