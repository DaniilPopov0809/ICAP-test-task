import { Button } from '@mui/material';
import { useAppDispatch } from '../../../hooks/redux';
import { tableOperation } from '../../../redux/table/operations';


interface ITableActionProps {
  id: number;
}

const TableAction = ({ id }: ITableActionProps) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <Button
          variant="contained" color="success"
          style={{ marginRight: '12px' }}
        >
          Edit
        </Button>
        <Button variant="contained" color='success' onClick={() => dispatch(tableOperation.removeFromTable(id))}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TableAction;