import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";

import Burger from "./Burger/Burger";
import Menu from "./Menu/Menu";
import { useOnClickOutside } from "../../hooks/hooks";

const Header = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <Wrapper>
      <Cont ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </Cont>

      <Cont>
        <p>LOGO</p>
      </Cont>

      <Cont>
        <div><p>Name User</p></div>
        <button></button>
      </Cont>
    </Wrapper>
  );
};

const outline = css`
  outline: 1px solid red;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.softGrey};
  margin-bottom: 10px;
  width: 100%;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const Cont = styled.div`
  ${outline}
`;

export default Header;
