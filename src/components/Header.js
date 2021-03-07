import { Avatar } from "@material-ui/core";
import { Apps, Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderApps />
        <h3> Microsoft Teams</h3>
      </HeaderLeft>
      <HeaderSearch>
        <Search />
        <input placeholder="search" />
      </HeaderSearch>
      <HeaderRight>
        <HeaderAvatar />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--teams-color);
  color: white;
`;

const HeaderLeft = styled.div`
  flex: 0.2;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > h3 {
    padding-left: 10px;
  }
`;
const HeaderApps = styled(Apps)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const HeaderSearch = styled.div`
  flex: 0.6;
  opacity: 1;
  border-radius: 6px;
  background-color: #dadae3;
  text-align: start;
  display: flex;
  padding: 10px;
  color: gray;
  border: 1px gray solid;

  > input {
    background-color: transparent;
    text-align: start;
    min-width: 30px;
    border: none;
    outline: 0;
    color: white;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  flex: 0.2;
  align-items: flex-end;
  margin-left: auto;
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  margin-left: auto;
  margin-right: 20px;

  :hover {
    opacity: 0.8;
  }
`;
