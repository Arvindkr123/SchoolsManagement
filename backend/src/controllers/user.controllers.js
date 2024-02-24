import asyncHandler from "../middlewares/asyncHandler.js";
import { userModel } from "../models/user.models.js";
import bcryptjs from "bcryptjs";
import { generateToken } from "../utils/createToken.js";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config/config.js";

// add user controller
export const addUsersControllers = asyncHandler(async (req, res, next) => {
    try {
        const { fName, lName, email, password, phone, role } = req.body;

        switch (true) {
            case !fName:
                return res.status(401).json('Name is required!');
            case !lName:
                return res.status(401).json('Last Name is required!');
            case !email:
                return res.status(401).json('Email is required!');
            case !password:
                return res.status(401).json('Password is required!');
            case !phone:
                return res.status(401).json('Phone is required!');
            case !role:
                return res.status(401).json('User role is required');
        }

        const existedUser = await userModel.findOne({ email });
        if (existedUser) {
            return res.status(404).json({ error: "User already exists!" });
        }

        let hashPassword = await bcryptjs.hash(password, await bcryptjs.genSalt(10));

        let user = new userModel({
            fName,
            lName,
            email,
            password: hashPassword,
            phone,
            role
        });
        generateToken(res, user._id)
        await user.save();
        // If all validations pass and user is saved, send a success response
        res.status(201).json({ message: "User created successfully!" });
    } catch (error) {
        // Handle errors appropriately
        res.status(500).json({ error: error.message });
    }
});

// login user controller
export const loginUserController = asyncHandler(async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email) {
            res.status(401);
            throw new Error("Email is required !");
            return;
        }
        if (!password) {
            res.status(401);
            throw new Error("Password is required !");
            return;
        }

        // find the user
        const user = await userModel.findOne({ email });
        if (!user) {
            res.status(404);
            throw new Error("User not found!")
        }

        // then compare password of the user
        const token = generateToken(res, user._id)
        let comparePassword = await bcryptjs.compare(password, user.password);
        if (!comparePassword) {
            res.status(404);
            throw new Error("worng credentials")
        }

        //  then return user-
        res.status(200).json({
            _id: user._id, first_name: user.fName, role: user.role, email: user.email, api_token: token, last_name: user.lName,
            email_verified_at: user.createdAt,
            updated_at: user.updatedAt
        })
    } catch (error) {
        res.status(401);
        throw new Error(error)
    }
})

// get user by token
export const getUserByTokn = asyncHandler(async (req, res, next) => {
    try {
        const { api_token } = req.body;
        if (!api_token) {
            res.status(404);
            throw new Error("Please provide token")
        }
        const { userId } = jwt.verify(api_token, JWT_SECRET);
        // now find the user
        const user = await userModel.findById(userId).select("-password");
        res.status(200).send(user);
    } catch (error) {
        res.status(404);
        throw new Error(error);
        return;
    }
})


export const requsetUserPasswordController = asyncHandler(async (req, res, next) => {
    try {
        const { email } = req.body;
        if (!email) {
            res.status(404);
            throw new Error("User not found..")
        }
        let user = await userModel.findOne({ email });
        if (user) {
            return res.status(200).send(true)
        }
        res.status(404).send(false)
    } catch (error) {
        res.status(404);
        throw new Error(error)
    }
})

export const getAllUsersController = asyncHandler(async (req, res, next) => {
    try {
        let users = await userModel.find({});
        res.status(200).json()
    } catch (error) {
        res.status(404);
        throw new Error(error)
    }
})