import { FC } from 'react';
import styled from 'styled-components';

const Links = styled.div`
    display:flex;
    flex-direction: column;
`;

const LinkIcon = styled.div`
     margin-top:10px;
    img{
        width:25px;
        height:25px;
        margin-left:20px;
        vertical-align:middle;
    }
    width:27%;
    display:flex;
    button{
    }
    span{
        width:10%;
        margin-top: 10px;
        margin-left:15px;
        font-size: 12px;
        font-family: "Tahoma";
    }
    a{
        text-decoration:none;
        color:black;
    }
`;

const LinksUnderProfile: FC = () => {
    return( 
        <Links>
            <LinkIcon>
                    <img src='./icons/publications.svg' alt='Publications'></img>
                    <a href="/publications"><span>Publications</span></a>
            </LinkIcon>

            <LinkIcon>
                    <img src='./icons/ecosystem.svg' alt='Ecosystem'></img>
                    <a href="/ecosystem"><span>Ecosystem</span></a>
            </LinkIcon>

            <LinkIcon>
                    <img src='./icons/entities.svg' alt='Entities'></img>
                    <a href="/entities"><span>Entities</span></a>
            </LinkIcon>
        </Links>
        
    );
};
export default LinksUnderProfile;
