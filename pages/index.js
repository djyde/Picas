import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
let WebFont;
if (process.browser) {
  WebFont = require('webfontloader')
}
function useInput(initialValue = '', target = 'value') {
  const [ value, setValue ] = useState(initialValue)

  const setter = e => {
    setValue(e.target[target])
  }
  return [
    value,
    setter
  ]
}

function Canvas ({ text, color, width, height, fontSize, fontFamily, padding, bold, italic }) {

  const canvas = useRef(null)
  const ctx = useRef(null)

  const [ loadingFont, setLoadingFont ] = useState(false)

  useEffect(() => {
    ctx.current = canvas.current.getContext('2d')

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
      }
    })
  }, [])

  useEffect(() => {
    WebFont.load({
      google: {
        families: [fontFamily]
      },
      loading() {
        setLoadingFont(true)
      },
      active() {
        drawText()
        setLoadingFont(false)
      },
      inactive() {
        setLoadingFont(false)
      }
    })
  }, [fontFamily])

  useEffect(drawText, [text, color, fontFamily, width, height, padding, fontSize, bold, italic])

  function drawText() {
    const measure =  ctx.current.measureText(text)

    // const fontSize = height - padding * 2
    const fontProperties = []

    if (italic) { fontProperties.push('italic') }
    if (bold) { fontProperties.push('bold') }

    fontProperties.push(`${fontSize}px`)
    fontProperties.push(fontFamily)
    ctx.current.font = fontProperties.filter(Boolean).join(' ') ;
    ctx.current.textAlign = 'center'

    // clear canvas
    ctx.current.clearRect(0, 0, canvas.current.width, canvas.current.height);

    // draw text
    ctx.current.fillStyle = color
    ctx.current.fillText(text, width / 2, fontSize)
  }

  return (
    <div>
      { loadingFont && 'Loading...' }
      <div className='card' style={{ width, height }}>
        <canvas style={{ visibility: loadingFont ? 'hidden' : 'visible' }} width={width} height={height} ref={canvas}></canvas>
      </div>
    </div>
  )
}

function App() {
  const [ name, setName ] = useInput('hello')
  const [ fontSize, setFontSize ] = useInput(128)
  const [ color, setColor ] = useInput('#271259')
  const [ fontFamilyInput, setFontFamilyInput ]  = useInput('Pacifico')
  const [ fontFamily, setFontFamily ]  = useInput('Pacifico')
  const [ bold, setBold ]  = useInput(false, 'checked')
  const [ italic, setItalic ]  = useInput(false, 'checked')


  const onClickChangeFont = () => {
    setFontFamily({ target: { value: fontFamilyInput } })
  }

  const big = {
    width: 512,
    height: 512 * 0.618 / 2
  }

  const small = {
    width: 64,
    height: 64
  }

  return (
    <div>
      <Head>
        <style>
          {`

            .card {
              box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
              transition: all 0.3s cubic-bezier(.25,.8,.25,1);
            }
          `}
        </style>
      </Head>
      <div style={{ marginTop: '2rem' }}>
        <Canvas
          padding={0}
          text={name}
          width={big.width}
          height={big.height}
          color={color}
          fontFamily={fontFamily}
          fontSize={fontSize}
          bold={bold}
          italic={italic}
        />
      </div>
      <input defaultValue={name} onChange={setName} />
      <input defaultValue={fontSize} onChange={setFontSize} type='number' />
      <input defaultValue={color} onChange={setColor} type='color'/>
      <input defaultValue={fontFamilyInput} onChange={setFontFamilyInput} />
      <input defaultChecked={bold} onChange={setBold} type='checkbox' />bold
      <input defaultChecked={italic} onChange={setItalic} type='checkbox' />italic

      <button onClick={onClickChangeFont}>Change</button>
    </div>
  )
}

export default App
