import { useState, useEffect } from 'react';

function getSavedValue(key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if (savedValue) return savedValue;
    if (initialValue instanceof Function) return initialValue();
    return initialValue;
}
export default function useLocalStorage(key, initialValue) {
    debugger;
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue);
    });
    useEffect(() => {
        debugger;
        localStorage.setItem(key ,JSON.parse(value));
    },[value]);
    return [value, setValue];
}