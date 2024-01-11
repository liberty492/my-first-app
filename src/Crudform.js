import React, { useState } from "react";

const Crudform = () => {
    const [list, setList] = useState([]);
    const [message, setMessage] = useState({
        text: "",
        id: ""
    })
    const [editingitem, setEditingitem] = useState({
        id: "",
        isediting: false
    })

    const handlechange = (e) => {
        e.preventDefault();
        setMessage({
            ...message,
            text: e.target.value
        })
    }
    const handleclick = (e) => {
        e.preventDefault();
        const newobj = {
            text: message.text,
            id: new Date().getTime().toString()
        }
        setList([...list, newobj])
        setMessage({
            text: "",
            id: "",
        })
    }
    const handledelte = (id) => {
        let newtodo = list.filter((eachitem) => {
            return eachitem.id !== id
        })
        setList(newtodo);
    }
    const handleedit = (id) => {
        setEditingitem({
            ...editingitem,
            id: id,
            isediting: true
        })
        let newtodo = list.find((eachobj) => {
            return eachobj.id === id
        })
        setMessage({
            ...message,
            text: newtodo.text,
            id: newtodo.id
        })

    }

    const handleeditable = (e) => {
        e.preventDefault();
        let newtodos = list.map((eachobj) => {
            if (eachobj.id === editingitem.id) {
                return {
                    text: message.text,
                    id: editingitem.id
                }
            } else {
                return eachobj;
            }
        })
        setList(newtodos);
        setMessage({
            text: "",
            id: ""
        })
        setEditingitem({
            id: "",
            isediting: false
        })
    }


    return (
        <div className="form-content">
            <form>
                <div className="form-content">
                    <input type="text" name="message" id="message" placeholder="enter a message" value={message.text} onChange={handlechange} />
                    {
                        editingitem.isediting ? (<button type="submit" onClick={handleeditable}>edit</button>
                        ) : (<button type="submit" onClick={handleclick}>add</button>)
                    }
                </div>
                <hr />
                {list.length == 0 && <h4>there is no items in the list</h4>}
                <ul>
                    {
                        list.map((eachobj) => {
                            console.log(eachobj);
                            const { text, id } = eachobj;
                            return (
                                <li key={id}>
                                    <span>{text}</span>
                                    <button onClick={() => handleedit(id)}>edit</button>
                                    <button onClick={() => handledelte(id)}>delete</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </form>
        </div>
    )
}
export default Crudform;