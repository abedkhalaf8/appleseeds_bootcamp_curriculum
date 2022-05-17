const book1 = {
    name : "book1",
    author : "karam eisa",
    year : 2021
}
const book2 = {
    name : "book1",
    author : "karam eisa",
    year : 2022
}

const bookUtils = {

}

bookUtils.getFirst = () => {
    if (book1.year < book2.year) {
        return book1;
    } else {
        return book2;
    }
}

console.log(bookUtils.getFirst());
console.log(bookUtils);