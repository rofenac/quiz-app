import { useState, useEffect } from 'react'
import { themes } from '../data/themes'

function ThemeController() {
  // Initialize state with the <html>'s current data-theme attribute (or fallback)
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('theme') || document.documentElement.getAttribute('data-theme') || 'dim'
  })

  // Update the document's data-theme attribute and localStorage when currentTheme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme)
    localStorage.setItem('theme', currentTheme)
  }, [currentTheme])

  // Handler for when the theme is changed via the select
  function handleThemeChange(e) {
    const selectedTheme = e.target.value
    setCurrentTheme(selectedTheme)
    // Reset the select to always show the placeholder "Change Theme"
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