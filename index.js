const express=require('express');
const app=express();
const port=8002;
const expressLatouts=require('express-ejs-layouts');

//cookie-parser and express-session required for noto
const cookieParser=require('cookie-parser');
const session=require('express-session');
const db=require('./config/mongoose');
const sassMiddleware=require('node-sass-middleware');
const flash = require('connect-flash');
const customMiddleWare=require('./config/middleware');

//using sass for styling
app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle:'extended',
    prefix:'/css'
}));

//to access the assets folder
app.use(express.static('./assets'));


app.use(express.urlencoded());

//setup view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use(expressLatouts);

//extract style and scripts from sub-pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//use for noty which is required
app.use(session({
    name: 'health-tracker',

    //ToDo change the secret before deployment in production mode
    secret:'blahsomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000 * 60 * 100)
    }
}));

// use flash-connet to notify the user
app.use(flash());
app.use(customMiddleWare.setFlash);


//use express router
app.use('/',require('./routes'));


app.listen(port,function(err){
    if(err){
        console.log(`error in running the server: ${err}`);
    }

    console.log(`Server is running on port : ${port}`);
}); 
