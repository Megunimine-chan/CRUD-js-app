const db = require("../models");
const Sportsman = require("../models/records.model");

exports.create = (req, res) => {
  const tportsman = {
    name: req.body.name,
    surname: req.body.surname,
    sporttype: req.body.sporttype,
    country: req.body.country,
    isAchiv: req.body.isAchiv ? req.body.isAchiv : false,
    year: req.body.year,
    comment: req.body.comment,
  };
  Sportsman.create(tportsman)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: err.message || "Ошибка создания спортсмена",
      });
    });
};

exports.findAll = async (req, res) => {
  const data = await Sportsman.findAll();
  res.send(data);
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Sportsman.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Ошибка поиска по айди номер " + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Sportsman.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Спортстмен обновлен",
        });
      } else {
        res.send({
          message: `Невозможно обновить спортсмена с id=${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Ошибка id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Sportsman.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Спортсмен успешно создан",
        });
      } else {
        res.send({
          message: `Невозможно обновить спортсмена с id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Невозможно обновить спортсмена с id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  Sportsman.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} спортсменов было успешно удалено` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ошибка",
      });
    });
};
