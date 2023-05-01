<template>
    <div class = "appointment bg-home">
        <h1 class="title">APPOINTMENT</h1>
        <div class="position">
        <div class="formbold-main-wrapper">
  <div class="formbold-form-wrapper">
    <form  @submit.prevent="handleSubmitForm" >
      <div class="formbold-mb-5">
        <label for="name" class="formbold-form-label"> Last Name </label>
        <input
          type="text"
          placeholder="Last Name"
          class="formbold-form-input"
          v-model="client.lastname" required
        />
      </div>
      <div class="formbold-mb-5">
        <label for="name" class="formbold-form-label"> First Name </label>
        <input
          type="text"
          placeholder="First Name"
          class="formbold-form-input"
          v-model="client.firstname" required
        />
      </div>
      <div class="formbold-mb-5">
        <label for="phone" class="formbold-form-label"> Phone Number </label>
        <input
          type="text"
          placeholder="Enter your phone number"
          class="formbold-form-input"
          v-model="client.phone" required
        />
      </div>
      <div class="formbold-mb-5">
        <label for="email" class="formbold-form-label"> Email Address </label>
        <input
          type="email"
          placeholder="Enter your email"
          class="formbold-form-input"
          v-model="client.email" required
        />
      </div>
      <div class="formbold-mb-5">
        <label for="place" class="formbold-form-label"> Destination </label>
      <select type="place"
          class="formbold-form-input"
          v-model="client.place" required>
          <option value="">Select Your Destination</option>
        <option value="Boracay, Philippines">Boracay, Philippines</option>
        <option value="Santorini, Greece">Santorini, Greece</option>
        <option value="Paris, France">Paris, France</option>
        <option value="Tokyo, Japan">Tokyo, Japan</option>
        <option value="New York City, USA">New York City, USA</option>
      </select>
      </div>
      <div class="flex flex-wrap formbold--mx-3">
        <div class="w-full sm:w-half formbold-px-3">
          <div class="formbold-mb-5 w-full">
            <label for="date" class="formbold-form-label"> Date </label>
            <input
              type="date"
              class="formbold-form-input"
              v-model="client.date" required
            />
          </div>
        </div>
        <div class="w-full sm:w-half formbold-px-3">
          <div class="formbold-mb-5">
            <label for="time" class="formbold-form-label"> Time </label>
            <input
              type="time"
              name="time"
              id="time"
              class="formbold-form-input"
              v-model="client.time" required
            />
          </div>
        </div>
      </div>

      <div>
        <button class="formbold-btn">Book Appointment</button>
      </div>
    </form>
  </div>
</div>
</div>
    </div>
  </template>
  
  <script>
import axios from "axios";
  export default {
     name: 'appointment',
     data() {
  return {
    client: {
      lastname: '',
      firstname: '',
      phonenum: '',
      email: '',
      place: '',
      date: '',
      time: ''
    },
  };
},
      methods: {
          handleSubmitForm() {
              let apiURL = 'http://localhost:4000/api/create-client';
              
              axios.post(apiURL, this.client).then(() => {
                this.$router.push('/list')
                this.client = {
                  lastname: '',
                  firstname: '',
                  phonenum: '',
                  email: '',
                  place: '',
                  date: '',
                  time: ''
                }
              }).catch(error => {
                  console.log(error)
              });
          }
      }
  }
  </script>
  
  <style scoped>
.bg-home {
  height: 100vh;
  background-image: url("../assets/appointment_bg.jpg");
  background-position: center;
  background-size: cover;
  overflow: auto;
}

.position {
    padding-left: 150px;
    float: left;
}
.title{
    margin-top: 3%;
    font-size: 80px;
    text-align: left;
    padding-left: 148px;
    /* font-family: "DINPRO"; */
    color: white;
}

/* CSS FORM */
.formbold-mb-5 {
    margin-bottom: 20px;
  }

  .formbold-main-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 48px;
  }

  .formbold-form-wrapper {
    margin: 0 auto;
    max-width: 550px;
    width: 100%;
    background: rgb(46, 46, 46);
    border-radius: 2%;
    padding: 60px;
  }
  .formbold-form-label {
    display: block;
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
    margin-bottom: 12px;
  }
  .formbold-form-label-2 {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 20px;
  }

  .formbold-form-input {
    width: 100%;
    padding: 12px 24px;
    border-radius: 6px;
    border: 1px solid #e0e0e0;
    background: white;
    font-weight: 500;
    font-size: 16px;
    color: #6b7280;
    outline: none;
    resize: none;
  }
  .formbold-form-input:focus {
    border-color: #6a64f1;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
  }

  .formbold-btn {
    text-align: center;
    font-size: 16px;
    border-radius: 6px;
    padding: 14px 32px;
    border: none;
    font-weight: 600;
    background-color: #aa2424;
    color: white;
    width: 100%;
    cursor: pointer;
  }
  .formbold-btn:hover {
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
  }

  .formbold--mx-3 {
    margin-left: -12px;
    margin-right: -12px;
  }
  .formbold-px-3 {
    padding-left: 12px;
    padding-right: 12px;
  }
  .flex {
    display: flex;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .w-full {
    width: 100%;
  }
  @media (min-width: 540px) {
    .sm\:w-half {
      width: 50%;
    }
  }
  </style>