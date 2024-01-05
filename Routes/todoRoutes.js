const express = require("express");
const { createTodo, getTodos, deleteTodo, updateTodo } = require("../Controllers/todoControllers");

const router = express.Router();
// create todo
// /api/todos
router.post("/todos",createTodo);

// get Todos
// /api/todos

router.get("/todos" , getTodos);

// delete Todos
// /api/todos

router.delete("/todos" , deleteTodo);

// update Todos
// /api/todos

router.put("/todos" , updateTodo);

module.exports = router;