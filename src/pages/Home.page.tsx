import {useAccount} from "@web3modal/react";
import {useNavigate} from "react-router-dom";
import {HomeMainSection} from "../components/templates/HomeMainSection/HomeMain.section";

export const HomePage = () => {

    const navigate = useNavigate();

    const {address, isConnected} = useAccount()

    if (isConnected) {
        navigate("/welcome");
    }


    return (
        <>
            <HomeMainSection/>
        </>
    )
}
