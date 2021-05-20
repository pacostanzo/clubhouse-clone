import styled from 'styled-components';

export const SubHeaderContainer = styled.div`
  text-align: center;
  padding: 0.5em 0.5em;
  position: relative;
  margin-bottom: 0.5em;

  & img {
    width: 15px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  & h3 {
    margin: 0;
    font-size: 1.2em;
  }
`;
