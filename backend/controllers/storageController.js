const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Storage = require("../models/storageModel");
/*const Storage = require("../models/storageModel").default;*/


// create storage -- Admin route
exports.createStorage = catchAsyncErrors( async(req, res, next)=>{
    
    const storage = await Storage.create(req.body);
       res.status(201).json({
       success:true,
       storage
   })
})


// Get all storage
exports.getAllStorage = catchAsyncErrors( (req, res) =>{
    res.status(200).json({message: "Route is working fine"})
})


/*
export const getPosts = (req, res) => {
    res.send('This Works')
}*/


///review (3:48:48)


