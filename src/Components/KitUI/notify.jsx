import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showToastSuccess = () => {
    toast.success('Success Notification !', {
        position: toast.POSITION.TOP_RIGHT
    })
};

const showToastSuccessLogin = () => {
    toast.success('Sign up ok!', {
        position: toast.POSITION.TOP_RIGHT
    })
};

const showToastError = () => {
    toast.error('Error Notification !', {
        position: toast.POSITION.TOP_CENTER
    });
};

const showToastErrorLogin = () => {
    toast.error('Identifiants invalides !', {
        position: toast.POSITION.TOP_RIGHT
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

const Notify = () => {

    return (
        <>
            <div>
                <button onClick={showToastSuccess} className="hidden-button">Success</button>
                <ToastContainer />
            </div>
            <div>
                <button onClick={showToastSuccessLogin} className="hidden-button">Success</button>
                <ToastContainer />
            </div>
            <div>
                <button onClick={showToastErrorLogin} className="hidden-button">Error</button>
                <ToastContainer />
            </div>
            <div>
                <button onClick={showToastError} className="hidden-button">Error</button>
                <ToastContainer />
            </div>
            <div>
                <button onClick={showToastWarning} className="hidden-button">Warning</button>
                <ToastContainer />
            </div>
            <div>
                <button onClick={showToastInformation} className="hidden-button">Information</button>
                <ToastContainer />
            </div>
            <div>
                <button onClick={showToastDefault} className="hidden-button">Default</button>
                <ToastContainer />
            </div>
            <div>
                <button onClick={showToastCustom} className="hidden-button">Custom</button>
                <ToastContainer />
            </div>
        </>
    );
};

export default Notify;
export { showToastSuccessLogin, showToastErrorLogin }