import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  padding-top: 20px;
  border-radius: 10px;
  background-color: #f3f3f3;
  width: 320px;
`;

export const Avatar = styled.img`
  width: 50%;
  border-radius: 50%;
  display: block;
  padding-top: 20px;
`;
export const UserName = styled.p`
  font-weight: 700;
  font-size: 30px;
  line-height: 1.25;
`;
export const TagName = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.25;
  margin: 0px;
  color: #c5c5c5;
`;

export const LocationName = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.25;
  color: #c5c5c5;
  margin-bottom: 40px;
`;

export const Stats = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 0px 0px 10px 10px;
  border: 1px solid #bcbcbc;
  background-color: #edecec;
  padding: 0px;
  margin: 0px;
`;

export const StatsItem = styled.li`
  display: flex;
  padding: 28px 0px;
  flex-direction: column;
  padding: 26px 0px;
  text-align: center;
`;

export const StatsLabel = styled.span`
  font-weight: 700;
`;
