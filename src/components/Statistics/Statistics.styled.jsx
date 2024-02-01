import styled from 'styled-components';

export const StatisticsWrapper=styled.div` background-color: #333;
padding: 20px;
border-radius: 10px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
color: #fff;
max-width: 300px;
margin: 20px auto;
`;

export const Title=styled.h2` font-size: 1.5em;
font-weight: bold;
margin-bottom: 10px;
`;

export const StatList=styled.ul` list-style: none;
padding: 0;
margin: 0;
`;

export const StatItem=styled.li` display: flex;
justify-content: space-between;
margin-bottom: 10px;
`;

export const StatLabel=styled.span` color: #999;
font-size: 0.8em;
`;

export const StatPercentage=styled.span` color: #fff;
font-size: 0.8em;
font-weight: bold;
`;