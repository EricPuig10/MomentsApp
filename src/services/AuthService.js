
export const AuthService = {

  isAuthor(userId) {
    if (this.getAuthUser().id === userId) return false;
    return true;
  },

  isLogged(){
    const authJson = localStorage.getItem("auth")
      ? true
      : false;
    return authJson;
  },

  getAuthUser() {
    const authJson = localStorage.getItem("auth")
      ? localStorage.getItem("auth")
      : false;
    return JSON.parse(authJson);
  },

  saveAuthUser(authUser) {
    localStorage.setItem("auth", JSON.stringify(authUser));
  },

  isAuthUserInLove(moment) {
    if (!moment.faved) return false;
    return true;
  },
};
