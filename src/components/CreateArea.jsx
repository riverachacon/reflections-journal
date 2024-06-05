import React, {useState} from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  })
  function handleInput(event) {
    const {name, value} = event.target
    
    setNote((prevValue)=> {
      return {...prevValue, [name]: value}
    })
  }
  function handleSubmit(event) {
    props.onAddNote(note)
    event.preventDefault()
    setNote({// to clear input after submiting a journal
      title: "",
      content: ""
    })
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleInput} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleInput} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
