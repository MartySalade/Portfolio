type Props = {
  title: string;
  description: string;
};

export function BentoBlock({ title, description }: Readonly<Props>) {
  return (
    <div className="flex flex-col text-left gap-2">
      <h3 className="text-white">{title}</h3>
      <p className="text-gray-500 text-xl md:text-2xl">{description}</p>
    </div>
  );
}
