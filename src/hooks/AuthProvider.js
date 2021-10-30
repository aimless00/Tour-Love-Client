import React, { createContext } from 'react';
import useFirebase from './useFirebase';


export const Authcontext = createContext();
const AuthProvider = ({ children }) => {
    const allConrext = useFirebase()
    return (
        <Authcontext.Provider value={allConrext}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;









// import React, { createContext } from 'react';
// import useFirebase from './useFirebase';




// export const Authcontext = createContext();

// const AuthProvider = ({ children }) => {
//     const allContext = useFirebase()
//     return (
//         <Authcontext.Provider value={allContext}>
//             {children}
//         </Authcontext.Provider>
//     );
// };

// export default AuthProvider;