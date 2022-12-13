import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import { useState } from "react";
import { Icons } from "../../constant/Icons";


// web menu version
export const WebMenu = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <>
      <Menu>
        <MenuHandler>
          <a href="#">
            <li >ABOUT</li>
          </a>
        </MenuHandler>
      </Menu>

      {/* WHAT WE DO */}
      <Menu>
        <MenuHandler>
          <a href="#">
            <li >WHAT WE DO</li>
          </a>
        </MenuHandler>
      </Menu>

      {/* PROJECTS */}
      <Menu
        placement="bottom"
        animate={{ mount: { y: 0 }, unmount: { y: 25 } }}
      >
        <MenuHandler
          className="flex items-center cursor-pointer"
          onClick={() => handleOpen(1)}
        >
          <li>
            PROJECT <Icons.TgDropdownIcon id={1} open={open} />
          </li>
        </MenuHandler>
        <MenuList className="mt-7 border-none">
          <MenuItem>Menu Item 1</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuHandler>
          <a href="/training">
            <li >TRAINING</li>
          </a>
        </MenuHandler>
      </Menu>
      <Menu>
        <MenuHandler>
          <a href="#">
            <li >CONTACT</li>
          </a>
        </MenuHandler>
      </Menu>
    </>
  );
};





export const MobileMenu = () => {
    const [open, setOpen] = useState(false);
  
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };
    return (
      <>
        <Menu>
          <MenuHandler>
            <a href="/about">
              <li variant="gradient">ABOUT</li>
            </a>
          </MenuHandler>
        </Menu>
        <Menu
          placement="bottom-right"
          animate={{ mount: { y: 0 }, unmount: { y: 25 } }}
        >
          <MenuHandler
            className="flex justify-between items-center pb-3 "
            onClick={() => handleOpen(1)}
          >
            <li>
              {" "}
              WHAT WE DO <Icons.TgDropdownIcon id={1} open={open} />
            </li>
          </MenuHandler>
        </Menu>
        <Menu>
          <MenuHandler>
            <a href="/pricing">
              <li variant="gradient">PROJECT</li>
            </a>
          </MenuHandler>
        </Menu>
        <Menu
          placement="bottom-right"
          animate={{ mount: { y: 0 }, unmount: { y: 25 } }}
        >
          <MenuHandler
            className="flex justify-between items-center pb-3"
            onClick={() => handleOpen(2)}
          >
            <li>
              {" "}
              TRAINING <Icons.TgDropdownIcon id={2} open={open} />
            </li>
          </MenuHandler>
        </Menu>
        <Menu>
          <MenuHandler>
            <a href="/login">
              <li variant="gradient">CONTACT</li>
            </a>
          </MenuHandler>
        </Menu>
      </>
    );
  };
  
