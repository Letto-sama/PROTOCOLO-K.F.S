import { Router } from "express";
import { renderTasks, createTask, renderTaskEdit, editTask, deleteTask, TaskToggleDone } from '../controllers/tasks.controller'

const router = Router()

router.get("/", renderTasks)

router.post('/tasks/add', createTask)

router.get('/tasks/:id/toggleDone', TaskToggleDone)

router.get('/tasks/:id/edit', renderTaskEdit)

router.post('/tasks/:id/edit', editTask)

router.get("/tasks/:id/delete", deleteTask)




export default router