const User = require("../models/user-model");
const Token = require("../models/token");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");


// *-------------------
// Home Logic
// *-------------------

const home = async (req, res) => {
  try {
    res
      .status(200)
      .send(
        "Welcome to Auction Website "
      );
  } catch (error) {
    console.log(error);
  }
};

// *-------------------
// Registration Logic
// *-------------------


const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "email already exists" });
    }


    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    // const token = await new Token({
    //   username: userCreated.username,
    //   token: crypto.randomBytes(32).toString("hex")
    // }).save();
    // const url = `${process.env.BASE_URL}`
    // await sendEmail(userCreated.email,"Verify Email",url);

    res.status(201).json({
      msg: "registration successful. An email has sent to your account please check",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    // res.status(500).json("internal server error");
    console.log(req.body);
    next(error);
  }
};


// *-------------------------------
//* User Login Logic
// *-------------------------------

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    console.log(userExist);

    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials " });
    }


    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        msg: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json("internal server error");
  }
};

// *-------------------------------
//* to send user data - User Logic 📝
// *-------------------------------

const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(`error from the user route ${error}`);
  }
};

// router.get("/:id/verify/:token/", async (req, res) => {
// 	try {
// 		const user = await User.findOne({ _id: req.params.id });
// 		if (!user) return res.status(400).send({ message: "Invalid link" });

// 		const token = await Token.findOne({
// 			userId: user._id,
// 			token: req.params.token,
// 		});
// 		if (!token) return res.status(400).send({ message: "Invalid link" });

// 		await User.updateOne({ _id: user._id, verified: true });
// 		await token.remove();

// 		res.status(200).send({ message: "Email verified successfully" });
// 	} catch (error) {
// 		res.status(500).send({ message: "Internal Server Error" });
// 	}
// });

module.exports = { home, register, login, user };
