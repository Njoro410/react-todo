import "./index.css";
import { AiOutlinePlus } from "react-icons/ai";
import Todo from './Todo.jsx'
import {useEffect, useState} from "react"
import { db } from './firebase'
import {query, collection, onSnapshot, QuerySnapshot, updateDoc, doc} from "firebase/firestore"

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: `text-center p-2`
};

function App() {

  const [todos, setTodos] = useState([])

  //Create todo
  //read todo from firebase
  useEffect(() => {
    const q = query(collection(db, 'todos'))
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let todosArr = []
      QuerySnapshot.forEach((doc) => {
        todosArr.push({...doc.data(), id: doc.id})
      });
      setTodos(todosArr)
    })
    return () => unsubscribe()
  }, [])
  

  //update todo in firebase

  // const toggleComplete = async (todo) => {
  //   await updateDoc(doc(db, 'todos', todo.id),{
  //     completed: !todo.completed
  //   })
  // }

  //delete todo from firebase




  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form className={style.form}>
          <input className={style.input} type="text" placeholder="Add Todo" />
          <button className={style.button}>
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {todos.map((todo,index)=>(
          <Todo key={index} todo={todo} toggleComplete={toggleComplete}/>
          ))}
        </ul>
        <p className={style.count}>You have 2 todos</p>
      </div>
    </div>
  );
}

export default App;
