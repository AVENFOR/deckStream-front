import {ProjectsMainWrapper} from "./ProjectsMain.styled";
import {ProjectCardOrganism} from "../../organisms/ProjectCardOrganism/ProjectCard.organism";

import sdgN4 from '../../../assets/icons/wallet.svg';
import avatar from '../../../assets/img/avatar.png';
import {useDispatch} from "react-redux";
import {setToggle} from "../../../store/toggle.slice";

export const ProjectsMainSection = () => {

    const dispatch = useDispatch()

    return (
        <ProjectsMainWrapper>
            <ProjectCardOrganism
                projectTitle='HerDAO'
                sdgSRC={sdgN4}
                sdgTitle='SDG 4'
                profileSRC={avatar}
                projectUserName='Eydrent'
                totalFollowers='1.5K'
                bgColor='green'
                onClick={() => console.log('clicked')}
            />
            <ProjectCardOrganism
                projectTitle='HerDAO'
                sdgSRC={sdgN4}
                sdgTitle='SDG 4'
                profileSRC={avatar}
                projectUserName='Eydrent'
                totalFollowers='1.5K'
                bgColor='red'
                onClick={() => dispatch(setToggle(true))}
                isLive={true}
            />
            <ProjectCardOrganism
                projectTitle='HerDAO'
                sdgSRC={sdgN4}
                sdgTitle='SDG 4'
                profileSRC={avatar}
                projectUserName='Eydrent'
                totalFollowers='1.5K'
                bgColor='green'
                onClick={() => console.log('clicked')}
            />
            <ProjectCardOrganism
                projectTitle='HerDAO'
                sdgSRC={sdgN4}
                sdgTitle='SDG 4'
                profileSRC={avatar}
                projectUserName='Eydrent'
                totalFollowers='1.5K'
                bgColor='green'
                onClick={() => console.log('clicked')}
            />
            <ProjectCardOrganism
                projectTitle='HerDAO'
                sdgSRC={sdgN4}
                sdgTitle='SDG 4'
                profileSRC={avatar}
                projectUserName='Eydrent'
                totalFollowers='1.5K'
                bgColor='green'
                onClick={() => console.log('clicked')}
            />
            <ProjectCardOrganism
                projectTitle='HerDAO'
                sdgSRC={sdgN4}
                sdgTitle='SDG 4'
                profileSRC={avatar}
                projectUserName='Eydrent'
                totalFollowers='1.5K'
                bgColor='green'
                onClick={() => console.log('clicked')}
            />
            <ProjectCardOrganism
                projectTitle='HerDAO'
                sdgSRC={sdgN4}
                sdgTitle='SDG 4'
                profileSRC={avatar}
                projectUserName='Eydrent'
                totalFollowers='1.5K'
                bgColor='green'
                onClick={() => console.log('clicked')}
            />
            <ProjectCardOrganism
                projectTitle='HerDAO'
                sdgSRC={sdgN4}
                sdgTitle='SDG 4'
                profileSRC={avatar}
                projectUserName='Eydrent'
                totalFollowers='1.5K'
                bgColor='green'
                onClick={() => console.log('clicked')}
            />
        </ProjectsMainWrapper>
    )
}
