let models = [
  {
    name: "2016 BMW 1 Serisi 116d 1.5 Joy Plus AT",
    image: "./images/1-1.jpeg",

    link: "http://www.arabalar.com.tr/bmw/1-serisi/2016/116d-1-5-joy-plus-at"
  },
  {
    name: "2017 BMW 2 Serisi 218i Coupe 1.5 M Sport AT",
    image: "./images/2-2.jpeg",
    link: "http://www.arabalar.com.tr/bmw/2-serisi/2017/218i-coupe-1-5-m-sport-at"
  },
  {
    name: "2017 BMW 3 Serisi 320d 2.0 Sport Line AT",
    image: "./images/3-3.jpeg",
    link: "http://www.arabalar.com.tr/bmw/3-serisi/2017/320d-2-0-sport-line-at"
  },
  {
    name: "2016 BMW 4 Serisi 420d Coupe",
    image: "./images/4-4.jpeg",
    link: "http://www.arabalar.com.tr/bmw/4-serisi/2016/420d-coupe"
  },
  {
    name: "2017 BMW 5 Serisi 530i 2.0 Executive Prestige",
    image: "./images/5-5.jpeg",
    link: "http://www.arabalar.com.tr/bmw/5-serisi/2017/530i-2-0-executive-prestige"
  }
];

let index = 0;
let slideCount = models.length;
showSlide(index);

/* ------------------ B U T T O N S ------------------ */

//ARROW LEFT

document.querySelector(".arrow-left").addEventListener("click", function(){
    
    index--;
    showSlide(index);
    console.log(index)
    
})
//ARROW RIGHT

document.querySelector(".arrow-right").addEventListener("click", function(){
    
    index++;
    showSlide(index);
    console.log(index)
    
})

/* ------------------ S L I D E    F U N C T I O N ------------------ */

function showSlide(i){

    index = i;

    if(i<0){
        index = slideCount - 1
    }

    if(i>= slideCount){
        index = 0
    }

    /* ------------------ C O N T E N T S ------------------ */
    
    //Set image
    document.querySelector(".card-img-top").setAttribute("src", models[index].image);
    //Set title
    document.querySelector(".card-title").textContent=models[index].name
    //Set link
    document.querySelector(".card-link").setAttribute("href", models[index].link)

}
