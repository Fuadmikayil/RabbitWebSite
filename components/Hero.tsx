// components/Hero.tsx

"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "../i18n/TranslationProvider";

const Hero = () => {
  const { t, locale } = useTranslation();

  return (
    <section className=" pb-2 pt-6 md:px-6 md:pb-16 md:pt-10 min-[1025px]:pb-20">
      <div className="mx-auto grid w-full max-w-7xl gap-4 rounded-3xl bg-zinc-900 p-5 text-white shadow-2xl md:p-8 min-[1025px]:grid-cols-2 min-[1025px]:items-center min-[1025px]:gap-12 min-[1025px]:p-12">
        <div className="order-2 min-[1025px]:order-1">
          <h1 className="text-2xl font-extrabold leading-tight max-[767px]:text-[1.75rem] md:text-4xl min-[1025px]:text-5xl">
            {t("hero.title")}
          </h1>
          <p className="mt-4 max-w-xl text-sm text-zinc-200 md:text-base">
            {t("hero.description")}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/${locale}/xidmetler`}
              className="rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-zinc-900 transition hover:bg-amber-300"
            >
              {t("hero.readMore")}
            </Link>
            <Link
              href={`/${locale}/elaqe`}
              className="rounded-xl border border-zinc-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-zinc-800"
            >
              {t("nav.contactUs")}
            </Link>
          </div>
        </div>

        <div className="order-1 min-[1025px]:order-2">
          <div className="relative h-full overflow-hidden rounded-2xl max-[767px]:h-56 md:h-80 min-[1025px]:h-[420px]">
            <Image
              src="/hero.jpg"
              alt={t("hero.title")}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
