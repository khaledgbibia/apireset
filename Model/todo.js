const mongoose = require("mongoose");

const todoShema = mongoose.Schema({

    task: {type:String, required: true},
})
module.exports= mongoose.model("Todo",todoShema);