import PropTypes from "prop-types";

const Phase7Icon = ({ title = "Enhancements" }) => (
  <svg
    width="90"
    height="90"
    fill="currentColor"
    viewBox="0 0 571.3 571.3"
    role="img"
    aria-label={title}
  >
    <title>{title}</title>
    <path d="M247.7,283.1l42.9,42.9L100.3,516.2l-42.9-42.9L247.7,283.1z M299.6,316.9l-42.9-42.9l73.7-73.7 l42.9,42.9L299.6,316.9z M461.3,288.3l12.8,0v-39.8h39.8v-12.8h-39.8v-39.8h-12.8v39.8h-39.8v12.8h39.8V288.3z M475.4,333.1v-12.8 h-39.8v-39.8h-12.8v39.8h-39.8v12.8h39.8v39.8h12.8v-39.8H475.4z M378.8,94.4H339V54.6h-12.8v39.8h-39.8v12.8h39.8v39.8H339v-39.8 h39.8V94.4z M294.2,132.8h-39.8V93h-12.8v39.8h-39.8v12.8h39.8v39.8h12.8v-39.8h39.8V132.8z" />
  </svg>
);
Phase7Icon.propTypes = {
  title: PropTypes.string,
};

export default Phase7Icon;
