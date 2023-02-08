import { Lead } from '../models/lead/Lead.js';
import jwt from 'jsonwebtoken';
/*  funcion para verificar si el correo existe */
export const saveEmail = async (req, res, next) => {
  try {
    const emailCheck = await Lead.findOne({
      where: {
        email: req.body.email
      }
    });

    if (emailCheck) {
      return res.status(409).json({
        message: 'fallo la autenticacion'
      });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* funcion para verificar el token */

export const verifyToken = async (req, res, next) => {
  console.log(req.headers);
  if (req.headers.authorization) {
    const token = req.headers.authorization;
    if (token === 'null') {
      return res.status(401).send('unauthorized request');
    }

    try {
      const jwtDecode = jwt.verify(token, process.env.SECRET);
      console.log(jwtDecode);
      if (!jwtDecode) {
        return res.status(401).send('unauthorized request');
      }
      const user = await Lead.findByPk(jwtDecode.id);
      console.log(user);
      if (user) {
        // res.user = user;
        next();
        return;
      }
    } catch (error) {
      return res.status(401).send('unauthorized request');
    }
  }
  console.log('no hay token');
  return res.status(401).send('unauthorized request');
};
