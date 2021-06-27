import React from 'react';
import styled from 'styled-components';
import {IState} from "../../../../reducers";
import { useSelector } from "react-redux";
import { IUsersReducer } from '../../../../reducers/usersReducers';


const Container = styled.div`
    width:100%;
    height:110px;
    background-color: #fff;
    display:flex;
    flex-direction: column;
    padding-left:15px;
    font-family:Tahoma;
    margin-bottom: 15px;

    .title{
        margin-top:6px;
        font-size: 17px;
        margin-bottom:10px;
        color: #4154a7
    }
    a{
        text-decoration:none;
        color: #4154a7;
    }
    .lastUpdate,.Type, .corpName{
        font-size:14px;
        color:#adadad;
    }
    .corpTypeUpdate{
        display:flex;
        flex-direction:row;
        align-items:center;
        margin-top:15px;
    }
    .corpPicture{
        border-radius:50%;
    }
    .corpPicture, .typeIcon{
        width:20px;
        height:20px;
        margin-left:5px;
        margin-right:5px;
    }
    .text{
        font-size: 15px;
    }
    h1{
        font-weight:bold;
        font-size: 15px;
        margin-left: 10px;
        margin-right: 10px;
    }
`;


const Posts =  ({posts, loading} : {posts: any[], loading: boolean}) => 
{   
    const { currentUser } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));
    
    if(loading){
        return <h2>Loading ...</h2>
    }
    return (
        <div>
            {posts.map( post => ( 
                <Container key={post.id}>

                    <div className='title'>
                        {post.title}
                    </div>

                    <div className='text'>
                        <p>
                            {post.body}
                        </p>
                    </div>

                    <div className='corpTypeUpdate'>
                        <p className='corpName'>World Company SAS</p>
                        <h1>·</h1> 
                        <img className='typeIcon' src="./icons/entities2.png"/> 
                        <p className="Type">Corporate</p>
                        <h1>·</h1>
                        <p className="lastUpdate">Updated 3 days ago by {currentUser?.name}.</p>
                    </div>
                </Container> 
            ))}
        </div>
    )
};

export default Posts;

