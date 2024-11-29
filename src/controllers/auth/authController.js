const db = require("../../models");
const User = db.users;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const ApiResponse = require("../../utils/apiResponse");

// User registration
exports.register = async (req, res) => {
    try{
        const { username, email, name, address, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
          return res.status(400).json({ error: 'Username already exists' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = await User.create({
          username,
          email,
          name,
          address,
          password: hashedPassword,
        });

        const response = new ApiResponse(201, 'User registered successfully', { newUser });

        return response.send(res);
    }
    catch(err){
        console.error(err);
        res.status(500).json({ err: 'Registration failed' });
    }
};


// User login

exports.login = async (req, res) => {
    try{
        const { username, password } = req.body;

         // Find user by username
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    // Check if password is correct
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    // Create a token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'User logged in successfully', token });
    }
    catch(err){
        console.error(err);
        res.status(500).json({ err: 'Login failed' });
    }
};


