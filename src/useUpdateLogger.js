import { useEffect } from "react";

export default function useUpdateLogger(value) {
    useEffect(() => {
        console.log('count', value);
    }, [value]);
}