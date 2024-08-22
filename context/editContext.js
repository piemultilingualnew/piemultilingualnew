// EditContext.js
import { createContext, useContext, useState, useEffect } from 'react';
const EditContext = createContext();

export const EditProvider = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const shouldShowBlock = localStorage.getItem('showBlock') === 'true';
        setIsVisible(shouldShowBlock);
        
    }, []);

    const toggleBlock = () => {
        // Toggle the visibility of the block
        const updatedVisibility = !isVisible;
        setIsVisible(updatedVisibility);

        // Save the state in local storage
        localStorage.setItem('showBlock', updatedVisibility.toString());
    };
    const toggleEdit = () => {
        const updatedVisibility = true;
        setIsVisible(true);
        localStorage.setItem('showBlock', updatedVisibility.toString());
    };

    return (
        <EditContext.Provider value={{ isVisible, toggleEdit, toggleBlock }}>
            {children}
        </EditContext.Provider>
    );
};

export const useEdit = () => {
    return useContext(EditContext);
};
