require('dotenv').config()
const {  ServerApiVersion } = require('mongodb');
const express = require("express")
const cors = require('cors');
const bcrypt = require('bcryptjs')
const User = require('./database/models/user.model')
const Product = require('./database/models/product.model')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');


const app  = express()

app.use(express.json())
app.use(cors({
    origin : 'https://shoes-store-two.vercel.app',
   
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
  
     
   
  
      res.json({ name : user.username, items  : user.cart});
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
  
  app.use(bodyParser.json());

  app.post('/api/addToCart/:userId/:productId', async (req, res) => {
    const userId = req.params.userId;
    const productId = req.params.productId;
    const { quantity } = req.body;
  
    try {
     
      const user = await User.findOne({ username: userId });
  
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
  
      // Add item to user's cart
      user.cart.push({ productId, quantity });
      await user.save();
  
      return res.status(200).json({ success: true, message: 'Item added to cart successfully' });
    } catch (error) {
      console.error('Error adding item to cart:', error);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });

  app.delete('/api/removeFromCart/:userId/:productId', async (req, res) => {
    try {
      const userId = req.params.userId;
      const productId = req.params.productId;
  
      // Find the user by userId
      const user = await User.findOne({ username: userId });
  
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
  
      // Find the index of the item in the user's cart
      const index = user.cart.findIndex(item => item.productId === productId);
  
      if (index === -1) {
        return res.status(404).json({ success: false, message: 'Item not found in the user\'s cart' });
      }
  
      // Remove the item from the user's cart
      user.cart.splice(index, 1);
      await user.save(); // Save changes to the database
  
      return res.status(200).json({ success: true, message: 'Item removed from cart successfully' });
    } catch (error) {
      console.error('Error removing item from cart:', error);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });
  