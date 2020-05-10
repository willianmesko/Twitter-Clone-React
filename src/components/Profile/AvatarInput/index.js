import React, { useState, useRef } from "react";
import { Container } from "./styles";
import { storage } from "../../../firebase";
import { useSelector, useDispatch } from "react-redux";
import { changeAvatar } from "../../../store/modules/user/actions";
const AvatarInput = () => {
  const { avatar } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const handleImage = (e) => {
    if (e.target.files[0]) {
      let name = e.target.files[0].name;
      const uploadTask = storage
        .ref(`images/${e.target.files[0].name}`)
        .put(e.target.files[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          console.log(snapshot);
        },
        (error) => console.log(error),
        () => {
          storage
            .ref("images")
            .child(name)
            .getDownloadURL()
            .then((url) => {
              dispatch(changeAvatar(url));
            });
        }
      );
    }
  };
  return (
    <Container>
      <div onClick={() => inputRef.current.click()}>
        <img src={avatar} alt="avatar" />

        <input
          ref={inputRef}
          onChange={handleImage}
          type="file"
          accept="image/*"
        />
      </div>
    </Container>
  );
};

export default AvatarInput;
