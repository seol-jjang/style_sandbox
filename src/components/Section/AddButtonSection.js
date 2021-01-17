import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdTextFields } from "react-icons/md";
import { BiBold } from "react-icons/bi";

function AddButtonSection() {
  const itemType = {
    TEXT_ITEM: "Text",
    BUTTON_ITEM: "Button"
  };
  const [selectBtn, setSelectBtn] = useState("");
  const [visible, setVisible] = useState(false);

  const onHover = (item) => {
    setVisible(true);
    setSelectBtn(item);
  };

  return (
    <CustomList>
      {visible && (
        <HoverBubble item={selectBtn}>
          <BubbleContent>{selectBtn}</BubbleContent>
          <Triangle />
        </HoverBubble>
      )}
      <li
        onClick={() => setSelectBtn(itemType.TEXT_ITEM)}
        onMouseEnter={() => onHover(itemType.TEXT_ITEM)}
        onMouseLeave={() => setVisible(false)}
      >
        <MdTextFields />
      </li>
      <li
        onClick={() => setSelectBtn(itemType.BUTTON_ITEM)}
        onMouseEnter={() => onHover(itemType.BUTTON_ITEM)}
        onMouseLeave={() => setVisible(false)}
      >
        <BiBold />
      </li>
    </CustomList>
  );
}

export default AddButtonSection;

const CustomList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    cursor: pointer;
    padding: 5px;
    opacity: 0.5;
    transition: opacity 0.1s ease-in;
    &:hover {
      opacity: 1;
    }
    svg {
      display: flex;
      width: 30px;
      height: 30px;
    }
  }
`;

const HoverBubble = styled.div`
  z-index: 1;
  position: absolute;
  div {
    background-color: #2b2b2b;
  }

  ${(props) =>
    props.item === "Text"
      ? css`
          top: 7px;
          right: -45px;
        `
      : css`
          top: 47px;
          right: -60px;
        `}
`;

const BubbleContent = styled.div`
  padding: 5px 8px;
  border-radius: 5px;
  font-size: 15px;
  color: white;
`;

const Triangle = styled.div`
  position: absolute;
  top: calc(50% - 4px);
  left: -3px;
  width: 7px;
  height: 7px;
  transform: rotate(45deg);
`;
