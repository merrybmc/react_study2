import Counter from "../components/Counter";

const CounterContainer = () => {
  return <Counter />;
};

const mapStateToProps = (state) => ({
  number: state.counter.number,
});

export default CounterContainer;
