import { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useGetBooksQuery } from "../../../store/services/bookApi";
import Spiner from "../../../components/spiner/Spiner";
import defaultImage from "./../../../assets/defaultBook.png";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";

function NewBookButton() {
    return (
        <Link to="create">
            <IconButton>
                <AddIcon />
            </IconButton>
        </Link>
    );
}

const columns = [
    { id: "id", label: "Id", minWidth: 20, align: "center" },
    { id: "title", label: "Назва", minWidth: 125, align: "center" },
    { id: "rating", label: "Рейтинг", minWidth: 50, align: "center" },
    { id: "price", label: "Ціна", minWidth: 50, align: "center" },
    { id: "author", label: "Автор", minWidth: 75, align: "center" },
    { id: "image", label: "Обкладинка", minWidth: 75, align: "center" },
    { id: "buttons", label: NewBookButton(), minWidth: 75, align: "center" },
];

function BooksTable() {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(50);

    const { data, isLoading, isError, isSuccess } = useGetBooksQuery({
        page: page,
        page_size: pageSize,
    });

    const handleChangePage = (event, newPage) => {
        setPage(newPage + 1);
    };

    const handleChangeRowsPerPage = (event) => {
        setPageSize(event.target.value);
        setPage(1);
    };

    function imageError(event) {
        const img = event.target;
        img.src = defaultImage;
    }

    if (isLoading) {
        return <Spiner />;
    }

    return (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <Helmet>
                <title>Список книг</title>
            </Helmet>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.payload.items.map((book) => {
                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={book.id}
                                >
                                    <TableCell align="center">
                                        {book.id}
                                    </TableCell>
                                    <TableCell align="center">
                                        {book.title}
                                    </TableCell>
                                    <TableCell align="center">
                                        {book.rating}
                                    </TableCell>
                                    <TableCell align="center">
                                        {book.price}
                                    </TableCell>
                                    <TableCell align="center">
                                        {book.author
                                            ? book.author.name
                                            : "Невідомий"}
                                    </TableCell>
                                    <TableCell align="center">
                                        <img
                                            src={
                                                book.image
                                                    ? book.image
                                                    : defaultImage
                                            }
                                            onError={imageError}
                                            height={75}
                                            width={50}
                                            alt={book.title}
                                            style={{ objectFit: "contain" }}
                                        />
                                    </TableCell>
                                    <TableCell align="center">
                                        <Link to={`update/${book.id}`}>
                                            <IconButton>
                                                <EditIcon
                                                    fontSize="small"
                                                    color="success"
                                                />
                                            </IconButton>
                                        </Link>
                                        <br />
                                        <IconButton size="small">
                                            <DeleteIcon
                                                fontSize="small"
                                                color="error"
                                            />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[25, 50, 100]}
                component="div"
                count={data.payload.total_items}
                rowsPerPage={pageSize}
                page={page - 1}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default BooksTable;
