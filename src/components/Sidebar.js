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
  max-width: 260px;
  margin-top: 60px;
`;
const SidebarHeader = styled.div``;
const SidebarInfo = styled.div``;

const SidebarFilterList = styled(FilterList)`
  cursor: pointer;
  margin-left: auto;
  margin-right: 20px;

  :hover {
    opacity: 0.8;
  }
`;
