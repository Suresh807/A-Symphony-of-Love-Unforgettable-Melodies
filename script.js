window.addEventListener("DOMContentLoaded", function () {
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-img");
    var bannerHeading = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");

    var rightBanner = document.querySelector(".banner.right-banner");
    var rightBannerImage = document.querySelector(".banner.right-banner .right-img");
    var rightBannerHeading = document.querySelector(".banner.right-banner .heading h1");
    var rightBannerText = document.querySelector(".banner.right-banner .heading p");
  
    // Set the default banner image and text
    banner.style.backgroundImage = "url(images/d.jpg)";
    //bannerImage.setAttribute("src", "images/d5.png");
   // bannerHeading.textContent = "Deep Focus";
    //bannerText.textContent = "Keep your focus and enjoy the serenity";

    rightBanner.style.backgroundImage = "url(images/.jpg)";
    rightBannerImage.setAttribute("src", "images/d1.jpg");
  });
  
function playAll(songNumber){
    var audioElement= document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    var songFileName = "music/"+songNumber+".mp3";
    var currentRow= document.getElementById("song"+songNumber);
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-img");
    var bannerHeading = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");
    

    if(audioElement.getAttribute("src")==songFileName && !audioElement.paused){
        audioElement.pause();
        playBtn.innerHTML='<img src="images/play-button.svg">';
        
        banner.style.backgroundImage = "url(images/d.jpg)";
        bannerImage.setAttribute("src", "images/d5.png");
        //bannerHeading.textContent = "Deep Focus";
        //bannerText.textContent = "Keep your focus and enjoy the serenity";
    }
    else{
        audioElement.setAttribute("src",songFileName);
        audioElement.play();
        playBtn.innerHTML='<img src="images/pause-button.svg">';
       
        if (songNumber === 1) {
            banner.style.backgroundImage = "url(images/d11.jpg";
            bannerImage.setAttribute("src", "images/");
            bannerHeading.textContent = "Ambikapathy Oo...gangaiyalae Oru Vanna Paravai)";
            bannerText.textContent = "Naresh Iyer - A R Rahman";
            
        } else if (songNumber === 2) {
            banner.style.backgroundImage = "url(images/d13.jpg)";
            bannerImage.setAttribute("src", "images/");
            bannerHeading.textContent = "Unnaal Unnaal";
            bannerText.textContent = "Hariharah,Haricharan,Pooja-A R Rahman";
        }
        else if (songNumber === 3) {
            banner.style.backgroundImage = "url(images/s1.jpg)";
            bannerImage.setAttribute("src", "images/");
            bannerHeading.textContent = "Avalum Naanum";
            bannerText.textContent = "Vijay Yesudas - A R Rahman";
        }
        else if (songNumber === 4) {
            banner.style.backgroundImage = "url(images/s5.jpg)";
            bannerImage.setAttribute("src", "images/image 4.jpg");
            bannerHeading.textContent = "Nee Paartha Vizhigal";
            bannerText.textContent = "Vijay Yesudas & Shwetha Mohan - Anirudh";
        }
        else if (songNumber === 5) {
            banner.style.backgroundImage = "url(images/s6.jpg)";
            bannerImage.setAttribute("src", "images/image 5.png");
            bannerHeading.textContent = "Yedho Ondru";
            bannerText.textContent = "Harish Raghavendra,Srilekha Parthasarthy,Franko - Harris Jayaraj";
        }
        else if (songNumber === 6) {
            banner.style.backgroundImage = "url(images/s7.jpg)";
            bannerImage.setAttribute("src", "images/image 6.png");
            bannerHeading.textContent = "Nenjukkul Peidhidum";
            bannerText.textContent = "Hariharan,Devan Ekambaram & V.V. Prassanna - Harris Jayaraj";
        }
        else if (songNumber === 7) {
            banner.style.backgroundImage = "url(images/s8.jpg)";
            bannerImage.setAttribute("src", "images/image 7.png");
            bannerHeading.textContent = "Azhaipaya Azhaipaya";
            bannerText.textContent = "Karthik,Harini";
        }
        else if (songNumber === 8) {
            banner.style.backgroundImage = "url(images/s10.jpg)";
            bannerImage.setAttribute("src", "images/image 8.png");
            bannerHeading.textContent = "Oliyile Therivadhu";
            bannerText.textContent = "Karthik,Bhavatharini - Ilaiyaraaja";
        }
        else if (songNumber === 9) {
            banner.style.backgroundImage = "url(images/s11.jpg)";
            bannerImage.setAttribute("src", "images/image 9.png");
            bannerHeading.textContent = "Kadhale Kadhale";
            bannerText.textContent = "Shankar Mahadevan,Padmalatha - Hiphop Tamizha";
        }
        else if (songNumber === 10) {
            banner.style.backgroundImage = "url(images/s16.png)";
            bannerImage.setAttribute("src", "images/image 10.png");
            bannerHeading.textContent = "Oru Devathai";
            bannerText.textContent = "RoopKumar Rathod - Yuvanshankar Raja";
        }
    }
}

function playaudio(){
    var audio=document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    if(audio.paused){
        audio.play();
        playBtn.innerHTML='<img src="images/pause-button.svg">';
    }
    else{
        audio.pause();
        playBtn.innerHTML='<img src="images/play-button.svg">';
    }
}
