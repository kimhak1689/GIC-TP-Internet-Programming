const mongoose = require('mongoose');

module.exports = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:SADFetylakosa123@cluster0.6g8n3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            autoIndex: true,
            serverSelectionTimeoutMS: 30000
        });
        console.log("MongoDB connected~");

    } catch (err) {
        console.log("Mongoose: ", err);
    }
}