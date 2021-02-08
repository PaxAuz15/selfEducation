// Funcion del navegador para validar certezas o falsedades
//Sirven para anidar junto a condiciones

// Falsos
Boolean(); 
Boolean(0);
Boolean();
Boolean(null);
Boolean(NaN);
Boolean(undefined);
Boolean(false);
Boolean("");

// Verdades
Boolean(" "); //FIXME: el espacio es una certeza. Se debe validar
Boolean([]);
Boolean({});
Boolean("A"); //Con cualquier caracter
Boolean(1);
Boolean(true);