function chunkify(seq, n){
  var chunks = [];
  var steps = seq.length/n;
console.log(steps);
  for(var i=0;i<steps;i++){
    chunks.push(seq.slice(i*n, i*n+n));
  }
  return chunks ;
}

function ngrams(seq, n) {
  var grams = [];
  for (var i = 0; i < (seq.length - n + 1); i++) {
    grams.push(seq.slice(i, i + n))
  }
  return grams;
}

function freq(seq) {
  var fq = {};
  for (var i = 0; i < seq.length; i++) {
    if (!(seq[i] in fq)) {
      fq[seq[i]] = 0
    }
    fq[seq[i]] += 1
  }
  return fq
}

function set(seq) {
  var fq = freq(seq);
  return Object.keys(fq)
}

function is_common(word, tally){
  return word in tally;
}

function at_least_n_common(ngram, min_count, tally){
  var count = 0;
  for(var i=0;i<min_count;i++){
    if (ngram[i] in tally){
      count += 1; 
    }
  }
  return count;
}

function filter_hash(tally, condition){
  var filtered = {};
  for(k in tally){
    var k,v = k, tally[k];
    if (condition(v)){
      filtered[k]  = tally[k];
    }
  }
  return filtered;
}

function most_common(tally, min_val){
  var 
}
