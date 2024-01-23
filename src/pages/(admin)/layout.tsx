import { Outlet } from 'react-router-dom';

export const AdminLayout = () => {
        return (
            <div className={''}>
                Admin Layout
                <Outlet />
            </div>
        );
};