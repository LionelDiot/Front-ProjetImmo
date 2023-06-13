import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Notify = () => {

    const showToastSuccess = () => {
        toast.success('Success Notification !', {
            position: toast.POSITION.TOP_RIGHT
        })
    };
    const showToastError = () => {
        toast.error('Error Notification !', {
            position: toast.POSITION.TOP_CENTER
        });

    };
    const showToastWarning = () => {
        toast.warning('Warning Notification !', {
            position: toast.POSITION.TOP_LEFT
        });
    };

    const showToastInformation = () => {
        toast.info('Information Notification !', {
            position: toast.POSITION.BOTTOM_CENTER
        });
    };
    const showToastDefault = () => {
        toast('Default Notification !', {
            position: toast.POSITION.BOTTOM_LEFT
        });
    };

    const showToastCustom = () => {
        toast('Custom Style Notification with css class!', {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: 'foo-bar'
        });;
    };

    return (
        <>
            <div>
                <button onClick={showToastSuccess}>Success</button>
                <ToastContainer />
            </div>
            <div>
                <button onClick={showToastError}>Error</button>
                <ToastContainer />
            </div>
            <div>
                <button onClick={showToastWarning}>Warning</button>
                <ToastContainer />
            </div>
            <div>
                <button onClick={showToastInformation}>Information</button>
                <ToastContainer />
            </div>
            <div>
                <button onClick={showToastDefault}>Default</button>
                <ToastContainer />
            </div>
            <div>
                <button onClick={showToastCustom}>Custom</button>
                <ToastContainer />
            </div>
        </>
    );
};

export default Notify;