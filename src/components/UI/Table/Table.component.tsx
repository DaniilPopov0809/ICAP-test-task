// import { TodoRaw } from '../TodoRaw';
// import { ITodosProps } from '../../../../types/todo.types';
// import { Table, Th, Thead } from './TodoTable.styled';
import { useAppDispatch } from "../../../hooks/redux";
// import { useSelector } from "react-redux";
import { tableOperation } from "../../../redux/table/operations";

const Table = () => {
  const dispatch = useAppDispatch();
  dispatch(tableOperation.getTable());
  return (
    <table>
      <thead>
        <tr>
          <th id="title" scope="col">
            Todo Title
          </th>
          <th id="description" scope="col">
            Description
          </th>
          <th id="action" scope="col">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {/* {todos?.map((todo) => (
        <TodoRaw
          key={todo.id}
          id={todo.id}
          title={todo.title}
          description={todo.description}
          complete={todo.complete}
        />
      ))} */}
      </tbody>
    </table>
  );
}

export default Table;