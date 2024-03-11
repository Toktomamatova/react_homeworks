import About from "./components/about/About";
import Title from "./components/title/Title";
function App() {
  const titleData={title:"Аманай",subtitle:"34-03"};
  const aboutData={title:"Центр Geeks",body:"Переходите поссылке ниже↓",link:"https://geeks.kg/"};
  return (
      <div>
        <About {...aboutData} />
        <Title {...titleData} />
      </div>
  );
}
export default App;