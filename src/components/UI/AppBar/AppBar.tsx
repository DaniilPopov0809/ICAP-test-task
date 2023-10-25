import { Button } from "@mui/material";
import { useAppContext } from '../../../hooks/useAppContext';
import MainModal from "../MainModal/MainModal";
import TableForm from "../TableForm/TableForm.component";

const AppBar = () => {
    const { isModalOpen, setIsModalOpen, isEdit, setIsEdit } = useAppContext(); 
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  
    const handleOpenModal = async () =>{
       await setIsEdit(false);
      setIsModalOpen(true);
    }
    return (
        <div>
            <Button variant="contained" color='success' onClick={() => handleOpenModal()}>
          Add
        </Button>
        <MainModal open={isModalOpen} onClose={handleCloseModal} children={<TableForm isEdit={isEdit} onClose={handleCloseModal}/>}/>
        </div>
    )
}

export default AppBar;