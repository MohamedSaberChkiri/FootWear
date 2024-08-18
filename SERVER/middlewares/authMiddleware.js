const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401); // If no token, respond with 401 Unauthorized

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // If token is invalid, respond with 403 Forbidden

    req.user = user; // Attach the user to the req object
    next(); // Pass control to the next middleware or route handler
  });
}

module.exports = { authenticateToken };
