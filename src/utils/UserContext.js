const { createContext } = require("react");

// Creating a context data which can be used globaly in the app.
const UserContext = createContext({
    loggedInUser: "Default User",
});

export default UserContext;