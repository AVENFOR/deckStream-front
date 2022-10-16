import {ProjectsMainWrapper} from "./ProjectsMain.styled";
import {ProjectCardOrganism} from "../../organisms/ProjectCardOrganism/ProjectCard.organism";

import sdgN4 from '../../../assets/icons/wallet.svg';
import avatar from '../../../assets/img/avatar.png';

export const ProjectsMainSection = () => {
    return (
        <ProjectsMainWrapper>
            <ProjectCardOrganism
                projectTitle='HerDAO'
                sdgSRC={sdgN4}
                sdgTitle='SDG 4'
                profileSRC={avatar}
                projectUserName='Eydrent'
                totalFollowers='1.5K'
                bgColor='red'
                onClick={() => console.log('clicked')}
            />
        </ProjectsMainWrapper>
    )
}
