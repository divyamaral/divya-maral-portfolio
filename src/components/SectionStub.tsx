type Props = { id: string; title: string };

// Temporary placeholder. Each stub gets replaced by a real section in a later step.
export default function SectionStub({ id, title }: Props) {
  return (
    <section id={id} className="section">
      <div className="container">
        <h2>{title}</h2>
        <p className="stub">This section is coming in the next step.</p>
      </div>
    </section>
  );
}
