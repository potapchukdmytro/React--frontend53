import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function RoleCard({ role }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://www.kore1.com/wp-content/uploads/2026/03/Know-Your-Role-and-Stick-to-it.webp"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {role.name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" color="warning" size="small">Редагувати</Button>
                <Button variant="contained" color="error" size="small">Видалити</Button>
            </CardActions>
        </Card>
    );
}

export default RoleCard;
