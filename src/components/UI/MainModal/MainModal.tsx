import { ReactNode } from "react";
import { Modal, Button } from '@mui/material';
import styles from "./MainModal.module.scss";

interface IMainModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
}

const MainModal = ({ open, onClose, children }: IMainModalProps) => {
  
    return ( <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
        // style={{ maxHeight: 'inherit', top: '50%', left: '50%' }}
    >
        <div className={styles.modal__wrap}>
            <div >
                <Button variant="contained" color='success' onClick={onClose} style={{marginBottom: '20px'}}>
                    x
                </Button>
            </div>
            {children}
        </div>
    </Modal>)}

    export default MainModal;