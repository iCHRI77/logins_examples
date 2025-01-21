"use client"
import { useState } from "react";
import BasicLogin from "./Login/basicLogin";
import BoxedLogin from "./Login/boxedLogin";
import BoxedStyledLogin from "./Login/boxedStyledLogin";

export default function Home() {

  // Here we are using useState to change the view of the login page dynamically
  const [view, setView] = useState("basicLogin");
  const [showReturn, setShowReturn] = useState(false);

  return (
    <>
      <span id="buttons"></span>
      <div className="text-center p-4" style={{ backgroundColor: "#00B0F0" }}>
        <h1 className="text-3xl font-bold text-[#FFFFFF]">Change the view: </h1>
        <div className="justify-self-center text-center mt-4">

          <nav>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto gap-6">
              <li>
                <a href="#loginView" onClick={() => {
                  setView("basicLogin")
                  setShowReturn(true)
                }} className="text-md px-3 py-2 flex items-center uppercase font-bold leading-snug bg-[#3f967c] text-white hover:opacity-75">Basic login</a>
              </li>
              <li>
                <a href="#loginView" onClick={() => {
                  setView("boxedLogin")
                  setShowReturn(true)
                }} className="text-md px-3 py-2 flex items-center uppercase font-bold leading-snug bg-[#3f967c] text-white hover:opacity-75">Boxed login</a>
              </li>
              <li >
                <a href="#loginView" onClick={() => {
                  setView("boxedStyledLogin")
                  setShowReturn(true)
                }} className="text-md px-3 py-2 flex items-center uppercase font-bold leading-snug bg-[#3f967c] text-white hover:opacity-75">Boxed styled login</a>
              </li>
            </ul>
          </nav>

          <p className="mt-4 text-white">Click one of the above to watch new login page</p>
        </div>
      </div>

      {showReturn === true &&
        <a href="#buttons" className="flex justify-center fixed top-20 left-1/2 -translate-x-1/2  bg-[#3f967c] hover:bg-[#353535] text-white font-bold py-2 px-4 rounded-md mt-4" onClick={() => setShowReturn(false)} >Return</a>
      }

      {view === "basicLogin" && <BasicLogin />}
      {view === "boxedLogin" && <BoxedLogin />}
      {view === "boxedStyledLogin" && <BoxedStyledLogin />}
      <span id="loginView"></span>
    </>
  );
}
