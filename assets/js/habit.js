const doneButtons = $('.done');
const notDoneButtons = $('.not-done');
const nullButtons = $('.null-status');

// to change staus and create status if not present 
function changeStatusCall(id,status){
    //to get the current date
    let date = new Date().toLocaleDateString();
    $.ajax({
            type:'get',
            url:'/users/changeStatus',
            data:{
                id:id,
                status:status,
                date:date
            },
            success:function(data){
                new Noty({
                    theme: 'relax',
                    text: status,
                    type: 'success',
                    layout: 'topRight',
                    timeout: 1500
                    
                }).show();
            },
            error:function(err){
                console.log(`Error in ajax Call ${status}`);
            }
        });
}

//add event listener for done 
for(button of doneButtons){
    button.addEventListener('click',function(){
        let idDone = this.id.slice(5);
        changeStatusCall(idDone,'done');
    });
}

//adding event listener for not-done
for(button of notDoneButtons){
    button.addEventListener('click',function(){
        let idNotDone = this.id.slice(9);
        changeStatusCall(idNotDone,'not-done');
    });
}

//adding event listener for null
for(button of nullButtons){
    button.addEventListener('click',function(){
        let idNull = this.id.slice(5);
        changeStatusCall(idNull,'null');
    });
}

//to delte the checked habit
$('#delete-btn').click(function(){

    //fetching all the checkbox
    let allCheckbox = document.querySelectorAll('.checkbox-container input');
    let checkedItem = [];
    //collecting id of all checkbox
    for(item of allCheckbox){
        if(item.checked){
            checkedItem.push(item.id);
        }
    }
    //to ask the user before delete
    const isDelete = confirm("Do you really want to delete records?");
    if(isDelete==true){

        $.ajax({
            type:'get',
            url:'/users/delete',
            data:{info:checkedItem},
            success:function(){
                for(id of checkedItem){
                    $(`#item-${id}`).remove(); 
                }
                //to show the notification when deleted
                new Noty({
                    theme: 'relax',
                    text: "Habit Deleted Successfully",
                    type: 'success',
                    layout: 'topRight',
                    timeout: 1500
                    
                }).show();
            },error: function(error){
                console.log(error.responseText);
            }
        });
    }
    
});