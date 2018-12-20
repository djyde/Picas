import { useState, useRef, useEffect } from 'react'
let WebFont;
if (process.browser) {
  WebFont = require('webfontloader')
}
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

  const [ loadingFont, setLoadingFont ] = useState(false)

  useEffect(() => {
    ctx.current = canvas.current.getContext('2d')
  }, [])

  useEffect(() => {
    WebFont.load({
      loading() {
        setLoadingFont(true)
      },
      active() {
        drawText()
        setLoadingFont(false)
      },
      inactive() {
        setLoadingFont(false)
      },
      google: {
        families: [fontFamily]
      },
    })
  }, [fontFamily])

  useEffect(drawText, [text, color, fontSize, fontFamily, width, height])

  function drawText() {
    const measure =  ctx.current.measureText(text)

    ctx.current.font = `${fontSize}px ${fontFamily}`;

    // clear canvas
    ctx.current.clearRect(0, 0, canvas.current.width, canvas.current.height);

    // draw text
    ctx.current.fillStyle = color
    ctx.current.fillText(text, 0, fontSize)
  }

  return (
    <div>
      { loadingFont && 'Loading...' }
      <canvas width={width} height={height} ref={canvas}></canvas>
    </div>
  )
}

function App() {
  const [ name, setName ] = useInput('hello')
  const [ fontSize, setFontSize ] = useInput(128)
  const [ color, setColor ] = useInput('#271259')
  const [ fontFamilyInput, setFontFamilyInput ]  = useInput('Pacifico')
  const [ fontFamily, setFontFamily ]  = useInput('Pacifico')

  const onClickChangeFont = () => {
    setFontFamily({ target: { value: fontFamilyInput } })
  }

  return (
    <div>
      
      <div style={{ marginTop: '2rem' }}>
        <Canvas
          text={name}
          width={512}
          height={380}
          color={color}
          fontFamily={fontFamily}
          fontSize={fontSize}
        />
      </div>
      <input defaultValue={name} onChange={setName} />
      <input defaultValue={fontSize} onChange={setFontSize} />
      <input defaultValue={color} onChange={setColor} type='color'/>
      <input defaultValue={fontFamilyInput} onChange={setFontFamilyInput} />
      <button onClick={onClickChangeFont}>Change</button>
    </div>
  )
}

export default App
