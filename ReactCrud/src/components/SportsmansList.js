import React, { useState, useEffect } from "react";
import SportsmanDataService from "../services/SportsmanService";
import { Link } from "react-router-dom";

const SportsmansList = () => {
  const [sportsmans, setSportsmans] = useState([]);
  const [currentSportsman, setCurrentSportsman] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveSportsmans();
  }, []);

  const retrieveSportsmans = () => {
    SportsmanDataService.getAll()
      .then(response => {
        setSportsmans(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveSportsmans();
    setCurrentSportsman(null);
    setCurrentIndex(-1);
  };

  const setActiveSportsman = (sportsman, index) => {
    setCurrentSportsman(sportsman);
    setCurrentIndex(index);
  };

  const removeAllSportsmans = () => {
    SportsmanDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };


  return (
    <div className="list ">
      <div className="sportsman">
        {currentSportsman ? (
          <div>
            <h4>Sportsman</h4>
            <div>
              <label>
                <strong>name:</strong>
              </label>{" "}
              {currentSportsman.name}
            </div>
            <div>
              <label>
                <strong>surname:</strong>
              </label>{" "}
              {currentSportsman.surname}
            </div>
            <div>
              <label>
                <strong>country:</strong>
              </label>{" "}
              {currentSportsman.country}
            </div>
            <div>
              <label>
                <strong>isAchiv:</strong>
              </label>{" "}
              {currentSportsman.isAchiv}
            </div>
            <div>
              <label>
                <strong>year:</strong>
              </label>{" "}
              {currentSportsman.sporttype}
            </div>
            <div>
              <label>
                <strong>comment:</strong>
              </label>{" "}
              {currentSportsman.sporttype}
            </div>

            <Link
              to={"/sportsmans/" + currentSportsman.id}
              className="badge badge-warning"
            >
              Редактировать
            </Link>
          </div>
        ) : (
            <div>
              <br />
              <p>Выберите спортсмена</p>
            </div>
          )}
      </div>
      <hr />
      <div className="">
        <h4>Список спортсменов</h4>

        <ul className="list-group">
          {sportsmans &&
            sportsmans.map((sportsman, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveSportsman(sportsman, index)}
                key={index}
              >
                {sportsman.name} {sportsman.surname}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-secondary"
          onClick={removeAllSportsmans}
        >
          Удалить всех спортсменов
        </button>
      </div>
    </div>
  );
};

export default SportsmansList;
