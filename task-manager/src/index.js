const express = require("express");
require("./db/mongoose");

const userRouter = require('./routers/users');
const taskRouter = require('./routers/tasks');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

const router = new express.Router();


app.listen(port, () => {
    console.log("app is listening on port", port);
});


const jwt = require('jsonwebtoken');

const newFunct = async () => {
   const token = jwt.sign({_id : 'abc123'}, 'hellobuddy', { expiresIn: "7 days"});
    
//    console.log(token);

   const data = jwt.verify(token, 'hellobuddy');
    console.log(data)
}

newFunct();