const { Router } = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const router = Router();

// /api/auth/register
router.post(
  "/register",
  [
    check("email").isEmail(),
    check("login", "минимальная длина логина 2 символов").isLength({
      min: 2,
    }),
    check("login", "максимальная длина логина 10 символов").isLength({
      max: 10,
    }),
    check("password", "минимальная длина пароля 6 символов").isLength({
      min: 6,
    }),
    check("password", "максимальная длина пароля 10 символов").isLength({
      max: 10,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Некорректные данные при регистрации",
        });
      }

      const { email, password, login, isAdmin } = req.body;
      const candidateLogin = await User.findOne({ login });

      if (candidateLogin) {
        return res
          .status(400)
          .json({ message: "Такой пользователь уже существует" });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({
        login,
        email,
        password: hashedPassword,
        isAdmin,
      });

      await user.save();
      const token = jwt.sign({ userId: user.id }, config.get("jwtSecret"), {
        expiresIn: "1h",
      });

      res.status(201).json({ token, userId: user.id, isAdmin: user.isAdmin });
    } catch (e) {
      res.status(500).json({ message: "something went wrong register" });
    }
  }
);

// /api/auth/login
router.post(
  "/login",
  [
    check("login", "минимальная длина логина 2 символов").isLength({
      min: 2,
    }),
    check("login", "максимальная длина логина 10 символов").isLength({
      max: 10,
    }),
    check("password", "Введите пароль").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Некорректные данные при входе в систему",
        });
      }
      const { login, password } = req.body;
      const user = await User.findOne({ login });

      if (!user) {
        return res.status(400).json({ message: "Пользователь не найден" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ message: "Неверный пароль, попробуйте снова" });
      }

      const token = jwt.sign({ userId: user.id }, config.get("jwtSecret"), {
        expiresIn: "1h",
      });

      res.json({ token, userId: user.id, isAdmin: user.isAdmin });
    } catch (e) {
      res.status(500).json({ message: "something went wrong" });
    }
  }
);

module.exports = router;
