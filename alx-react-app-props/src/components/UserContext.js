Checks for the use of context on the UserProfile.jsx file

src / components / UserProfile.jsx doesn't contain: ["useContext", "UserContext"]

ACTUAL CODE SCRIPT CONTENT

import { createContext } from 'react';

const UserContext = createContext();

export default UserContext;
