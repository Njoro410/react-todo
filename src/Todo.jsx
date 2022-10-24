import React from 'react'
import {FaRegTrashAlt} from "react-icons/fa"

const styles = {
    li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
    liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
    row: `flex gap-2`,
    text: `cursor-pointer`,
    textComplete: `cursor-pointer line-through`,
    button: `cursor-pointer flex items-center`
}

const Todo = ({todo, toggleComplete, deleteTodo}) => {
  return (
    <li className={todo.completed ? styles.liComplete : styles.li}>
        <div className={styles.row}>
            <input onChange={()=>toggleComplete(todo)} type="checkbox" checked={todo.completed}/>
            <p onClick={()=>toggleComplete(todo)} className={todo.completed ? styles.textComplete : styles.text}>{todo.text}</p>
        </div>
        <button onClick={()=>deleteTodo(todo.id)}>{<FaRegTrashAlt/>}</button>
        
    </li>
  )
}

export default Todo