/* eslint-disable react/prop-types */
import Icon from "../Icon/Icon";
import "./Navigationbar.scss";

function Navigationbar({ setSidePanelActive }) {

  const toggleMenu = () => {
    setSidePanelActive(prev => !prev);
  };

  return (
    <nav>
      <div className="navbarContainer">
        <div className="navSection1">
          <div className="payoutHeading">
            <p>Payouts</p>
          </div>
          <div className="navSection1Content">
            <div className="questionIcon">
              <Icon name="help-icon" />
            </div>
            <p>How it works</p>
          </div>
        </div>
        <div className="navSection2">
          <div className="searchBar">
            <div className="searchIcon">
              <Icon name={"search-icon"}/>
            </div>
            <input
              type="text"
              placeholder="Search features, tutorials, etc."
              className="searchInput"
            />
          </div>
        </div>
        <div className="navSection3">
          <div className="messageIcon">
            <Icon name="msg-icon"/>
          </div>
          <div className="chevronDown">
            <Icon name="chev-icon"/>
          </div>
        </div>
        <div className="hamburgerMenu" onClick={toggleMenu}>
          <Icon name="menu-icon" className="iconGrayColor" />
        </div>
      </div>
    </nav>
  );
}

export default Navigationbar;
