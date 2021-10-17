function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }


    // Simple responses
    if (input == "hola") {
        return "¡Hola!";
    } else if (input == "how are you") {
        return "cómo estás";
    }
    if (input == "what is boy called in spanish?") {
        return "chico!";
    } else if (input == "what is blue colour called in spanish?") {
        return "azul";
    }
    if (input == "hello") {
        return "Hallo!";
    } else if (input == "how are you ?") {
        return "Wie geht es dir";
    }
    if (input == "what is girl called in german?") {
        return "Mädchen";
    } else if (input == "what is red colour called in german?") {
        return "rot";

    } else
        return "Intenta preguntar algo más!";
}