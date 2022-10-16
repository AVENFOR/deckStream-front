import {UserCardAvatar, UserCardFollowers, UserCardInfo, UserCardIsLive, UserCardWrapper} from "./UserCard.styled";
import IconAtom from "../../atoms/IconAtom/Icon.atom";

import followersICON from '../../../assets/icons/wallet.svg'
import AvatarAtom from "../../atoms/AvatarAtom/Avatar.atom";

interface UserCardOrganismI {
    profileSRC: string;
    isLive?: boolean;
    totalFollowers: string;
    projectUserName: string;
}

export const UserCardOrganism = (props: UserCardOrganismI) => {

    const {profileSRC, isLive = false, totalFollowers, projectUserName} = props;

    return (
        <UserCardWrapper>
            <UserCardAvatar>
                <AvatarAtom
                    height='6.5rem'
                    src={profileSRC}
                    width='6.5rem'
                />
                {
                    isLive &&
                    <UserCardIsLive>
                        <p>LIVE</p>
                    </UserCardIsLive>
                }
            </UserCardAvatar>
            <UserCardInfo>
                <p>{projectUserName}</p>
                <UserCardFollowers>
                    <IconAtom
                        height='100%'
                        src={followersICON}
                        width='1.6rem'
                    />
                    <p>{totalFollowers}</p>
                </UserCardFollowers>
            </UserCardInfo>
        </UserCardWrapper>
    )
}
