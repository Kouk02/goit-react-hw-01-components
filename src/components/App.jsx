// -- task 1 --
import Profile from './Profile/index.jsx';
import user from './Profile/user.json';

// -- task 2 --
import Statistics from './Statistics/index.jsx'; 
import statisticsData from './Statistics/data.json';

// -- task 3 --
import FriendList from './FriendList/index.jsx'; 
import friendsData from './FriendList/friends.json';

// -- task 4 --
import TransactionHistory from './TransactionHistory/index.jsx';
import transactions from './TransactionHistory/transactions.json';


const App = () => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={statisticsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
