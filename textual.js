function tokenize(text){
  return text;
}

function frequency(sequence){
  // tally elements of sequence 
  var tally = {};
  for(var i = 0 ; i<sequence.length; i++){
    var element = sequence[i];
    if (!(element in tally) ){
      tally[element] = 0;
    }
    tally[element] += 1;
  } 
  return tally;
}


function depunctuate(text){
  return text;
}
