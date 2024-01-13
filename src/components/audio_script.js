
const hoverImage = document.getElementById('slider1');
const audioss = document.getElementById('audio');

hoverImage.addEventListener('mouseover', () => {
  audioss.play();
  audioss.volume = 1.5;
});

  hoverImage.addEventListener('mouseout', () => {
    audioss.pause();
    audioss.currentTime = 0;
  });

const hoverImage2 = document.getElementById('slider2');
const audioss2 = document.getElementById('audio2');

hoverImage2.addEventListener('mouseover', () => {
  audioss2.play();
});
  
hoverImage2.addEventListener('mouseout', () => {
    audioss2.pause();
    audioss2.currentTime = 0;
  });


const hoverImage3 = document.getElementById('slider3');
const audioss3 = document.getElementById('audio3');

hoverImage3.addEventListener('mouseover', () => {
  audioss3.play();
});

hoverImage3.addEventListener('mouseout', () => {
    audioss3.pause();
    audioss3.currentTime = 0;
  });


const hoverImage4 = document.getElementById('slider4');
const audioss4 = document.getElementById('audio4');

hoverImage4.addEventListener('mouseover', () => {
  audioss4.play();
});

hoverImage4.addEventListener('mouseout', () => {
    audioss4.pause();
    audioss4.currentTime = 0;
  });


const hoverImage5 = document.getElementById('slider5');
const audioss5 = document.getElementById('audio5');

hoverImage5.addEventListener('mouseover', () => {
  audioss5.play();
});

hoverImage5.addEventListener('mouseout', () => {
    audioss5.pause();
    audioss5.currentTime = 0;
  });

const hoverImage6 = document.getElementById('slider6');
const audioss6 = document.getElementById('audio6');

hoverImage6.addEventListener('mouseover', () => {
  audioss6.play();
});

hoverImage6.addEventListener('mouseout', () => {
  audioss6.pause();
  audioss6.currentTime = 0;
});