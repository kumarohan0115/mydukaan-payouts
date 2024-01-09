/* eslint-disable react/prop-types */
import Icon from "../Icon/Icon"
import "./Cards.scss";

function Cards({ title, amount, orders, isBlue, subTitle, subText }) {
  const containerClass = isBlue ? "bluePaymentContainer" : "paymentContainer";
  const iconClass = isBlue ? "iconWhiteColor" : "";
  const orderTextClass = isBlue ? "ordersWhite" : "ordersBlue";

  return (
    <div className={containerClass}>
      <div className="wrapper">
        <div className="paymentStatusContainer">
          {title && <p>{title}</p>}
          <div className="questionIcon">
            <Icon name="help-icon" className={iconClass} />
          </div>
        </div>
        <div className="amountContainer">
          {amount && <p className="amountText">{amount}</p>}
          {orders && (
            <div className="orderContainer">
              <p className={orderTextClass}>{orders} orders</p>
              <div className="countIcon">
                <Icon name="right-arrow-icon" className={iconClass} />
              </div>
            </div>
          )}
        </div>
      </div>
      {isBlue && (
        <div className="payDaySection">
          <p>{subTitle}:</p>
          <p className="subText">{subText}</p>
        </div>
      )}
    </div>
  );
}

export default Cards;
