// Methods that will use mongoose model in order to interact with database

const { Mongoose } = require("mongoose");
const Transaction = require("../models/Transaction");

// @desc Get transactions
// @route GET /expensetracker/transactions
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    return res.status(200).json({
      data: transactions,
    });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

// @desc Add a transaction
// @route POST /expensetracker/transactions
exports.addTransaction = async (req, res, next) => {
  const { text, amount } = req.body;

  if (amount === 0) {
    return res.status(500).json({ message: "Please enter an amount different than 0" });
  }

  const newTransaction = new Transaction({
    text,
    amount,
  });
  try {
    await newTransaction.save();
    res.status(200).json({
      data: newTransaction,
    });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

// @desc Delete a  transaction
// @route DELETE /expensetracker/transactions/>id
exports.deleteTransaction = async (req, res, next) => {
  const id = req.params.id;
  console.log(id)
  try {
      
    /*if (!Mongoose.Types.ObjectID.isValid(id)) {
      return res.status(404).json({ message: "No transaction with that id" });
    }*/

    await Transaction.findByIdAndRemove(id);

    return res.status(200).json({data: "Transaction deleted succesfully"})
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
