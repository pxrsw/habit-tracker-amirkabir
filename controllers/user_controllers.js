const Habit=require('../models/habit');

//when user fill the habit then execute 
module.exports.createSession= async function(req,res){

    try{
       let habit = await Habit.findOne({title:req.body.title});
        if(!habit){
            try{
                console.log(req.body);
                
               let habits=await  Habit.create({
                    title: req.body.title,
                    details: req.body.details,
                    time: req.body.time
                });
                //to show the notification when task added
                req.flash('success','Added Successfully')
                //render to that page where all habits show
                return res.redirect('/users/tracks-habits');
            }catch(err){
                if(err){
                    console.log('error in Creating data while enter'); 
                    return;
                }
            }
           
        }
        else{
            //to show the notification when added task add again
            req.flash('error','habit allready exist');
            return res.redirect('back');
        }
      
    }catch(err){
        console.log('error in finding habit in enter data');
        return;
    }

    
}

