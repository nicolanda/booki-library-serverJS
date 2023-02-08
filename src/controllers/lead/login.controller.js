import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Lead } from '../../models/lead/Lead.js';

// login

export const loginLead = async (req, res) => {
  try {
    // extract email and password
    const { email, password } = req.body;

    // find the user by email
    const lead = await Lead.findOne({ where: { email } });

    // if email exists
    if (lead) {
      const isEquals = await bcrypt.compare(password, lead.password);

      // if password is correct
      if (isEquals) {
        // generate token
        const token = jwt.sign({ id: lead.id }, process.env.SECRET, {
          expiresIn: 1 * 24 * 60 * 60 * 1000
        });

        // res.cookie('jwt', token, { maxAge: 1 * 24 * 60 * 60 });

        console.log('user', lead);
        console.log('token', token);

        // return info leadx
        res.json({ token });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
