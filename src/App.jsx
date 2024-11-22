import { useState } from 'react'
import Editor from './components/Editor';
import edjsHTML from "editorjs-html";
import './App.css'

// Initial Data
const INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: "header",
      data: {
        text: "This is my awesome editor!",
        level: 1,
      },
    },
  ],
};

function App() {
 
  const [data, setData] = useState(INITIAL_DATA);

   // Inicializa editorjs-html
   const edjsParser = edjsHTML();

   // Convierte los datos del editor a HTML
   const parsedHTML = edjsParser.parse(data).join("");
  return (
    <>
      
   
    <div className="editor">
      <Editor data={data} onChange={setData} editorblock="editorjs-container" />
      <button
        className="savebtn"
        onClick={() => {
          alert(JSON.stringify(data));
        }}
      >
        Save
      </button>

      {/* Renderiza el contenido convertido a HTML */}
      <div className="rendered-content">
          <h2>Rendered HTML</h2>
          <div dangerouslySetInnerHTML={{ __html: parsedHTML }} />
        </div>
    </div>

    </>
  )
}

export default App
