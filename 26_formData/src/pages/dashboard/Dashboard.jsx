import Button from "@mui/material/Button";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";

function Dashboard() {
    return (
        <>
            <Helmet>
                <title>Панель керування</title>
            </Helmet>
            <Link to="books">
                <Button variant="contained" color="secondary">
                    Книги
                </Button>
            </Link>
            <Link to="tracks">
                <Button variant="contained" color="secondary">
                    Плейлист
                </Button>
            </Link>
        </>
    );
}

export default Dashboard;
