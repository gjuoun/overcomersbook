let expireDate = localStorage.getItem("expireDate")
let today = new Date()
let todayTime = today.getTime()

if (!expireDate || todayTime > expireDate) {
  var _0x2760 = ["\x6F\x76\x65\x72\x63\x6F\x6D\x65\x72", "\x50\x6C\x65\x61\x73\x65\x20\x74\x79\x70\x65\x20\x70\x61\x73\x73\x77\x6F\x72\x64\x20\x74\x6F\x20\x76\x69\x65\x77", "\x57\x72\x6F\x6E\x67\x20\x70\x61\x73\x73\x77\x6F\x72\x64", "\x2E\x2F\x69\x6E\x64\x65\x78\x2E\x68\x74\x6D\x6C", "\x72\x65\x70\x6C\x61\x63\x65", "\x6C\x6F\x63\x61\x74\x69\x6F\x6E"];
  const password = _0x2760[0];
  let input = prompt(_0x2760[1]);
  if (password !== input) {
    alert(_0x2760[2]);
    window[_0x2760[5]][_0x2760[4]](_0x2760[3])
  }
  else {
    //set expire date to 7 days later
    today.setDate(today.getDate() + 7)
    localStorage.setItem("expireDate", today.getTime())
  }
}

