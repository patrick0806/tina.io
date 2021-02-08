import { TinaCMS, TinaProvider } from "tinacms";
import "./App.css";
import Body from "./components/Body/Body";


function App() {
  const cms = new TinaCMS({ sidebar: true });
  return (
    <TinaProvider cms={cms}>
        <Body />
    </TinaProvider>
  );
}

export default App;
