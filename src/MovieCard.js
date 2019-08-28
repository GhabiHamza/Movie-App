import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { Card, CardImg, CardBody,
    CardTitle } from 'reactstrap';





const MovieCard = ({Y}) =>{
    return(
        
            <Card className='col-lg-4 card1'>
            <StarRatingComponent 
                name="rate1" 
                starCount={5}
                value={Y.rating}
            />
                <CardImg top height="152px" src={Y.image} alt="Card image cap" />
                <CardBody>
                <CardTitle>{Y.title}</CardTitle>
                </CardBody>
            </Card>
        
    )
}
export default MovieCard;