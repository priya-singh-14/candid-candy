import Connection from "../db/connection";
import mongoose from "mongoose";
import Heart from "../models/heart";

class HeartsAccessor {
    async getHeartById(heartId) {
        await Connection.open("heart");
        const heartIGotFromTheDB = await Heart.findOne({id: heartId});
        return heartIGotFromTheDB;
    }

    async getAllHearts() {
        await Connection.open("heart");
        const allHearts = await Heart.find({});
        return allHearts;
    }
}