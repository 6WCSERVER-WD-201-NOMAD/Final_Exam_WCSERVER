<template>
    <div class="about bg-home">
      <div class="about-section">
  <div class="inner-container">
    <h1>{{ msg }}</h1>
    <p class="text">
      Welcome to our travel website “Nomad”! We are passionate about travelling the world and sharing our 
      own experiences with each and every fellow traveler around the globe. The word “nomad” comes from 
      the Greek word “nomas”, which means “roaming” or “wandering”. Our website is originated to provide 
      you the comprehensive and updated information on travel destinations, descriptions, tips, and 
      recommendations about on how to make the most of your travel experiences unforgettable and enjoyable! 
      Our goal as a team is to make you embark on a journey that will leave your life full of memories that 
      will last a lifetime.
    </p>
    
  </div>
</div>
<section class = "reviews" id = "reviews">
    <h1 class = "heading">{{ msg1 }}</h1>
    <div class = "box-container container">

    <div class = "box">
        <img src = "../assets/jai.png" alt = "">
        <h3>Lowell Jireh Chantengco</h3>
        <p>A musician who is dedicated on mastering his craft and performing music using various 
          instruments, including his voice. He is a solo artist who can work and be part of a group 
          and perform a variety of genres. He is also part of the so-called “APL.DE.AP” band in HAU. 
          Through his participation in music, he learns valuable life skills, such as creativity, 
          teamwork, and self-expression. A second-year college student at Holy Angel University 
          taking a Bachelor of Science in Information Technology specialized in Web Development.</p>
        
    </div>
    <div class = "box">
        <img src = "../assets/franci.jpg" alt = "">
        <h3>Francilyn Bernadette Estanislao</h3>
        <p>A second-year college student who is taking a Bachelor of Science in Information Technology 
          at Holy Angel University. An individual who excels academically while also juggling multiple 
          responsibilities and commitments. She often participates in extracurricular activities, 
          volunteer work, or part-time jobs while maintaining a good grade point average. A student who 
          always involved in leadership roles in school organizations or clubs, demonstrating balance 
          multiple responsibilities and excel in various areas.</p>
        
        
    </div>
    <div class = "box">
        <img src = "../assets/jenna.jpg" alt = "">
        <h3>Jenna Ella<br>Pangilinan</h3>
        <p>A second-year college student at Holy Angel University taking Bachelor of Science in Information
           Technology major in Web Development. An honor student who has demonstrated exceptional 
           academic achievement and excellence throughout her academic career. One of the most hardworking 
           student that is dedicated and committed on her academic pursuits. A student who is always being 
           recognized by her school or academic institutions for her outstanding performance and shining 
           example of academic excellence.</p>
      
    </div>
    <div class = "box">
        <img src = "../assets/pat.png" alt = "">
        <h3>Patrick Perez</h3>
        <p>An individual who participates in martial arts and combat sports while also maintaining his 
          academic studies. An athlete who learns valuable life skills throughout his training, such as 
          discipline, focus, and perseverance to take the path of manhood. A stoic individual who 
          practices the philosophy of stoicism, which emphasizes self-control and acceptance of the 
          present time. A second-year college student at Holy Angel University taking the BS in 
          Information Technology specialized in Web Development.</p>
      
    </div>
    <div class = "box">
        <img src = "../assets/rob.jpg" alt = "">
        <h3>Reuben Rob Sibal</h3>
        <p>A Cyclist and runner who always engage in physical activities especially races to improve 
          fitness, health, and well-being. He is a well-rounded athlete and individual who can demonstrate 
          a strong work ethic and commitment to his team. This guy is dedicated and enjoys the challenge 
          and sense of accomplishment that comes with cycling and running. A second-year college student 
          who is taking a Bachelor of Science in Information Technology specialized in Web Development 
          in Holy Angel University.</p>
      
    </div>
    <div class = "box position">
      <br><br><br>
        <h3>THE TEAM</h3>
        <p>We are passionate about creating exceptional travel experiences for our clients. Our team of 
          dedicated professionals brings together years of industry experience, creative flair, and 
          technical expertise to design and deliver unique travel solutions tailored to your needs. 
          We believe that travel is not just a means of getting from point A to point B, but an 
          opportunity to explore new horizons, learn about different cultures, and create memories 
          that last a lifetime. With our extensive network of partners, personalized service, and 
          attention to detail, we strive to exceed your expectations and make your travel dreams a 
          reality. Thank you for choosing NOMAD, and we look forward to taking you on a 
          journey of a lifetime."</p>
      
    </div>
    </div>
</section>
<div class="spacer"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'About Website',
        msg1: 'ABOUT THE TEAM'
      }
    }
  }
  </script>
  

  <style scoped>
  .bg-home{
    background-color: #000000;
  }


.about-section{
    background: url(../assets/cam.jpg) no-repeat left;
    background-size: 55%;
    overflow: hidden;
    padding: 100px 0;
}

.inner-container{
    width: 55%;
    float: right;
    background-color: #fdfdfd;
    padding: 80px;
}

.inner-container h1{
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: 900;
}

.text{
    font-size: 15px;
    color: #000000;
    line-height: 30px;
    text-align: justify;
    margin-bottom: 40px;
}


.heading{
  color: white;
  font-size: 40px;
  padding-top: 50px;
  padding-bottom: 20px;
}

.reviews .box-container{
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
   gap:2rem;
}

.reviews .box-container .box{
   background-color: var(--white);
   text-align: center;
   border-radius: .5rem;
   padding:2rem;
}

.reviews .box-container .box img{
   height: 15rem;
   width: 15rem;
   border-radius: 50%;
}

.reviews .box-container .box p{
  text-align: justify;
  color: black;
   padding:2rem 0;
   line-height: 2;
   font-size: 15px;
   margin-bottom: 0;
}

.reviews .box-container .box h3{
  padding-top: 28px;
  color: black;
   font-size: 2rem;
}
.spacer{
  padding-top: 5%;
}
  
  </style>