import {FC} from 'react';
import styled from 'styled-components';
import SliderDiv from './Workspaces_slider/Slider';
import LatestPublications  from './Latest_publications/Latest_publications';
import BottomContainer from './Resume_your_work/Bottom_container';
import Workspaces from './Workspaces/Workspaces';
import Entities from './Entities/Entities';
import Profile from '../Profile/Profile';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

const Wrapper = styled.div`
    width: 70%;
    height: 900px;
    margin-left: 60px;
    margin-right: 80px;
    margin-top: 20px;
    font-family: Tahoma;

    /* background-color:yellowgreen; */
    span{
        font-size: 18px;
        margin-left:15px;
    }
`;

const Center: FC = () => {
    return ( 
        <Wrapper>
            <Router>
                 <Switch>

                    <Route exact path="/">
                        <LatestPublications/>
                        <span>Workspaces</span>
                        <SliderDiv/>
                        <span>Resume your work</span>
                        <BottomContainer/>
                    </Route>
                   
                    <Route path="/workspace">
                        <Workspaces/>
                    </Route>

                     <Route path="/profile">
                        <Profile/>
                    </Route>
                    
                    <Route path="/entities">
                        <Entities/>
                    </Route>


                    <Route path="/publication">
                        404
                    </Route>
                    <Route path="/notifications">
                        404
                    </Route>
                    <Route path="/people">
                        404
                    </Route>
                    <Route path="/comments">
                        404
                    </Route>
                    <Route path="/administration">
                        404
                    </Route>
                    <Route path="/client_contract">
                        404
                    </Route>
                    <Route path="/supplier_contract">
                        404
                    </Route>
                    <Route path="/corporate">
                        404
                    </Route>
                    <Route path="/group_norms">
                        404
                    </Route>
                    <Route path="/real_estate_contracts">
                        404
                    </Route>
                </Switch>    
            </Router>
        </Wrapper>
    );
};
export default Center;