import React, { useState, useEffect } from "react";
import axios from "axios";
let url = "https://api.github.com/users";

const Developers = () => {
  let [devs, setDevs] = useState([]);

  let getData = async () => {
    let res = await axios.get(url);
    setDevs(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Developers</h1>

      <ul className="devs">
        {devs.map((el) => {
          let { login, id, avatar_url: img, html_url } = el;
          return (
            <li key={id}>
              <div className="d-flex flex-row card">
                <img
                  className="img-fluid rounded-circle"
                  width="70"
                  height="70"
                  src={img}
                  alt={login}
                ></img>
                <div className="grid">
                  <h5 className="text-warning name">{login}</h5>
                  <a href={html_url} className="button mx-5">
                    Profile
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Developers;
