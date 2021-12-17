import React, { useState } from 'react'
import { Input, Button, message } from 'antd'
import { jtpy, ftpy, pinyinRrr } from '@/constant/index'
import { t2s } from '@/util'

import './style.less'


const { TextArea } = Input

const Home: React.FC = () => {
  const [textInput, setTextInput] = useState('')
  const [textOuput, setTextOuput] = useState('')

  const loadTextFromFile = (e: any) => {
    const file = e.target.files[0]
    if (!file) return
    if (file.type !== 'text/plain') {
      message.error('请选择正确的文本')
      return
    }
    const reader = new FileReader()
    reader.onload = (t) => {
      setTextInput(t.target.result)
      // const valInput = document.getElementsByClassName('file-box')[0]
      // valInput.value = null
    }
    reader.readAsText(file, 'utf-8')
    // reader.readAsText(file, 'gb2312')
  }
  // 繁体字符转为简体字符；
  const fanFun = () => {
    setTextOuput(t2s(textInput, jtpy, ftpy))
  }
  // 功能：简体字符转为繁体字符；
  const jianfun = () => {
    setTextOuput(t2s(textInput, ftpy, jtpy))
  }

  const pingFun = () => {
    const list = textInput.split('\n')
    const retult: any = []
    list.forEach((item) => {
      if (item && item !== '\r') {
        pinyinRrr.forEach((v: any) => {
          if (typeof v.code === 'string' && v.code.includes('>')) {
            const codeList = v.code.split('>')
            codeList.forEach((t: any) => {
              item = `${item.toLowerCase().replace(new RegExp(t, 'gm'), v.name)}`
              console.log(item, 99)
            })
          } else {
            item = `${item.toLowerCase().replace(new RegExp(v.code, 'gm'), v.name)}`
          }

        })
      }
      retult.push(item)
    })
    setTextOuput(retult.join('\n'))
  }

  return (
    <div className="complex-box">
      <TextArea
        rows={2}
        placeholder="请输入内容"
        value={textInput}
        onChange={(e) => {
          setTextInput(e.target.value)
        }}
      />
      <div style={{ margin: '15px', textAlign: 'center' }}>
        <Button type="primary" size="small" onClick={() => fanFun()}>
          转简体
        </Button>
        <Button style={{ marginLeft: '16px' }} size="small" type="primary" onClick={() => jianfun()}>
          转繁体
        </Button>
        <Button style={{ marginLeft: '16px' }} size="small" type="primary" onClick={() => pingFun()}>
          转拼音
        </Button>
      </div>
      <TextArea
        rows={2}
        placeholder="请输入内容"
        value={textOuput}
        onChange={(e) => {
          setTextOuput(e.target.value)
        }}
      />
      <input className='file-box' type="file" onChange={(e) => loadTextFromFile(e)} />
    </div>
  )
}

export default Home;
