import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { AiOutlineEdit } from 'react-icons/ai';

import '../styles/Review.css'
import Modal from './Modal';
const EachReview = ({ review, handleDelete }, props) => {
    console.log('review', review)
    const { edit,setEdit } = props
    console.log('setEdit',edit)
          // const [toggle, setToggle] = useState(true)
    // const [edit, setEdit] = useState(null)
    const [openModal, setOpenModal] = useState(false);

    function handleReset(){

    }
    return (
        <>

            <div className="card">
                <div className="cardHeader">
                    <span className='rating'>
                        {review.rating}
                    </span>
                    <span className='name'>
                        {review.name}
                    </span>
                    <span>
                    </span>
                    <span className='icon'>
                        <i onClick={() => setOpenModal(true)}><AiOutlineEdit /></i>
                        <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
                    </span>
                </div>
                <div className='comment'>
                    {review.comment}
                </div>
            </div>
            {
                openModal && <Modal closeModal={setOpenModal} reviews={review} setEdit={setEdit} />
            }
            {/* <div>
               {props.review.name}
            </div> */}
        </>
    )
}
export default EachReview;