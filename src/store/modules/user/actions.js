export function changeAvatar(url) {
  return {
    type: "@user/CHANGE_AVATAR",
    payload: { url },
  };
}

export function changeCover(url) {
  return {
    type: "@user/CHANGE_COVER",
    payload: { url },
  };
}

export function NewTweet(tweet) {
  return {
    type: "@user/NEW_TWEET",
    payload: { tweet },
  };
}
