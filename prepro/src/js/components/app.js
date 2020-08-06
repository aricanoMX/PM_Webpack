import React, { useState } from "react";
import data from "./data.json";
import Loader from "./loader.js";
import logo from "../../images/platzi.png";
import video from "../../video/que-es-core.mp4";

import "../../sass/style.scss";
import "../../less/style.less";
import "../../stylus/style.styl";

console.log(data);
function App() {
  const [loaderList, setLoaderList] = useState([]);
  function handleClick() {
    setLoaderList(data.loaders);
  }
  return (
    <div>
      <p className="sass">Esto es SASS</p>
      <p className="less">Esto es LESS</p>
      <p className="stylus">Esto es STYLUS</p>
      Que linda aplicacion en React.js !!!
      <p>
        <img src={logo} width={204} alt="" />
        <video src={video} width={360} controls logo={logo}></video>
      </p>
      <ul>
        {loaderList.map((item) => (
          <Loader {...item} key={item.id} />
        ))}
      </ul>
      <button onClick={handleClick}>
        Mostar lo aprendido hasta el momento
      </button>
    </div>
  );
}
export default App;
