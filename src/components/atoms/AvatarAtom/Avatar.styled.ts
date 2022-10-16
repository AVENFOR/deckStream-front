import styled from 'styled-components';

interface AvatarWrapperI {
    height?: string;
    width?: string;
    margin?: string;
}

export const AvatarWrapper = styled.a<AvatarWrapperI>`
  height: inherit;
  width: ${({width}) => width};
  border-radius: 50%;
  object-fit: cover;
`;

export const AvatarIMG = styled.img<AvatarWrapperI>` {
   height: inherit;
   width: inherit;
  border-radius: 50%;
}
`;


