<template>
    <div class="wrapper">
        <div class="main-container">
        <div class="container-one">
            <div class="profile">
                <img src="../assets/me.jpg" alt="">
                <h3>Arnel Carcela</h3>
                <p>php Developer</p>
            </div>
            <div class="social-links">

                <div class="link">
                    
                    <a href="">
                        <img src="../assets/fn.png" alt="">
                        <h2>Facebook</h2></a>
                </div>
                <div class="link">
                    
                    <a href="">
                        <img src="../assets/insta.png" alt="">
                        <h2>Instagram</h2></a>
                </div>
                <div class="link">
                    
                    <a href="">
                        <img src="../assets/pngwing.com.png" alt="">
                        <h2>Github</h2></a>
                </div>
            </div>
            <div class="about-me">
                <h1>About Me</h1>
                <p>I'm Arnel L. Carcela, Studied in Cordova Public College, I dont have specific skill and not knowledgebale to anything but I'm Thriving to make changes to be a better me.</p>
            </div>
            <div class="tech-section">
                <h1>Technologies Studied:</h1>
                <div class="logos">
                    <img src="../assets/php.png" alt="">
                    <img src="../assets/js.png" alt="">
                    <img src="../assets/html.png" alt="">
                </div>
            </div>
        </div>
        <div class="container-two">
          <h2>My Works</h2>
            <div class="button-container">
             
                <div class="projects-button">
                    Todo App
                    <TodoItem></TodoItem>
                    
                </div>
                <div class="tictactoe">
                  TicTacToe
                  <p>Please click twice to change player</p>
                    <TicTac></TicTac>
                </div>
            </div>
        </div>
    </div>
    </div>
  
</template>
<script>
import TicTac from './TicTac.vue';
import TodoItem from './TodoItem.vue';
export default {
  name: 'App',
  components: {
    TodoItem,
    TicTac
  }
}
</script>
<style scoped>
 .wrapper {
      display: flex;
      justify-content: center;
    }

    img {
      height: 40px;
    }

    .main-container {
      display: flex;
      flex-direction: column;
      background-color: #cacaca;
      border-radius: 25px;
      width: 1000%;
      padding: 20px;
    }

    .container-one {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 10px;
      background-color: bisque;
      margin: 15px;
      border-radius: 25px;
    }

    .profile {
      margin-bottom: 20px;
    }
    .profile img{
      height: 100px;
      border-radius: 25px;
    }
    .social-links {
      display: flex;
      justify-content: space-around;
      width: 100%;
    }

    .link a{
      text-decoration: none;
      color: inherit;
      text-align: center;
      
    }
.link h2{
    font-size: 15px;
}
    .container-two {
      background-color: #ffffff;
      padding: 20px;
     
      border-radius: 25px;
      margin: 15px;
    }

    .about-me {
      text-align: center;
      margin-bottom: 20px;
    }

    .tech-section {
      text-align: center;
      margin-bottom: 20px;
    }

    .logos img {
      margin: 0 10px;
    }

    .button-container {
      text-align: center;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    .projects-button{
      background-color: #4CAF50;
      color: white;
      padding: 10px 20px;
      text-decoration: none;
      display: inline-block;
      border-radius: 5px;
      margin: 20px;
    }
    .tictactoe{
      background-color: #4CAF50;
      color: white;
      padding: 10px 20px;
      text-decoration: none;
      display: inline-block;
      border-radius: 5px;
      margin: 20px;
    }
    @media screen and (max-width: 600px) {
  .button-container {
    flex-direction: column;
  }

  .projects-button, .tictactoe {
    margin: 10px; /* Adjust margin for smaller screens */
  }
}

    @media (min-width: 768px) {
      .main-container {
        flex-direction: row;
      }
      .container-one {
        flex: 1;
      }
      .container-two {
        flex: 2;
      }
    }
/* img {
    height: 50px;
}

.main-container {
    display: flex;
    flex-direction: row;
    background-color: #cacaca;
    border-radius: 25px;

}

.container-one {
    background-color: #ffbebe;
    padding: 2.5%;
    width: 30%;
    border-radius: 25px;
}

.profile img {
    height: 5rem;
    border-radius: 50%;
}
.link a{
    text-decoration: none;
    color: #2c3e50;
    font-size: 10px;
}
.link img{
    height: 2rem;
}
.container-two {
    background-color: aqua;
    margin: 2.5%;
    width: 70%;
    border-radius: 20px;
}
.about-me{
    text-align: left;
}
.logos img{
    height: 2.5rem;
    padding: 5px;
}
.projects-button{
    background-color: aquamarine;
    margin-left: 100%;
    margin-right: 100%;
    padding: 5px;
}
.projects-button a{
    text-decoration: none;
    color: #2c3e50;
} */
</style>