import { NextFunction, Request as ExpressRequest, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";

export interface CustomRequest extends ExpressRequest {
    userId?: string;
}

export const isAuthenticated = (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const token = req.headers["authorization"];
        if(!token) {
            res.status(403).json({
                message: "User is not authenticated"
            });
            return;
        }

        const decoded = jwt.verify(token, JWT_SECRET);

        if(typeof decoded === "string") {
            return;
        }

        if(decoded) {
            req.userId = decoded.userId;
            next();
        } else {
            res.status(403).json({
                message: "Unauthorized"
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error in auth middleware"
        });
    }
}