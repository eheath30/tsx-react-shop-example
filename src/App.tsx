import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home, Store, About } from "./pages";
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
    <Navbar/>
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Container>
    </>
  );
}
