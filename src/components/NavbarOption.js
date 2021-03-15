import React from "react";
import styled from "styled-components";

function NavbarOption({ Icon, title }) {

  return (
    <NavbarOptionContainer>
      {Icon && <Icon fontSize="large" style={{ padding: 10 }} />}
      <p>{title}</p>
    </NavbarOptionContainer>
  );
}

export default NavbarOption;

const NavbarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  color: gray;
  :hover {
    opacity: 0.8;
    background-color: white;
    width:100%;
  }

  &:last-child {
    margin-top: auto;
  }
`;
