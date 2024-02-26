import Connection from "../db/connection.js";
import Heart from "../models/heart.js";

export default class HeartsAccessor {
    static async getHeartById(heartId) {
        await Connection.open("hearts");
        const heartIGotFromTheDB = await Heart.findOne({_id: heartId});
        return heartIGotFromTheDB;
    }

    static async getAllHearts() {
        await Connection.open("hearts");
        const allHearts = await Heart.find({});
        return allHearts;
    }

    static async postHeart(heartDoc) {
        Heart.create(heartDoc);
      }
}