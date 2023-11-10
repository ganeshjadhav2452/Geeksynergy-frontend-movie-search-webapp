import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const isLoggedIn = localStorage.getItem('isLoggedIn');

export default () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to '/' if not logged in
        console.log('is login ', isLoggedIn)
        if (!isLoggedIn) {
            navigate('/');
        }
    }, [navigate]);

    return isLoggedIn ? <Outlet /> : null;
};
