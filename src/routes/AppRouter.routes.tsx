import {Route, Routes} from "react-router-dom";
import {HomePage} from "../pages/Home.page";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/hi" element={<HomePage/>}/>
        </Routes>
    )
}
