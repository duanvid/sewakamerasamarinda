class Book {
  constructor(payload) {
    Book.verifyPayload(payload);
    const {
      bookingId, cameraId, customer,
    } = payload;
    this.id = bookingId;
    this.cameraId = cameraId;
    this.customer = customer;
  }

  static verifyPayload({
    bookingId, cameraId, customer,
  }) {
    if (!bookingId || !cameraId || !customer) {
      throw new Error('BOOKING.PAYLOAD_NOT_CONTAIN_NEEDED_PROPERTY');
    }
    if (typeof bookingId !== 'string' || typeof cameraId !== 'string' || typeof customer !== 'object') {
      throw new Error('BOOKING.PAYLOAD_NOT_CONTAIN_CORRECT_PROPERTY_TYPE');
    }
  }
}

export default Book;
