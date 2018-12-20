import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
let WebFont;
if (process.browser) {
  WebFont = require('webfontloader')
}

import '../styles/index.scss'

function useInput(initialValue = '', target = 'value') {
  const [value, setValue] = useState(initialValue)

  const setter = e => {
    setValue(e.target[target])
  }
  return [
    value,
    setter
  ]
}

function Canvas({ text, color, width, height, fontSize, fontFamily, padding, bold, italic }) {

  const canvas = useRef(null)
  const ctx = useRef(null)

  const [loadingFont, setLoadingFont] = useState(false)

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
    const measure = ctx.current.measureText(text)

    // const fontSize = height - padding * 2
    const fontProperties = []

    if (italic) { fontProperties.push('italic') }
    if (bold) { fontProperties.push('bold') }

    fontProperties.push(`${fontSize}px`)
    fontProperties.push(fontFamily)
    ctx.current.font = fontProperties.filter(Boolean).join(' ');
    ctx.current.textAlign = 'center'
    ctx.current.textBaseline = 'middle'

    // clear canvas
    ctx.current.clearRect(0, 0, canvas.current.width, canvas.current.height);

    // draw text
    ctx.current.fillStyle = color
    ctx.current.fillText(text, width / 2, height / 2)
  }

  return (
    <div>
      {loadingFont && 'Loading...'}
      <div className='card' style={{ width, height }}>
        <canvas style={{ visibility: loadingFont ? 'hidden' : 'visible' }} width={width} height={height} ref={canvas}></canvas>
      </div>
    </div>
  )
}

function App() {
  const [name, setName] = useInput('Picas')
  const [fontSize, setFontSize] = useInput(256)
  const [color, setColor] = useInput('#c62828')
  const [fontFamilyInput, setFontFamilyInput] = useInput('Faster One')
  const [fontFamily, setFontFamily] = useInput('Faster One')
  const [bold, setBold] = useInput(false, 'checked')
  const [italic, setItalic] = useInput(true, 'checked')


  const onClickChangeFont = () => {
    setFontFamily({ target: { value: fontFamilyInput } })
  }

  const big = {
    width: 1024,
    height: 1024 * 0.618 / 2
  }

  return (
    <React.Fragment>
      <Head>
        <title>Picas</title>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: '<a href="https://your-url" class="github-corner" aria-label="View source on GitHub"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#FD6C6C; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>' }} />
      <div style={{ width: '960px', margin: '0 auto' }}>
        <div style={{ margin: '36px auto', width: big.width }}>
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
        <div>
          <div className="field">
            <label className="label">Product name</label>
            <input className="input" defaultValue={name} onChange={setName} />
          </div>
          <div className="field">
            <label className="label">Font size</label>
            <input className="input" defaultValue={fontSize} onChange={setFontSize} type='number' />
          </div>
          <div className="field">
            <label className="label">Font color</label>
            <input className="input" defaultValue={color} onChange={setColor} type='color' />
          </div>
          <div className="field">
            <label className="label">Font family</label>
            <div className="field has-addons">
              <div className="control">
                <input className="input" defaultValue={fontFamilyInput} onChange={setFontFamilyInput} />
              </div>
              <div className="control">
                <a className="button" onClick={onClickChangeFont}>Change</a>
              </div>
            </div>
            <div>✍️ Find font on <a href="https://fonts.google.com/"> Google Font </a></div>
          </div>
          <div className="field">
            <label className="checkbox" style={{ marginRight: '1rem' }}>
              <input defaultChecked={bold} onChange={setBold} type='checkbox' />bold
            </label>
            <label className="checkbox">
              <input defaultChecked={italic} onChange={setItalic} type='checkbox' />italic
            </label>
          </div>
        </div>
      </div>

      <div className="is-size-7" style={{ textAlign: 'center', padding: '2rem' }}>
        Made by <a href="https://github.com/djyde">Randy</a>
      </div>
    </React.Fragment>
  )
}

export default App
