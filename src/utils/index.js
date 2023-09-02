import { child, get, ref } from 'firebase/database';
import { db } from '../firebase-config';

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');
const hours = String(currentDate.getHours()).padStart(2, '0');
const minutes = String(currentDate.getMinutes()).padStart(2, '0');
export const getFormattedDate = `${year}-${month}-${day}`;

export const getRentalCost = (lensType, rentLength, data) => {
  if (rentLength <= 6) {
    return data[lensType].tarif1;
  }
  if (rentLength <= 12 && rentLength >= 7) {
    return data[lensType].tarif2;
  }
  return data[lensType].tarif3;
};

export const getBasePrice = (id) => get(child(ref(db), (`pricelist/${id}`)))
  .then((snapshot) => {
    const result = snapshot.val();
    return result;
  })
  .catch((error) => {
    console.log(error);
  });
