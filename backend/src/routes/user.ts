import { Router } from 'express';
import { signUp, signIn } from '../controllers';
import { verifyToken } from '../middleware';

const userRouter = Router();

userRouter.post('/sign-up', signUp);
userRouter.post('/sign-in', signIn);
userRouter.get('/validate-token', verifyToken, (req, res) => { 
    res.status(200).json({ message: 'Valid token' });
}
);

export default userRouter;
