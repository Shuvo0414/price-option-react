import PropTypes from "prop-types";

const Link = ({ route }) => {
  return (
    <div>
      <li
        className=" mr-10 px-7 hover:rounded-md hover:bg-black hover:text-white"
        key={route.id}
      >
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

Link.propTypes = {
  route: PropTypes.object.isRequired,
};

export default Link;
