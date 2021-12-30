import React, { useState } from "react";
import SportsmanDataService from "../services/SportsmanService";

const AddSportsman = () => {
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
  const [sportsman, setSportsman] = useState(initialSportsmanState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setSportsman({ ...sportsman, [name]: value });
  };

  const saveSportsman = () => {
    var data = {
      id: sportsman.id,
      name: sportsman.name,
      surname: sportsman.surname,
      sporttype: sportsman.sporttype,
      country: sportsman.country,
      year: sportsman.year,
      comment: sportsman.comment
    };

    SportsmanDataService.create(data)
      .then(response => {
        setSportsman({
          id: response.data.id,
          name: response.data.name,
          surname: response.data.surname,
          sporttype: response.data.sporttype,
          country: response.data.country,
          isAchiv: response.data.isAchiv,
          year: response.data.year,
          comment: response.data.comment
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newSportsman = () => {
    setSportsman(initialSportsmanState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newSportsman}>
            Add
          </button>
        </div>
      ) : (
          <div>
            <div className="form-group">
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                className="form-control"
                id="Name"
                required
                value={sportsman.name}
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
                value={sportsman.surname}
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
                value={sportsman.sporttype}
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
                value={sportsman.country}
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
                value={sportsman.year}
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
                value={sportsman.comment}
                onChange={handleInputChange}
                name="comment"
              />
            </div>
            <button onClick={saveSportsman} className="btn btn-success">
              Submit
          </button>
          </div>
        )}
    </div>
  );
};

export default AddSportsman;
