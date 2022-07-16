import RootRoute from "./routes/index.js";
import Head from "./components/common/head";

function App() {
  return (
    <>
      {/* 헤더 */}
      <Head />
      
      <RootRoute />
    </>
  );
}

export default App;
