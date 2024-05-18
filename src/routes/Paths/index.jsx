import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "../../pages/userPages/Cadastro";
import PageLayout from "../../layouts/pageLayout";
import Dashboard from "../../pages/adminPages/Dashboard";
import Login from "../../pages/adminPages/Login";



const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout />}  >
                        <Route index element={<Cadastro />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/login" element={<Login />} />
                    </Route>
                    <Route path="*" element={<h1>404 Not Found</h1>} />



                </Routes>
            </BrowserRouter>

        </>
    );
}

export default Paths;