import { IconButton } from "@material-ui/core";
import {
  Autorenew,
  CallOutlined,
  DateRangeOutlined,
  HelpOutlineOutlined,
  InsertDriveFileOutlined,
  NotificationImportantOutlined,
  Notifications,
  NotificationsOutlined,
  PeopleOutlined,
  SmsOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import NavbarOption from "./NavbarOption";

function Navbar() {
  const [hovered, setHovered] = useState();
  return (
    <NavbarContainer>
      <NavbarOption Icon={NotificationsOutlined} title="Activity" />
      <NavbarOption Icon={SmsOutlined} title="Chat" />
      <NavbarOption Icon={PeopleOutlined} title="Teams" />
      <NavbarOption Icon={DateRangeOutlined} title="Calendar" />
      <NavbarOption Icon={CallOutlined} title="Calls" />
      <NavbarOption Icon={InsertDriveFileOutlined} title="Files" />
      <NavbarOption Icon={HelpOutlineOutlined} title="Help" />
    </NavbarContainer>
  );
}

export default Navbar;

const NavbarContainer = styled.div`
  background-color: #ebebeb;
  color: black;
  flex: 0.1;
  border-top: 1px solid #49274b;
  max-width: 75px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;
