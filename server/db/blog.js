const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({

    image:String,
    // image:{
    //     type:String,
    //     required:true
    //  },
     title:{
        type:String,
        required:true
     },
     slug:{
        type:String,
        required:true
     },
     category:{
        type:String,
        required:true
     },
    blog:{
        type:String,
        required:true
    },

    createdAt:{
        type:Date,
        default:Date.now()
    }
})
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;


//odule.exports = mongoose.model("blogs",blogSchema)