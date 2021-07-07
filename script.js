function* generate(){
  yield 'station1';
  yield 'station2';
  yield 'station3';
  yield 'station4';
}

const metro = generate()
let div = document.querySelector('div')
div.addEventListener('click',()=>{
  const value = metro.next();
  if(value.done){
    toAdd = "GCS"
  }else{
    toAdd = value.value
  }
  div.textContent = toAdd;
})
