import {FC} from "react";
import styled from "styled-components";
import {IWorkspace} from "../../../../interfaces/IWorkspace";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  width: 340px;
  height:200px; 
  flex-direction: column;
  background-color: #fff;
  display:flex;
  font-family: Tahoma;
  padding:10px;
  position: relative;
  border-radius:5px;

`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 70px;
  position:absolute;
  width: 100%;
  height: 75px;
  background: url(${(props: {bannerUrl: string}) => props.bannerUrl}) no-repeat;
  background-size: cover;
  border-radius:5px;
`;


const TypeImage = styled.img`
  width:80px;
  height:80px;
  position:absolute;
  border: 1px solid lightgray;
  margin-left: 15px;
  margin-top: 50px;
  background-color:#fff;
  border-radius:5px;
;
`;

const Title = styled.div`
  position:absolute;
  margin-top:90px;
  margin-left: 110px;
  font-size: 18px;

`;

const Information = styled.div`
  display: flex;
  position:absolute;
  flex-direction: column;
  margin-top: 135px;
  margin-left:14px;
  border-radius:5px;
`;

const Data = styled.div`
  display: flex;
  align-items: center;
  font-size:13px;
 
`;

const LastUpdated = styled.div`
  margin-left:5px;
  font-size:13px;
  color:gray;
`;

const InformationIcon = styled.img`
  width: 30px;
  height:30px;
`;

interface ICardComponent {
  className?: string;
  workspaceData: IWorkspace;
}

const CardComponent: FC<ICardComponent> = (props) => {
    const handleCardClick = () => {
        window.location.href = `/workspace`;
    }

    return (
        <Wrapper onClick={handleCardClick}>
          <BackgroundImage bannerUrl={props.workspaceData.bannerUrl}/>
          <TypeImage src={`./icons/${props.workspaceData.icon}.jpg`} />
          <Title>{props.workspaceData.title}</Title>
          <Information>
              <Data>
                  <InformationIcon src={`./icons/${props.workspaceData.icon}.jpg`} />
                  {props.workspaceData.type} • 
                  <img src='./icons/people.png'/>
                  {props.workspaceData.users} users
              </Data>
              <LastUpdated>
                  Last update {props.workspaceData.lastUpdated}
              </LastUpdated>
          </Information>
      </Wrapper>
    );
}
export default CardComponent;
