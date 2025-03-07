import { useState, useEffect } from 'react'
import { themes } from '../data/themes'

function ThemeController() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('theme') || document.documentElement.getAttribute('data-theme') || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme)
    localStorage.setItem('theme', currentTheme)
  }, [currentTheme])

  function handleThemeChange(e) {
    const selectedTheme = e.target.value
    setCurrentTheme(selectedTheme)
    e.target.selectedIndex = 0
  }

  return (
    <select
      defaultValue=""
      onChange={handleThemeChange}
      className="select select-info select-sm w-32 m-1"
    >
      <option value="" disabled>
        Change Theme
      </option>
      {themes.map((theme, index) => (
        <option key={index} value={theme.value}>
          {theme.label}
        </option>
      ))}
    </select>
  )
}

export default ThemeController