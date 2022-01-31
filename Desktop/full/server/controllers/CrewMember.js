const CrewMemberDB = require("./../models").CrewMember;

const controller = {
  getAllcrewMember: async (req, res) => {
    CrewMemberDB.findAll()
      .then((crewMember) => {
        res.status(200).send(crewMember);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send({ message: "Server error" });
      });
  },
  postCrewMember: async (req, res) => {
    CrewMemberDB.create({
      id: req.body.id,
      name: req.body.name,
      role: req.body.role,
      idMovie: req.body.idMovie,
    })
      .then((crewMember) => {
        res.status(200).send(crewMember);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send({ message: "Server error" });
      });
  },
  putCrewMember: async (req, res) => {
    CrewMemberDB.update(
      {
        name: req.body.name,
        role: req.body.role,
        idMovie: req.body.idMovie,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    )
      .then((crewMember) => {
        res.status(200).send(crewMember);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send({ message: "Server error" });
      });
  },
  deleteCrewMemberWithId: async (req, res) => {
    const { CrewMemberId } = req.params;
    if (CrewMemberId < 0) {
      res.status(400).send({ message: "CrewMember doesn't exist" });
    }
    CrewMemberDB.destroy({
      where: {
        id: CrewMemberId,
      },
    })
      .then((crewMember) => {
        res.status(200).send({ message: "Destroyed", crewMember });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send({ message: "Server error" });
      });
  },
};

module.exports = controller;
