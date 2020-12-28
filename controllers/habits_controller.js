const Habit=require('../models/habit');
const HabitStatus=require('../models/week');
module.exports.habits= async function(req,res){

    try
    {
        let habits = await Habit.find({});

            console.log(habits);
            
            return res.render('./user_trackHabit',
            {
                title:'My Habits',
                habit_list:habits
            });
    }
    catch(err)
    {
        console.log('error in fetching habit from db');
        return;
    }
}
//to update the habit status for particular date
module.exports.changeStatus= async function(req,res){

    try{
        let status=null;
        if(req.query.status!='null'){
            status=req.query.status;
        }
        let dateToFind = req.query.date;
        let statusToken = await HabitStatus.findOne({
            habit:req.query.id,
            date_created:dateToFind
        });
        if(statusToken){
            //update status if it's allready present
            await statusToken.updateOne({habit_status:status});
            statusToken.save();
        }
        else{
            let habit = await Habit.findById(req.query.id);
            if(habit){
                //creating status
                await HabitStatus.create({
                    habit_status:status,
                    date_created:dateToFind,
                    habit:habit.id
                });
            }
        }
        if(req.xhr){
            return res.status(200).json({
                    message:'Habit Status Created',
                });
        }
            return res.redirect('back');
        
    }catch(err){
        console.log('Error in updating done Status',err);
        return;
    }
}
    

//to delete the selected habit
module.exports.delete= async function(req,res){
    try{
        for(item of req.query.info){
            await Habit.findByIdAndDelete(item);
            await HabitStatus.deleteMany({habit:item});
        }
        if(req.xhr){
            return res.status(200).json({
                message:'Deleted Successfully'
            });
        }
        return res.redirect('/users/tracks-habits');
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message:'Internal Server Error',
        });
    }
}