import React from "react";

export type User = {email: string, loggedIn: boolean};

const UserContext = React.createContext({user: {email: "", loggedIn: false}, setUser: (auth: User) => {}});

export { UserContext };