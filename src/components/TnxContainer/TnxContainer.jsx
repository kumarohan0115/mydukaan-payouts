import { useState } from "react";
import Icon from "../Icon/Icon";
import Table from "../Table/Table";
import './TransactionCont.scss'

function TnxContainer() {

  const [tableData] =useState(
    {
      columns: [
        "Order ID",
        "Status",
        "Transaction ID",
        "Refund Date",
        "Order Amount",
      ],
      rows: [
        {
          "Order ID": "#281209",
          "Status": "Successful",
          "Transaction ID": "131634495747",
          "Refund Date": "Today, 08:45 PM",
          "Order Amount": "₹1,125.00",
        },
        {
          "Order ID": "#281208",
          "Status": "Processing",
          "Transaction ID": "131634495746",
          "Refund Date": "Yesterday, 03:00 PM",
          "Order Amount": "₹1,365.00",
        },
        {
          "Order ID": "#281207",
          "Status": "Successful",
          "Transaction ID": "131634495745",
          "Refund Date": "12 Jul 2023, 09:30 PM",
          "Order Amount": "₹4,625.00",
        },
        {
          "Order ID": "#281206",
          "Status": "Successful",
          "Transaction ID": "131634495744",
          "Refund Date": "13 Jul 2023, 05:00 PM",
          "Order Amount": "₹5,768.00",
        },
        {
          "Order ID": "#281205",
          "Status": "Successful",
          "Transaction ID": "131634495743",
          "Refund Date": "14 Jul 2023, 06:00 PM",
          "Order Amount": "₹2,387.00",
        },
        {
          "Order ID": "#281204",
          "Status": "Successful",
          "Transaction ID": "131634495742",
          "Refund Date": "15 Jul 2023, 03:00 PM",
          "Order Amount": "₹3,788.00",
        }
      ],
    }
  )


    return (
        <section className="txn-cont">
            <div className="txn-header">Transactions | This Month</div>
            <div className="txn-btns">
              <button className="payouts-btn">Payouts (22)</button>
              <button className="refunds-btn">Refunds (6)</button>
            </div>

            <div className="table-container">
              <div className="top-row">
                <div className="search-order-id">
                  <Icon name="search-icon"/>
                  <input type="text" placeholder="Order ID or transaction ID" />
                </div>
                <div className="table-filters">
                  <div className="sort-btn">
                    Sort{" "}
                    <Icon name="sort-icon"/>
                  </div>
                  <div>
                    <Icon name="download-icon"/>
                  </div>
                </div>
              </div>

              <Table data={tableData}/>
            </div>
          </section>
    );
}

export default TnxContainer
