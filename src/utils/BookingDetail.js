class BookingDetail {
  constructor(payload) {
    BookingDetail.verifyPayload(payload);
    const {
      rentalDuration, rentalStartDate, rentalStartTime, rentalEndTime, rentalEndDate,
    } = payload;
    this.rentalDuration = rentalDuration;
    this.rentalStartDate = rentalStartDate;
    this.rentalStartTime = rentalStartTime;
    this.rentalEndTime = rentalEndTime;
    this.rentalEndDate = rentalEndDate;
  }

  static verifyPayload({
    rentalDuration, rentalStartDate, rentalStartTime, rentalEndTime, rentalEndDate,
  }) {
    if (
      !rentalDuration || !rentalStartDate || !rentalStartTime || !rentalEndTime || !rentalEndDate
    ) {
      throw new Error('BOOKING_DETAIL.PAYLOAD_NOT_CONTAIN_NEEDED_PROPERTY');
    }
    if (typeof rentalDuration !== 'number' || typeof rentalStartDate !== 'string' || typeof rentalStartTime !== 'string' || typeof rentalEndTime !== 'number' || typeof rentalEndDate !== 'string') {
      throw new Error('BOOKING_DETAIL.PAYLOAD_NOT_CONTAIN_CORRECT_DATA_TYPE');
    }
  }
}

export default BookingDetail;
