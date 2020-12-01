import React, { createContext, useState } from "react";

const NavToggleContext = createContext();
function NavToggleContextProvider({ children }) {
  const [isTogglerActive, setTogglerActive] = useState(false);

  // return provider
  return (
    <NavToggleContext.Provider value={{ isTogglerActive, setTogglerActive }}>
      {children}
    </NavToggleContext.Provider>
  );
}

export { NavToggleContextProvider, NavToggleContext };
