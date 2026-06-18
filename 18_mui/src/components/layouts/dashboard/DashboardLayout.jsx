import { Container, Grid } from "@mui/material";
import Navbar from "../../navbar/Navbar";
import { Outlet } from "react-router";
import Sidebar from "../../sidebar/Sidebar";

function DashboardLayout() {
    return (
        <>
            <Navbar />
            <Grid container spacing={2} sx={{mt: 2}}>
                <Grid sx={{display: {xs: "none", sm: "none", md: "flex"}}} size={{md: 2, lg: 2}}>
                    <Sidebar />
                </Grid>

                <Grid size={{sx: 12, sm: 12, md: 10, lg: 8}}>
                    <Outlet />
                </Grid>
            </Grid>
        </>
    );
}

export default DashboardLayout;
