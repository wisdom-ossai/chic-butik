import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_RC1Hs5Wy6OITUsXLbT6qcHw200cqJeRkcg';
    const onToken = (token) => {
        console.log(token)
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CHICBUTIK Limited'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Submit'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;