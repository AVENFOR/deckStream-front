import {WelcomeWorldsWrapper} from "./WelcomeWorlds.styled";
import {WorldsOrganism} from "../../organisms/WorldsOrganism/Worlds.organism";

import igICON from '../../../assets/icons/wallet.svg';
import {useNavigate} from "react-router-dom";

export const WelcomeWorldsSection = () => {

    const navigate = useNavigate();

    return (
        <WelcomeWorldsWrapper>
            <WorldsOrganism
                src={igICON}
                worldsTitle='Creator'
                onClick={() => navigate('/player')}
            />
            <WorldsOrganism
                src={igICON}
                worldsTitle='Sponsor'
                onClick={() => navigate('/projects')}
            />
            <WorldsOrganism
                src={igICON}
                worldsTitle='Deckster'
                onClick={() => navigate('/player')}
            />
        </WelcomeWorldsWrapper>
    )
}
