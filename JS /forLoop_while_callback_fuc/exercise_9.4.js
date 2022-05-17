function posInteger(N) {
    let arr = [];
    for (let i = 1; i <= N; i++){

      for (let j = 0; j < i; j++){
          arr.push("#");
      }
      console.log(arr);
      arr = [];
    }

}
posInteger(5);