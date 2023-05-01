<template id="top">
    <div class="services bg-home">
      <section id="about" class="about container">

<h1 class="heading">{{ msg }}</h1>

<!--1st Place-->
<div class="row align-items-center">

  <p>Simply browse our website to find the destination you want to visit and select the tour guide service for that location. 
    Choose some of their services through our website, and they will be ready to meet you at your desired location and guide you 
    through the best attractions and activities of the area. With our professional tour guide service, you can make the most of your 
    travel experience and discover the hidden gems of your destination.</p>

  <div class="col-md-6 image">
    <img src="../assets/boracay1.jpg" width="90%" alt="">
  </div>

  <div class="col-md-6 info">
    <h2>In Boracay: Philippines</h2>
    <div class="position">
    <p class="msg">A small island in the central Philippines, Boracay is famous for its powdery white sand beaches and clear blue waters. 
      It's a popular destination for swimming, sunbathing, and water sports like parasailing and windsurfing. 
      Visitors can also enjoy shopping, dining, and nightlife in the island's main town.</p>
      <a href="#top"><button type="button" class="btn btn-outline-light"><router-link to="/appointment" class="nav-link">Make Appointment</router-link></button></a>
    
  </div>
  </div>

</div>
<!-- 1st ends -->

<div class="spacer"></div>

<!--2nd Place-->
<div class="row align-items-center">

  <div class="col-md-6 info">
  <h2>In Santorini: Greece</h2>
  <div class="position">
  <p class="msg">This stunning island in the Aegean Sea is known for its white-washed buildings with 
    blue-domed roofs, crystal-clear waters, and breathtaking sunsets. Visitors can explore ancient ruins, 
    enjoy fresh seafood by the water, and relax on the island's black sand beaches. Santorini's unique 
    beauty and romantic atmosphere make it a popular destination for honeymooners and couples.</p>
    <a href="#top"><button type="button" class="btn btn-outline-light"><router-link to="/appointment" class="nav-link">Make Appointment</router-link></button></a>
  
</div>
</div>

<div class="col-md-6 image1">
  <img src="../assets/greece.jpg" width="90%" alt="">
</div>
</div>
<!-- 2nd ends -->

<div class="spacer"></div>

<!--3rd Place-->
<div class="row align-items-center">

<div class="col-md-6 image">
  <img src="../assets/paris.jpg" width="90%" alt="">
</div>

<div class="col-md-6 info">
  <h2>In Paris: France</h2>
  <div class="position">
  <p class="msg">Known as the "City of Love," Paris is a must-visit destination for art, history, 
    and culture lovers. From the iconic Eiffel Tower to the world-famous Louvre Museum, there is no 
    shortage of sights to see and experiences to have. Enjoy a leisurely stroll along the Seine River, 
    sample delicious French cuisine in quaint bistros, and take in the city's charming ambiance.</p>
    <a href="#top"><button type="button" class="btn btn-outline-light"><router-link to="/appointment" class="nav-link">Make Appointment</router-link></button></a>
  
</div>
</div>

</div>
<!-- 3rd ends -->

<div class="spacer"></div>

<!--4th Place-->
<div class="row align-items-center">

<div class="col-md-6 info">
<h2>In Tokyo: Japan</h2>
<div class="position">
<p class="msg">Japan's bustling capital city offers a fascinating blend of ancient traditions and 
  modern technology. Visitors can explore historic temples and gardens, experience cutting-edge technology, 
  and indulge in delicious local cuisine. Tokyo's vibrant nightlife and colorful street fashion also make 
  it a top destination for younger travelers.</p>
  <a href="#top"><button type="button" class="btn btn-outline-light"><router-link to="/appointment" class="nav-link">Make Appointment</router-link></button></a>

</div>
</div>

<div class="col-md-6 image1">
<img src="../assets/japan.jpg" width="90%" alt="">
</div>
</div>
<!-- 4th ends -->

<div class="spacer"></div>

<!--5th Place-->
<div class="row align-items-center">

<div class="col-md-6 image">
  <img src="../assets/nyc.jpg" width="90%" alt="">
</div>

<div class="col-md-6 info">
  <h2>In New York City: USA</h2>
  <div class="position">
  <p class="msg">The city that never sleeps is an iconic destination for travelers from around the world. 
    From the Statue of Liberty to the Empire State Building, there are countless landmarks to see and 
    explore. Visitors can shop in famous stores like Macy's and Bloomingdale's, see a Broadway show, or 
    stroll through Central Park. With its diverse neighborhoods, vibrant cultural scene, and endless 
    activities, New York City truly has something for everyone.</p>
    <a href="#top"><button type="button" class="btn btn-outline-light"><router-link to="/appointment" class="nav-link">Make Appointment</router-link></button></a>
  
</div>
</div>

</div>
<!-- 5th ends -->

<div class="spacer"></div>

<a href="#top"><button type="button" class="btn btn-primary">BACK TO TOP</button></a>

<!-- <a href="#top">BACK TO TOP</a> -->

</section>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'DESTINATIONS'
      }
    }
  }

  
  </script>
  
  <style scoped>

  .bg-home{
    background-color: #000000;
  }

  p{
    color: white;
    text-align: justify;
  }
  .heading{
    padding-top: 4%;
    color: white;
    font-size: 70px;
  }

  .about{
  min-height: 100vh;
  padding-bottom: 3rem;
}

.about .image{
  padding:2rem;
}

.about .image img{
  height:45rem;
  object-fit: cover;
  box-shadow: 2.5rem 2.5rem 0 0.5rem #aa2424;
}

.about .image1 img{
  height:45rem;
  object-fit: cover;
  box-shadow: -2.5rem 2.5rem 0 0.5rem #aa2424;
}

.about .info{
  padding:2rem;
  margin-top: 3rem;
}

.about .info h2{
  color:#ffffff;
  font-size: 3rem;
}

.about .info h2:hover{
  transition: 0.4s;
  color: #aa2424;
}

.about .info p{
  font-size: 1.4rem;
  color:#ffffff;
  margin:2rem 0;
}

.about .info .icons a{
  font-size: 2rem;
  height: 4rem;
  width:4rem;
  line-height: 4rem;
  color:#fff;
  border-radius: .5rem;
  margin-right: 1rem;
  text-decoration: none;
}
.position p{
  text-align: justify;
}

.spacer{
  padding-top: 10%;
}
  </style>