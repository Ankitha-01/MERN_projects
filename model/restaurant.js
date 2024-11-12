const mongoose=require("mongoose");
const restaurantSchema=new mongoose.Schema({
    id:{type:Number,required:true,unique:true},
    name:{type:String,required:true},
    type:{type:String,enum: ['chinese', 'thai', 'continental', 'south', 'north', 'andhra'],required:true},
    location:{type:String,required:true},
    rating:{type:Number,min:0,max:5,required:true},
    top_food:{type:String,required:true}
    

});

const restaurant=mongoose.model('restaurant',restaurantSchema);
module.exports=restaurant;  










