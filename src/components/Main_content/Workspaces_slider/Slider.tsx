import {FC} from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import CardComponent from './Card_component/Card_component';
import WorkspaceData from "../../../data/WorkspacesData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
    width: 100%;
    height:200px;
    margin-top: 20px;
    display:flex;
    flex-direction:column;
    margin-bottom:20px;
    border-radius:5px;

`;

const SliderDiv: FC = () => {
    const workspaceData = WorkspaceData;

    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
        <Wrapper>
            <Slider {...settings}>
                {workspaceData.map((workspace) => {
                    return (
                        <CardComponent workspaceData={workspace}  key={workspace.id} />
                    );
                })}
            </Slider>
        </Wrapper>
    );
}
export default SliderDiv;