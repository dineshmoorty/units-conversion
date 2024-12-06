const mile = 1.6;
function enter(event){
  if (event.key === 'Enter') {
    updateCalculation();
  }
}

function updateCalculation() {
  const InputElement = document.querySelector('.mile');
  const miletokm = Number(InputElement.value);
  if (miletokm != 0){
    calc = miletokm * mile;
    document.querySelector('.outputofmile').innerHTML = `${calc} Kilomter`
  }
  else if (miletokm===0) {
    calc = ' ';
    document.querySelector('.outputofmile').innerHTML = `${calc}`
  }
}

function clearoutput() {
  let outputvalue = document.querySelector('.output');
  if (outputvalue!=0) {
    outputvalue = '';
    document.querySelector('.output').innerHTML = `${outputvalue}`
  }
}
