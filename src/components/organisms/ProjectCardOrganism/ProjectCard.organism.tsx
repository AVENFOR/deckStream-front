import {ProjectCardTitle, ProjectCardWrapper} from "./ProjectCard.styled";
import H2Atom from "../../atoms/H2Atom/H2.atom";
import {SDGMolecule} from "../../molecules/SDGMolecule/SDG.molecule";
import {UserCardOrganism} from "../UserCardOrganism/UserCard.organism";

interface ProjectCardOrganismI {
    projectTitle: string;
    sdgTitle: string;
    sdgSRC: string;
    profileSRC: string;
    projectUserName: string;
    totalFollowers: string;
    bgColor: string;
    onClick: () => void;
    isLive?: boolean;
}

export const ProjectCardOrganism = (props: ProjectCardOrganismI) => {

    const {projectTitle, sdgTitle, sdgSRC, profileSRC, projectUserName, totalFollowers, bgColor, onClick, isLive = false} = props;

    return (
        <ProjectCardWrapper
            onClick={onClick}
        >
            <SDGMolecule
                sdgTitle={sdgTitle}
                src={sdgSRC}
                bgColor={bgColor}
            />
            <ProjectCardTitle>
                <h3>{projectTitle}</h3>
            </ProjectCardTitle>
            <UserCardOrganism
                isLive={isLive}
                profileSRC={profileSRC}
                projectUserName={projectUserName}
                totalFollowers={totalFollowers}
            />
        </ProjectCardWrapper>
    )
}
