import styled from 'styled-components';


export const StatisticsWrapper = styled.div`
  background-color: #2c2c2c;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  color: #fff;
  max-width: 300px;
  margin: 20px auto;
`;


export const Title = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 10px;
`;


export const StatList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;


export const StatItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;


export const StatLabel = styled.span`
  color: #999;
  font-size: 0.8em;
`;


export const StatPercentage = styled.span`
  color: #fff;
  font-size: 0.8em;
  font-weight: bold;
`;


export const FriendListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column; 
  align-items: center; 
`;

export const FriendListItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #444;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  background-color: #2c2c2c;
  width: 250px;
`;


export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-bottom: 5px;
  background-color: ${(props) => (props.isOnline ? '#27ae60' : '#c0392b')};
`;


export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;


export const Name = styled.p`
  margin-top: 5px;
  font-size: 1em;
  color: #fff;
  text-align: center;
`;