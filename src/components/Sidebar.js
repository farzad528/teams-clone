import { FilterList } from "@material-ui/icons";

import React from "react";
import styled from "styled-components";

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Teams</h2>
          <SidebarFilterList />
        </SidebarInfo>
      </SidebarHeader>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: whitesmoke;
  color: black;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 400px;
  margin-top: 60px;
`;
const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
`;

const SidebarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
`;

const SidebarFilterList = styled(FilterList)`
  cursor: pointer;
  margin-left: auto;
  margin-right: 20px;

  :hover {
    opacity: 0.8;
  }
`;
