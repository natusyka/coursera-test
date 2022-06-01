(function() {
const names = ['Yaakov', 'John', 'Jen', 'Jason', 'Paul', 'Frank', 'Larry', 'Paula', 'Laura', 'Jim'];

const MyFn = (Cname) => {
  let FirstLetter;
  Cname = Cname.toLowerCase();
  FirstLetter = Cname.charAt(0);
  return FirstLetter 
}

names.forEach(el => {
  if (MyFn(el) != 'j') {
    helloSpeaker.name = el;
    helloSpeaker.speak();
  } else {
    byeSpeaker.name = el;
    byeSpeaker.speak();
  }
}
) 
})();

