import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export let titlePrint = ""; // default
function UsePageTitle() {
  const location = useLocation();

  useEffect(() => {
    titlePrint = "কুরআন শিক্ষা - " + location.pathname.split("/").pop() + " - " + "RAReAcademy.site";
    document.title = titlePrint;
  }, [location.pathname]);
}

export default UsePageTitle;
