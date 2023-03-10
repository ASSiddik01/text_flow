import React, { useState } from "react";
import Image from "next/image";
import minilogo from "./../public/images/logo.png";
import fulllogo from "./../public/images/full_logo.png";
import moment from "moment";
import { MdKeyboardArrowDown } from "react-icons/md";
import UserProfile from "@/components/UserProfile";

const Header = () => {
  // clock
  const date = moment().format("dddd, Do MMM YYYY");
  let time = moment().format("h:mm:ss A");
  const [cTime, setCTime] = useState("");
  const updateTime = () => {
    time = moment().format("h:mm:ss A");
    setCTime(time);
  };
  setInterval(updateTime, 1000);

  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className=" bg-main-dark-bg  flex justify-between items-center py-1 px-3">
      <div className="logo">
        {/* Mini Logo */}
        {/* <Image
          className=""
          src={minilogo}
          width={50}
          height={50}
          alt="mini logo"
        /> */}
        {/* Full Logo */}
        <Image
          className=""
          src={fulllogo}
          width={200}
          height={50}
          alt="mini logo"
        />
      </div>
      <div className="clock text-sm text-custom_color flex flex-col text-center">
        <span> {date} </span>
        <span> {cTime} </span>
      </div>
      <div className="preferences flex gap-[20px] items-center justify-center">
        <input
          type="checkbox"
          className="toggle toggle-success"
          defaultChecked
        />
        <div
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-secondary-dark-bg rounded-lg"
          onClick={() => setIsClicked(!isClicked)}
        >
          <div className="avatar">
            <div className="w-[30px] rounded-lg">
              <Image
                src={`https://i.ibb.co/MgsTCcv/avater.jpg`}
                width={50}
                height={50}
                alt="active user"
              />
            </div>
          </div>
          <div className="flex">
            <span className="text-[16px]">Hi,</span>{" "}
            <p className="font-medium ml-1 text-[16px] text-custom_color">
              Abu Shama
            </p>
          </div>
          <MdKeyboardArrowDown className="text-[16px]" />
        </div>
      </div>
      {isClicked && <UserProfile setIsClicked={setIsClicked} />}
    </div>
  );
};

export default Header;
