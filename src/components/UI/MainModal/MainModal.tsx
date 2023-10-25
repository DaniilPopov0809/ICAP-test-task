import { ReactNode } from "react";
import { Modal, Button } from '@mui/material';

interface IMainModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
}

const MainModal = ({ open, onClose, children }: IMainModalProps) => (
    <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
        style={{ maxHeight: 'inherit' }}
    >
        <div>
            <div>
                <Button variant="contained" color='success' onClick={onClose}>
                    x
                </Button>
            </div>
            {children}
        </div>
    </Modal>)

    export default MainModal;