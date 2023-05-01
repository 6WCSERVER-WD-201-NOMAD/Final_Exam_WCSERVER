<template>
    <div class="contacts bg-home">
      <div class="contact-section">
        <div class="bg">
  <div class="contact-info">
    <h3>Contact Us</h3>
    <p class="msg">Thank you for your interest in getting in touch with us! We value your feedback and want to hear from you.<br><br>

We strive to respond to all emails within our Hours of Operation (Mon-Fri; 9am-5pm PHT)
Please use one of the following methods to contact us, you can send an email, or contact our team here:
</p>
<br>
<div class="mail">
    <p>Mailing Address:</p>
    <p>You can send us a letter at the following address:</p>
    <p>NOMAD</p>
    <p>8520 Main St.</p>
    <p>Suite 96</p>
    <p>uptownfunk, PH 1074</p>
  </div>

  </div>
  
  <div class="author-contact-info">
    <h3>Authors</h3>
    <table>
      <tr>
        <td>
          <h4>Lowell Jireh Chantengco</h4>
        </td>
        <td>
          <h4>Francilyn Estanislao</h4>
        </td>
        <td>
          <h4>Jenna Ella Pangilinan</h4>
        </td>
      </tr>
      <tr>
        <td>
          <p><i class="fa fa-envelope"></i> lpchantengco@student.hau.edu.ph<br>+63 946 693 7429</p>
        </td>
        <td>
          <p><i class="fa fa-envelope"></i> fpestanislao1@student.hau.edu.ph<br>+63 960 564 4785</p>
        </td>
        <td>
          <p><i class="fa fa-envelope"></i> jppangilinan1@student.hau.edu.ph<br>+63 923 724 7200</p>
        </td>
      </tr>
      <tr>
        <td>
          <h4>Patrick Perez</h4>
        </td>
        <td>
          <h4>Reuben Rob Sibal</h4>
        </td>
       
      </tr>
      <tr>
        <td>
          <p><i class="fa fa-envelope"></i>pmperez1@student.hau.edu.ph<br>+63 908 704 1134</p>
        </td>
        <td>
          <p><i class="fa fa-envelope"></i> rbsibal@student.hau.edu.ph<br>+63 951 420 9285</p>
        </td>
       
      </tr>
    </table>
    <div class="spacer"></div>
  </div>
</div>
</div>


      
    </div>
  </template>
  
  <script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
  </script>
  
  <style scoped>
  h3, h4{
    color: white;
  }
  h3{
    padding-top: 30px;
    font-size: 40px;
  }
  .bg{
    background-color: rgba(24, 24, 24, 0.68);
    width: 50%;
    margin-left: 25%;
  }
  .msg{
    text-align: justify;
  }
  .mail{
    text-align: left;
  }

  .spacer{
    padding-bottom: 30px;
  }
.contact-section {
  background-image: url("../assets/contacts.jpg") ;
  background-size: cover;
  padding: 50px;
  text-align: center;
  color: white;
}

.contact-info {
  max-width: 500px;
  margin: auto;
}

.contact-info h3 {
  margin-bottom: 20px;
}

.contact-info p {
  font-size: 16px;
  margin-bottom: 10px;
}

.contact-info i {
  margin-right: 10px;
  font-size: 20px;
}

.author-contact-info {
  max-width: 830px;
  margin: 50px auto 0;
  text-align: center;
}

.author-contact-info h3 {
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  margin: auto;
}

td {
  vertical-align: top;
  padding: 10px;
  border: 1px solid #ccc;
}

td:first-child {
  width: 150px;
}

td:nth-child(2),
td:nth-child(5) {
  padding-right: 20px;
  padding-left: 20px;
}

.author h4 {
  margin-bottom: 5px;
}

.author p {
  font-size: 16px;
  margin-bottom: 0;
}

.author i {
  margin-right: 5px;
}

  </style>