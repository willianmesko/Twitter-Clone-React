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

export function followUser(id) {
  return {
    type: "@user/FOLLOW_USER",
    payload: { id },
  };
}

export function refreshSuggestUser() {
  return {
    type: "@user/REFRESH_SUGGEST_USER",
  };
}
export function likeTweet(id) {
  return {
    type: "@user/LIKE_TWEET",
    payload: { id },
  };
}
