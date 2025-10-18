import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './todoSlice';
import { Input,Button } from '../../components/StyledComponents';
import { db } from '../../Config/fbConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useAuth } from '../../context/AuthContext';

function TodoForm() {
  const [text,setText] = useState('')
  const dispatch = useDispatch();
  const { user } = useAuth();
  const uid = user?.uid;

  const HandleTodo = async () => {
    if (text.trim() === "" || !uid) return;

    try {
      const todosRef = collection(db, "users", uid, "todos");
      const docRef = await addDoc(todosRef, {
        text,
        completed: false,
        createdAt: new Date()
      });

      // dispatch object with Firestore id
      dispatch(addTodo({ id: docRef.id, text, completed: false }));
      setText("");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <div>
      <Input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder='Enter your task....' />
      <Button onClick={HandleTodo}>Add Todo</Button>
    </div>
  )
}

export default TodoForm
