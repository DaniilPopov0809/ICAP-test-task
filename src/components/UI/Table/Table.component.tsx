import { TableRaw } from "../TableRaw/TableRaw.component";
import { useAppSelector } from "../../../hooks/redux";
import { selectVisibleRaw} from "../../../redux/table/tableSelectors";
import styles from "./Table.module.scss";


const Table = () => {
  const visibleRaw = useAppSelector(selectVisibleRaw);

  return visibleRaw.length === 0 ? (
    <p className={styles.notFound}>Not found</p>
  ) : (
    <div className={styles.wrap}>
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
        {visibleRaw?.map((data) => (
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
    </div>
  );
};

export default Table;