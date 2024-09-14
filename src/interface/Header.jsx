import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getUserName, logoutUser } from "../features/user/userSlice";

import { Button } from "@/components/ui/button";

import { LogOut } from "lucide-react";

import todoLogo from "../../public/todo-logo.webp";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loginStatus, registerStatus, user } = useSelector(
    (store) => store.user
  );
  const currentUserName = useSelector(getUserName(user?.email));

  return (
    <header className="h-16 px-2 sm:px-8 grid grid-cols-2 sm:grid-cols-header-view items-center justify-between border-b border-gray-200 w-full">
      <h4 className="text-sm hidden sm:block md:text-lg font-semibold text-gray-800">
        {registerStatus === "registered" && `Welcome! ${user?.name}`}
        {loginStatus === "success" && `Welcome Back! ${currentUserName}`}
      </h4>
      <img
        src={todoLogo}
        alt="Todo List Logo"
        className="w-28 h-14 object-contain"
      />
      <Button
        variant="ghost"
        size="icon"
        className="w-5 h-5 hover:bg-transparent place-self-end self-center"
        onClick={() => {
          dispatch(logoutUser());
          navigate("/");
        }}
      >
        <LogOut size={20} strokeWidth={1.5} />
      </Button>
    </header>
  );
}

export default Header;
