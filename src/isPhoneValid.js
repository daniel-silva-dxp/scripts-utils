const validPhone = function (phone) {
  const regex = new RegExp(
    "^0?(1[1-9]|2[12478]|3[1-8]|4[1-9]|5[13-5]|6[1-9]|7[13-5]|7[79]|8[1-9]|9[1-9])"
  );
  if (phone.length < 10 || phone.length > 11) {
    return false;
  } else if (!regex.test(phone)) {
    return false;
  } else {
    phone = phone.replace(/\D/g, "");
    phone = phone.replace(/^(\d)/, "($1");
    phone = phone.replace(/(.{3})(\d)/, "$1)$2");
    if (phone.length == 9) {
      phone = phone.replace(/(.{1})$/, "-$1");
    } else if (phone.length == 10) {
      phone = phone.replace(/(.{2})$/, "-$1");
    } else if (phone.length == 11) {
      phone = phone.replace(/(.{3})$/, "-$1");
    } else if (phone.length == 12) {
      phone = phone.replace(/(.{4})$/, "-$1");
    } else if (phone.length > 12) {
      phone = phone.replace(/(.{4})$/, "-$1");
    }
    console.log(phone);
  }
  return true;
};
