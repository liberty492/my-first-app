import React from 'react'

const Stries = () => {
    const handleparent=(value)=>{
        console.log('this is parent'+value);
    }
    return (
        <div><Childcomponent datafromparent={handleparent}/></div>
    )
}
const Childcomponent = (props) => {
    const value="50 is coming from child"
return(
    <button onClick={()=>props.datafromparent(value)}>pass data to parent</button>
)
}

export default Stries;