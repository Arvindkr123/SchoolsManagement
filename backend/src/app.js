import express from 'express'
import cors from "cors"
import userRoutes from "./routes/users.routes.js"
import { defaultUserInfos } from './utils/data.js';
import { ProfileDetails } from './models/profileDetails.models.js';

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api", userRoutes);

export default app;