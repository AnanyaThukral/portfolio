import React from 'react'
import styled from 'styled-components'

const Solution = () => {
    return (
        <Container>
            <span>solution -- </span>
            <Description>
                <Brief>
                    intL Tracker is a one stop web application solution for International Students to track and check their progress towards immigration eligibility. The Application allows student to <Bold>check semester status (Full-time/ Part-time)</Bold> based on the credit or courses added/dropped through the semester. Additionally, the application gives students a platform to <Bold>connect with senior International students</Bold> in their universities to gain insight and tips on immigration and work permit requirements. Further, it also allows students to <Bold>view and register for immigration related events</Bold > happening in the university.
                </Brief>
                <ImageContainer>
                    <Image src = "./img/Solution.png"/>
                </ImageContainer>
            </Description>
        </Container>
    )
}

export default Solution

const Container = styled.div`
    margin-top: 20px;
    /* min-width: 1100px; */
    color: #14213D;
    span{
        font-size: 1.7rem;
    }
    @media (max-width: 1300px){
        min-width: 900px;
    }
`

const Description = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Brief = styled.div`

`

const Image = styled.img`
    height: 100%;
`

const Bold = styled.div`
    font-weight: bold;
    display: inline;
    color: #14213D;
`

const ImageContainer = styled.div`
    height: 700px;
    margin-top: 20px;
    @media (max-width: 1300px){
        height: 600px;
        display: flex;
        justify-content: center;
    }
`