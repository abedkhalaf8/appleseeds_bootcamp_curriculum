const countryToLiveIn = (language, isIsland, population, country) => {
    if (language == "english" && !isIsland && population < 50e6 && country == "finland") {
        console.log("You should live in finland");
    } else {
        console.log("finland does not meet your criteria"); 
    }
}

countryToLiveIn("english" ,false ,40e6,"finland");