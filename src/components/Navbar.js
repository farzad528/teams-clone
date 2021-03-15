import { IconButton } from "@material-ui/core";
import {
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

function Navbar() {
  const [hovered, setHovered] = useState();
  return (
    <NavbarContainer>
      <NavbarHeader>
        <NavbarInfo>

        </NavbarInfo>
      </NavbarHeader>
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
const NavbarHeader= styled.div`

`;
const NavbarInfo = styled.div`

`;


