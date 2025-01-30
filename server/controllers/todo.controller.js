import Todo from "../models/todo.model.js";

export const getTodos = async(req,res)=>{
    try{
        const todos = await Todo.find({})

        res.status(200).json({
            success:true,
            message:"Data fetched sucessfully",
            fetchedTodos:todos,
        })

    }catch(err){
        console.error("Error while fetching todos from backend",err.message)
        res.status(500).json({
            success:false,
            message:"Error while fetching todos from backend"
        })
    }
}

export const addTodo = async(req,res) => {
    try{
        const {title,description,completed} = req.body;

        if(!title){
            return res.status(400).json({
                success:false,
                message:"Title field required"
            })
        }

        const newTodo = new Todo({
            title,
            description,
            completed
        })

        await newTodo.save()

        res.status(201).json({
            success:true,
            message:"created new Todo",
            todo:newTodo
            
        })

    }catch(err){
        console.error("Error while creating new Todo",err.message)
        res.status(500).json({
            success:false,
            message:"Error while creating new Todo ",
        })
    }
}

export const updateTodo = async(req,res) => {
    try{
        const {title,description,completed} = req.body;

        const {id} = req.params;

        const updatedTodo = await Todo.findByIdAndUpdate(todoId,{
            title,
            description,
            completed
        })

        res.status(201).json({
            success:true,
            message:"Todo updated sucessfully",
            updated:updatedTodo
            
        })

    }catch(err){
        console.error("Error while updating Todo",err.message)
        res.status(500).json({
            success:false,
            message:"Error while updating Todo ",
        })
    }
}

export const deleteTodo = async(req,res) => {
    try{
        const {id} = req.params

        const deletedTodo = await Todo.findByIdAndDelete(todoId)

        res.status(200).json({
            success:true,
            message:"Todo deleted sucessfully",
            deleted:deletedTodo
            
        })

    }catch(err){
        console.error("Error while deleting Todo",err.message)
        res.status(500).json({
            success:false,
            message:"Error while deleting Todo ",
        })
    }
}