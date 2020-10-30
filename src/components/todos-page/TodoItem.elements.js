import styled from "styled-components";
import {
  BsTrash,
  BsFillCaretUpFill,
  BsFillCaretDownFill,
} from "react-icons/bs";
// Drag-drop
//  https://medium.com/better-programming/the-beginners-guide-to-creating-an-interactive-list-with-react-28c8af880f35
//
//

export const TodoItemPlace = styled.div`
  opacity: 1;
  z-index: 10;
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const TodoItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const DraggableContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 0px 0px 15px;
`;

export const IconsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 4rem;
`;

export const UpIcon = styled(BsFillCaretUpFill)`
  font-size: 30px;
  color: rgb(199, 200, 200);
`;

export const DownIcon = styled(BsFillCaretDownFill)`
  font-size: 30px;
  color: rgb(199, 200, 200);
`;

export const Separator = styled.div`
  height: 60%;
  border-top: 0px solid rgb(199, 200, 200);
  border-left: 0px solid rgb(199, 200, 200);
  border-right: 1px solid rgb(199, 200, 200);
  border-bottom: 0px solid grey;
  margin-left: 10px;
`;

export const TodoItemWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const TodoTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DeleteTodo = styled(BsTrash)`
  color: pink;
  cursor: pointer;
  font-size: 23px;

  &:hover {
    color: red;
  }
`;

export const SubItemsContainer = styled.div`
  margin-top: 7px;
  margin-bottom: 5px;
`;
