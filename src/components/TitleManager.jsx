import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";


function UsePageTitle() {
  const location = useLocation();

  useEffect(() => {
    let title = "RAReAcademy.site"; // default
    document.title = "কুরআন শিক্ষা - " +location.pathname.split("/").pop() + "-" + title;
  }, [location.pathname]);
}

export default UsePageTitle;
