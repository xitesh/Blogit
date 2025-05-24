import React from "react";

const Post = () => {
  return (
    <div>
      <div className="post">
        <div className="image">
          <img
            src="https://techcrunch.com/wp-content/uploads/2023/01/IMG_2474.jpg?resize=1200,900"
            alt=""
          />
        </div>

        <div className="texts">
          <h2>EcoFlow Glacier: Portable fridge with ice maker</h2>
          <p className="info">
            <a className="author">Nitesh</a>
            <time>2023-01-06 16:45</time>
          </p>
          <p className="summary">
            The end of days just won’t be the same if you can’t enjoy it with an
            ice-cold margarita, so EcoFlow has you covered on that front as
            well. The Glacier has a high-capacity ice maker that the company
            says will produce 18 ice cubes four times per hour. The fridge can
            run for 24 hours on a single charge and has an option for direct
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
