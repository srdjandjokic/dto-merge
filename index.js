// Import stylesheets
import './style.css';
import _ from 'lodash';

import { CA_DTO, CV_DTO, EV_DTO, AD_DTO } from './dto';
import {
  effectiveDateDTOPath,
  minimumEffectiveDateDTOPath,
  vehiclesDTOPath,
  driversDTOPath,
  addressDTOPath,
  vehicleDriversDTOPath,
} from './paths';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const dtoData = {
  'change-address': CA_DTO,
  'change-vehicle': CV_DTO,
};

const mergedDtos = {};

const result = ['change-address', 'change-vehicle'].reduce(
  (prevJourney, currJourney, index, array) => {
    const prevJourneyDto = dtoData[prevJourney];
    const currJourneyDto = dtoData[currJourney];

    const oldEffectiveDate = _.get(prevJourneyDto, effectiveDateDTOPath, {});
    const newEffectiveDate = _.get(prevJourneyDto, effectiveDateDTOPath, {});
    const mergedEffectiveDate = _.merge(oldEffectiveDate, newEffectiveDate);
    _.set(mergedDtos, effectiveDateDTOPath, mergedEffectiveDate);

    const oldMinEffectiveDate = _.get(
      prevJourneyDto,
      minimumEffectiveDateDTOPath,
      {}
    );
    const newMinEffectiveDate = _.get(
      prevJourneyDto,
      minimumEffectiveDateDTOPath,
      {}
    );
    const mergedMinEffectiveDate = _.merge(
      oldMinEffectiveDate,
      newMinEffectiveDate
    );
    _.set(mergedDtos, minimumEffectiveDateDTOPath, mergedMinEffectiveDate);

    const oldVehicle = _.get(prevJourneyDto, vehiclesDTOPath, []);
    const newVehicle = _.get(prevJourneyDto, vehiclesDTOPath, []);
    const mergedVechile = _.merge(oldVehicle, newVehicle);
    _.set(mergedDtos, `${vehiclesDTOPath}`, mergedVechile);

    const oldAddress = _.get(prevJourneyDto, addressDTOPath, {});
    const newAddress = _.get(currJourneyDto, addressDTOPath, {});
    const mergedAddress = _.merge(oldAddress, newAddress);
    _.set(mergedDtos, addressDTOPath, mergedAddress);

    const olddrivers = _.get(prevJourneyDto, driversDTOPath, []);
    const newDrivers = _.get(currJourneyDto, driversDTOPath, []);
    const mergedDrivers = _.merge(olddrivers, newDrivers);
    _.set(mergedDtos, driversDTOPath, mergedDrivers);
  }
);

console.log(result, 'AAA', mergedDtos);
