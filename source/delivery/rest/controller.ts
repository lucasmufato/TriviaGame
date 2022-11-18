
import { Request, Response, NextFunction } from 'express';

export const getPosts = async (req: Request, res: Response, next: NextFunction) => {
    const posts = "hello world"
    return res.status(200).json({
        message: posts
    });
};

export default { getPosts };