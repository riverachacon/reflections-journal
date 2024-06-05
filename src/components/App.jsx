import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]) 

  function addNote (newNote) {
    setNotes((prevValue)=> {
      return[...prevValue, newNote]
    })
    console.log(notes);

  }
  function deleteNote (id) { // id received from Note component
    setNotes((prevValue)=> {
      return prevValue.filter((i, index)=> {
        return id !== index
      })
    })

  }

  return (
    <div>
      <Header />
      <CreateArea
      onAddNote= {addNote} />
      {notes.map((i, index)=> {
        return (<Note key={index} id={index} title={i.title} content={i.content}
          onDelete= {deleteNote} />) // passing deleteNote() to receive id of note to delete
      })}
      
      <Footer />
    </div>
  );
}

export default App;
