const actions = {
  CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGOUT: 'LOGOUT',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_API: 'http://127.0.0.1:8000/api/',
  //LOGIN_API:'http://server.leagueofpharaohs.com/api/',
  //http://server.leagueofpharaohs.com
  checkAuthorization: () => ({ type: actions.CHECK_AUTHORIZATION }),
  login: (token = false) => ({
    type: actions.LOGIN_REQUEST,
    payload: { token },
  }),
  logout: () => ({
    type: actions.LOGOUT,
  }),
};
export default actions;
