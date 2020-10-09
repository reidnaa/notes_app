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