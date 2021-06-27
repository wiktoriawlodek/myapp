import {FC} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import PublicationComponent from "./Latest_publication_component/Latest_publication_component";
import MainPublication from "./Main_publication/Main_publication";
import {useSelector} from "react-redux";
import {IState} from "../../../reducers";
import {IPublicationsReducer} from "../../../reducers/publicationsReducers";

const Wrapper = styled.div`
  
  box-shadow: 0px 0px 15px lightgrey;
  display:flex;
  background: #ffffff;
  width: 100%;
  height: 300px;
  font-family: Tahoma;
  border-radius:5px;
  margin-bottom: 20px;
`;

const MainPublicationWrapper = styled.div`
  height: 320px;
`;

const Publications = styled.div`
  margin-left:20px;
  color:#4154a7;
  display: flex;
  flex-direction: column;
  padding: 8px;
  h2{
      font-size: 21px;
  }
`;

const LatestPublications: FC = () => {
    const { latestPublications } = useSelector<IState, IPublicationsReducer>(state => ({
        ...state.publications
    }));

    return (
        <Wrapper id='latest-publications-wrapper'>
            <MainPublicationWrapper>
                <MainPublication publication={latestPublications[0]}/>
            </MainPublicationWrapper>
            <Publications>
                <h3 style={{marginBottom:'5px'}}>Latest publications</h3>
                <div>
                    {latestPublications.slice(1, 4).map((publication) => {
                        return (
                            <PublicationComponent publication={publication}/>
                        );
                    })}
                </div>
                <Link to="/publications" id="link" style={{ color: '#4154a7', textDecoration: 'none', fontSize:'15px', margin:'2px 0px 0px 2px'}}>See more publications...</Link>
            </Publications>
        </Wrapper>
    );
}

export default LatestPublications;
