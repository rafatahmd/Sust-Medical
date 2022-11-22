const bcrypt = require("bcryptjs");
var dbConn = require("../../config/db.config");
const jwt = require("jsonwebtoken");

const User = require("../models/user.model");
exports.findAll = function (req, res) {
  User.findAll(function (err, user) {
    console.log("user");
    if (err) res.send(err);
    console.log("res", user);
    res.send(user);
  });
};

exports.create = async function (req, res) {
  //handles null
  console.log(req.body);
  console.log("______________________@@@");
  const username = req.body.username;
  console.log(username);
  const password = req.body.password;
  const salt = await bcrypt.genSalt(10);

  const hashedpassword = await bcrypt.hash(password, salt);
  const new_user = new User({ username, password: hashedpassword });
  console.log(hashedpassword);
  console.log("______________________");
  console.log(new_user);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    User.create(new_user, function (err, user) {
      if (err) res.send(err);
      console.log("User added successfully!");
      res.json({
        error: false,
        message: "User added successfully!",
        data: user,
      });
    });
  }
};

exports.login = async function (req, res) {
  const { username, password } = req.body;
  console.log(username);
  const user = await dbConn.query(
    "Select * from users where username = ?",
    [username],
    async function (err, result) {
      if (err) {
        console.log("error: ", err);
        res
          .json({
            error: false,
            message: "Something went wrong!",
          })
          .status(401);
      } else {
        console.log(result);
        if (result[0].username == null)
          return res.json({
            error: false,
            message: "User name doesn't exist!",
          });
        const validPass = await bcrypt.compare(password, result[0].password);
        if (validPass) {
          const token = jwt.sign(
            { username: username },
            "aikujsdfhaujksdfghjkasdhfjkasghfkhj"
          );
          res
            .json({
              error: false,
              message: "User logged in successfully!",
              token,
              auth: true,
            })
            .status(200);
        } else {
          res.status(401).json({
            error: false,
            message: "User name or password wrong",
          });
        }
      }
    }
  );

  // res.send("logging in");
};
