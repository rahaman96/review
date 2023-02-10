import React, { useState, useEffect } from 'react';
import '../styles/Review.css'
import ReviewList from './ReviewList';
import EachReview from './EachReview';
import Stars from './Stars';

const getlocalItems = () => {
    const list = localStorage.getItem('list')
    console.log('list')
    if (list) {
        return JSON.parse(localStorage.getItem('list'))
    } else {
        return [];
    }
}


const Reviews = (props) => {
    const [reviews, setReviews] = useState(getlocalItems(ReviewList))
    const [edit, setEdit] = useState([reviews])
    console.log('setEdit', edit)

    console.log('props', reviews)

    function deleteReview(id) {
        setReviews(reviews.filter((item) => {
            return id !== item.id
        }))
    }

    function addReview(review) {
        setReviews([review, ...reviews])
    }

    function handleReset() {
        setReviews([])
    }
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(reviews))
    }, [reviews])
    return (
        <>
            <div>
                <div>
                    <h2 className='text-center'>Review Application</h2>
                </div>
                <Stars handleReview={addReview} />
                <div className='viewPage'>
                    {
                        reviews.length > 0 ? reviews.map((item, index) => {
                            return <EachReview review={item} key={index} handleDelete={() => deleteReview(item.id)}
                                setEdit={setEdit} edit={edit} />
                        }) :
                            <div className="card">
                                <div className="cardHeader text-center">
                                    <span className='review '>No Reviews</span>
                                </div>

                            </div>
                    }
                    <div className='removeBtn'>
                        <button className='sbt-btn ' onClick={handleReset}>Reset</button>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Reviews;