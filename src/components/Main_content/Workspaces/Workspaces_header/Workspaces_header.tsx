import {FC} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 270px;
  width: 97%;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;
  background-color: white;
  margin:10px auto;
`;

const InnerWrapper = styled.div`
  display:flex;
  flex-direction: row;
`;

const Header = styled.div`
  background: url("./images/sign2.jpg");
  background-size: cover;
  border-radius:5px;
  background-position-y: center;
  width:100%;
  height: 200px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  height:40px;
`;

const Title = styled.div`
  font-size: 18px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 14px;

`;

const Text = styled.div`
  display: flex;
  font-size: 14px;
  color:gray;
  align-items: center;
  padding: 14px;
`;

const WorkspacesHeader: FC = () => {
  return (
      <Wrapper>
          <Header/>
          <InnerWrapper>
              <img src="./icons/contract.jpg"/>
              <Main>
                  <ContentWrapper>
                      <Title>Client contract</Title>
                  </ContentWrapper>
                  <Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsam pariatur fuga quam.
                  </Text>
              </Main>
          </InnerWrapper>
      </Wrapper>
  );
}
export default WorkspacesHeader;