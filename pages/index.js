import { useState, useRef, useEffect } from 'react'

function useInput(initialValue = '') {
  const [ value, setValue ] = useState(initialValue)

  const setter = e => setValue(e.target.value)
  return [
    value,
    setter
  ]
}

function Canvas ({ text, color, width, height, fontSize, fontFamily }) {

  const canvas = useRef(null)
  const ctx = useRef(null)

  useEffect(() => {
    ctx.current = canvas.current.getContext('2d')
  }, [])

  useEffect(() => {
    const measure =  ctx.current.measureText(text)

    ctx.current.font = `${fontSize}px ${fontFamily}`;

    // clear canvas
    ctx.current.clearRect(0, 0, canvas.current.width, canvas.current.height);

    // draw text
    ctx.current.fillStyle = color
    ctx.current.fillText(text, 0, fontSize)
  }, [text, color, fontSize, fontFamily, width, height])

  return (
    <canvas width={width} height={height} ref={canvas}></canvas>
  )
}

function App() {
  const [ name, setName ] = useInput('hello')
  const [ fontSize, setFontSize ] = useInput(128)
  const [ color, setColor ] = useInput('#dddddd')
  return (
    <div>
      
      <div style={{ marginTop: '2rem' }}>
        <Canvas
          text={name}
          width={512}
          height={380}
          color={color}
          fontFamily={'Source Code Pro'}
          fontSize={fontSize}
        />
      </div>
      <input defaultValue={name} onChange={setName} />
      <input defaultValue={fontSize} onChange={setFontSize} />
      <input defaultValue={color} onChange={setColor} type='color'/>
      <span>{name}</span>
    </div>
  )
}

export default App
