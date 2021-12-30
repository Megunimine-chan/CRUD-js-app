import React, { useState, useEffect } from "react";
import SportsmanDataService from "../services/SportsmanService";

const Sportsman = props => {
  const initialSportsmanState = {
    id: null,
    name: "",
    surname: "",
    sporttype: "",
    country: "",
    isAchiv: false,
    year: "",
    comment: ""
  };
  const [currentSportsman, setCurrentSportsman] = useState(initialSportsmanState);
  const [message, setMessage] = useState("");

  const getSportsman = id => {
    SportsmanDataService.get(id)
      .then(response => {
        setCurrentSportsman(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getSportsman(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentSportsman({ ...currentSportsman, [name]: value });
  };

  const updatePublished = status => {
    var data = {
      id: currentSportsman.id,
      name: currentSportsman.name,
      surname: currentSportsman.surname,
      sporttype: currentSportsman.sporttype,
      country: currentSportsman.country,
      year: currentSportsman.year,
      comment: currentSportsman.comment
    };

    SportsmanDataService.update(currentSportsman.id, data)
      .then(response => {
        setCurrentSportsman({ ...currentSportsman, published: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateSportsman = () => {
    SportsmanDataService.update(currentSportsman.id, currentSportsman)
      .then(response => {
        console.log(response.data);
        setMessage("The sportsman was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteSportsman = () => {
    SportsmanDataService.remove(currentSportsman.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/sportsmans");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentSportsman ? (
        <div className="edit-form">
          <h4>Sportsman</h4>
          <form>
            <div className="form-group">
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                className="form-control"
                id="Name"
                required
                value={currentSportsman.name}
                onChange={handleInputChange}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="Surname">Surname</label>
              <input
                type="text"
                className="form-control"
                id="Surname"
                required
                value={currentSportsman.surname}
                onChange={handleInputChange}
                name="surname"
              />
            </div>

            <div className="form-group">
              <label htmlFor="Sporttype">Sporttype</label>
              <input
                type="text"
                className="form-control"
                id="Sporttype"
                required
                value={currentSportsman.sporttype}
                onChange={handleInputChange}
                name="sporttype"
              />
            </div>

            <div className="form-group">
              <label htmlFor="Country">Country</label>
              <input
                type="text"
                className="form-control"
                id="Country"
                required
                value={currentSportsman.country}
                onChange={handleInputChange}
                name="country"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Year">Year</label>
              <input
                type="text"
                className="form-control"
                id="Year"
                required
                value={currentSportsman.year}
                onChange={handleInputChange}
                name="year"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Comment">Comment</label>
              <input
                type="text"
                className="form-control"
                id="Comment"
                required
                value={currentSportsman.comment}
                onChange={handleInputChange}
                name="comment"
              />
            </div>
          </form>
          <button className="badge badge-danger mr-2" onClick={deleteSportsman}>
            Удалить
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateSportsman}
          >
            Обновить
          </button>
          <p>{message}</p>
        </div>
      ) : (
          <div>
            <br />
            <p>Please click on a Sportsman...</p>
          </div>
        )}
    </div>
  );
};

export default Sportsman;
