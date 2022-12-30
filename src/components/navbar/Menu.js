import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Icons } from "../../constant/Icons";
import { menu } from "../../data/Data";
import { closeMenu } from "../../store/mobileSlice";



const Menu = () => {
  const dispatch = useDispatch();

  const activeLink = 'text-[#FC8200]';
  const normalLink = "";

  return (
    <aside className="mobilemenu block sm:block md:block lg:hidden">
      <button
        type="button"
        className="menu__button__close"
        onClick={() => dispatch(closeMenu())}
      >
        <Icons.MenuClose />
      </button>
      <div className="">
        <div className="text-xl font-semibold pb-[1rem] hidden ">Menu</div>
        <ul className="menu__list mt-[4.6rem]">
          {menu.map((menu, id) => (
            <li key={id} onClick={() => dispatch(closeMenu())}>
              <Link to={menu.path}
              className={({ isActive }) => isActive ? activeLink : normalLink }
              >
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Menu;
