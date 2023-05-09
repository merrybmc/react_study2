export default function Counter({ number, onIncrease, onDecrease }) {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onclick={onIncrease}></button>
        <button onclick={onDecrease}></button>
      </div>
    </div>
  );
}
