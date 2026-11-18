import { useState } from "react";

export function Quantity({ name, price }: { name: string; price: number }) {
  const [quantity, setQuantity] = useState(1);
  const total = price * quantity;
  return (
    <section aria-label={name}>
      <h2>{name}</h2>
      <p>Quantity: {quantity}</p>
      <p>Total: {total}</p>
      <button type="button" onClick={() => setQuantity(q => q + 1)}>
        Add one
      </button>
    </section>
  );
}

function NameInput({ value, onValueChange }: {
  value: string; onValueChange: (next: string) => void;
}) {
  return (
    <>
      <label htmlFor="learner-name">Name</label>
      <input id="learner-name" name="learnerName" autoComplete="name"
        value={value} onChange={event => onValueChange(event.target.value)} />
    </>
  );
}

export function SharedName() {
  const [name, setName] = useState("");
  return (
    <>
      <NameInput value={name} onValueChange={setName} />
      <p aria-label="Greeting">Hello {name}</p>
    </>
  );
}
