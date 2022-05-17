let color = 'yellow';
function m() { 
switch (color){
  case 'yellow':
       return 'light color';
       break;
  case 'pink':
       return 'light color';
           break;

  case 'orange':
       return 'light color'; 
           break;

  case 'blue':
       return 'dark color';
           break;

  case 'purple':
       return 'dark color';
           break;

  case 'brown':
       return 'dark color';
           break;

  default:
    return 'Unknown color';
           break;

}
}
console.log(m(color));