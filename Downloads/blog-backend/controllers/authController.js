const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
exports.register = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Optional: Validate input fields (e.g., check email format, password strength)
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Optional: Check if a user with the same email already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        passwordHash: hashedPassword, // Using 'passwordHash' as per your schema
      },
    });
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ message: `Internal Server Error: ${error.message}` });
  }
};



exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      
  
      return res.status(400).json({ message: "Invalid email or password"  , "sjb": "sjb"});
    }

    // Ensure passwordHash exists before comparing
    if (!user.passwordHash) {
      return res.status(500).json({ message: "Server error: User password not found" });
    }

    // Compare password with stored hash
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
  
      return res.status(400).json({ message: "Invalid email or password"  , "error" : "compare"}  );
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: `Internal Server Error: ${error.message}` });
  }
};


exports.logout = async (req, res) => {
  res.json({message : 'User logged out'});
}