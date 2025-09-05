import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import StudentResources from "./pages/StudentResources";
import Learning from "./pages/Learning";
import Internships from "./pages/Internships";
import Employment from "./pages/Employment";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resources" element={<StudentResources />} />
              <Route path="/learning" element={<Learning />} />
              <Route path="/internships" element={<Internships />} />
              <Route path="/employment" element={<Employment />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
