import React from "react";
import { Outlet } from "react-router-dom";
const CareersLayout = () => {
  return (
    <div>
      <h2>Career</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor debitis
        aut molestiae aperiam optio tempore eaque cum quia maxime sint.
      </p>
      <Outlet />
    </div>
  );
};

export default CareersLayout;
