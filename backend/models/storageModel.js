const mongoose = require("mongoose");



const storageSchema = new mongoose.Schema({
  company_name: {
    type: String,
    required: [true, "Please Enter Company Name"],
    trim: true,
  },
  person_name: {
    type: String,
    required: [true, "Please Enter your name"],
    trim: true,
  },
  
  contact_no: {
    type: Number,
    required: [true, "Please Enter your number"],
    maxLength: [10, "Number cannot exceed 10 characters"],
  },
  
  // Space size available for the lease
  space: {
      type: Number,
      required: [true," Please enter the available space for rent "],
      maxLength: [1000, "Please enter a valid number"],
  },


  // price per sq.feet.
  price: {
    type: Number,
    required: [true, "Please Enter rate per sq.feet"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },

  leasePeriod: {
    type: Number,
      required: [true," Please enter the Lease Period "],
  },

  address: {
    address: {type:String, required:true},
    city: {type: String,required: true},
    postalCode:{type: String,required:true},
    country: {type: String, required:true},
},

  images: [
    {
      public_id: { // we will use cloud navy for the image storing
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  
  /*category: {
    type: String,
    required: [true, "Please Enter Product Category"],
  },


  /*user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },*/

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Storage", storageSchema);