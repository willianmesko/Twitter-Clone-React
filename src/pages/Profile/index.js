import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container } from "./styles";

export default function Profile() {
  const dispatch = useDispatch();

  function handleSubmit(data) {}

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        {/* <AvatarInput name="avatar_id" /> */}

        <input name="name" placeholder="Nome completo" />
        <input name="email" type="email" placeholder="Seu endereço de e-mail" />

        <hr />

        <input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <input type="password" name="password" placeholder="Nova senha" />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
        />

        <button type="submit">Atualizar perfil</button>
      </form>
    </Container>
  );
}
