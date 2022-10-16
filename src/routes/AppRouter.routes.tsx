import {Route, Routes} from "react-router-dom";
import {HomePage} from "../pages/Home.page";
import {HeaderLayout} from "../components/layouts/HeaderLayout/Header.layout";
import {UserPage} from "../pages/User.page";
import {WelcomePage} from "../pages/Welcome.page";
import {PlayerPage} from "../pages/Player.page";
import {ProjectsPage} from "../pages/ProjectsPage/Projects.page";

export const AppRouter = () => {
    return (
        <>
            <HeaderLayout/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/user" element={<UserPage/>}/>
                <Route path="/welcome" element={<WelcomePage/>}/>
                <Route path="/player" element={<PlayerPage/>}/>
                <Route path="/projects" element={<ProjectsPage/>}/>
            </Routes>
        </>
    )
}
