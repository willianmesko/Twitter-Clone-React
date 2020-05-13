import React, { useRef, useState } from "react";
import { db, storage } from "../../firebase";
import { useSelector, useDispatch } from "react-redux";
import { changeCover } from "../../store/modules/user/actions";
import ReactLoading from "react-loading";
import { IoMdPhotos } from "react-icons/io";
import { Container } from "./styles";

export default function Cover() {
  const { cover } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const coverRef = useRef(null);

  const handleImage = (e) => {
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
              dispatch(changeCover(url));
              setLoading(false);
              db.collection("perfil").doc("images").update({ cover: url });
            });
        }
      );
    }
  };
  return (
    <Container>
      <div>
        {loading ? (
          <div className="loading">
            <ReactLoading
              className="loading spinner"
              type="spinningBubbles"
              color="#9a9a9a"
              height="50px"
              width="50px"
            />
          </div>
        ) : (
          <>
            <div
              className="changeCover"
              onClick={() => coverRef.current.click()}
            >
              <p>
                <IoMdPhotos />
                Change the cover photo
              </p>
            </div>

            <img src={cover} alt="cover" />
          </>
        )}
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
