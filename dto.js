export const CA_DTO = {
  baseData: {
    effectiveDate: { day: 4, month: 6, year: 2022 },
    minimumEffectiveDate: { day: 4, month: 6, year: 2022 },
    policyAddress: {
      addressEnteredManualy: false,
      addressLine1: 'Sky',
      addressLine2: '1B Wall Street',
      addressLine3: '',
      city: 'LIVERPOOL',
      county: 'Merseyside',
      hasDifferentOvernightPC: false,
      overnightPostCode: 'L18JQ',
      postalCode: 'L18JQ',
    },
    policyChangeDescType: 'Pol_Adjstmnt',
  },
  lobData: {
    privateCar: {
      coverables: {
        vehicles: [
          {
            isOvernightLocationHome: true,
            overnightLocationPostcode: 'L18JQ',
            overnightParkingArrangements: 'I',
            annualMileage: '11111',
            typeOfUse: '01',
          },
        ],
      },
    },
  },
};

export const CV_DTO = {
  baseData: {
    effectiveDate: { day: 4, month: 6, year: 2022 },
    minimumEffectiveDate: { day: 4, month: 6, year: 2022 },
    policyAddress: {
      addressEnteredManualy: false,
      addressLine1: 'Sky',
      addressLine2: '1B Wall Street',
      addressLine3: '',
      city: 'LIVERPOOL',
      county: 'Merseyside',
      hasDifferentOvernightPC: false,
      overnightPostCode: 'L18JQ',
      postalCode: 'L18JQ',
    },
    policyChangeDescType: 'Pol_Adjstmnt',
  },
  lobData: {
    privateCar: {
      coverables: {
        vehicles: [
          {
            abiCode: '17537602',
            alarmImmobilizer: '93',
            annualMileage: 22222,
            body: 'HATCHBACK',
            bodyCode: '13',
            colour: 'PINK',
            drivingSide: 'R',
            engineSize: '1242',
            fuelType: 'Petrol',
            importType: 'no',
            imported: false,
            isCarModified: false,
            isOvernightLocationHome: true,
            isRegNumberEnteredManually: false,
            isVehicleBought: false,
            legalOwner: '1_PR',
            make: 'FORD',
            model: 'FIESTA FREESTYLE',
            numberOfDoors: 5,
            numberOfSeats: '5',
            overnightLocationPostcode: 'L18JQ',
            overnightParkingArrangements: 'H',
            purchaseDate: '2022-07-03T23:00:00.000Z',
            registeredKeeper: '1_PR',
            registrationsNumber: 'DA61UEG',
            tracker: false,
            transmission: '002',
            type: 'PrivateCar_Ext',
            typeOfUse: '01',
            vehicleModifications: [],
            vehicleWorth: 9000,
            weight: 1450,
          },
        ],
      },
    },
  },
};

export const EV_DTO = {
  baseData: {
    effectiveDate: { day: 4, month: 6, year: 2022 },
    minimumEffectiveDate: { day: 4, month: 6, year: 2022 },
    policyChangeDescType: 'Pol_Adjstmnt',
  },
  lobData: {
    privateCar: {
      coverables: {
        vehicles: [
          {
            alarmImmobilizer: '92',
            registrationsNumber: '',
            typeOfUse: '04',
            annualMileage: 33333,
            overnightLocationPostcode: 'L18JQ',
            overnightParkingArrangements: 'I',
            vehicleModifications: [],
            legalOwner: '7_CL',
            registeredKeeper: 'E_CP',
          },
        ],
      },
    },
  },
};

export const AD_DTO = {
  baseData: {
    effectiveDate: { day: 4, month: 6, year: 2022 },
    minimumEffectiveDate: { day: 4, month: 6, year: 2022 },
    policyChangeDescType: 'Pol_Adjstmnt',
  },
  lobData: {
    privateCar: {
      coverables: {
        drivers: [
          {
            isTemporaryDriver: undefined,
            tempDriverExpirationDate: undefined,
            person: {
              firstName: 'John',
              lastName: 'Doe',
              prefix: 'undefined',
            },
            gender: undefined,
            maritalStatus: undefined,
            relationToProposer: undefined,
            dateOfBirth: undefined,
            residingInUKSince: undefined,
            resUKSinceBirth: undefined,
            fullEmpStatus: undefined,
            occupationFull: undefined,
            businessTypeFull: undefined,
            partEmpStatus: undefined,
            occupationPart: undefined,
            businessTypePart: undefined,
            licenceType: undefined,
            licenceNumber: undefined,
            licenceHeldFor: undefined,
            licenceObtainedDate: null,
            accessToOtherVehicles: undefined,
            claimsAndConvictions: {
              anyClaims: undefined,
              claimsDetailsCollection: undefined,
              anyConvictions: false,
              convictionsCollection: null,
              unspentNonMotorConvictions: undefined,
            },
            previousPoliciesInformation: {
              hadInsurancePolicyDeclinedCancelledVoidedOrSpecialTerms:
                undefined,
              hadInsurancePolicyCancelledOrDeclined: undefined,
              hadInsurancePolicyVoided: undefined,
              hadInsurancePolicyWithSpecialTerms: undefined,
            },
          },
        ],
      },
    },
  },
};
