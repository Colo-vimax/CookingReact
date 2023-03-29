import React from 'react'
import { useTheme } from "../hooks/useTheme"

// styles
import "./ThemeSelector.css";

const themeColors = ['#58249c', '#249c63', '#b70233']

export default function ThemeSelector() {
    const { changeColor,changeMode, mode } = useTheme()

    const toggleMode = () => {
      changeMode(mode === 'dark' ? 'light' : 'dark')
    }

  return (
    <div className='theme-selector'>
      <div className='mode-toggle'>
        <img
        onClick={toggleMode}
        src={modeIcon}
        alt="dark/light toggle icon"
        style={{ filter: mode === 'dark' ? 'invert(100%)': 'invert(20%)'}}
        />
      </div>
        <div className='theme-button'>
            {themeColors.map(color => {
                <div
                 key={color}
                 onclick={()=> changeColor()}
                 style={{background : color}}                           
                />
            })}
        </div>
        
    </div>
  )
}
