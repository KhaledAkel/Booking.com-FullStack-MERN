import { Router, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import "dotenv/config";
import { User } from '../models';

export const signUp = async (req: Request, res: Response): Promise<void> => {
    const { email, password, first_name, last_name } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(400).json({ message: 'User already exists' });
            return;
        }

        // Hashing the password
        const passwordHash = bcrypt.hashSync(password, 10);

        // Creating a new user
        const user = new User({ email, password: passwordHash, first_name, last_name });
        await user.save();

        // Creating a token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY as string, { expiresIn: '1d' });

        // Setting the token as a cookie
        res.cookie('auth_token', token, { httpOnly: true, 
            secure: true,  });
        res.status(201).json({ message: 'User created successfully' });

    } catch (error) {
        const errorMessage = (error instanceof Error) ? error.message : 'Unknown error occurred';
        res.status(500).json({ message: errorMessage });
    }
}

export const signIn = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    try {
        const user = await User
            .findOne({ email })
            .select('+password')
            .exec();

        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }

          // Creating a token
          const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY as string, { expiresIn: '1d' });

          // Setting the token as a cookie
          // Setting the token as a cookie
         res.cookie('auth_token', token, { httpOnly: true, 
            secure: true,  });
          res.status(201).json({ message: 'User signed in successfully' });

    } catch (error) {
        const errorMessage = (error instanceof Error) ? error.message : 'Unknown error occurred';
        res.status(500).json({ message: errorMessage });
    }
}
