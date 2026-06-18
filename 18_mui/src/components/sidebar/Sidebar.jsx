import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleIcon from "@mui/icons-material/People";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Link } from "react-router";
import { useTheme } from "@mui/material";

const menuItems = [
    { text: "Головна", path: "/", icon: <DashboardIcon /> },
    { text: "Користувач", path: "/users", icon: <PeopleIcon /> },
    { text: "Ролі", path: "/roles", icon: <ManageAccountsIcon /> }
];

function Sidebar() {
    const theme = useTheme();

    return (
        <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            {menuItems.map((item) => (
                <Link
                    key={item.text}
                    to={item.path}
                    style={{ color: theme.palette.text.primary }}
                >
                    <ListItemButton>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItemButton>
                </Link>
            ))}
        </List>
    );
}

export default Sidebar;
