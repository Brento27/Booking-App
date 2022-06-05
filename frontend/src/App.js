import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeScreen from "./screens/HomeScreen/HomeScreen"
import Hotel from "./screens/Hotel/Hotel"
import List from "./screens/List/List"
import React from "react"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/hotels" element={<List />}></Route>
        <Route path="/hotels/:id" element={<Hotel />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
