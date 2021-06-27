import styled from "styled-components";
import NotificationButtons from "./Notification_buttons/Notification_buttons";

function Notification() {

  const Wrapper = styled.div`
 display: flex;
    align-items: center;
    width: 20%;
    /* background-color:black; */
    display: flex;
    justify-content:flex-end;
    /* align-items:right; */
  `;

  const NotificationIcon = styled(NotificationButtons)`
    margin-right: 15px;
  `;

  const NotifyBadge = styled.div`
    width: 17px;
    height: 17px;
    top: 0;
    right: 0;
    border-radius: 17px;
    font-size: 13px;
    background-color: #426bf0;
    color: #fff;

    position: absolute;
    /* line-height: normal; */
    text-align: center;
    font-family:Tahoma;
  `;

  return (
      <Wrapper>
          <NotificationButtons href="/">
              <img src="./icons/house.png" alt="Home page"/>
          </NotificationButtons>

          <NotificationIcon href="/comments">
              <img src="./icons/comments.png" alt="Comments"/>
              <NotifyBadge>6</NotifyBadge>
          </NotificationIcon>

          <NotificationIcon href="/notifications">
              <img src="./icons/bell.png" alt="Notifications"/>
              <NotifyBadge>2</NotifyBadge>
          </NotificationIcon>
      </Wrapper>
  );
}
export default Notification;