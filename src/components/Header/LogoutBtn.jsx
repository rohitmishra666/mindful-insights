import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
  const nav = useNavigate()
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
    nav('/login');
  };
  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-400 rounded-full mr-2"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
