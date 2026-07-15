type Props = {
  title: string;
  description: string;
};

export function BentoBlock({ title, description }: Readonly<Props>) {
  return (
    <div className="flex flex-col gap-2 text-left">
      <h3 className="text-cream">{title}</h3>
      <p className="font-mono text-sm uppercase tracking-wider text-mute md:text-base">
        {description}
      </p>
    </div>
  );
}
