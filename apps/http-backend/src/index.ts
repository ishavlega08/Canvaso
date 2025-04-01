import express from "express";
import jwt from "jsonwebtoken";
import { PORT, JWT_SECRET } from "@repo/backend-common/config";
import { isAuthenticated } from "./middleware";

const app = express();

app.use(express.json());

app.post("/signup", (req, res) => {
    try {
        res.status(200).json({
            userId: 1
        })
    } catch (error) {
        res.status(411).json({
            message: "User already exists with this email"
        });
    }
})

app.post("/signin", (req, res) => {
    try {
        const userId = 1;

        const token = jwt.sign({
            userId
        }, JWT_SECRET);

        res.status(200).json({
            message: "Signed in successfully",
            token: token
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        });
    }
})

app.post("/room", isAuthenticated, (req, res) => {
    try {
        
    } catch (error) {
        res.status(411).json({
            message: "Room with this name already exists"
        });
    }
})

app.get("/chats/:roomId", (req, res) => {
    try {
        res.status(200).json({
            chats: ""
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        });
    }
})

app.get("/room/:slug", (req, res) => {
    try {
        res.status(200).json({
            roomId: 1
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        });
    }
})

app.listen(PORT, () => {
    console.log(`App is listening to port ${PORT}`);
});