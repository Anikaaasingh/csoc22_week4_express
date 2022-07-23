var mongoose= require('mongoose');
//DEFINING THE BOOK MODEL

var bookSchema=new mongoose.Schema({
	/*TODO: DEFINE the following attributes-
    title, genre, author, description, rating (out of 5), mrp, available_copies(instances).
     */
 title:{
 type:String,
 required:true
 },
 genre:{
type:String,
required: true,
 },
 author:{
    type:String,
    required:true,
 },

 description:{
    type:String,
    required:true,
 },
 rating:{
  type:Number,
  min:0,
  max:5,
  default:0,
 },

 mrp:{
    type:mongoose.Schema.Types.Decimal128,
    required:true,
    min:0,
 },
 available_copies:{
  type:Number,
  required:true,
  /*default value set check*/


 }







})
module.exports=mongoose.model("Book",bookSchema);