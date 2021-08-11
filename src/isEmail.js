const isEmail = function (email) {
  const er = new RegExp(
    /^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/
  );
  if (email == "" || !er.test(email)) {
    $("#email").addClass("erro");
    return false;
  } else {
    $("#email").removeClass("erro");
  }
  return true;
};
