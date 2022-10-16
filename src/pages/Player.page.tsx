import { Player } from '@livepeer/react';

// import posterIMG from '../assets/img/imageBG.jpeg';

const playbackId =
    // 'bafybeida3w2w7fch2fy6rfvfttqamlcyxgd3ddbf4u25n7fxzvyvcaegxy';
    'cf6alj50bi2ra0zq';

import blenderPoster from '../assets/img/imageBG.jpeg';
import {PosterImageWrapper} from "./Player.styled";

const PosterImage = () => {
    return (
        <PosterImageWrapper
            src={blenderPoster}
            // layout="fill"
            // objectFit="cover"
            // priority
            // placeholder="blur"
        />
    );
};

export const PlayerPage = () => {
    return (
        <Player
            title="Waterfalls"
            playbackId={playbackId}
            autoPlay
            muted
            showTitle={true}
            aspectRatio="16to9"
            poster={<PosterImage />}
            controls={{
                autohide: 3000,
            }}
            theme={{
                borderStyles: { containerBorderStyle: 'hidden' },
                radii: { containerBorderRadius: '10px' },
            }}
        />
    )
}
