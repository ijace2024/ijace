export const TOKEN_KEY = "JWT_TOKEN"; // ✅ Single source of truth

export const saveToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
};

export const isLoggedIn = () => !!getToken();

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem("USER_DATA"); // ✅ clear user info too
};