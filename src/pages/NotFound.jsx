import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <p>Page Not Found</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        vero illo accusantium ipsum inventore dolorum quis, ratione suscipit
        voluptate explicabo. Harum, voluptas illum rem aliquam ipsam officia
        architecto reprehenderit delectus.
      </p>
      <p>
        Go to the <Link to="/">Home</Link>.
      </p>
    </div>
  );
};

export default NotFound;
