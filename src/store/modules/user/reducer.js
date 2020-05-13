import produce from "immer";
import Avatar from "../../../assets/images/avatar.jpeg";
import Cover from "../../../assets/images/Cover.jpg";
import Alan from "../../../assets/images/Alan.jpg";
import Grace from "../../../assets/images/Grace.jpeg";
import Airplane from "../../../assets/images/airplane.jpeg";
import Ada from "../../../assets/images/ada.jpg";

const INITIAL_STATE = {
  name: "Willian Mesko",
  bio: "Software developer",
  userName: "Mesko",
  link: "https://github.com/willianmesko/",
  avatar: Avatar,
  cover: Cover,
  followers: 42,
  following: 42,
  favorites: 42,
  tweetsCount: 0,
  tweets: [
    {
      id: 0,
      text: "Testing my twiiter clone",
      likes: 1,
      comments: 2,
      retweets: 0,
    },
    {
      id: 1,
      text: "you can like this tweet",
      likes: 0,
      comments: 2,
      retweets: 0,
    },
    {
      id: 2,
      text: "change you avatar and cover photo",
      likes: 0,
      comments: 2,
      retweets: 0,
    },
    {
      id: 3,
      text: "and change your username in the profile page",
      likes: 0,
      comments: 2,
      retweets: 0,
    },
  ],
  suggestUsers: [
    { id: 0, avatar: Ada, name: "Ada", userName: "@lovelace" },
    { id: 1, avatar: Grace, name: "Grace", userName: "@hooper" },
    { id: 2, avatar: Alan, name: "Alan", userName: "@turing" },
    { id: 3, avatar: Ada, name: "Ada", userName: "@lovelace" },
    { id: 4, avatar: Grace, name: "Grace", userName: "@hooper" },
    { id: 5, avatar: Alan, name: "Alan", userName: "@turing" },
  ],

  medias: [
    {
      id: 0,
      image: Airplane,
    },
    {
      id: 1,
      image: Airplane,
    },
    {
      id: 2,
      image: Airplane,
    },
    {
      id: 3,
      image: Airplane,
    },
    {
      id: 4,
      image: Airplane,
    },
    {
      id: 5,
      image: Airplane,
    },
  ],
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@user/CHANGE_AVATAR": {
        draft.avatar = action.payload.url;
        break;
      }
      case "@user/CHANGE_COVER": {
        draft.cover = action.payload.url;
        break;
      }

      case "@user/SET_TWEETS": {
        draft.tweets.push(action.payload.tweets);

        break;
      }
      case "@user/NEW_TWEET": {
        draft.tweets.unshift(action.payload.tweet);

        break;
      }
      case "@user/LIKE_TWEET": {
        const index = draft.tweets.findIndex(
          (tweet) => tweet.id === action.payload.id
        );
        if (index > 0)
          draft.tweets[index].likes = draft.tweets[index].likes === 1 ? 0 : 1;

        break;
      }

      case "@user/FOLLOW_USER": {
        const index = draft.suggestUsers.findIndex(
          (user) => user.id === action.payload.id
        );

        if (index >= 0) {
          draft.suggestUsers.splice(index, 1);
          draft.following++;
        }
        break;
      }

      case "@user/REFRESH_SUGGEST_USER": {
        draft.suggestUsers = INITIAL_STATE.suggestUsers;
        break;
      }

      case "@user/UPDATE_PROFILE": {
        draft.name = action.payload.name;
        draft.userName = action.payload.username;
        draft.bio = action.payload.bio;
        draft.link = action.payload.link;

        break;
      }

      default:
    }
  });
}
