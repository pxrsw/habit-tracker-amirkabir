let Habit=require('../models/habit');
let HabitStatus=require('../models/week');

//to render the week view
module.exports.weekView=async function(req,res){
    let habits=await Habit.find({});
    return res.render('./week_views',{
        title:"week views",
        habits:habits
    });
}

//getting stautus of particular date
module.exports.dayStatus = async function(req,res)
{
    queryDate = new Date(req.query.date);
    let date = queryDate.toLocaleDateString();
    let habitStatus = await HabitStatus.findOne({habit:req.query.id,date_created:date});
    if(req.xhr)
    {
        if(habitStatus)
        {
            return res.status(200).json({
                data:
                {
                    habitStatus:habitStatus.habit_status,    
                    date:date,
                    habit_id:req.query.id,
                },
                message:"entry found",
            });
        }
        else
        {
            return res.status(200).json(
                {
                    data:
                    {
                        habitStatus:"null",
                        date:date,
                        habit_id:req.query.id,
                    },
                    message:'entry not found',
                }
            );
        }
        
    }
}
