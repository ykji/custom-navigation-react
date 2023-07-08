import Link from "./component/Link";
import Page1 from "./component/Page1";
import Page2 from "./component/Page2";
import Route from "./component/Route";

function App() {
  const navStyles = {
    display: "flex",
    margin: "10px",
    gap: "15px",
    fontSize:'20px',
  };

  return (
    <div>
      <div style={navStyles}>
        <Link to="/page1">Page 1</Link>
        <Link to="/page2">Page 2</Link>
      </div>
      <div>
        <Route path="/page1">
          <Page1 />
        </Route>
        <Route path="/page2">
          <Page2 />
        </Route>
      </div>
    </div>
  );
}

export default App;
