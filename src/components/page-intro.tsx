type PageIntroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function PageIntro({
  eyebrow,
  title,
  description,
  align = "center",
}: PageIntroProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-4xl text-center" : ""}>
      {eyebrow ? <p className="section-kicker mb-4">{eyebrow}</p> : null}
      <h1 className="text-balance text-5xl font-bold leading-[0.92] text-forest sm:text-6xl lg:text-7xl">
        {title}
      </h1>
      <p
        className={`mt-7 text-lg leading-8 text-ink/70 sm:text-xl ${
          align === "center" ? "mx-auto max-w-3xl" : "max-w-2xl"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
