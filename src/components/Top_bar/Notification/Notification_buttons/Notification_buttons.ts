import styled from "styled-components";

const NotificationButtons = styled.a`
 img {
    width: 25px;
    height: 25px;
    margin-right: 0;
  }
  background-color:#fff;
        :hover {
          background-color: #c1cbd5;
          width: 35px;
          height: 35px;
  }  
  position: relative;
  display:flex;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`;

export default NotificationButtons;