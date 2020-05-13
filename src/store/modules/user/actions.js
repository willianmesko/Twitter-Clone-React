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

export function updateProfile(name, username, bio, link) {
  return {
    type: "@user/UPDATE_PROFILE",
    payload: { name, username, bio, link },
  };
}

export function setTweetsCount(count) {
  return {
    type: "@user/SET_TWEETS_COUNT",
    payload: { count },
  };
}
