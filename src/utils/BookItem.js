class BookItem {
  constructor(payload) {
    BookItem.verifyPayload(payload);
    const {
      id, brand, model, lens,
    } = payload;
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.lens = lens;
  }

  static verifyPayload({
    id, brand, model, lens,
  }) {
    if (!id || !brand || !model || !lens) {
      throw new Error('BOOK_ITEM.PAYLOAD_NOT_CONTAIN_NEEDED_PROPERTY');
    }
    if (typeof id !== 'string' || typeof brand !== 'string' || typeof model !== 'string' || typeof lens !== 'string') {
      throw new Error('BOOK_ITEM.PAYLOAD_NOT_CONTAIN_CORRECT_DATA_TYPE');
    }
  }
}

export default BookItem;
