const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    orderItems: [
        {
            name: {type: String, required:true},
            Duration: {type: Number, required: true},
            price: {type: Number, required: true},
        },
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      paymentInfo: {
        id: {
          type: String,
          required: true,
        },
        status: {
          type: String,
          required: true,
        },
      },
      paidAt: {
        type: Date,
        required: true,
      },
      itemsPrice: {
        type: Number,
        required: true,
        default: 0,
      },
      taxPrice: {
        type: Number,
        required: true,
        default: 0,
      },
    //   shippingPrice: {
    //     type: Number,
    //     required: true,
    //     default: 0,
    //   },
      totalPrice: {   ///Price calculation in frontend0
        type: Number,
        required: true, 
        default: 0,
      },
      orderStatus: {
        type: String,
        required: true,
        default: "Processing",
      },
    //   deliveredAt: Date,
    //   createdAt: {
    //     type: Date,
    //     default: Date.now,
    //   },
    
})

module.exports = mongoose.model("Order", orderSchema);

