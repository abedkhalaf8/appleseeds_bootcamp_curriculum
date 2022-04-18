function date() {
    let d = new Date();
    let options = { weekday: 'long' };
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", 
    "September", "October", "November","December"];
    return `Today is ${d.toLocaleDateString('en-US', options)} the ${d.getDate()} of ${months[d.getMonth()]}, ${d.getFullYear()}`;
}
console.log(date());