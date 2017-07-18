// actions called by sagas

/**
 * Sets the authentication state of the application
 * @param  {boolean} newAuthState True means a user is logged in, false means no user is logged in
 */
export const setAuthState = (newAuthState) => ({
  type: 'auth/setAuthState',
  payload: newAuthState, 
})


