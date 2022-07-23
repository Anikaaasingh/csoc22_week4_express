var mongoose=require("mongoose");
//DEFINING THE BOOK  COPIES MODEL
var bookCopySchema=new mongoose.Schema({
//TODO: DEFINE the following attributes-
 book:  {
    type:mongoose.Schema.Type.objectId,
    required:true,
    
 },//embed reference to id of book of which its a copy
 status:{
  type:Boolean,
  required:true,
 } ,//TRUE IF AVAILABLE TO BE ISSUED, ELSE FALSE 

 borrow_data:{
   type:Date,
   required:true,
   default:Date.now,
 },//date when book was borrowed

 borrower:{
    type:mongoose.SchemaType.objectId,
    required:true,
 } //embed reference to id of user who has borrowed it 
})
module.exports=mongoose.model("BookCopy",bookCopySchema);