"use client"

import { UserContext } from "../contexts/userContext";
import { useState } from "react";

export function LoginProvider({children}: {children: React.ReactNode}) {

  const [user, setUser] = useState({email: "", loggedIn: false});

  return <UserContext.Provider value={{user: user, setUser: setUser}} >
    {children}
    </UserContext.Provider>;
}