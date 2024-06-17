import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useState, useEffect } from 'react'


const publishableKey = ""


const Pay = () => {
    const [stripeToken, setStripeToken] = React.useState(null)
    const history = useHistory()

    const handleToken = (token) => {
        setStripeToken(token)
        console.log(token)

    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post("http://localhost:8080/api/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 2000
                })
                console.log(res.data)
                history.push('/success', { data: res.data })
            } catch (err) {
                console.log(err)
            }
        }
        stripeToken && makeRequest()
    }, [stripeToken, history])

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
(stripeToken ? "Payment Successful" : "Payment Processing")
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

    




