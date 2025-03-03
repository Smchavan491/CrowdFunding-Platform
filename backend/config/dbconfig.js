require("dotenv").config();
const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URL;

if (!mongoURI) {
    console.error("MongoDB connection URL is missing. Check your .env file.");
    process.exit(1);
}

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected successfully"))
.catch((error) => {
    console.error("Error in MongoDB connection:", error);
    process.exit(1);
});

module.exports = mongoose;
