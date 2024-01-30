import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #333;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  color: #fff;
  max-width: 300px;
  margin: 20px auto;
`;

export const Description = styled.div`
  text-align: center;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
  object-fit: cover;
`;

export const Name = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Tag = styled.p`
  color: #999;
  margin-bottom: 10px;
`;

export const Location = styled.p`
  color: #bbb;
  margin-bottom: 15px;
`;

export const StatsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between; /* Align items at the bottom */
  border-top: 1px solid #555; /* Add border at the top of the stats list */
`;

export const StatsItem = styled.li`
  padding: 10px; /* Add padding for better visualization */
`;

export const Label = styled.span`
  color: #999;
  font-size: 0.8em;
  display: block;
  margin-bottom: 3px;
  border-bottom: 1px solid #555; /* Add border at the bottom of the label */
`;

export const Quantity = styled.span`
  font-size: 1.2em;
  font-weight: bold;
`;