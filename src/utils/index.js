const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');
const hours = String(currentDate.getHours()).padStart(2, '0');
const minutes = String(currentDate.getMinutes()).padStart(2, '0');
export const getFormattedDate = `${year}-${month}-${day}T${hours}:${minutes}`;

export const getRentalCost = (lensType, rentLength, basePrice) => {
  let finalRentalCost;
  if (lensType === 'kit') {
    if (rentLength <= 6) {
      finalRentalCost = basePrice;
    } else if (rentLength >= 7 && rentLength <= 12) {
      finalRentalCost = basePrice + 30000;
    } else if (rentLength >= 13 && rentLength <= 24) {
      finalRentalCost = basePrice + 60000;
    }
  } else if (lensType === 'fix') {
    if (rentLength <= 6) {
      finalRentalCost = basePrice;
    } else if (rentLength >= 7 && rentLength <= 12) {
      finalRentalCost = basePrice + 30000;
    } else if (rentLength >= 13 && rentLength <= 24) {
      finalRentalCost = basePrice + 60000;
    }
  } else if (lensType === 'tele') {
    if (rentLength <= 6) {
      finalRentalCost = basePrice;
    } else if (rentLength >= 7 && rentLength <= 12) {
      finalRentalCost = basePrice + 30000;
    } else if (rentLength >= 13 && rentLength <= 24) {
      finalRentalCost = basePrice + 60000;
    }
  }
  return finalRentalCost;
};
