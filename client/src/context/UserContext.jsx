import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = (user) => {
    const [user, setUser] = userState(null);

    const updateUser = (user) => {
        setUser(user);
    };

    const value = {
        user,
        updateUser,
    };

    return <UserContext.Provider value={value}>{props.children}</UserContext.Provider>;
};

const useUser = () => {
    const context = useContext(UserContext);

    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }

    return context;
};

export { UserProvider, useUser };
