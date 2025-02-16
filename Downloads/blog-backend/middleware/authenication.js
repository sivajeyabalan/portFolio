const jwt = require('jsonwebtoken');
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const authMiddleware = async (req , res , next) => {
  const authHeader = req.headers.authorization;
  if ( !authHeader ) {
    return res.status(401).json({message : 'Token is required'});
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token , process.env.JWT_SECRET); // Verify the token
    const user = await prisma.user.findUnique({ where : { id : decoded.id } });
    if ( !user ) {
      return res.status(404).json({message : 'User not found'});
    }
    req.user = user;
    next();
  }
  catch (error) {
    res.status(500).json({message : error.message});
  }
};

module.exports = authMiddleware;  // Export the middleware