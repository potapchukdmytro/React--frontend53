import { useRef, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useGetTracksQuery } from "./../../../store/services/trackApi";
import Spiner from "../../../components/spiner/Spiner";
import defaultImage from "./../../../assets/defaultBook.png";
import DeleteIcon from "@mui/icons-material/Delete";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import EditIcon from "@mui/icons-material/Edit";
import PauseIcon from "@mui/icons-material/Pause";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import DeleteModal from "../../../components/modals/DeleteModal";
import { toast } from "react-toastify";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function NewTrackButton() {
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
    { id: "author", label: "Виконавець", minWidth: 50, align: "center" },
    { id: "album", label: "Альбом", minWidth: 50, align: "center" },
    { id: "player", label: "Плеєр", minWidth: 50, align: "center" },
    { id: "buttons", label: NewTrackButton(), minWidth: 75, align: "center" },
];

function TracksTable() {
    const [currentTrack, setCurrentTrack] = useState(null);
    const [isPlayed, setIsPlayed] = useState(false);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(50);
    const player = useRef(null);

    const { data, isLoading, isError, isSuccess } = useGetTracksQuery();

    const handleChangePage = (event, newPage) => {
        setPage(newPage + 1);
    };

    const handleChangeRowsPerPage = (event) => {
        setPageSize(event.target.value);
        setPage(1);
    };

    if (isLoading) {
        return <Spiner />;
    }

    function playTrackHandler(track) {
        if(!currentTrack) {
            setCurrentTrack(track);
            setIsPlayed(true);
        } else {
            if(currentTrack.id == track.id) {
                player.current.togglePlay({stopPropagation: () => { }});
            } else {
                setCurrentTrack(track);
            }
            setIsPlayed(true);
        }
    }

    function pauseTrackHandler() {
        player.current.togglePlay({stopPropagation: () => { console.log("call");}});
        setIsPlayed(false);
    }

    return (
        <>
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <Helmet>
                    <title>Список пісень</title>
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
                            {data.payload.map((track) => {
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={track.id}
                                    >
                                        <TableCell align="center">
                                            {track.id}
                                        </TableCell>
                                        <TableCell align="center">
                                            {track.title}
                                        </TableCell>
                                        <TableCell align="center">
                                            {track.author}
                                        </TableCell>
                                        <TableCell align="center">
                                            {track.album}
                                        </TableCell>
                                        <TableCell align="center">
                                            {/* play button */}
                                            {currentTrack 
                                            && currentTrack.id == track.id
                                            && isPlayed ? (
                                                <IconButton
                                                    color="secondary"
                                                    onClick={pauseTrackHandler}
                                                >
                                                    <PauseIcon fontSize="large" />
                                                </IconButton>
                                            ) : (
                                                <IconButton
                                                    onClick={() =>
                                                        playTrackHandler(
                                                            track,
                                                        )
                                                    }
                                                    color="secondary"
                                                >
                                                    <PlayArrowIcon fontSize="large" />
                                                </IconButton>
                                            )}
                                        </TableCell>
                                        <TableCell align="center">
                                            <Link to={`update/${track.id}`}>
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
                    count={1}
                    rowsPerPage={pageSize}
                    page={page - 1}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>

            {/* player */}
            {currentTrack && (
                <div style={{ position: "fixed", bottom: 0, width: "1126px" }}>
                    <div style={{backgroundColor: "rgba(47, 48, 58, 1)", padding: "8px 0px"}}>
                        {currentTrack.title} - {currentTrack.author}
                    </div>
                    <AudioPlayer
                        onPause={() => setIsPlayed(false)}
                        onPlay={() => setIsPlayed(true)}
                        volume={0.1}
                        ref={player}
                        autoPlay
                        src={currentTrack.url}
                        showSkipControls
                        style={{ backgroundColor: "rgba(47, 48, 58, 1)" }}
                    />
                </div>
            )}
        </>
    );
}

export default TracksTable;
