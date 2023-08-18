import Background from "../components/Background";
import Section from "../components/Section";
import Section2 from "../components/Section02";
import Section3 from "../components/Section03";

export default function Page() {
  return (
    <div>
      <div id="container">
        <Section />
        <Section2 />
        <Section3 />
      </div>
      <Background />
    </div>
  );
}
