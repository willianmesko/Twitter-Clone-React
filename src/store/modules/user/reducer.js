import produce from "immer";
import Alan from "../../../assets/images/Alan.jpg";
import Grace from "../../../assets/images/Grace.jpeg";

import Airplane from "../../../assets/images/airplane.jpeg";
import Ada from "../../../assets/images/ada.jpg";
import Cover from "../../../assets/images/Cover.jpg";
const INITIAL_STATE = {
  name: "willian Mesko",
  bio: "Software developer",
  userName: "Mesko",
  link: "https://github.com/willianmesko/",
  avatar:
    "https://firebasestorage.googleapis.com/v0/b/firacode-twitter.appspot.com/o/images%2F26778884.jpeg?alt=media&token=d2d396a0-5cf0-434d-a048-dea78af79d7c",
  cover: Cover,
  tweets: [
    {
      id: 0,
      text: "Testing my twitter clone",
      likes: 1,
      comments: 10,
      replies: 30,
    },
    {
      id: 1,
      text: "you can like this tweet",
      likes: 0,
      comments: 0,
      replies: 0,
    },
    {
      id: 2,
      text: "change profile and cover photo",
      likes: 1,
      comments: 4,
      replies: 3,
    },
    {
      id: 3,
      text:
        "change your username on the profile page /profile, and follow the users in the suggestion box",
      likes: 1,
      comments: 4,
      replies: 3,
    },
    {
      id: 4,
      text: "... and access your photos in the media tab",
      likes: 0,
      comments: 0,
      replies: 0,
    },
  ],

  followers: 42,
  following: 42,
  favorites: 42,

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

      case "@user/NEW_TWEET": {
        draft.tweets.push(action.payload.tweet);
        const index = draft.tweets.length - 1;
        draft.tweets[index].comments = 0;
        draft.tweets[index].likes = 0;
        draft.tweets[index].replies = 0;

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
      case "@user/LIKE_TWEET": {
        const index = draft.tweets.findIndex(
          (tweet) => tweet.id === action.payload.id
        );

        if (index >= 0) {
          draft.tweets[index].likes = draft.tweets[index].likes === 1 ? 0 : 1;
        }
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
