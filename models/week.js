const mongoose = require('mongoose');

const weekSchema=new mongoose.Schema({
    habit_status:{
        type:String,
        required:true
    },
    date_created:{
        type:String,
        required:true
    },
    //habitStatus belongs to the habit
    habit:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Habit'
    }

},{
    timestamps:true
});

const week=mongoose.model('Week',weekSchema);
module.exports=week;