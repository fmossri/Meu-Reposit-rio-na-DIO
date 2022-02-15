function getAdmins(mapa){
    let userAdmins = [];
    for([nome, papel] of mapa){
        if (papel == "Admin") {
            userAdmins.push(chave);
        }
    }
    return userAdmins;
}
const usuarios = new Map([
    ["Alberto", "Admin"],
    ["Bianca", "User"],
    ["Cristiano", "User"],
    ["Daniela", "Admin"]
]);

console.log(getAdmins(usuarios));