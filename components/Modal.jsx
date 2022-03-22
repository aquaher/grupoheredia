import {useState, useEffect} from 'react';
import reactDom from 'react-dom';
import styles from '../styles/Modal.module.css';

export default function Modal({show,onClose,children,title}){
    const [inBrowser,setIsBrowser] = useState();

    useEffect(()=>{
        setIsBrowser(true);
    }, [])

    function handleClose(e){
        e.preventDefault();
        onClose();
    }

    const modalContent = show? (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <a className='close-button' onClick={handleClose}>
                        X
                    </a>
                </div>
                <div className={styles.body}>{children}</div>
                <div className={styles.footer}>
                    <a className={styles.asesor}>
                        Contactar asesor
                    </a>
                </div>
            </div>
        </div>
    ):null;

    if(inBrowser){
        return reactDom.createPortal(
            modalContent,
            document.getElementById('modal-root')
        );
    }else{
        return null
    }
}