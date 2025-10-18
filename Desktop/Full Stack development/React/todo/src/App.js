import React, { useEffect } from "react";
import TodoForm from './features/todos/TodoForm'
import TodoList from './features/todos/TodoList'
import AuthButtons from './components/AuthButtons'
import { Container, AppWrapper, Heading, Header, SignInMessage } from './components/StyledComponents'
import { useAuth } from "./context/AuthContext";
import { useDispatch } from 'react-redux';
import { loadTodos } from './features/todos/todoSlice';
import { db } from './Config/fbConfig';
import { collection, getDocs } from 'firebase/firestore';

function App() {
  const { user, loading } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      const fetchTodos = async () => {
        try {
          const todosRef = collection(db, "users", user.uid, "todos");
          const querySnapshot = await getDocs(todosRef);
          const todos = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          dispatch(loadTodos(todos));
        } catch (error) {
          console.error("Error fetching todos:", error);
        }
      };
      fetchTodos();
    } else {
      dispatch(loadTodos([]));
    }
  }, [user, dispatch]);

  if (loading) return <div>Loading...</div>;

  return (
    <AppWrapper>
      <Container>
        <Header>
          <Heading>ToolKit Todo App</Heading>
          <AuthButtons />
        </Header>

        {user ? (
          <>
            <TodoForm />
            <TodoList />
          </>
        ) : (
          <SignInMessage>Please sign in to manage your todos.</SignInMessage>
        )}
      </Container>
    </AppWrapper>
  )
}

export default App
