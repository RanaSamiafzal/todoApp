import React from "react";
import TodoForm from './features/todos/TodoForm'
import TodoList from './features/todos/TodoList'
import AuthButtons from './components/AuthButtons'
import { Container, AppWrapper, Heading, Header, SignInMessage } from './components/StyledComponents'
import { useAuth } from "./context/AuthContext";

function App() {
  const { user, loading } = useAuth();

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
