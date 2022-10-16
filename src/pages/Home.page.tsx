import {useAccount} from "@web3modal/react";
import {useNavigate} from "react-router-dom";

export const HomePage = () => {

    const navigate = useNavigate();

    const {address, isConnected} = useAccount()

    if (isConnected) {
        navigate("/welcome");
    }


    return (
        <>
            <h1>Home</h1>
        </>
    )
}
