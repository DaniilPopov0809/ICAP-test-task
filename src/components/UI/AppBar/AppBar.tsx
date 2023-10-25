import { Button } from "@mui/material";
import { useAppContext } from '../../../hooks/useAppContext';
import MainModal from "../MainModal/MainModal";
import TableForm from "../TableForm/TableForm.component";
import  SearchInput from "../SearchInput/SearchInput.component";

const AppBar = () => {
    const { isModalOpen, setIsModalOpen, isEdit, setIsEdit } = useAppContext();

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleOpenModal = () => {
        setIsEdit(false);
        setIsModalOpen(true);
    }
    return (
        <>
        <div>
            <Button variant="contained" color='success' onClick={() => handleOpenModal()}>
                Add
            </Button>
            <SearchInput/>
        </div>
        <MainModal open={isModalOpen} onClose={handleCloseModal} children={<TableForm isEdit={isEdit} onClose={handleCloseModal} />} />
        </>
    )
}

export default AppBar;