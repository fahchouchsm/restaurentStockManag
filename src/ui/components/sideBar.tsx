import React from 'react';

export interface pageUi {
  name: string;
  url: string;
}

const SideBar: React.FC = () => {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/inventory">Inventory</a>
        </li>
        <li>
          <a href="/orders">Orders</a>
        </li>
        <li>
          <a href="/settings">Settings</a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
