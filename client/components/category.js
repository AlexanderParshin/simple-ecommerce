import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './category.scss'
import Task from './task'
import AddTask from './add-task'
import TimeChoiceMenu from './time-choice-menu'

const Category = () => {
  const { category } = useParams()
  // const [tasksTitle, setTasksTitle] = useState([])
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const [statusPost, setStatusPost] = useState('')
  const [reloadTask, setReloadTask] = useState(false)
  // value to set in the input field in add-task
  const [inputTaskTitle, setInputTaskTitle] = useState('')
  
  async function fetchComment(nTask, naskCategory) {
    if (nTask) {
      await axios.post(`/api/v1/tasks/${naskCategory}`, {'title': nTask})
        .then(res => console.log(res))
        .catch(err => console.log(err))
      await setStatusPost(nTask)
      }
  }

  async function fetchTasks(taskCategory) {
    const tasksGetting = await axios.get(`/api/v1/tasks/${taskCategory}`)
      .then(({ data }) => data)
    await  setTasks(tasksGetting)
  }

  useEffect( () => {
    fetchComment(newTask, category)
  }, [newTask])
  

  useEffect( () => {
    fetchTasks(category)
  }, [category, statusPost, reloadTask])

  return (
    <div className="category">
      <div className="content">
        <div className="flex mb-4">
          <div className="flex-1 bg-gray-500 h-12">
            <div className="content__category-name text-center text-xl">Task category: {category}</div>
          </div>
        </div>
        <div>
          <TimeChoiceMenu setReloadTask={setReloadTask} setTasks={setTasks} category={category} /> 
        </div>
        <AddTask setNewTask={setNewTask} category={category} 
          inputTaskTitle={inputTaskTitle} setInputTaskTitle={setInputTaskTitle} />
        <div className="task-info">
          {tasks.map( task => {
            return <Task key={task.taskId} title={task.title} category={category} 
              taskId={task.taskId} taskStatus={task.status} setReloadTask={setReloadTask} 
              reloadTask={reloadTask} inputTaskTitle={inputTaskTitle} setInputTaskTitle={setInputTaskTitle}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default Category
