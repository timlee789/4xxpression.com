import mongoose from "mongoose";

const guestSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    tel: {type: String, required: true},
    instaid: {type: String},
    imageField: {type: String, required: true},
});

const Guest = mongoose.models.Guest || mongoose.model('Guest', guestSchema);
export default Guest;