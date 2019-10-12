import {getBreedImg} from './utils';

// breed,source,author,license
const csv = `Bouvier_des_Flandres,https://commons.wikimedia.org/wiki/File:Ygor_Raiza.jpg,Eva Nordlund,CC BY-SA 2.5
Brabancon_griffon,https://en.wikipedia.org/wiki/Griffon_Bruxellois#/media/File:0709_gucci_stolt.jpg,Maria Michaëlsson,CC BY-SA 3.0
Cardigan,https://en.wikipedia.org/wiki/Cardigan_Welsh_Corgi#/media/File:Wystawa_Rybnik_02.10.2011_welsh_corgi_cardigan_g%C5%82owa_pl.jpg,Pleple2000,CC BY-SA 3.0
Dandie_Dinmont,https://commons.wikimedia.org/wiki/File:A_Dandie_Dinmont.jpg,audrey_sel,CC BY-SA 2.0
English_foxhound,https://commons.wikimedia.org/wiki/English_Foxhound#/media/File:English_Foxhound_portrait.jpg,Thowra_uk,CC BY 2.0
Irish_water_spaniel,https://commons.wikimedia.org/wiki/File:Irish_Water_Spaniel_4.jpg,Canarian,CC BY-SA 4.0 International
Japanese_spaniel,https://commons.wikimedia.org/wiki/File:Japanese_ChinJapanese_Spaniel.jpg,T.shinzaemon,CC BY-SA 4.0 International
Kerry_blue_terrier,https://commons.wikimedia.org/wiki/Kerry_Blue_Terrier#/media/File:Kerry_Blue_Terrier_puppy.png,Vbi20,CC BY-SA 3.0
Mexican_Hairless,https://commons.wikimedia.org/wiki/File:Mexican_Hairless.jpg,Dagon Hoyohoy,CC-BY 2.0 Generic
Norwich_terrier,https://commons.wikimedia.org/wiki/Norwich_Terrier#/media/File:Norwich_Terrier1.JPG,Helene Gisin Hgisin,CC BY-SA 4.0
Old_English_sheepdog,https://commons.wikimedia.org/wiki/Old_English_Sheepdog#/media/File:Old_English_Sheep_Dog.JPG,Squigman,Public Domain
scotch_terrier,https://en.wikipedia.org/wiki/Scottish_Terrier#/media/File:Scottish_Terrier_Photo_of_Face.jpg,Elise Carroll,CC BY-SA 4.0
Scottish_deerhound,https://en.wikipedia.org/wiki/Scottish_Deerhound#/media/File:Modhish_Archie_MacTavish-foto_hanna_Wo%C5%BAna-Gil.jpg,Hanna Woźna - Gil,CC BY-SA 3.0
Sealyham_terrier,https://en.wikipedia.org/wiki/Sealyham_Terrier#/media/File:Adult_Sealyham_Terrier.jpg,Chuck in MA,CC BY-SA 4.0
Sussex_spaniel,https://de.wikipedia.org/wiki/Datei:Sussex_spaniel_t43.jpg,Pleple2000,CC BY 3.0
Walker_hound,https://en.wikipedia.org/wiki/Treeing_Walker_Coonhound#/media/File:Treeing-walker-coonhound-standing.jpg,Kingkong954,Public Domain
black-and-tan_coonhound,https://en.wikipedia.org/wiki/Black_and_Tan_Coonhound#/media/File:BTCoonhnd.jpg,Scraig,CC BY-SA 3.0
clumber,https://en.wikipedia.org/wiki/Clumber_Spaniel#/media/File:Clumber_spaniel_rybnik_kamien_pppl.jpg,Pleple2000,CC BY-SA 4.0
collie,https://commons.wikimedia.org/wiki/File:Rough_Collie_600.jpg,sannse,CC BY-SA 3.0 Unported
otterhound,https://en.wikipedia.org/wiki/Otterhound#/media/File:Two_otterhounds.jpg,Machinecha~commonswiki,Public Domain
redbone,https://commons.wikimedia.org/wiki/File:Memphis_the_Redbone_Coonhound_(7_Nov_2004).jpg,Arlawson,CC BY-SA 3.0 Unported
schipperke,https://commons.wikimedia.org/wiki/Schipperke#/media/File:G%C5%82owa_gismo_-_schipperke.jpg,Lilly M,CC BY-SA 3.0
wire-haired_fox_terrier,https://en.wikipedia.org/wiki/Wire_Fox_Terrier#/media/File:Wera.JPG,Duspivova,CC BY-SA 3.0`;

export default csv.split('\n').map(line => {
    const [breed, source, author, license] = line.split(',');
    return {
        img: getBreedImg(breed),
        breed,
        source,
        author,
        license,
    };
});
