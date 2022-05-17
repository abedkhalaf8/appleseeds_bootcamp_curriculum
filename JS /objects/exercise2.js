let mycountry = {
    country: 'israel',
    capital: 'tel aviv',
    language: 'hebrew',
    population: 10e6,
    neighbours:['jordan','Egypt','lebanon'],
    describe : function() {
      return  this.country + ' has ' + this.population + ' million people, their mother tongue is ' + this.language + ' they' + ' have '+ this.neighbours.length + ' neighbouring countries and a capital called ' + this.capital;
    },
    checkIsland : function () {
        if(mycountry.neighbours.length == 0){
            mycountry.isIsland = true;
        } else mycountry.isIsland = false;
    }
}
console.log(mycountry.checkIsland());
console.log(mycountry);