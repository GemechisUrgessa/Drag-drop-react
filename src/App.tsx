import { useState } from 'react'
import './App.css'

function App() {
  const [dragging, setDragging] = useState<string[]>([])

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    const widget = e.currentTarget.innerText;
    e.dataTransfer.setData('widget', widget);
  }
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const widget = e.dataTransfer.getData('widget') as string;
    setDragging([...dragging, widget]);
  }
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }

  return (
    <div className="App" style={{display:'flex', gap: '2em'}}>
      <div style={{display : 'flex', flexDirection : 'column', gap: '1em'}}>
        <div draggable onDragStart={handleDrag}   style={{width:'400px', height:'50px',
         backgroundColor:'grey', display:'flex',
          alignItems:'center', justifyContent:'center', 
          fontWeight:'600'}}>Class A</div>
        <div draggable onDragStart={handleDrag}  style={{width:'400px', height:'50px',
         backgroundColor:'grey', display:'flex',
          alignItems:'center', justifyContent:'center', 
          fontWeight:'600'}}>Class B</div>
        <div draggable onDragStart={handleDrag}  style={{width:'400px', height:'50px',
         backgroundColor:'grey', display:'flex',
          alignItems:'center', justifyContent:'center', 
          fontWeight:'600'}}>Class C</div>
        <div draggable onDragStart={handleDrag}  style={{width:'400px', height:'50px',
         backgroundColor:'grey', display:'flex',
          alignItems:'center', justifyContent:'center', 
          fontWeight:'600'}}>Class D</div>
      </div>
      <div style={{width:'400px', height: '600px', border: '2px solid grey', display:'flex',flexDirection:'column', gap:'1em'}} onDrop={handleDrop} onDragOver={handleDragOver}>
        {dragging.map((item, index) => {
          return <div key={index} style={{width:'400px', height:'50px',
           backgroundColor:'grey', display:'flex',
            alignItems:'center', justifyContent:'center', 
            fontWeight:'600'}}>{item}</div>
        })
        }
      </div>
    </div>
  )
}

export default App
