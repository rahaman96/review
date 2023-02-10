import React, { useState } from "react";
import "../styles/Modal.css";
import '../styles/Review.css'
import Card from "./Card";
// function Modal({ closeModal, reviews }) {
function Modal(props) {
   const {setEdit}=props.reviews
    const [toggle, setToggle] = useState(true)
    const editData = props.reviews
    console.log('reviews', props)

    const handleEdit = (data) => {
        setEdit(data)
        console.log('data',data)
        // .find((ele) => {
        //     return ele.id === id
        // })
        // console.log('newEdit', newEdit)
        
    }

    function handleEditData(data) {
        setEdit(data)
        console.log('data',data)
    }

    function handleCommentData() {

    }
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            props.closeModal(false)
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="title">
                    <h1>Are You Sure You Want to Edit?</h1>
                    {/* <h4>{reviews.name}</h4> */}
                </div>

                <Card>
                    <input type="text"
                        defaultValue={editData.name}
                        onChange={(e) => handleEditData(e.target.value)}

                    />
                    <textarea className='commentModal mt-2'
                        defaultValue={editData.comment}
                        onChange={(e) => handleCommentData(e.target.value)}
                    >
                    </textarea>
                </Card>
                <div className="footer">
                    <button
                        onClick={() => {
                            // closeModal(false);
                            props.closeModal(false)
                        }}
                        id="cancelBtn"
                    >
                        Cancel
                    </button>
                    <button onClick={ handleEdit}>Edit</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;