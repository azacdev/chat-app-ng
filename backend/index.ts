import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { app, server } from "./socket/socket";
import connectToDB from "./db/connect-to-db";
import authRoutes from "./routes/auth-routes";
import messageRoutes from "./routes/message-routes";
import usersRoutes from "./routes/user-routes";

const PORT = process.env.PORT || 5000;

dotenv.config();

// Middlewares
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", usersRoutes);

server.listen(PORT, () => {
  connectToDB();
  console.log(`Server is listening on port ${PORT}`);
});
