import fruit from "../dummy-data";

export default function Home() {
  return (
    <>
      <h1>HelloWord</h1>
      <ul>
        {fruit.map(f => (<li key={f}>{f}</li>))}
      </ul>
    </>
  )
}
