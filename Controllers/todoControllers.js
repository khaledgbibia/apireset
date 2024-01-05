const Todo = require("../Model/todo");




const createTodo = async (req,res) => { 
try {
const todo = await Todo.create(req.body);
res.json(todo)
    
} catch (error) {
    console.log(error);
}

    
}

const getTodos = async (req,res) => {

    try {
        const todos = await Todo.find();
        res.json(todos);
        
    } catch (error) {
       console.log(error) 
    }
}
const deleteTodo = async (req,res) => {

    try {
        const deletedTodo = await Todo.findByIdAndDelete("659866b53775a06e1cd21bf0");
        res.json(deletedTodo);
    } catch (error) {
        console.log(error)   
    }
}
const updateTodo = async (req,res) => {

    try {
        const updatedTodo = await Todo.findByIdAndUpdate("65985ffa3775a06e1cd21be8" , req.body);
        res.json(updatedTodo);
        
    } catch (error) {
        console.log(error)   
    }
}


module.exports = {createTodo, getTodos, deleteTodo, updateTodo};