const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    campaignTitle: { type: String, required: true },
    amount: { type: Number, required: true },
    otherRequirements: { type: String },
    date: { type: Date, required: true },
    mobileNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    websiteLink: { type: String },
    campaignDescription: { type: String, required: true },
    aboutNGO: { type: String, required: true },
});

module.exports = mongoose.model("User", UserSchema);
