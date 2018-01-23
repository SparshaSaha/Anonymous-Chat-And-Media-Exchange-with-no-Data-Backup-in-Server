var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var schema=new Schema({
  email:{type:String,required:true,unique:true},
  name:{type:String,required:true},
  username:{type:String,required:true,unique:true},
  reg_no:{type:String,required:true,unique:true}
});
module.exports=mongoose.model('User_profile',schema);
