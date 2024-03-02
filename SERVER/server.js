require('dotenv').config()
const {  ServerApiVersion } = require('mongodb');
const express = require("express")
const cors = require('cors');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('./database/user.model')
const Product = require('./database/product.model')
const mongoose = require('mongoose')


const app  = express()

app.use(express.json())
app.use(cors({
    origin : 'https://shoes-store-two.vercel.app',
    origin : 'http://localhost:3000'
   
}))

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)
passwordDB = process.env.DATABASE_PASSWORD





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
            success_url : `${process.env.CLIENT_URL}/success`,
            cancel_url : `${process.env.CLIENT_URL}/cart`,



        })



        res.json({url : session.url})
    }catch(e){
        res.status(500).json({error : e.message})
    }


    
})


const uri = `mongodb+srv://FootWear:${passwordDB}@footwear.dhb4soj.mongodb.net/FootWearProducts?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  })
    .then(() => console.log('Connected to MongoDB successfully!'))
    .catch(error => console.error('Error connecting to MongoDB:', error));
  
  // Start the server after Mongoose connection
  app.listen(5500, () => {
    console.log("Server is running on port 5500");
  });


const secret = process.env.JWT_SECRET; // Store JWT secret in a secure environment variable


app.post('/user/register', async (req, res) => {
    const { username, email, password } = req.body;
  
    try {

        const existingUser = await User.findOne({ email });
        if (existingUser) {
        return res.status(400).json({ message: 'Username or email already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });
  
      // Save the user to the database
      await newUser.save();
  
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  app.post('/user/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // Compare passwords
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '30m' });
  
      res.json({ token, user: { username: user.username, email: user.email } });
    } catch (error) {
      console.error('Error logging in user:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  







app.get('/getallproducts', async (req, res) => {
    try {
    
      const productsList = await Product.find({})
      res.json(productsList);
    } catch (error) {
      console.error("Error getting products:", error);
      res.status(500).json({ error: 'Error getting products' });
    }
  });
  