import mongoose from 'mongoose'; //schema validation - to ensure that each field is correct before adding it to the database

const Schema = mongoose.Schema;

const HeartSchema = new Schema({
    text: {type: String, required: true},
    to: {type: String, required: true},
    date: {type: String, required: true},
    id: {type: String, unique: true, required: true}
}, {
    collection: 'all-hearts'
});

const db = mongoose.connection.useDb("all-hearts-db");
const Heart = db.model("Heart", HeartSchema);

export default Heart;