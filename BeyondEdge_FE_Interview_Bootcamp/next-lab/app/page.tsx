import Link from "next/link";

export default function Home() {
  return (
    <section className="overview">
      <p className="eyebrow">BeyondEdge / N01</p>
      <h1>
        One catalog.
        <br />
        Two places to run.
      </h1>
      <p className="intro">
        Follow the first render from server data to an interactive catalog. Then
        reload over HTTP and inspect the response.
      </p>
      <Link className="primary" href="/catalog">
        Open catalog <span aria-hidden="true">↗</span>
      </Link>
      <ol className="steps">
        <li>
          <strong>01 / Server</strong>
          <span>The page reads three sample products.</span>
        </li>
        <li>
          <strong>02 / Client</strong>
          <span>Search and selection use local state.</span>
        </li>
        <li>
          <strong>03 / HTTP</strong>
          <span>Reload requests a route handler.</span>
        </li>
      </ol>
    </section>
  );
}
