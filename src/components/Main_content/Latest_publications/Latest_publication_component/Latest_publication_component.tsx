import {FC} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {IPublication} from "../../../../entities/publication";

const Wrapper = styled.div`
  display:flex;
  height:82px;
  margin-bottom: 1px;
  border-radius:20px;
`;

const PublicationImage = styled.div`
  height: 70px;
  width: 70px;
  background: url("${(props: {thumbnailSrc: string}) => props.thumbnailSrc}");
  background-image: linear-gradient(to bottom, #4154a7, #232c47);
  border-radius:5px;
  background-size: cover;
`;

const PublicationContent = styled.div`
`;

const Title = styled.h3`
  font-size:15px;
  margin-left: 5px;
  padding: 10px;
  color:white;
  text-decoration: none;
`;

const WhoAndWhen = styled.div`
  display: flex;
  margin-left: 10px;
  padding: 5px;
  font-size: 13px;
  align-items: center;
  height: fit-content;
  color:grey;
`;

const CreationDate = styled.div`
  color:grey;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const ProfileImage = styled.img`
  height: 15px;
  border-radius: 50%;
  margin-right: 10px;
`;

interface PublicationProps {
    className?: string;
    publication: IPublication
}

const Publication: FC<PublicationProps> = (props) => {

  return (
      <Wrapper>
          <div>
              <Link to="#">
                  <PublicationImage thumbnailSrc={props.publication?.thumbnailUrl} />
              </Link>
          </div>
          <PublicationContent>
              <Title>
                  <Link to='#' style={{ color: 'black', textDecoration: 'none'}}>
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

export default Publication;
