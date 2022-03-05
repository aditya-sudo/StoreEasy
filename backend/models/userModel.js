const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your Name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [4, "Name should have more than 4 characters"],
      },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid Email"],
      },
    password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        minLength: [8, "Password should be greater than 8 characters"],
        select: false,
    },

    contact_no: {
      type: Number,
      required: [true, "Please Enter your number"],
      maxLength: [10, "Number cannot exceed 10 characters"],
    },

    address: {
      city: {type: String,required: true},
      state:{type: String,required:true},
      postalCode:{
        type: String, 
        required:true,
        maxLength: [6, "Number cannot exceed 6 characters"],
        minlength: [6, "Number cannot be less than 6 characters"],
      },
      country: {type: String, required:true},
    },


    avatar: {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    role: {
      type: String,
      default: "user",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,
  });


// Password encryption
userSchema.pre("save",async function(next){

  if(!this.isModified("password")) // If user modifies the password then only encrpt the password
  {
    next()
  }
  this.password = await bcrypt.hash(this.password, 10)// other wise only encrypt once
})


// JWT TOKEN
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};


//Compare Password
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

//Generating password reset token
userSchema.methods.getResetPasswordToken = function() {

  //Gernerating Token
  const resetToken = crypto.randomBytes(20).toString("hex")

  //hashing and adding to userschema
  this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex")

  this.resetPasswordExpire = Date.now() + 15*60*1000 


  return resetToken

}






module.exports = mongoose.model("User", userSchema);