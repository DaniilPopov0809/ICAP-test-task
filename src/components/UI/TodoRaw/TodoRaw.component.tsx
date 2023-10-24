import { TodoAction } from '../../common/TodoAction';
import { ITodo } from '../../../../types/todo.types';

export const TodoRaw = ({
  id,
  name,
  gender,
  email
}) => (
  <tr>
    <td headers="name">{name}</td>
    <td headers="gender">{gender}</td>
    <td headers="email">{email}</td>
    <td headers="action">
      <TodoAction id={id} />
    </td>
  </tr>
);
