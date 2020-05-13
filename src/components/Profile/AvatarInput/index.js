import React, { useRef, useState } from "react";
import { Container } from "./styles";
import { db, storage } from "../../../firebase";
import { useSelector, useDispatch } from "react-redux";
import { changeAvatar } from "../../../store/modules/user/actions";
import { IoMdPhotos } from "react-icons/io";
import Loading from "../../../assets/images/loading.gif";
const AvatarInput = () => {
  const [loading, setLoading] = useState(false);
  const { avatar } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const uploadImage = (e) => {
    if (e.target.files[0]) {
      setLoading(true);
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
              dispatch(changeAvatar(url));
              setLoading(false);
            });
        }
      );
      db.collection("perfil").doc("images").update({ avatar: avatar });
    }
  };
  return (
    <Container>
      <div>
        <img src={loading ? Loading : avatar} alt="avatar" />
        <span onClick={() => inputRef.current.click()}>
          <IoMdPhotos size={25} />
        </span>

        <input
          ref={inputRef}
          onChange={uploadImage}
          type="file"
          accept="image/*"
        />
      </div>
    </Container>
  );
};

export default AvatarInput;
