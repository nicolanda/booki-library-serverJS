import { app } from './app.js';
import { PORT, sequelize } from './config/config.js';
// import { IdentificationType } from './models/lead/IdentificationType.js';
// import { Lead } from './models/lead/Lead.js';
// !import tables
// import './models/IdentificationType.js'
// import { defTypesValues } from './controllers/lead/indetificationType.controller.js';

const main = async () => {
  try {
    // await sequelize.authenticate()
    await sequelize.sync();
    // defTypesValues();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log('Unable to connect to the database:', error);
  }
};

main();
