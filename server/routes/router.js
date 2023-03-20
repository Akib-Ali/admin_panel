const express = require('express');
const router = new express.Router()
const conn = require('../db/conn')
const multer = require('multer')
const Blog = require('../db/blog')

//img storage config

var imgconfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null, "./uploads")
    },
    filename:(req,file,callback)=>{
        callback(null, `image-${Date.now()}.${file.originalname}`)
    }
})

//image filter

const isImage =(req,file,callback)=>{
 if(file.mimetype.startsWith('image')){
 callback(null,true)
 }else{
    callback(null,Error("only image allowed"))
 }
}

var upload = multer({
    storage:imgconfig,
    fileFilter:isImage
})



//post api
router.post("/blog-post",upload.single('photo'), async(req,res)=>{
    try{
    const {title,slug,category,blog}= req.body;
     const newBlog = new Blog({
        title,
        slug,
        category,
        blog,
       createdAt:Date.now()
     })
     if(req.file){
        newBlog.image = req.file.filename

     }
      let result = await newBlog.save()
     res.send(result)
    }catch(error){
        console.log(error)

    }
console.log(req.body)
})

module.exports=router;