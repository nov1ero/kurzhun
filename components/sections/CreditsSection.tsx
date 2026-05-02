interface CreditsSectionProps {
  heading: string;
  desc: string;
  support: string;
  email: string;
  credits: string;
}

const CREDITS_ROWS = [
  { label: "REGION", value: "NARYN, KYRGYZSTAN" },
  { label: "METHOD", value: "ETHNOGRAPHIC FIELDWORK" },
  { label: "PERIOD", value: "AUGUST — OCTOBER 2025" },
  { label: "FORMAT", value: "PHOTOGRAPHY + INTERVIEW" },
];

export function CreditsSection({ heading, desc, support, email, credits }: CreditsSectionProps) {
  return (
    <section
      id="about"
      className="w-full bg-brown-dark px-16 py-24"
    >
      <div className="flex w-full max-w-[1312px] flex-col gap-8">
        {/* Heading */}
        <h2 className="text-[32px] font-bold leading-10 text-cream">{heading}</h2>

        {/* Body */}
        <div className="relative flex gap-0">
          {/* Left: description */}
          <div className="flex w-1/2 flex-col gap-6 pr-8">
            <p className="text-base font-normal leading-[1.3] text-cream">{desc}</p>
            <div className="flex flex-col gap-2">
              <p className="text-base font-normal uppercase tracking-[1.2px] text-cream">
                {support}
              </p>
              <a
                href={`mailto:${email}`}
                className="text-base font-normal text-cream underline-offset-2 hover:underline"
              >
                {email}
              </a>
            </div>
          </div>

          {/* Right: credits table */}
          <div className="w-1/2 border border-cream p-8">
            <div className="mb-4 border-b border-cream pb-4">
              <p className="text-base font-normal uppercase text-cream">{credits}</p>
            </div>
            <div className="flex flex-col">
              {CREDITS_ROWS.map((row) => (
                <div
                  key={row.label}
                  className="-mt-px flex border-b border-cream py-4"
                >
                  <span className="w-28 text-base font-bold uppercase text-cream opacity-60">
                    {row.label}
                  </span>
                  <span className="flex-1 text-right text-base font-normal uppercase text-cream">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
