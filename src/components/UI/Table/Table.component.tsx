import { TableRaw } from "../TableRaw/TableRaw.component";
// import { ITodosProps } from '../../../../types/todo.types';
// import { Table, Th, Thead } from './TodoTable.styled';
import {useEffect} from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { tableOperation } from "../../../redux/table/operations";
import { selectDataTable } from "../../../redux/table/tableSelectors";


const Table = () => {
  const dispatch = useAppDispatch();
  const tableData = useAppSelector(selectDataTable);

  useEffect(() => {
    dispatch(tableOperation.getTable());
  }, [dispatch]);

  return (
    <table>
      <thead>
        <tr>
          <th id="name" scope="col">
            Name
          </th>
          <th id="email" scope="col">
            Email
          </th>
          <th id="birthdayDate" scope="col">
          Birthday
          </th>
          <th id="phoneNumber" scope="col">
          Phone
          </th>
          <th id="address" scope="col">
          Address
          </th>
          <th id="action" scope="col">
          Action
          </th>
        </tr>
      </thead>
      <tbody>
        {tableData?.map((data) => (
        <TableRaw
          key={data.id}
          id={data.id}
          name={data.name}
          email={data.email}
          birthday_date={data.birthday_date}
          phone_number={data.phone_number}
          address={data.address}
        />
      ))}
      </tbody>
    </table>
  );
}

export default Table;