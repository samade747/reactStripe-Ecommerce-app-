import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const publishableKey = ""


const Pay = () => {


    const handleToken = (token) => {
        console.log(token)

    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#f5f5f5'
            }}
        
        >

<StripeCheckout
    token={handleToken}
    stripeKey={publishableKey}
    amount={priceForStripe}
    name="Ecommerce"
    currency="USD"
    email={email}
    shippingAddress
    billingAddress
    allowRememberMe
    zipCode
    panelLabel="Pay Now"
    image="https://stripe.com/img/documentation/checkout/marketplace.png"
    description="Ecommerce"
    > 
    <button 
        style={{
            border: 'none',
            width: '100%',
            borderRadius: '5px',
            padding: '20px',
            backgroundColor: 'black',
            color: 'white',
            fontWeight: '600',
            fontSize: '1.2rem'
        }}
    >
        Pay Now
    </button>
    
    
    </StripeCheckout>

    

        </div>
        
    )

}

export default Pay

    




