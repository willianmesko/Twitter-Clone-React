import React, { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../store/modules/user/actions";
import { Form } from "@unform/web";
import { toast } from "react-toastify";
import * as Yup from "yup";
import AvatarInput from "../../components/Profile/AvatarInput";
import Input from "../../components/Input";
import { Container } from "./styles";

export default function Profile() {
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const { name, userName, bio, link } = useSelector((state) => state.user);

  const handleSubmit = useCallback(
    async (data) => {
      const { name, username, bio, link } = data;
      try {
        const schema = Yup.object().shape({
          name: Yup.string()
            .required("Required name")
            .min(5, "The Name must be at least 5 characters"),
          username: Yup.string()
            .required("Required username")
            .min(5, "The Username must be at least 5 characters"),
          bio: Yup.string().min(
            10,
            "The Biography must be at least 10 characters"
          ),
          link: Yup.string(),
        });
        await schema.validate(data);

        dispatch(updateProfile(name, username, bio, link));
        toast.success("Updated profile");
      } catch (error) {
        toast.error(error.errors[0]);
      }
    },
    [dispatch]
  );

  return (
    <Container>
      <Form
        ref={formRef}
        initialData={{ name: name, username: userName, bio: bio, link: link }}
        onSubmit={handleSubmit}
      >
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Name" />
        <Input name="username" type="text" placeholder="Username" />

        <hr />

        <Input name="bio" id="bio" type="text" placeholder="Biography" />
        <Input name="link" type="text" placeholder="Link" />

        <button type="submit">Update perfil</button>
      </Form>
    </Container>
  );
}
