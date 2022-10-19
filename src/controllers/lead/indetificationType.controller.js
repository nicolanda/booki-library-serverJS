import { IdentificationType } from '../../models/lead/IdentificationType.js';
import { documentTypeValues } from '../../services/rawData.js';
// import { Op } from 'sequelize';

export const getAllIdentifications = async (req, res) => {
  try {
    const idtype = await IdentificationType.findAll();
    res.json(idtype);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getIdentification = async (req, res) => {
  try {
    const { id } = req.params;
    const idtype = await IdentificationType.findByPk(id);
    if (!idtype) return res.status(404).json({ message: 'Identification type not found' });
    res.json(idtype);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createIdentification = async (req, res) => {
  try {
    const { name } = req.body;
    const newIdType = await IdentificationType.create({ name });
    res.json(newIdType);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateIdentification = async (req, res) => {
  try {
    const { id } = req.params;
    const idetification = await IdentificationType.findByPk(id);
    if (!idetification) return res.status(404).json({ message: 'Identification type not found' });
    idetification.set(req.body);
    await idetification.save();
    return res.json(idetification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteIdentification = async (req, res) => {
  try {
    const { id } = req.params;
    const idetification = await IdentificationType.findByPk(id);
    if (!idetification) return res.status(404).json({ message: 'Identification type not found' });
    await idetification.destroy();
    return res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
/*
const defValues = [
  'Cédula de ciudadanía',
  'Cédula de extranjería',
  'Pasaporte',
  'Tarjeta de identidad',
  'NIT'
];

IdentificationType.destroy({
  where: {
    name: { [Op.or]: defValues }
  }
});

IdentificationType.bulkCreate([
  { name: defValues[0] },
  { name: defValues[1] },
  { name: defValues[2] },
  { name: defValues[3] },
  { name: defValues[4] }
]).then(() => {
  console.log('Default identification types created');
}).catch((error) => {
  console.log(error);
});
*/

export const defTypesValues = async () => {
  const idType = await IdentificationType.findAll();
  if (idType.length === 0) {
    documentTypeValues.forEach((value) => {
      IdentificationType.findOrCreate({ where: { name: value.name } });
    });
  }
};

// defValues();
// Path: src/models/lead/IdentificationType.js

// const defValues = async () => {
//   const idType = await IdentificationType.findAll();
//   if (idType.length === 0) {
//     documentTypeValues.forEach((value) => {
//       IdentificationType.findOrCreate({ name: value.name });
//     });
//   }
// };

// defValues();
