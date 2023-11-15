//personajes.js

//Creacion de la clase con sus caracteristicas (atributps)
class Personaje {
    constructor(nombre, elemento, estrellas){
        this.nombre = nombre;
        this.elemento = elemento;
        this.estrellas = estrellas;
    }
}

//Definicion de los personajes
const personajes = [
    //5 Stars
    new Personaje('Albedo','Geo',5), // index 0
    new Personaje('Alhaitham','Dendro',5), // index 1
    new Personaje('Aloy','Cryo',5),  // index 2
    new Personaje('Kamisato Ayaka','Cryo',5), // index 3
    new Personaje('Kamisato Ayato','Hydro',5), // index 4
    new Personaje('Baizhu','Dendro',5), // index 5
    new Personaje('Tartaglia','Hydro',5), // index 6
    new Personaje('Cyno','Electro',5), // index 7
    new Personaje('Dehya','Pyro',5), // index 8
    new Personaje('Diluc','Pyro',5), // index 9
    new Personaje('Eula','Cryo',5), // index 10
    new Personaje('Ganyu','Cryo',5), // index 11
    new Personaje('Hu Tao','Pyro',5), // index 12
    new Personaje('Arataki Itto','Geo',5), // index 13
    new Personaje('Jean','Anemo',5), // index 14
    new Personaje('Kaedehara Kazuha','Anemo',5), // index 15
    new Personaje('Keqing','Electro',5), // index 16
    new Personaje('Klee','Pyro',5), // index 17
    new Personaje('Kokomi','Hydro',5), // index 18
    new Personaje('Lyney','Pyro',5), // index 19
    new Personaje('Mona','Hydro',5), // index 20
    new Personaje('Nahida','Dendro',5), // index 21
    new Personaje('Neuvillette','Hydro',5), // index 22
    new Personaje('Nilou','Hydro',5), // index 23
    new Personaje('Qiqi','Cryo',5), // index 24
    new Personaje('Raiden Shogun','Electro',5), // index 25
    new Personaje('Shenhe','Cryo',5), // index 26
    new Personaje('Tighnari','Dendro',5), // index 27
    new Personaje('Venti','Anemo',5), // index 28
    new Personaje('Wanderer','Anemo',5), // index 29
    new Personaje('Wriothesley','Cryo',5), // index 30
    new Personaje('Xiao','Anemo',5), // index 31
    new Personaje('Yae Miko','Electro',5), // index 32
    new Personaje('Yelan','Hydro',5), // index 33
    new Personaje('Yoimiya','Pyro',5), // index 34
    new Personaje('Zhongli','Geo',5), // index 35

    //4 Stars
    new Personaje('Yun Jin','Geo',4), // index 36
    new Personaje('Yaoyao','Dendro',4), // index 37
    new Personaje('Yanfei','Pyro',4), // index 38
    new Personaje('Xinyan','Pyro',4), // index 39
    new Personaje('Xingqiu','Hydro',4), // index 40
    new Personaje('Xiangling','Pyro',4), // index 41
    new Personaje('Thoma','Pyro',4), // index 42
    new Personaje('Sucrose','Anemo',4), // index 43 
    new Personaje('Sayu','Anemo',4), // index 44
    new Personaje('Kujou Sara','Electro',4), // index 45
    new Personaje('Rosaria','Cryo',4), // index 46
    new Personaje('Razor','Electro',4), // index 47
    new Personaje('Noelle','Geo',4), // index 48
    new Personaje('Ningguang','Geo',4), // index 49
    new Personaje('Mika','Cryo',4), // index 50
    new Personaje('Lynette','Anemo',4), // index 51
    new Personaje('Lisa','Electro',4), // index 52
    new Personaje('Layla','Cryo',4), // index 53
    new Personaje('Kuki Shinobu','Electro',4), // index 54
    new Personaje('Kirara','Dendro',4), // index 55
    new Personaje('Kaveh','Dendro',4),  // index 56
    new Personaje('Kaeya','Cryo',4),  // index 57
    new Personaje('Heizou','Anemo',4), // index 58
    new Personaje('Gorou','Geo',4), // index 59
    new Personaje('Freminet','Cryo',4), // index 60
    new Personaje('Fischl','Electro',4), // index 61
    new Personaje('Faruzan','Anemo',4), // index 62
    new Personaje('Dori','Electro',4), // index 63
    new Personaje('Diona','Cryo',4), // index 64
    new Personaje('Collei','Dendro',4), // index 65
    new Personaje('Chongyun','Cryo',4), // index 66
    new Personaje('Candace','Hydro',4), // index 67
    new Personaje('Bennett','Pyro',4), // index 68
    new Personaje('Beidou','Electro',4), // index 69
    new Personaje('Barbara','Hydro',4), // index 70
    new Personaje('Amber','Pyro',4), // index 71

    //Personajes Nuevos
    new Personaje('Furina','Hydro',5), //index 72
    new Personaje('Charlotte','Cryo',4) //index 73
]


//Exportamos
module.exports = personajes;


