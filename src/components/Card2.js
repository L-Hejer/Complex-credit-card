import React, { Component } from 'react'

class Card2 extends Component {
    state = {
        name: '',
        number: '',
        date:'',
    }


    render() {
        return (
            <div>
             <h1>CREDIT CARD</h1> 
                <div className='card-informations' >
                 <p>card number</p>
                 <p>5489</p>
                 <p>card owner name</p>
                </div>  
            </div>
        )
    }
};

export default Card2;
