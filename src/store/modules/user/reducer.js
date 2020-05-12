import produce from "immer";
import Avatar from "../../../assets/images/avatar.png";
import Airplane from "../../../assets/images/airplane.jpeg";
import Ada from "../../../assets/images/ada.jpg";
const INITIAL_STATE = {
  name: "willian Mesko",
  bio: "Software developer",
  userName: "Mesko",
  link: "https://github.com/willianmesko/",
  avatar:
    "https://firebasestorage.googleapis.com/v0/b/firacode-twitter.appspot.com/o/images%2F26778884.jpeg?alt=media&token=d2d396a0-5cf0-434d-a048-dea78af79d7c",
  cover: "https://coverfiles.alphacoders.com/577/57739.png",
  tweets: [
    { id: 0, text: "novo twite", likes: 1, comments: 10, replies: 30 },
    { id: 1, text: "novo www", likes: 0, comments: 0, replies: 0 },
    { id: 2, text: "novo w", likes: 1, comments: 4, replies: 3 },
  ],

  followers: 42,
  following: 42,
  favorites: 42,

  suggestUsers: [
    { id: 0, avatar: Ada, name: "Ada", userName: "@lovelace" },
    { id: 1, avatar: Ada, name: "Ada", userName: "@lovelace" },
    { id: 2, avatar: Ada, name: "Ada", userName: "@lovelace" },
    { id: 3, avatar: Ada, name: "Ada", userName: "@lovelace" },
    { id: 4, avatar: Ada, name: "Ada", userName: "@lovelace" },
    { id: 5, avatar: Ada, name: "Ada", userName: "@lovelace" },
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
