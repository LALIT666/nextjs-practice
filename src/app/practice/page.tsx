import ClickCounter from "./ClickCounter";
import PracticeCard from "./PracticeCard";

type PracticeTopic = {
  title: string;
  description: string;
};

const practiceTopics: PracticeTopic[] = [
  { title: "title 1", description: "description 1" },
  { title: "title 2", description: "description 2" },
  { title: "title 3", description: "description 3" },
];

export default function Practice() {
  return (
    <div>
      <h1>Next.js Practice Step 3</h1>
      <p>I am ready to practice Next.js with TypeScript.</p>

      {practiceTopics.map((topic) => (
        <PracticeCard
          key={topic.title}
          title={topic.title}
          description={topic.description}
        />
      ))}
      
      <br />
      <br />
      
      <ClickCounter/>
    </div>
  );
}