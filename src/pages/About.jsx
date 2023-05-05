import { useState } from "react";
import { Navigate } from "react-router-dom";

const About = () => {
  const [user, setUser] = useState("smith");
  if (!user) {
    // IT'S WILL REDIRECT HOME PAGE
    // return <Navigate to="/" />;
    // IF WE BACK THAT NOT REDIRECT HOME TO ABOUT
    return <Navigate to="/" replace={true} />;
  }
  return (
    <div className="about">
      <h2>Welcome About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        quasi repellendus culpa exercitationem, unde magni cupiditate qui earum,
        ducimus minima quia possimus molestiae, numquam fugiat rem optio laborum
        temporibus maiores?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque minus,
        quis consequuntur, illum ducimus earum tempore, similique saepe adipisci
        officiis excepturi facere a facilis eveniet culpa repellendus sed neque
        in!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque facilis
        labore rerum enim, voluptas voluptatem quam expedita natus minima
        quaerat eligendi ab harum, sapiente aliquam molestias maxime nulla quos
        odit?
      </p>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
};

export default About;
