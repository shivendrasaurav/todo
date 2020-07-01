import React, { Fragment, useState } from "react";


const Edit = ({todo}) =>{

    const [description, setDescription] = useState(todo.description);

    const openmod1 = () => {
        document.getElementById(`id${todo.todo_id}`).style.display="Block";
    }
    const closemod1 = () => {
        document.getElementById(`id${todo.todo_id}`).style.display="None";
        setDescription(todo.description);
    }
    
    const updateDescription = async e => {
        e.preventDefault();
        try {
          const body = { description };
          const response = await fetch(
            `/todos/${todo.todo_id}`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body)
            }
          );
    
          window.location = "/";
        } catch (err) {
          console.error(err.message);
        }
    };

    return(
        <Fragment>
            <button class="primary_yellow dlevel1" onClick={openmod1}>Edit</button>
            <div class="modal_container" id={`id${todo.todo_id}`}>
                <div class="modal_content zi3" style={{height: "200px"}}>  
                    <div class="dialogue_pane large12">  
                    <button class="primary_red right ta_center mod_close_btn" onClick={closemod1}>X</button>  
                    </div>  
                    <div class="page_container">
                            <div className="column large12 medium12 small12">
                                <input type="search" style={{maxWidth: "100%", width: "100%", marginTop: "5px"}} value={ description } onChange={e => setDescription(e.target.value)} />
                            </div>
                            <div className="column large2 medium2 small2">
                                <button className="primary_yellow" onClick = {e=>updateDescription(e)}>Update</button>
                            </div>
                    </div>  
                </div>  
            </div>  
        </Fragment>
    );
}

export default Edit;