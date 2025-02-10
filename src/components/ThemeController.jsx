import { useState, useEffect } from 'react'
import { themes } from '../data/themes'

function ThemeController() {
  // Initialize state with the <html>'s current data-theme attribute (or fallback if not present)
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('theme') || document.documentElement.getAttribute('data-theme') || 'dim'
  })

  // Update the document's data-theme attribute and localStorage when currentTheme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme)
    localStorage.setItem('theme', currentTheme)
  }, [currentTheme])

  // Handler to update the theme when a radio button changes
  function handleThemeChange(e) {
    const selectedTheme = e.target.value
    setCurrentTheme(selectedTheme)
  }

  const themeSelection = themes.map((theme, index) => (
    <li key={index}>
      <input
        type="radio"
        name="theme-dropdown"
        className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
        aria-label={theme.label}
        value={theme.value}
        onChange={handleThemeChange}
        checked={currentTheme === theme.value}
      />
    </li>
  ))

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-info m-1">
        Theme
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content bg-base-300 rounded-box z-10 w-52 p-2 shadow-2xl"
      >
        {themeSelection}
      </ul>
    </div>
  )
}

export default ThemeController