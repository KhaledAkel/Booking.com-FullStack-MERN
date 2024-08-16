import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import "dotenv/config";

declare global {
    namespace Express {
      interface Request {
        userId?: string; // Adjust the type based on what your decoded token contains
      }
    }
  }

const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
    // Get the token from cookies
    const token = req.cookies['auth_token'];
    

    if (!token) {
        // No token found, send an unauthorized response
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string);
        // Attach the user information to req.user
        req.userId = ( decoded as JwtPayload).userId as string;
        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        // Invalid token, send an unauthorized response
        res.status(401).json({ message: 'Unauthorized' });
    }
};

export {verifyToken};
