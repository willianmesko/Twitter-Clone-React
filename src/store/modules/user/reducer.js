import produce from "immer";

const INITIAL_STATE = {
  name: "willian Meswko",
  bio: "Software developer",
  userName: "Mesko",
  avatar:
    "https://firebasestorage.googleapis.com/v0/b/firacode-twitter.appspot.com/o/images%2F26778884.jpeg?alt=media&token=d2d396a0-5cf0-434d-a048-dea78af79d7c",
  cover: "",
  tweets: [
    { id: 0, text: "novo twite", likes: 0, comments: 0, replies: 0 },
    { id: 1, text: "novo www", likes: 0, comments: 0, replies: 0 },
    { id: 2, text: "novo w", likes: 0, comments: 0, replies: 0 },
  ],
  tweetsCount: 3,
  followers: 42,
  following: 42,
  favorites: 42,
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
      default:
    }
  });
}
