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
}

export const ProjectCardOrganism = (props: ProjectCardOrganismI) => {

    const {projectTitle, sdgTitle, sdgSRC, profileSRC, projectUserName, totalFollowers} = props;

    return (
        <ProjectCardWrapper>
            <SDGMolecule
                sdgTitle={sdgTitle}
                src={sdgSRC}
            />
            <ProjectCardTitle>
                <h3>{projectTitle}</h3>
            </ProjectCardTitle>
            <UserCardOrganism
                profileSRC={profileSRC}
                projectUserName={projectUserName}
                totalFollowers={totalFollowers}
            />
        </ProjectCardWrapper>
    )
}
