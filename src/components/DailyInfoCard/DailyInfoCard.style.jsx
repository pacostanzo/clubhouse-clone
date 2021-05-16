import styled from 'styled-components';

export const DailyCardContainer = styled.div`
  background-color: #e7e4d5;
  padding: 0.5em 1em;
  border-radius: 1em;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.5em;
`;

export const ItemTime = styled.span`
  width: 20%;
  text-align: end;
  font-size: 0.675em;
  color: var(--textColor);
  font-weight: 500;
`;

export const ItemInfo = styled.div`
  margin-left: 0.5em;
  display: flex;
  flex-direction: column;
  width: 80%;

  & span {
    font-size: 0.675em;
    color: var(--textColor);
    font-weight: 500;
  }

  & p {
    font-size: 0.875em;
    font-weight: 500;
    line-height: 1;
    margin: 0;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
    width: 195px;
  }
`;
