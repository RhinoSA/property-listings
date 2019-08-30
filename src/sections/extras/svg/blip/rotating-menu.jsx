import React, { useState } from "react";

const RotatingMenu = () => {
  const [menuOneStatus, setMenuOneStatus] = useState("menu-item item-01");
  const [menuOneInfo, setMenuOneInfo] = useState("overlay-info");
  const [menuTwoStatus, setMenuTwoStatus] = useState("menu-item item-02");
  const [menuThreeStatus, setMenuThreeStatus] = useState("menu-item item-03");
  const [menuFourStatus, setMenuFourStatus] = useState("menu-item item-04");
  const [menuFiveStatus, setMenuFiveStatus] = useState("menu-item item-05");
  const handleClick01 = () => {
    if (menuOneStatus === "menu-item item-01") {
      setMenuOneStatus("menu-item item-01 active");
      setMenuOneInfo("overlay-info active");
      setMenuTwoStatus("menu-item item-02");
      setMenuThreeStatus("menu-item item-03");
      setMenuFourStatus("menu-item item-04");
      setMenuFiveStatus("menu-item item-05");
    } else if (menuOneStatus === "menu-item item-01 active") {
      setMenuOneStatus("menu-item item-01");
      setMenuOneInfo("overlay-info");
    }
  };
  const handleClick02 = () => {
    if (menuTwoStatus === "menu-item item-02") {
      setMenuOneStatus("menu-item item-01");
      setMenuTwoStatus("menu-item item-02 active");
      setMenuThreeStatus("menu-item item-03");
      setMenuFourStatus("menu-item item-04");
      setMenuFiveStatus("menu-item item-05");
    } else if (menuTwoStatus === "menu-item item-02 active") {
      setMenuTwoStatus("menu-item item-02");
    }
  };
  const handleClick03 = () => {
    if (menuThreeStatus === "menu-item item-03") {
      setMenuOneStatus("menu-item item-01");
      setMenuTwoStatus("menu-item item-02");
      setMenuThreeStatus("menu-item item-03 active");
      setMenuFourStatus("menu-item item-04");
      setMenuFiveStatus("menu-item item-05");
    } else if (menuThreeStatus === "menu-item item-03 active") {
      setMenuThreeStatus("menu-item item-03");
    }
  };
  const handleClick04 = () => {
    if (menuFourStatus === "menu-item item-04") {
      setMenuOneStatus("menu-item item-01");
      setMenuTwoStatus("menu-item item-02");
      setMenuThreeStatus("menu-item item-03");
      setMenuFourStatus("menu-item item-04 active");
      setMenuFiveStatus("menu-item item-05");
    } else if (menuFourStatus === "menu-item item-04 active") {
      setMenuFourStatus("menu-item item-04");
    }
  };
  const handleClick05 = () => {
    if (menuFiveStatus === "menu-item item-05") {
      setMenuOneStatus("menu-item item-01");
      setMenuTwoStatus("menu-item item-02");
      setMenuThreeStatus("menu-item item-03");
      setMenuFourStatus("menu-item item-04");
      setMenuFiveStatus("menu-item item-05 active");
    } else if (menuFiveStatus === "menu-item item-05 active") {
      setMenuFiveStatus("menu-item item-05");
    }
  };
  const infoItemOne = () => {
    return <div className={menuOneInfo}>Info item one...</div>;
  };
  return (
    <React.Fragment>
      {menuOneStatus === "menu-item item-01 active" ? infoItemOne() : null}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 157.844 157.844"
        className="rotating-menu"
      >
        <g>
          <circle
            className={menuOneStatus}
            cx="26.422"
            cy="78.922"
            r="15.922"
            onClick={handleClick01}
          />
          <circle
            className={menuTwoStatus}
            cx="44.728"
            cy="44.728"
            r="15.922"
            onClick={handleClick02}
          />
          <circle
            className={menuThreeStatus}
            cx="78.922"
            cy="26.422"
            r="15.922"
            onClick={handleClick03}
          />
          <circle
            className={menuFourStatus}
            cx="113.116"
            cy="44.728"
            r="15.922"
            onClick={handleClick04}
          />
          <circle
            className={menuFiveStatus}
            cx="131.422"
            cy="78.922"
            r="15.922"
            onClick={handleClick05}
          />
        </g>
      </svg>
    </React.Fragment>
  );
};

export default RotatingMenu;
