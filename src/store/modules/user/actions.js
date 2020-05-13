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

export function setTweets(tweets) {
  return {
    type: "@user/SET_TWEETS",
    payload: { tweets },
  };
}

export function newTweet(tweet) {
  return {
    type: "@user/NEW_TWEET",
    payload: { tweet },
  };
}

export function LikeTweet(id) {
  return {
    type: "@user/LIKE_TWEET",
    payload: { id },
  };
}
