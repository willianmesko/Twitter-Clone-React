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
