import {FC} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {IPublication} from "../../../../entities/publication";

const Wrapper = styled.div`
  display:flex;
  position: relative;
  height: 100%;
  color: #fff;
`;

const PublicationImage = styled.div`
  height: 300px;
  width:300px;
  position: absolute;
  border-radius:5px;
  /* background: url("${(props: {thumbnailSrc: string}) => props.thumbnailSrc}"); */
  /* background-image: linear-gradient(to bottom, #4154a7, #000000); */
  background-image: url('./images/city.jpg');
  background-size: cover;
  z-index: 1;
`;

const PublicationContent = styled.div`
  display: flex;
  z-index: 1;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom:30px;
  padding-left: 5px;
`;

const Title = styled.div`
  font-size:15px;
  padding-bottom: 15px;
`;

const WhoAndWhen = styled.div`
  display: flex;
  font-size: 12px;
  height: fit-content;
  margin-top:3px;
`;

const CreationDate = styled.div`
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const ProfileImage = styled.img`
  height:20px;
  border-radius: 50%;
  margin-right: 5px;
`;

interface PublicationProps {
    className?: string;
    publication: IPublication
};

const MainPublication: FC<PublicationProps> = (props) => {
  return (
    <Wrapper className={props.className}>
      <div>
          <Link to="#">
              <PublicationImage thumbnailSrc={props.publication?.thumbnailUrl} />
          </Link>
      </div>
      <PublicationContent>
          <Title >
            <Link to="#" style={{color: 'white', textDecoration: 'none'}}>
              {props.publication?.title}
            </Link>
          </Title>

          <WhoAndWhen>

            <CreationDate>
                {props.publication?.creationDate}
            </CreationDate>
            
            <Profile>
                <ProfileImage src={props.publication?.author.photo.thumbnailUrl} />
                {props.publication?.author.name}
            </Profile>

          </WhoAndWhen>
      </PublicationContent>
    </Wrapper>
  );
}

export default MainPublication;
