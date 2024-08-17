const express = require("express");
const router = express.Router();
const Product = require("../database/models/product.model");
const User = require("../database/models/user.model");
const { authenticateToken } = require("../middlewares/authMiddleware");

router.get("/getUserCart/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await User.findOne({ username: userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const userItems = user.cart.map((item) => ({
      productId: item.productId,
      quantity: item.quantity,
    }));

    // Retrieve products based on product IDs
    const products = await Product.find({
      id: { $in: userItems.map((item) => item.productId) },
    });

    // Map over products and update quantities based on user's cart
    const updatedProducts = products.map((product) => {
      const userCartItem = userItems.find(
        (item) => item.productId === product.id
      );
      if (userCartItem) {
        // If the product is found in the user's cart, update its quantity
        return {
          ...product.toObject(), // Convert Mongoose document to plain JavaScript object
          quantity: userCartItem.quantity,
        };
      } else {
        // If the product is not found in the user's cart, keep the product as is
        return product.toObject();
      }
    });

    res.json(updatedProducts);
  } catch (error) {
    console.error("Error getting products:", error);
    res.status(500).json({ error: "Error getting products" });
  }
});

router.post(
  "/addToCart/:userId/:productId",
  authenticateToken,
  async (req, res) => {
    const userId = req.params.userId;
    const productId = req.params.productId;
    const { quantity } = req.body;

    try {
      const user = await User.findOne({ username: userId });

      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }

      // Check if the item is already in the user's cart
      const index = user.cart.findIndex((item) => item.productId === productId);

      if (index !== -1) {
        user.cart[index].quantity += quantity;
        await user.save();
        return res
          .status(200)
          .json({ success: true, message: "Item added to cart successfully" });
      }

      user.cart.push({ productId, quantity });
      await user.save();

      return res
        .status(200)
        .json({ success: true, message: "Item added to cart successfully" });
    } catch (error) {
      console.error("Error adding item to cart:", error);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  }
);

router.delete("/removeFromCart/:userId/:productId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const productId = req.params.productId;

    const user = await User.findOne({ username: userId });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Find the index of the item in the user's cart
    const index = user.cart.findIndex((item) => item.productId === productId);

    if (index === -1) {
      return res
        .status(404)
        .json({ success: false, message: "Item not found in the user's cart" });
    }

    // Remove the item from the user's cart
    user.cart.splice(index, 1);
    await user.save(); // Save changes to the database

    return res
      .status(200)
      .json({ success: true, message: "Item removed from cart successfully" });
  } catch (error) {
    console.error("Error removing item from cart:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});

router.patch("/updateQuantity/:userId/:productId", async (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.productId;
  const { quantity } = req.body;

  try {
    const user = await User.findOne({ username: userId });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    const index = user.cart.findIndex((item) => item.productId === productId);
    if (index === -1) {
      return res
        .status(404)
        .json({ success: false, message: "Item not found in the user's cart" });
    }
    user.cart[index].quantity = quantity;
    await user.save();
    return res
      .status(200)
      .json({ success: true, message: "Cart updated successfully" });
  } catch (error) {
    console.error("Error updating cart:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
