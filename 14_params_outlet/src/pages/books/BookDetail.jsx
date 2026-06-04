import { IconButton, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ClearIcon from "@mui/icons-material/Clear";

function BookDetail() {
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    padding: "16px 32px",
                    justifyContent: "center",
                }}
            >
                <div>
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg"
                        alt="Atomic Habits"
                        height="500px"
                        width="400px"
                        style={{ objectFit: "contain" }}
                    />
                </div>
                <div style={{ textAlign: "start", marginTop: "16px" }}>
                    <Rating
                        value={4.9}
                        precision={0.5}
                        max={5}
                        readOnly
                        icon={
                            <StarIcon
                                style={{ color: "gold" }}
                                fontSize="inherit"
                            />
                        }
                        emptyIcon={
                            <StarIcon
                                style={{ color: "#505050" }}
                                fontSize="inherit"
                            />
                        }
                    />
                    <h1>Atomic Habits</h1>
                    <h3>Автор: James Clear</h3>
                    <h3
                        style={{
                            fontWeight: "bold",
                            color: "orange",
                            fontSize: "1.4em",
                        }}
                    >
                        Ціна: $18.99
                    </h3>
                    <div style={{ maxWidth: "400px", whiteSpace: "normal" }}>
                        <p>
                            Практичний посібник про те, як змінити своє життя за
                            допомогою маленьких щоденних звичок. Автор пояснює
                            систему «атомних» змін, яка базується на біології,
                            психології та нейронауці, допомагаючи позбутися
                            поганих звичок і сформувати корисні.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookDetail;
