const User = require('../models/User');
const bcrypt = require('bcryptjs');

const registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
    return res.status(400).json({
        message: 'All fields are required'
    });
}
    
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    if (!passwordRegex.test(password)) {
    return res.status(400).json({
        message: 'Password must contain at least 8 characters, one uppercase letter, one number and one special character'
    });
}
    const hashedPassword = await bcrypt.hash(password, 12);
    
    if (!['student', 'educator'].includes(role)) {
    return res.status(400).json({
        message: 'Invalid role'
    });
}
    const normalizedEmail = email.trim().toLowerCase(); //lowercases to avoid duplicates w beysheel whitespaces
    const existingUser = await User.findOne({ email });
    if (existingUser) {
    return res.status(409).json({
        message: 'User already exists'
    });
}

};

