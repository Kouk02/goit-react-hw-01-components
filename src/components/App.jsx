// -- task 1 --
import Profile from './Profile';
import user from '../data/user.json';

// -- task 2 --
import Statistics from './Statistics'; 
import statisticsData from '../data/data.json';

// -- task 3 --
import FriendList from './FriendList';
import friendsData from '../data/friends.json';

// -- task 4 --
import TransactionHistory from './TransactionHistory';
import transactions from '../data/transactions.json';


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
