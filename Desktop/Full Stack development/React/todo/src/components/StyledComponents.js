import styled from "styled-components";

export const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  width: 100%;
  padding: 30px;
  background: white;
  border-radius: 16px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
  font-family: 'Arial', sans-serif;
`;

export const Button = styled.button`
  padding: 12px 20px;
  margin-left: 10px;
  border: none;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  &:hover {
    background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: translateY(0);
  }
`;

export const Input = styled.input`
  padding: 12px 16px;
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  border: 2px solid #ddd;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

export const TodoItem = styled.div`
  background: #f9f9f9;
  padding: 15px 20px;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #eee;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  color: ${({ completed }) => (completed ? "#888" : "#333")};
  &:hover {
    background: #f0f0f0;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
`;

export const TodoListContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
`;

export const TodoText = styled.span`
  flex: 1;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.3s ease;
  &:hover {
    color: #667eea;
  }
`;

export const DeleteButton = styled.button`
  padding: 8px 12px;
  border: none;
  background: #ff4757;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  &:hover {
    background: #ff3742;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(255, 71, 87, 0.3);
  }
  &:active {
    transform: translateY(0);
  }
`;

export const NoTodosMessage = styled.p`
  text-align: center;
  color: #888;
  font-size: 1.1rem;
  font-style: italic;
  margin-top: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #667eea;
  transition: border-color 0.3s ease;
  &:hover {
    border-color: #764ba2;
  }
`;

export const UserName = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
`;

export const SignInButton = styled.button`
  padding: 10px 16px;
  border: none;
  background: linear-gradient(135deg, #4285f4 0%, #34a853 0%, #ea4335 0%, #fbbc05 100%);
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  &:hover {
    background: linear-gradient(135deg, #3367d6 0%, #2e7d32 0%, #d33b2c 0%, #f57c00 100%);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(66, 133, 244, 0.3);
  }
  &:active {
    transform: translateY(0);
  }
`;

export const SignOutButton = styled.button`
  padding: 8px 14px;
  border: none;
  background: #ff4757;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.3s ease;
  &:hover {
    background: #ff3742;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(255, 71, 87, 0.3);
  }
  &:active {
    transform: translateY(0);
  }
`;

export const SignInMessage = styled.p`
  text-align: center;
  color: #666;
  font-size: 1.1rem;
  font-style: italic;
  margin-top: 20px;
`;
