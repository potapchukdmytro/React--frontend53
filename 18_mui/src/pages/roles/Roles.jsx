import { Grid } from "@mui/material";
import RoleCard from "../../components/cards/RoleCard";

const roles = [
    { id: 1, name: "user" },
    { id: 2, name: "admin" },
    { id: 3, name: "manager" },
    { id: 4, name: "customer" },
    { id: 5, name: "productManager" },
];

function Roles() {
    return (
        <>
            <Grid container spacing={2} sx={{ m: "auto" }}>
                {roles.map((role) => (
                    <Grid
                        key={role.id}
                        size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 3 }}
                    >
                        <RoleCard role={role} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default Roles;
