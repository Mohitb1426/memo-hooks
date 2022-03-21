import react, { useMemo, useState } from 'react';
import './App.css';
import useFetch from './hooks/useFetch';
import useLocalStorage from './hooks/useLocalStorage';
import useUpdateLogger from './hooks/useUpdateLogger';
import useToggle from './hooks/useToggle';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import usePrevious from './hooks/usePrevious';

function Memoized() {
    const [count, setCount] = useLocalStorage('count', 0);
    useUpdateLogger(count);
    const { response, error, loading } = useFetch('https://www.randomuser.me/api')
    const [show, toggleShow] = useToggle(true)
    const prevValue = usePrevious(count)
    const changeCount = () => {
        setCount((c) => c + 1);
    };
    const memoCalculation = useMemo(() => {
        return memoizedCalculation(count);
    }, [count]);
    console.log(response);
    return (
        <div className="App">
            <h1>useMemo {memoCalculation}</h1>
            <h2>customHook :{count} , PreviousValue:{prevValue} </h2>
            <button onClick={changeCount}>+</button>
            <Modal show={show} onClose={toggleShow}>
                <h1>Hello there</h1>
            </Modal>
            <Modal isOpen={show} toggle={toggleShow} >
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod t
                    empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggleShow}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
    function memoizedCalculation(num) {
        return num + 1;
    };
}

export default Memoized;
