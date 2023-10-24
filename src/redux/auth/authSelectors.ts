export const selectIsLoggedIn = (state: { auth: { isLoggedIn: boolean } }) => state.auth.isLoggedIn;
export const selectStatusLogin = (state: { auth: { status: string} }) => state.auth.status;