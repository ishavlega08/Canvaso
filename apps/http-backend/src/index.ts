import express from "express";
import jwt from "jsonwebtoken";
import { PORT, JWT_SECRET } from "@repo/backend-common/config";
import { CustomRequest, isAuthenticated } from "./middleware";
import { CreateRoomSchema, CreateUserSchema, SigninSchema } from "@repo/common/types";
import { client } from "@repo/db/client";
import bcrypt from "bcrypt";

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
    try {
        const parsedData = CreateUserSchema.safeParse(req.body);
        if(!parsedData.success) {
            res.status(403).json({
                message: "Incorrect inputs"
            });
            return;
        }

        const hashedPassword = await bcrypt.hash(parsedData.data.password, 10);

        const user = await client.user.create({
            data: {
                username: parsedData.data.username,
                password: hashedPassword
            }
        });

        res.status(200).json({
            userId: user.id
        });
    } catch (error) {
        res.status(411).json({
            message: "User already exists with this email"
        });
    }
})

app.post("/signin", async (req, res) => {
    try {
        const parsedData = SigninSchema.safeParse(req.body);
        if(!parsedData.success) {
            res.status(403).json({
                message: "Incorrect inputs"
            });
            return;
        }

        const user = await client.user.findFirst({
            where: {
                username: parsedData.data.username
            }
        });

        if(!user) {
            res.status(403).json({
                message: "Not signed up"
            });
            return;
        }

        const matchPassword = await bcrypt.compare(parsedData.data.password, user.password);

        if(!matchPassword) {
            res.status(403).json({
                message: "Password do not match"
            });
            return;
        }

        const token = jwt.sign({
            userId: user.id
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

app.post("/room", isAuthenticated, async (req: CustomRequest, res) => {
    try {
        const parsedData = CreateRoomSchema.safeParse(req.body);
        if(!parsedData.success) {
            res.status(200).json({
                message: "Incorrect inputs"
            });
            return;
        }

        const userId = req.userId;
        if(!userId) {
            res.status(403).json({
                message: "Not authorized"
            });
            return;
        }

        const room = await client.room.create({
            data: {
                slug: parsedData.data.slug,
                adminId: userId
            }
        });

        res.status(200).json({
            message: "Room created successfully",
            roomId: room.id
        });
    } catch (error) {
        res.status(411).json({
            message: "Room with this name already exists"
        });
    }
})

app.get("/chats/:roomId", isAuthenticated, async (req, res) => {
    try {
        const roomId = Number(req.params.roomId);
        if(!roomId) {
            res.status(403).json({
                message: "Invalid room id"
            });
            return;
        }

        const messages = await client.chat.findMany({
            where: {
                roomId: roomId,
            },
            orderBy: {
                id: "desc"
            }
        });

        res.status(200).json({
            messages
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        });
    }
})

app.get("/room/:slug", async (req, res) => {
    try {
        const slug = req.params.slug;
        if(!slug) {
            res.status(403).json({
                message: "Invalid slug"
            });
            return;
        }

        const room = await client.room.findFirst({
            where: {
                slug: slug
            }
        });

        res.status(200).json({
            room
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        });
    }
})

app.listen(PORT, () => {
    console.log(`App is listening to port ${PORT}`);
});