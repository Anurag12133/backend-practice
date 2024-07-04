import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import brcypt from "bcrypt";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true,
        },
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        avatar: {
            type: String, // cloudinary url
            required: true,
        },
        coverImage: {
            type: String, // cloudinary url
        },
        watchHistory: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Video",
            },
        ],
        password: {
            type: String,
            required: [true, "Password is required"],
        },
        refreshToken: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);
userSchema.pre("save", async function (next) {
    if (!this.isModified(this.password)) return next();
    this.password = await brcypt.hash(this.password, 10);
    next();
});

userSchema.methods.isPasswordCorrect = async function (password: string) {
    return await brcypt.compare(password, this.password);
};

userSchema.methods.generateAccesstoken = async function () {
    return jwt.sign(
        {
            _id: this._id,
            username: this.username,
            email: this.email,
        },

        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        }
    );
};
