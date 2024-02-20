import PropTypes from "prop-types";

const BgDiv = ({ bgColor, title }) => {
  return (
    <div className={`flex justify-center items-center ${bgColor} h-full`}>
      <h1 className="font-bold text-3xl">{title}</h1>
    </div>
  );
};

BgDiv.propTypes = {
  bgColor: PropTypes.string,
  title: PropTypes.string,
};

export default BgDiv;
