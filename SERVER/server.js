require('dotenv').config()

const express = require("express")
const cors = require('cors')

const app  = express()

app.use(express.json())
app.use(cors({
    origin : 'http://localhost:3000'
}))

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)


app.post("/create-payment-session", async (req, res)=>{

    try{

       const session = await stripe.checkout.sessions.create({

            payment_method_types : ['card'],
            mode : 'payment',

            line_items : req.body.cartData.map(item =>{
                return {
                    price_data : {
                        currency : 'usd',
                        product_data :{
                            name : item.name
                        },
                        unit_amount : item.price * 100
                    },
                    quantity : item.quantity
                }
            }),
            success_url : `${process.env.CLIENT_URL}`,
            cancel_url : `${process.env.CLIENT_URL}`,



        })



        res.json({url : session.url})
    }catch(e){
        res.status(500).json({error : e.message})
    }


    
})

app.listen(5500)