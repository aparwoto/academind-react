import { useState} from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';


function Todo({text, description}) {
    const [ modalIsOpen, setModalIsOpen ] = useState(false);


    function deleteHandler() {
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    return(
        <div className="card">
        <h2>{text}</h2>
        <p>{description}</p>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
        { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
        { modalIsOpen && <Backdrop />}
      </div>
    );
}

export default Todo;