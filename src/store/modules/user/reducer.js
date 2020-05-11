import produce from "immer";
import Avatar from "../../../assets/images/avatar.png";
const INITIAL_STATE = {
  name: "willian Meswko",
  bio: "Software developer",
  userName: "Mesko",
  avatar:
    "https://firebasestorage.googleapis.com/v0/b/firacode-twitter.appspot.com/o/images%2F26778884.jpeg?alt=media&token=d2d396a0-5cf0-434d-a048-dea78af79d7c",
  cover: "https://coverfiles.alphacoders.com/577/57739.png",
  tweets: [
    { id: 0, text: "novo twite", likes: 0, comments: 0, replies: 0 },
    { id: 1, text: "novo www", likes: 0, comments: 0, replies: 0 },
    { id: 2, text: "novo w", likes: 0, comments: 0, replies: 0 },
  ],
  tweetsCount: 3,
  followers: 42,
  following: 42,
  favorites: 42,

  suggestUsers: [
    { id: 0, avatar: Avatar, name: "RENA", userName: "@renat" },
    { id: 1, avatar: Avatar, name: "RENAr", userName: "@renttat" },
    { id: 2, avatar: Avatar, name: "RENrA", userName: "@ren44t" },
    { id: 3, avatar: Avatar, name: "RENA", userName: "@renat" },
    { id: 4, avatar: Avatar, name: "RENAr", userName: "@renttat" },
    { id: 5, avatar: Avatar, name: "RENrA", userName: "@ren44t" },
  ],

  medias: [
    {
      id: 0,
      image:
        "https://firebasestorage.googleapis.com/v0/b/firacode-twitter.appspot.com/o/images%2F26778884.jpeg?alt=media&token=d2d396a0-5cf0-434d-a048-dea78af79d7c",
    },
    {
      id: 1,
      image:
        "https://firebasestorage.googleapis.com/v0/b/firacode-twitter.appspot.com/o/images%2F26778884.jpeg?alt=media&token=d2d396a0-5cf0-434d-a048-dea78af79d7c",
    },
    {
      id: 2,
      image:
        "https://firebasestorage.googleapis.com/v0/b/firacode-twitter.appspot.com/o/images%2F26778884.jpeg?alt=media&token=d2d396a0-5cf0-434d-a048-dea78af79d7c",
    },
    {
      id: 3,
      image:
        "https://firebasestorage.googleapis.com/v0/b/firacode-twitter.appspot.com/o/images%2F26778884.jpeg?alt=media&token=d2d396a0-5cf0-434d-a048-dea78af79d7c",
    },
    {
      id: 4,
      image:
        "https://firebasestorage.googleapis.com/v0/b/firacode-twitter.appspot.com/o/images%2F26778884.jpeg?alt=media&token=d2d396a0-5cf0-434d-a048-dea78af79d7c",
    },
    {
      id: 5,
      image:
        "https://firebasestorage.googleapis.com/v0/b/firacode-twitter.appspot.com/o/images%2F26778884.jpeg?alt=media&token=d2d396a0-5cf0-434d-a048-dea78af79d7c",
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
        draft.tweetsCount = draft.tweets.length;
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

      default:
    }
  });
}
