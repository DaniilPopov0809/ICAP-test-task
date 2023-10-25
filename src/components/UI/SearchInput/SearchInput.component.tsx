import { useState, useEffect } from 'react';
import { useDebounce } from 'usehooks-ts';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { selectFilter } from '../../../redux/table/tableSelectors';
import { filterTable } from '../../../redux/table/filterSlice';

const SearchInput = () => {
  const filter = useAppSelector(selectFilter);
  const dispath = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState(filter);

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    dispath(filterTable(debouncedSearchTerm));
  }, [debouncedSearchTerm, dispath]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default SearchInput;