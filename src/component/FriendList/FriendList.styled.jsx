import styled from 'styled-components';

export const FriendSection = styled.div`
  width: 320px;
  margin: 2px;
  padding-top: 20px;
`;
export const FriendData = styled.ul`
  margin: 0px;
  padding: 0px;
`;
export const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 10px;
  background-color: #edecec;
  border-radius: 6px;
  box-shadow: rgb(0 0 0 / 50%) 0px 5px 8px;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;
export const Avatar = styled.img`
  display: block;
  margin-right: 10px;
  border-radius: 15%;
  background: #7c7b7b;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 20px;
`;
