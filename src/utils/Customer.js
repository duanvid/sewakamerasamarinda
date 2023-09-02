class Customer {
  constructor(payload) {
    Customer.verifyPayload(payload);
    const {
      userId, phoneNumber, name, address, delivery,
    } = payload;
    this.id = userId;
    this.phoneNumber = phoneNumber;
    this.name = name;
    this.address = address;
    this.delivery = delivery;
  }

  static verifyPayload({
    userId, phoneNumber, name, address, delivery,
  }) {
    if (!userId || !phoneNumber || !name || !address || delivery === undefined) {
      throw new Error('CUSTOMER.NOT_CONTAIN_NEEDED_PROPERTY');
    }
    if (typeof userId !== 'string' || typeof phoneNumber !== 'number' || typeof name !== 'string' || typeof address !== 'string' || typeof delivery !== 'boolean') {
      throw new Error('CUSTOMER.NOT_CONTAIN_CORRECT_DATA_TYPE');
    }
  }
}

export default Customer;
