// src/App.js
import './App.css';
import Header from './components/Header.jsx';
import Section from './components/Section.jsx';
import icono1 from './images/icon1.png'
import icono2 from './images/icon2.png'
import icono3 from './images/icon3.png'
import icono4 from './images/icon4.png'

function App() {

  const section1={
    imageUrl: icono1, 
    content: "React makes it painless to create interactive UIs",
    title: "Declarative"
  }
  const section2={
    imageUrl: icono2, 
    content: "Build encapsulated components that manage their state.",
    title: "Components"
  }
  const section3={
    imageUrl: icono3, 
    content: "A set of immutable values are passed to the component's",
    title: "Single-Way"
  }
  const section4={
    imageUrl: icono4, 
    content: "Statically-typed, design to run on modern browsers.",
    title: "JSX"
  }

  return (
    <div className="App">
      <Header>
      </Header>
        <div className="divSection">
          <Section noticia={section1}></Section>
          <Section noticia={section2}></Section>
          <Section noticia={section3}></Section>
          <Section noticia={section4}></Section>
        </div>
    </div>
  );
}
export default App;


