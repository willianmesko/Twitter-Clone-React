import React, { useRef } from "react";
import { storage } from "../../firebase";
import { useSelector, useDispatch } from "react-redux";
import { changeCover } from "../../store/modules/user/actions";

import { Container } from "./styles";
export default function Cover() {
  const { cover } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const coverRef = useRef(null);

  const handleImage = (e) => {
    if (e.target.files[0]) {
      let name = e.target.files[0].name;
      const uploadTask = storage
        .ref(`images/${e.target.files[0].name}`)
        .put(e.target.files[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => console.log(error),
        () => {
          storage
            .ref("images")
            .child(name)
            .getDownloadURL()
            .then((url) => {
              dispatch(changeCover(url));
            });
        }
      );
    }
  };
  return (
    <Container>
      <div onClick={() => coverRef.current.click()}>
        <img src={cover} alt="cover" />

        <input
          onChange={handleImage}
          ref={coverRef}
          type="file"
          id="avatar"
          accept="image/*"
        />
      </div>
    </Container>
  );
}
