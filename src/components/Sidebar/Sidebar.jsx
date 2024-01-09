/* eslint-disable react/prop-types */
import { useState } from "react";
import Logo from "../../assets/logo.png";
import Icon from "../Icon/Icon";
import "./Sidebar.scss";

function Sidebar({ sidePanelActive }) {

  const [sideBarLinks] = useState(
    [
      { name: "Home", link: "#", icon: 'home-icon' },
      { name: "Orders", link: "#", icon: 'orders-icon' },
      { name: "Products", link: "#", icon: 'products-icon' },
      { name: "Delivery", link: "#", icon: 'delivery-icon' },
      { name: "Marketing", link: "#", icon: 'marketing-icon' },
      { name: "Analytics", link: "#", icon: 'analytics-icon' },
      { name: "Payouts", link: "#", icon: 'payouts-icon', active: true },
      { name: "Discounts", link: "#", icon: 'discounts-icon' },
      { name: "Audience", link: "#", icon: 'audience-icon' },
      { name: "Appearance", link: "#", icon: 'appearance-icon' },
      { name: "Plugins", link: "#", icon: 'plugins-icon' }
    ]
  )

  return (
    <aside className={`sidebarContainer ${sidePanelActive ? 'active' : ''}`}>
      <div className='sidebarContent'>
        <div className='userProfile'>
          <div className='userProfileFlex'>
            <div className='userLogo'>
              <img src={Logo} alt='logo' />
            </div>
            <div className='userInfo'>
              <h5>Nishyan</h5>
              <p>Visit store</p>
            </div>
          </div>
          <div>
            <Icon name={'chevron-icon'}/>
          </div>
        </div>

        <ul className='sidebarSubmenuContainer'>
          {sideBarLinks.map((item, index) => (
            <li key={index} className={`submenuItem ${item.active ? 'activeSubmenuItem' : ''}`}>
              <div className='submenuIcon'>
                <Icon name={item.icon} />
              </div>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
        <div className='bottomBarSection'>
          <div className='bottomBarIconContainer'>
            <Icon name={'wallet-icon'} />
          </div>
          <div className='availableCredits'>
            <h6>Available credits</h6>
            <p>222.10</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
