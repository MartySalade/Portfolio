type Props = {
  title: string;
  description: string;
};

export function BentoBlock({ title, description }: Readonly<Props>) {
  return (
    <div className="flex flex-col text-left gap-2">
      <h4 className="font-bold text-[56px] leading-[56px] text-white">
        {title}
      </h4>
      <p className="text-gray-500 text-2xl">{description}</p>
    </div>
  );
}
