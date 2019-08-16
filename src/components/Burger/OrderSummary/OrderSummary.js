import React, {Component} from 'react';
import Auxi from '../../../hoc/Auxi/Auxi';
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    //this could be a functional component doesn't have to be class base component
    componentWillUpdate() {
        console.log('[OrderSummary] update')
    }
    render(){
        const ingredientSummary = Object.keys(this.props.ingredients) 
        .map(igKey => {
            return <li key={igKey}><span 
            style ={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}</li>    
        });
        
    console.log(ingredientSummary)

    return (
        <Auxi>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total Price: ${this.props.totalPrice.toFixed(2)}</p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Auxi>
    )
    }
   
}
export default OrderSummary;