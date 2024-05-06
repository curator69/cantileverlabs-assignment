import Goals from "./Goals";
import MainCard from "./MainCard";
import NewTransaction from "./NewTransaction";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import Statistics from "./Statistics";
import Title from "./Title";
import TransactionHistory from "./TransactionHistory";

const Dashboard = () => {
  return (
    <div className="p-8 h-screen">
      <div className="shadow-xl h-full overflow-y-auto rounded-xl grid grid-cols-[1fr_6fr] bg-white">
        <Sidebar />

        <div className="flex flex-col gap-8 py-8">
          <div className="flex justify-between px-8">
            <Title />
            <Profile />
          </div>

          <div className="flex justify-between gap-8 px-8 w-full h-full">
            <div className="flex flex-col gap-8 w-[50%]">
              <MainCard />
              <TransactionHistory />
            </div>

            <div className="flex flex-col justify-between gap-4 w-[50%]">
              <Goals />
              <Statistics />
              <NewTransaction />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
