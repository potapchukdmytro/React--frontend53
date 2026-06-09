import { Outlet } from "react-router";

function AdminLayout() {
    return (
        <>
            <div>
                <h1>Тут буде header</h1>
            </div>
            <div>
                <Outlet />
            </div>
        </>
    );
}

export default AdminLayout;
