"use client"

import type React from "react"
import { createContext, useContext, useEffect } from "react"

type Theme = "light"

interface ThemeContextProps {
  theme: Theme
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
})

export const ThemeProvider = ({
  attribute,
  children,
}: {
  attribute: string
  children: React.ReactNode
}) => {

  useEffect(() => {
    document.documentElement.setAttribute(attribute, "light")
  }, [attribute])

  return (
    <ThemeContext.Provider value={{ theme: "light" }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(ThemeContext)
}