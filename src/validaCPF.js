const validaCpf = function (val) {
  function CPF() {
    function r(r) {
      for (let t = null, n = 0; 9 > n; ++n)
        t += r.toString().charAt(n) * (10 - n);
      let i = t % 11;
      return (i = 2 > i ? 0 : 11 - i);
    }
    function t(r) {
      for (let t = null, n = 0; 10 > n; ++n)
        t += r.toString().charAt(n) * (11 - n);
      let i = t % 11;
      return (i = 2 > i ? 0 : 11 - i);
    }
    let n = false,
      i = true;
    (this.gera = function () {
      for (let n = "", i = 0; 9 > i; ++i)
        n += Math.floor(9 * Math.random()) + "";
      let o = r(n),
        a = n + "-" + o + t(n + "" + o);
      return a;
    }),
      (this.valida = function (o) {
        for (
          let a = o.replace(/\D/g, ""),
            u = a.substring(0, 9),
            f = a.substring(9, 11),
            v = 0;
          10 > v;
          v++
        )
          if ("" + u + f == "" + v + v + v + v + v + v + v + v + v + v + v)
            return n;
        let c = r(u),
          e = t(u + "" + c);
        return f.toString() === c.toString() + e.toString() ? i : n;
      });
  }

  const isValid = new CPF();

  if (!isValid.valida(val)) {
    return false;
  } else {
    return true;
  }
};
