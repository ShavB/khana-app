export default function DeliveryFee({ compData }) {
  return (
    <div>
      <p>Under {} delivery</p>
      <input type="range" min={compData.options[0].value} />
    </div>
  );
}
