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
        <div class="widget follow">
          <div class="title">
            <strong>Who to follow</strong>
            <a onClick={() => dispatch(refreshSuggestUser())}>Refresh</a>
            <a onClick={() => setVisible(visible + 3)}>View all</a>
          </div>

          <ul>
            {suggestUsers.slice(0, visible).map((user) => {
              return (
                <li>
                  <div class="profile">
                    <img src={user.avatar} alt="Avatar" />
                    <div class="info">
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
