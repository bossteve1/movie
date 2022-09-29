import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ListForm(props) {
    const [formData, setFormData] = useState({
        id: uuid(),
        title: "",
    })

    function onChangeSubmit(e) {
        let key = e.target.id
        setFormData({
            ...formData,
            [key]: e.target.value
        })
    }

    function listSubmit(e) {
        e.preventDefault()
        props.onListFormSubmit(formData)
    }

    return (
        <form className="watchlist form" onSubmit={listSubmit}>
            <input type="text" id="title" name="watchlist" placeholder={formData.title} onChange={onChangeSubmit} />
            <button className="watchlist button" type="submit" >
                Add movie to Watchlist
            </button>
        </form>
    );


}
export default ListForm;