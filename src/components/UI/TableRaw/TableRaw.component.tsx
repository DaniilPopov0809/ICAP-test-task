import TableAction from "../TableAction/TableAction.component";
import { ITable } from "../../../types/table";


export const TableRaw = ({
  id,
  name,
  email,
  birthday_date,
  phone_number,
  address
}: ITable) => (
  <tr>
    <td headers="name">{name}</td>
    <td headers="email">{email}</td>
    <td headers="birthday_date">{birthday_date}</td>
    <td headers="phone_number">{phone_number}</td>
    <td headers="address">{address}</td>
    <td headers="action">
      <TableAction id={id} />
    </td>
  </tr>
);
