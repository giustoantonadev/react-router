import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import WhoAreWe from "./pages/WhoAreWe"
import DefaultLayout from "./layouts/DefaultLayout"



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/whoweare' element={<WhoAreWe />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
