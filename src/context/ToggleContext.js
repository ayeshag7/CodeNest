import { createContext, useContext, useReducer } from "react";
import { toggleReducer } from "../reducer/toggleReducer";

const initialState = {
    toggle: false
};

const ToggleContext = createContext(initialState);

export const ToggleProvider = ({children}) => {

    const [state, dispatch] = useReducer(toggleReducer, initialState);

    const toggleState = () => {
        const updatedState = !state.toggle;
        dispatch({
            type: "TOGGLE_STATE",
            payload: {
                toggleState: updatedState
            }
        })
    };

    const value = {
        toggle: state.toggle,
        toggleState
    };

    return (
        <ToggleContext.Provider value={value}>
            {children}
        </ToggleContext.Provider>
    )
};


export const useToggle = () => {
    return useContext(ToggleContext)
};
