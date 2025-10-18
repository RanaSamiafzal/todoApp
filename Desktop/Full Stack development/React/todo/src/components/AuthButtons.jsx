// src/components/AuthButtons.jsx
import React from "react";
import { useAuth } from "../context/AuthContext";
import { AuthContainer, UserInfo, UserAvatar, UserName, SignInButton, SignOutButton } from "./StyledComponents";

export default function AuthButtons() {
  const { user, signInWithGoogle, signOutUser } = useAuth();

  if (user) {
    return (
      <AuthContainer>
        <UserInfo>
          <UserAvatar src={user.photoURL} alt="avatar" />
          <UserName>{user.displayName}</UserName>
        </UserInfo>
        <SignOutButton onClick={signOutUser}>Sign out</SignOutButton>
      </AuthContainer>
    );
  }

  return <SignInButton onClick={signInWithGoogle}>Sign in with Google</SignInButton>;
}
