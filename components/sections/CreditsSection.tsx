interface CreditsSectionProps {
  ackHeading: string;
  ack1: string;
  ack2: string;
  ack3: string;
  ack4: string;
  creditsHeading: string;
  person1name: string;
  person1bio: string;
  person2name: string;
  person2bio: string;
  person2email: string;
  webHeading: string;
  webDesign: string;
  webDev: string;
  supportHeading: string;
  supportText: string;
  supportEmail: string;
  copyright: string;
}

export function CreditsSection({
  ackHeading,
  ack1,
  ack2,
  ack3,
  ack4,
  creditsHeading,
  person1name,
  person1bio,
  person2name,
  person2bio,
  person2email,
  webHeading,
  webDesign,
  webDev,
  supportHeading,
  supportText,
  supportEmail,
  copyright,
}: CreditsSectionProps) {
  return (
    <section id="about" className="w-full bg-brown-dark px-4 py-12 md:px-16 md:py-24">
      <div className="mx-auto flex w-full max-w-[1312px] flex-col gap-12 md:gap-16">

        {/* Acknowledgements */}
        <div className="flex flex-col gap-6 border-cream/20">
          <p className="text-base font-bold uppercase tracking-[1.2px] text-cream">
            {ackHeading}
          </p>
          <div className="flex flex-col gap-5">
            <p className="text-base font-normal leading-relaxed text-cream" style={{ whiteSpace: "pre-line" }}>{ack1}</p>
            <p className="text-base font-normal leading-relaxed text-cream" style={{ whiteSpace: "pre-line" }}>{ack2}</p>
            <p className="text-base font-normal leading-relaxed text-cream" style={{ whiteSpace: "pre-line" }}>{ack3}</p>
            <p className="text-base font-normal leading-relaxed text-cream" style={{ whiteSpace: "pre-line" }}>{ack4}</p>
          </div>
        </div>

        {/* Author bios */}
        <div className="flex flex-col gap-8 border-t border-cream/20 pt-10 md:pt-12">
          <p className="text-base font-bold uppercase tracking-[1.2px] text-cream">
            {creditsHeading}
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col gap-3">
              <p className="text-base font-bold text-cream">{person1name}</p>
              <p className="text-base font-normal leading-relaxed text-cream" style={{ whiteSpace: "pre-line" }}>{person1bio}</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-base font-bold text-cream">{person2name}</p>
              <p className="text-base font-normal leading-relaxed text-cream" style={{ whiteSpace: "pre-line" }}>{person2bio}</p>
              <a
                href={`mailto:${person2email}`}
                className="text-base font-normal text-cream/70 underline-offset-2 hover:underline"
              >
                {person2email}
              </a>
            </div>
          </div>
        </div>

        {/* Website / Support / Copyright */}
        <div className="grid grid-cols-1 gap-8 border-t border-cream/20 pt-10 md:grid-cols-3 md:gap-16 md:pt-12">
          <div className="flex flex-col gap-3">
            <p className="text-base font-bold uppercase tracking-[1.2px] text-cream">
              {webHeading}
            </p>
            <p className="text-base font-normal leading-relaxed text-cream" style={{ whiteSpace: "pre-line" }}>{webDesign}</p>
            <p className="text-base font-normal leading-relaxed text-cream" style={{ whiteSpace: "pre-line" }}>{webDev}</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-base font-bold uppercase tracking-[1.2px] text-cream">
              {supportHeading}
            </p>
            <p className="text-base font-normal leading-relaxed text-cream" style={{ whiteSpace: "pre-line" }}>{supportText}</p>
            <a
              href={`mailto:${supportEmail}`}
              className="text-base font-normal text-cream underline-offset-2 hover:underline"
            >
              {supportEmail}
            </a>
          </div>

          <div className="flex flex-col justify-end">
            <p className="text-sm font-normal leading-relaxed text-cream/60">{copyright}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
