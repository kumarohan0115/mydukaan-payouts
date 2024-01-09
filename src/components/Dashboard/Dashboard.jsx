import {useState} from "react";
import CardWidget from "../Cards/Cards";
import Icon from "../Icon/Icon";
import "./Dashboard.scss";

function Dashboard() {

  const [overviewWidgetsData] = useState(
  [
    {
      title: "Next Payout",
      amount: "₹2,312.23",
      orders: 23,
      subTitle: "Next payout date",
      subText: "Today, 04:00PM",
      isBlue: true
    },
    {
      title: "Amount Pending",
      amount: "₹92,312.20",
      orders: 13,
      isBlue: false
    },
    {
      title: "Amount Processed",
      amount: "₹23,92,312.19",
      isBlue: false
    },
    // ... Add more widgets if needed
  ])

  console.log(overviewWidgetsData);
  return (
    <section className="mainDashboardContent">
      <div className="overviewSection">
        <h2>Overview</h2>
        <div className="monthlySelector">
          <p>This Month</p>
          <div>
            <Icon name={"chevron-icon"} className="iconGrayColor" />
          </div>
        </div>
      </div>
      <div className="widgetFrameContainer">
        {overviewWidgetsData.map((data, index) => (
          <CardWidget key={index} {...data} />
        ))}
      </div>
    </section>
  );
}

export default Dashboard;
