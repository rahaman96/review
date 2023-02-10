import React, { useState } from 'react';
import Card from './Card';
import '../styles/Review.css'
import ReactStars from 'react-stars'
const Stars = ({ handleReview }) => {

    const [rating, setRating] = useState(0)
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    const [disable, setDisable] = useState(false)
    const [validateName, setvalidateName] = useState(false)
    const [validateComment, setValidateComment] = useState(false)
    const [validateRating, setvalidateRating] = useState(false)

    function ratingChanged(value) {
        setRating(value)
        if(rating.length<1){
            setvalidateRating(true)
        }
        console.log(value)
    }

    function handleName(name) {

        if (name.length < 8) {
            setvalidateName(true)
            setDisable(true)
        } else {
            setvalidateName(false)
            // setDisable(true)
        }
        setName(name)
        console.log(name)
    }
    function handleComment(comment) {
        console.log(comment)
        setComment(comment)
        if (comment.length < 20) {
            setValidateComment(true)
            setDisable(true)
        } else {
            setValidateComment(false)
            // setDisable(false)
        }

    }
    function makeid(length) {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }


    function handleSubmit() {
        setName('')
        setComment('')
        handleReview({
            id: makeid(20),
            rating,
            name,
            comment
        })
    }
    const nameStyle = {
        color: 'red',
        // padding: '0px 5px'
    }
    const commentStyle = {
        color: 'red',
        // padding: '30px 0px'
    }
    return (
        <>
            <Card>
                <label>Rating</label>
                <ReactStars
                    value={rating}
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    color2={'#ffd700'} />
                     {validateRating &&
                    <span className='pt-2' style={commentStyle}>
                        * Please Give Rating
                    </span>
                }

                <input type="text"
                    value={name}
                    placeholder='Title'
                    onChange={(e) => handleName(e.target.value)}
                    className='nameInput'
                />
                {
                    validateName &&
                    <span className='pb-2' style={nameStyle}>
                        * Must be at least 8 Characters or more
                    </span>
                }

                <textarea className='comment'
                    placeholder='Comment'
                    // defaultValue={comment}
                    value={comment}
                    onChange={(e) => handleComment(e.target.value)}
                >
                </textarea>
                {validateComment &&
                    <span className='pt-2' style={commentStyle}>
                        * Must be at least 20 Characters or more
                    </span>
                }
            </Card>
            <div className='Btn'>
                <button className='sbt-btn'
                 disabled={!name || !rating}
                    onClick={() => handleSubmit()}
                >
                    Submit
                </button>
            </div>
            <br />



        </>
    )
}
export default Stars;