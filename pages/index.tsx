import Background from "../components/Background";
import Section from "../components/Section";

export default function Page() {
  return (
    <div>
      <div className="container">
        <Section />
        <Section />
        <Section />
      </div>
      <Background />
    </div>
  );
}
