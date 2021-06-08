import userData from "./components/Profile/user.json";
import statisticalData from "./components/Statistics/statistical-data.json";
import friends from "./components/FriendList/friends.json";
import transactions from "./components/TransactionHistory/transactions.json";
import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import FriendsList from "./components/FriendList";
import TransactionHistory from "./components/TransactionHistory";

function App() {
  return (
    <div>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendsList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
