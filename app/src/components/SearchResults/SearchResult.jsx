
import styled from "styled-components";


import { BASE_URL } from "../../App";
import { Button } from "../../App";

import { useState } from "react";

const SearchResult = ({ data }) => {


    return (

        <FoodContainer>
            <FoodCart>
                {data?.map((food) => (
                    <FoodCard key={food.name}>
                        <div className="food_image">
                            <img src={BASE_URL + food.image} alt={food.name} />
                        </div>
                        <div className="name_price">
                            <h2>{food.name}</h2>
                            <p>Price: ${food.price}.00</p>
                        </div>
                        <div className="last_line">
                            <Button>Buy Now</Button>
                            <span>i</span>
                        </div>

                        <div className="info">
                            <p>{food.text}</p>
                        </div>

                    </FoodCard>
                ))}
            </FoodCart>
        </FoodContainer>
    )
}

export default SearchResult;

const FoodContainer = styled.div``;
const FoodCard = styled.section`

background-color: rgba(255, 255, 255, 0.1);
width:300px;
margin:5px;
display:flex;
flex-direction:column;
align-items:center;
border-radius:8px;
padding:15px 0;

backdrop-filter: blur(10px); /* Adjust the blur value as needed */
border: 1px solid rgba(255, 255, 255, 0.2);

.food_image {
img {
    width: 100px; 
    height: 100px; 
    object-fit: contain; 
}
}

.name_price{
display:flex;
align-items:center;
flex-direction:column;
justify-content:center;
text-align:center;

padding:40px 5px;

h2{
    color:beige;
    width:150px;
}
p{
    color:#9c988f;
}

}
.last_line{
display:flex;
align-items:center;

span {
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    font-size: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid beige;
    width: 15px;
    border-radius: 50%;
    margin-left: 20px;
    cursor: pointer;
    color: beige;
    
    
    
}
}
.info{ 

color: #9c988f;
padding: 10px;
text-align: center;

p{
    background-color:rgba(255, 255, 255, 0.1);
    border:1px solid  #9c988f;
    font-size:12px;
    color: #9c988f;
    
}
}


`;
const FoodCart = styled.section`
        max-width:1300px;
        margin:auto;
        display:flex;
        flex-wrap:wrap;
        justify-content: center; 
        gap: 10px;

`;



