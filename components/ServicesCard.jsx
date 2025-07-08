export default function ServiceCard({ title, content }) {
  return (
    <div className="bg-secondary rounded-3xl shadow-xl p-6 border-t-8 border-primary hover:scale-[1.02] transition duration-500">
      <h3 className="text-2xl font-semibold text-primary mb-4">{title}</h3>
      <ul className="list-disc pr-5 text-sm leading-loose text-[color:rgb(44,22,62)/0.7] dark:text-[color:rgb(173,208,204)/0.7]">
        {content.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
