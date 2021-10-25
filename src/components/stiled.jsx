import styled, { keyframes } from 'styled-components';

const showIt = keyframes`
    to{ opacity: 1}
`;

export const TextPanel = styled.div`
    animation: 5s ${showIt} forwards;
`;