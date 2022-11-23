import React from 'react'
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import AddHomeIcon from '@mui/icons-material/AddHome';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SearchIcon from '@mui/icons-material/Search';


function Sidebar() {
  return (
    <div className='sidebar'>
        <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />

      <SidebarOption Icon={AddHomeIcon} title="Home"/>
      <SidebarOption Icon={SearchIcon} title="Search"/>
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>
      <br />
    <strong className="sidebar__title">PLAYLISTS</strong>
    <hr />
    {/* <SidebarOption title="Hip Hop"/> */}
    <SidebarOption title='Rock'/>
    <SidebarOption title='Hip hop'/>
    <SidebarOption title= "mashup"></SidebarOption>
    <SidebarOption title='RnB'/>
    {/* <SidebarOption title='RnBdhhd'/> */}
    </div>
  )
}

export default Sidebar;