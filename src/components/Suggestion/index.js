import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  followUser,
  refreshSuggestUser,
} from "../../store/modules/user/actions";
import { Container } from "./styles";

export default function Suggestion() {
  const dispatch = useDispatch();
  const { suggestUsers } = useSelector((state) => state.user);
  const [visible, setVisible] = useState(3);
  return (
    <Container>
      {suggestUsers.length > 0 && (
        <div className="widget follow">
          <div className="title">
            <strong>Who to follow</strong>
            <p onClick={() => dispatch(refreshSuggestUser())}>Refresh</p>
            <p onClick={() => setVisible(visible + 3)}>View all</p>
          </div>

          <ul>
            {suggestUsers.slice(0, visible).map((user) => {
              return (
                <li key={user.id}>
                  <div className="profile">
                    <img src={user.avatar} alt="Avatar" />
                    <div className="info">
                      <strong>
                        {user.name} <span>{user.userName}</span>
                      </strong>
                      <button onClick={() => dispatch(followUser(user.id))}>
                        Follow
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </Container>
  );
}
