import Table from "../../components/UI/Table/Table.component";
import AppBar from "../../components/UI/AppBar/AppBar";
import PaginationTable from "../../components/UI/PaginationTable/PaginationTable";

const Home = () => {
    return (
        <div className="container">
            <AppBar />
            <Table />
            <PaginationTable />
        </div>
    )
}

export default Home;