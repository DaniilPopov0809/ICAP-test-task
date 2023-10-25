import { Button } from '@mui/material';
import { useAppDispatch } from '../../../hooks/redux';
import { useAppContext } from '../../../hooks/useAppContext';
import { tableOperation } from '../../../redux/table/operations';
import MainModal from '../MainModal/MainModal';
import TableForm from '../TableForm/TableForm.component';
import styles from './TableAction.module.scss';

interface ITableActionProps {
  id: number;
}

const TableAction = ({ id }: ITableActionProps) => {
  const dispatch = useAppDispatch();
  const { isModalOpen, setIsModalOpen, isEdit, setIsEdit } = useAppContext(); 

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleClickEdit = async () =>{
    await dispatch(tableOperation.getById(id));
    await setIsEdit(true);
    setIsModalOpen(true);
  }

  return (
    <>
      <div className={styles.action__wrap}>
        <Button
          variant="contained" color="success"
          onClick={()=> handleClickEdit()}
          style={{ marginRight: '12px' }}
        >
          Edit
        </Button>
        <Button variant="contained" color='success' onClick={() => dispatch(tableOperation.removeFromTable(id))}>
          Delete
        </Button>
      </div>
      <MainModal open={isModalOpen} onClose={handleCloseModal} children={<TableForm isEdit={isEdit} onClose={handleCloseModal}/>}/>
    </>
  );
};

export default TableAction;