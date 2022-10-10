import express from 'express';
import { authorRouter } from './bookRoutes/author.routes.js';
import { bookRouter } from './bookRoutes/book.routes.js';
import { categoryRouter } from './bookRoutes/category.routes.js';
import { priceDiscountRouter } from './bookRoutes/priceDiscount.routes.js';
import { priceTaxRouter } from './bookRoutes/priceTax.routes.js';
import { addressBookRouter } from './leadRoutes/addresBook/addresBook.routes.js';
import { cityRouter } from './leadRoutes/addresBook/city.routes.js';
import { departmentRouter } from './leadRoutes/addresBook/department.routes.js';
import { houseTypeRouter } from './leadRoutes/addresBook/house.routes.js';
import { identificationTypeRouter } from './leadRoutes/identificationType.routes.js';
import { leadRouter } from './leadRoutes/lead.routes.js';
import { paymentRouter } from './leadRoutes/payment/payment.routes.js';
import { paymentCountryRouter } from './leadRoutes/payment/paymentCountry.routes.js';
import { paymentTypeRouter } from './leadRoutes/payment/paymentType.routes.js';
import { billDeliveryRouter } from './store/bills/billDelivery.routes.js';
import { billsRouter } from './store/bills/bills.routes.js';
import { billStatusRouter } from './store/bills/billStatus.routes.js';
import { storeRouter } from './store/store.routes.js';
import { storeWorkersRouter } from './store/storeWorkers.routes.js';

export const apiRouter = express.Router();

// storeRoutes
apiRouter.use('/store', storeRouter);
apiRouter.use('/storeWorkers', storeWorkersRouter);

// billRoutes
apiRouter.use('/bill', billsRouter);
apiRouter.use('./billDelivery', billDeliveryRouter);
apiRouter.use('/billStatus', billStatusRouter);

// bookRoutes
apiRouter.use('/book', bookRouter);
apiRouter.use('/category', categoryRouter);
apiRouter.use('/author', authorRouter);
apiRouter.use('/priceDiscount', priceDiscountRouter);
apiRouter.use('/prieTax', priceTaxRouter);

// leadRoutes
apiRouter.use('/lead', leadRouter);
apiRouter.use('/identificationType', identificationTypeRouter);

// addressBookRoutes
apiRouter.use('/addressBook', addressBookRouter);
apiRouter.use('/city', cityRouter);
apiRouter.use('/department', departmentRouter);
apiRouter.use('/houseType', houseTypeRouter);

// paymentRoutes
apiRouter.use('/payment', paymentRouter);
apiRouter.use('/paymentCountry', paymentCountryRouter);
apiRouter.use('/paymentType', paymentTypeRouter);
