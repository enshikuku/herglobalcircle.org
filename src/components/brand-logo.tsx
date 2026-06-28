import Image from "next/image";

type BrandLogoSize = "header" | "hero" | "footer";

const sizeClasses: Record<BrandLogoSize, string> = {
  header: "h-20 w-20 sm:h-[5rem] sm:w-[5rem] lg:h-[6rem] lg:w-[6rem]",
  hero: "h-28 w-28 sm:h-[7rem] sm:w-[7rem] lg:h-[9rem] lg:w-[9rem]",
  footer: "h-[6rem] w-[6rem] sm:h-[6.5rem] sm:w-[6.5rem] lg:h-[7rem] lg:w-[7rem]",
};

const ringClasses: Record<BrandLogoSize, string> = {
  header: "bg-blush shadow-[0_18px_45px_-18px_rgba(0,0,0,0.62)] ring-2 ring-gold/80",
  hero: "bg-paper shadow-[0_30px_85px_-30px_rgba(0,0,0,0.72)] ring-2 ring-gold/90",
  footer: "bg-blush shadow-[0_22px_55px_-24px_rgba(0,0,0,0.68)] ring-2 ring-gold/80",
};

type BrandLogoProps = {
  size?: BrandLogoSize;
  className?: string;
};

export function BrandLogo({ size = "header", className }: BrandLogoProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full p-2 ${sizeClasses[size]} ${ringClasses[size]} ${className ?? ""}`}
    >
      <Image
        src="/branding/logo/logo.png"
        alt="H.E.R Global Circle"
        width={512}
        height={512}
        sizes={
          size === "hero"
            ? "(max-width: 640px) 7rem, (max-width: 1024px) 7rem, 9rem"
            : size === "footer"
              ? "(max-width: 640px) 6rem, (max-width: 1024px) 6.5rem, 7rem"
              : "(max-width: 640px) 5rem, (max-width: 1024px) 5rem, 6rem"
        }
        className="h-full w-full object-contain"
        priority={size === "hero"}
      />
    </span>
  );
}
