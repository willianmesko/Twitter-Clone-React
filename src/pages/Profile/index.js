import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AvatarInput from "../../components/Profile/AvatarInput";
import { Container } from "./styles";

export default function Profile() {
  const dispatch = useDispatch();

  function handleSubmit(data) {}

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

        <input name="name" placeholder="Name" />
        <input name="username" type="text" placeholder="Username" />

        <hr />

        <input id="bio" type="text" placeholder="Biography" />
        <input type="text" placeholder="Link" />

        <button type="submit">Update perfil</button>
      </form>
    </Container>
  );
}
