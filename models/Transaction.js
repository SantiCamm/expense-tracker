const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, "Please insert some text"],
        trim: true,
    },
    amount: {
        type: Number,
        required: [true, "Please add a number"]
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Transaction", TransactionSchema);