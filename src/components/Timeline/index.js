import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Container, Tweets, Tweet } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { setTweetsCount } from "../../store/modules/user/actions";
import Comments from "../../assets/icons/comments.svg";
import Retweets from "../../assets/icons/retweet.svg";
import Like from "../../assets/icons/like.svg";
import Liked from "../../assets/icons/liked.svg";
export default function Timeline() {
  const dispatch = useDispatch();
  const { name, userName, avatar, medias } = useSelector((state) => state.user);
  const [tweets, setTweets] = useState([]);
  const [visible, setVisible] = useState(6);

  useEffect(() => {
    db.collection("tweets")
      .orderBy("created", "desc")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setTweets(data);
        dispatch(setTweetsCount(data.length));
      });
  }, [tweets]);

  const likeTweet = (id) => {
    const tweetRef = db.collection("tweets").doc(id);
    tweetRef.get().then((doc) => {
      tweetRef.update({
        likes: doc.data().likes === 0 ? 1 : 0,
      });
    });
  };

  return (
    <Container>
      <Tabs>
        <nav>
          <TabList>
            <Tab>Tweets</Tab>

            <Tab>Medias</Tab>
          </TabList>
        </nav>
        <TabPanel>
          <Tweets>
            {tweets &&
              tweets.slice(0, visible).map((tweet) => (
                <Tweet key={tweet.id}>
                  <img src={avatar} alt="Avatar" />
                  <div className="info">
                    <strong>
                      {name} <span>@{userName}</span>
                    </strong>
                    <p>{tweet.text}</p>
                    <div className="actions">
                      <p>
                        <img src={Comments} alt="Comments" />
                        {tweet.comments}
                      </p>
                      <p>
                        <img src={Retweets} alt="Retweet" /> {tweet.retweets}
                      </p>
                      <p onClick={() => likeTweet(tweet.id)}>
                        <img src={tweet.likes > 0 ? Liked : Like} alt="Likes" />{" "}
                        {tweet.likes}
                      </p>
                    </div>
                  </div>
                </Tweet>
              ))}
            {visible < tweets.length && (
              <button onClick={() => setVisible(visible + 5)}>
                Loading More
              </button>
            )}
          </Tweets>
        </TabPanel>

        <TabPanel>
          <div className="medias">
            <ul>
              {medias &&
                medias.slice(0, visible - 2).map((media) => (
                  <li key={media.id}>
                    <img src={media.image} alt={media.image} />
                  </li>
                ))}
            </ul>
          </div>
          {visible < medias.length && (
            <button onClick={() => setVisible(visible - 2 + 3)}>
              Loading More
            </button>
          )}
        </TabPanel>
      </Tabs>
    </Container>
  );
}
