import { useState, useEffect } from 'react';
import { Pagination } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../../hooks/redux";
import { selectCountTable, selectVisibleRaw } from "../../../redux/table/tableSelectors";
import { tableOperation } from '../../../redux/table/operations';
import styles from "./PaginationTable.module.scss";


const PaginationTable = () => {
    const count = useAppSelector(selectCountTable);
    const visibleData = useAppSelector(selectVisibleRaw);
    const dispatch = useAppDispatch();
    const limit = 10;
    const [page, setPage] = useState(1);
    const countPages = Math.ceil(count ? count / limit : 0);

    const handlePageChange = (page: number) => {
        setPage(page);
    };

    useEffect(() => {
        const newOffset = (page - 1) * limit;
        dispatch(tableOperation.getTable({ limit, offset: newOffset }));
    }, [dispatch, page, limit]);


    return visibleData.length !== 0 && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className={styles.pagination__wrap}>
                <Pagination
                    count={countPages}
                    shape="rounded"
                    variant='text'
                    page={page}
                    color='standard'
                    onChange={(event, currentPage) => {
                        console.log(event);
                        handlePageChange(currentPage);
                    }}
                />
            </div >
        </div>
    );
}

export default PaginationTable;