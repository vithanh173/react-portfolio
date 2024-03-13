type Props = {
  time: string;
  title: string;
  text: string;
};

function AboutItem({ time, title, text }: Props) {
  return (
    <div className="bg-slate-300 hover:bg-slate-200 p-5 hover:-translate-y-2 transition rounded-lg">
      <h1 className="font-bold text-2xl text-gray-600 mb-1">{time}</h1>
      <h2 className="text-lg text-gray-600">{title}</h2>
      <p className="text-base text-gray-600">{text}</p>
    </div>
  );
}

export default AboutItem;
