import React from 'react'; 
import  vg  from  "../assets/2.webp";
import{
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
  }from "react-icons/ai";
 
const Home = () => {
  return  (
    <>
    <div  className='home'  id="home">
    <main>
        <h1>TechStar</h1>
        <p>Solution to all your problems</p>
    </main>
  </div>
  <div className="home2">
    <img src={vg} alt="Graphics"/>
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem explicabo fugiat, vero in totam qui praesentium eos laborum ipsa neque minima consequatur alias!
      </p>
    </div>
  </div>
  <div className="home3"  id="about">
    <div>
      <h1> 
      WHO WE ARE?
      </h1>
         
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, provident sed. Quae enim vitae illum. Libero porro, nemo iusto aperiam accusamus numquam repudiandae officiis, architecto placeat unde doloremque incidunt dolorum! At consequuntur eius officia!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vel, reiciendis voluptatibus nesciunt eum, qui obcaecati nihil cum quasi doloribus magnam esse, est exercitationem labore? Sequi inventore consequatur fugit possimus ab beatae excepturi magnam.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quis, odio mollitia sapiente quo vitae officia aspernatur natus laborum, magni provident expedita molestiae reprehenderit deleniti.

        </p>
     
    </div>
  </div>
  <div className="home4"  id="brands">
    <div>
      <h1>
        Brands 
      </h1>
      <article>
        <div  style={{
          animationDelay:"0.3s",
        }}>
          <AiFillGoogleCircle/>
          <p>Google</p>
          </div>

          <div  style={{
          animationDelay:"0.5s",
        }}>
          <AiFillAmazonCircle/>
          <p>Amazon</p>
          </div>

          <div  style={{
          animationDelay:"0.7s",
        }}>
          <AiFillYoutube/>
          <p>Youtube</p>
          </div>

          <div  style={{
          animationDelay:"0.1s"
        }}>
          <AiFillInstagram/>
          <p>Instagram</p>
          </div>
      </article>
    </div>
  </div>
    
    </>
  );
  
};

export default Home;