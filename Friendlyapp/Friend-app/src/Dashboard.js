/*  It’s a private page that users can access only after successfully logged in.
 it will also provide the option to logout from user account in the same component. */

import React from 'react';
import { getUser, removeUserSession } from './Utils/Common';
import MemberContext from './context/MemberContext';
import MemberList from './components/members/MemberList';

function Dashboard(props) {
  const user = getUser();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }

  // this is the output that can see if you start the website
  return (
    <main>
    <div>
      <div className="unknown">
      <MemberContext>
 <MemberList/>
    </MemberContext>
      </div>
      <div className="logout">
      <input type="button" onClick={handleLogout} value="Sign out" />
      </div>
    </div>
    </main>
  );
}

export default Dashboard;
