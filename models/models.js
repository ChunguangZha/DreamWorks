const shopInfo = {
  shopId: Number,
  imgName: String,
  title: String,
  desc: String,
  price: Number,
  size: String
}
const address = {
  province: String,
  city: String,
  county: String,
  details: String,
  phone: String,
  receiver: String,
}
const order = {
  orderId: String,
  shops: Array,
  addressInfo: address,
  usedVoucher: Boolean,
  voucherOfUser_id: String,
  originalCost: Number,
  payedCost: Number,
  orderState: eOrderState, // 0: Not pay; 1: Payed; 2: 
}
const eOrderState = {
  NOTPAY: 0,
  PAYED: 1,
  SENDING: 2,
  FINISHED: 3,
  CANCELED: 10,
  APPLY_FOR_RETURN: 11,
  CANCEL_FOR_RETURN: 12,
  AGREE_FOR_RETURN: 13
}
const shop_ordered = {
  shopId: String,
  shopName: String,  
  count: Number,
  price: Number,
}

// 优惠券
const voucher = {
  id: String,
  title: String,
  discountType: Number, // 0: cash; 1: discount;
  discountValue: Number,
  startValidDate: Date,
  validity_days: Number, // 有效期（天数） 
  isEnable: Boolean,
}
const voucherOfUser = {
  id: String,
  userUnionId: String,
  title: String,
  discountType: Number, // 0: cash; 1: discount;
  discountValue: Number,
  startValidDate: Date,
  validity_days: Number, // 有效期（天数） 
  isEnable: Boolean,
  createDate: Date,
  isUsed: Boolean,
}

const userInfoEx = {
  userUnionId: String,
  addressList: Array,
  orderList: Array,
}

module.exports = {
  shopInfo: shopInfo,
  address: address,
  order: order,
  eOrderState: eOrderState,
  shop_ordered: shop_ordered,
  voucher: voucher,
  voucherOfUser: voucherOfUser,
  userInfoEx: userInfoEx
}
