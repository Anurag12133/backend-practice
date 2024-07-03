import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectionString = async () => {
    try {
        const connnection = mongoose.connect(
            `${process.env.DATABASE_URI}/${DB_NAME}`
        );
        console.log(`Databae connected..  at port ${process.env.PORT}`);
        console.log(connnection);
    } catch (error) {
        console.log(error);
    }
};

export default connectionString;
