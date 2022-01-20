import styled from 'styled-components';

export const StatsSection = styled.div`
  width: 300px;
`;

export const StatsTitle = styled.h2`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 30px;
  line-height: 1.25;
`;
export const StatsData = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 0px;
  border: 1px solid #bcbcbc;
  background-color: #edecec;
`;
export const StatsList = styled.li`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #bcbcbc;
`;

export const StatsName = styled.span`
  margin: 5px;
`;
export const StatsNumber = styled.span`
  font-size: 22px;
  margin: 0px;
`;
