import React, { Fragment, useState } from "react";

const Input = () =>{

        const [description, setDescription] = useState("");

        const onFormSubmit = async e => {
            e.preventDefault();
            try {
                const body = { description };
                const response = await fetch("/todos", {
                    method: "POST", 
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                });

                window.location = "/";
                
            } catch (error) {
                console.error(error);
            }
        }

        return(
            <Fragment>
                <h1 className="ta_center">Todo List</h1><br /><br />
                <form className="column large12 medium12 small12 center primary_white" onSubmit={onFormSubmit}>
                    <div className="column large10 medium10 small10">
                        <input type="search" style={{maxWidth: "100%", width: "100%", marginTop: "5px"}} value={ description } onChange={e => setDescription(e.target.value)} required />
                    </div>
                    <div className="column large2 medium2 small2">
                        <button className="primary_blue">Add</button>
                    </div>
                </form>
            </Fragment>
        );
}

export default Input;