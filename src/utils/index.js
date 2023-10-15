import { toast } from "react-toastify";

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const shortenText = (text, n) => {
  if (text.length > n) {
    const shoretenedText = text.substring(0, n).concat("...");
    return shoretenedText;
  }
  return text;
};

export const getAccessToken = () => {
  return localStorage.getItem("access_token")
    ? JSON.parse(localStorage.getItem("access_token"))
    : null;
};

export const getRefreshToken = () => {
  return localStorage.getItem("refresh_token")
    ? JSON.parse(localStorage.getItem("refresh_token"))
    : null;
};

export const clearAllToken = () => {
  // Clear access_token
  localStorage.removeItem("refresh_token");
  // Clear refresh_token
  localStorage.removeItem("access_token");
};

export const showError = (err) => {
  Object.entries(err?.response?.data?.errors)?.forEach(([_, value]) => {
    console.log({ value });
    toast.error(value.msg);
  });
};
