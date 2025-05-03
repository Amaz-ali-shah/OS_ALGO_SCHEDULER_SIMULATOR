// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Header from './components/Header';
// import Footer from './components/Footer';
// import ProcessInputForm from './components/ProcessInputForm';
// import GanttChartsPage from './components/GanttChartsPage';
// import ComparisonPage from './components/ComparisonPage'; // to be created

// function App() {
//   return (
//     <div className="App">

//       <Header />
//       <Routes>
//         <Route path="/" element={<ProcessInputForm />} />
//         <Route path="/gantt" element={<GanttChartsPage />} />
//         <Route path="/comparison" element={<ComparisonPage />} />
//       </Routes>


//       <Footer />
      
//     </div>
//   );
// }

// // export default App;
// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Header from './components/Header';
// import Footer from './components/Footer';
// import ProcessInputForm from './components/ProcessInputForm';
// import GanttChartsPage from './components/GanttChartsPage';
// import ComparisonPage from './components/ComparisonPage'; // to be created

// function App() {
//   return (
//     <Router> {/* ✅ Wrap everything inside Router */}
//       <div className="App">
//         <Header />
//         <Routes>
//           <Route path="/" element={<ProcessInputForm />} />
//           <Route path="/gantt" element={<GanttChartsPage />} />
//           <Route path="/comparison" element={<ComparisonPage />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// // export default App;
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Header from './components/Header';
// import Footer from './components/Footer';
// import ProcessInputForm from './components/ProcessInputForm';
// import GanttChartsPage from './components/GanttChartsPage';
// import ComparisonPage from './components/ComparisonPage'; // You must create this if not already

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <main style={{ minHeight: '80vh', padding: '1rem' }}>
//           <Routes>
//             <Route path="/" element={<ProcessInputForm />} />
//             <Route path="/gantt" element={<GanttChartsPage />} />
//             <Route path="/comparison" element={<ComparisonPage />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ProcessInputForm from './components/ProcessInputForm';
import GanttChartsPage from './components/GanttChartsPage';
import ComparisonPage from './components/ComparisonPage'; // Optional if you use this route

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main style={{ minHeight: '80vh', padding: '1rem' }}>
          <Routes>
            <Route path="/" element={<ProcessInputForm />} />
            <Route path="/gantt-charts" element={<GanttChartsPage />} />
            <Route path="/comparison" element={<ComparisonPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
