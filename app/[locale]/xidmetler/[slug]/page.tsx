"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { useParams } from "next/navigation";
import data from "../../../../data/baza.json";
import { useTranslation } from "../../../../i18n/TranslationProvider";

type ServiceItem = {
  title: string;
  description: string;
  image: string;
  href?: string;
  buttonText?: string;
};

function cleanText(input?: unknown) {
  if (input == null) return "";
  return String(input)
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function slugify(input?: unknown) {
  const s = cleanText(input).toLowerCase();
  return s
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function slugFromHref(href?: unknown) {
  const cleaned = cleanText(href);
  const parts = cleaned.split("/").filter(Boolean);
  const maybe = parts[1] || "";
  return slugify(maybe);
}

function getItemSlug(item: ServiceItem) {
  const fromHref = slugFromHref(item.href);
  if (fromHref) return fromHref;
  return slugify(item.title);
}

export default function ServicePage() {
  const { t, locale } = useTranslation();
  const params = useParams<{ slug?: string }>();
  const pageSlug = slugify(params?.slug);

  const items: ServiceItem[] = (data as any)?.servicesSection?.items ?? [];

  const service = useMemo(() => {
    return items.find((it) => getItemSlug(it) === pageSlug);
  }, [items, pageSlug]);

  if (!pageSlug || !service) {
    return (
      <main className="min-h-[60vh] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h1 className="text-3xl font-extrabold text-black">{t("serviceDetail.notFound")}</h1>
          <p className="mt-3 text-black/70">{t("serviceDetail.notFoundDesc")}</p>

          <div className="mt-8 rounded-2xl border border-black/10 bg-black/[0.03] p-5 text-sm text-black/70">
            <div className="font-semibold text-black">{t("serviceDetail.incomingSlug")}:</div>
            <div className="mt-1">{pageSlug || t("serviceDetail.empty")}</div>

            <div className="mt-4 font-semibold text-black">{t("serviceDetail.dbSlugs")}:</div>
            <ul className="mt-2 list-disc pl-5">
              {items.map((it) => (
                <li key={cleanText(it.title)}>
                  {cleanText(it.title)} → <b>{getItemSlug(it)}</b>{" "}
                  <span className="text-black/50">(href: {cleanText(it.href)})</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <Link
                href={`/${locale}/xidmetler`}
                className="inline-flex items-center justify-center rounded-xl bg-[#F2A900] px-5 py-3 font-semibold text-black transition hover:brightness-95"
              >
                {t("serviceDetail.backToServices")}
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const title = cleanText(service.title);
  const desc = cleanText(service.description);
  const img = cleanText(service.image);

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative h-[340px] md:h-[460px]">
        <Image src={img} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-4 pb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#F2A900]" />
              {t("serviceDetail.service")}
            </div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/85 md:text-lg">
              {desc}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href={`/${locale}/elaqe`}
                className="inline-flex items-center justify-center rounded-xl bg-[#F2A900] px-6 py-3 text-sm font-semibold text-black transition hover:brightness-95"
              >
                {t("serviceDetail.priceOrder")}
              </Link>
              <Link
                href={`/${locale}/xidmetler`}
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                {t("serviceDetail.allServices")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-extrabold text-black md:text-3xl">
              {t("serviceDetail.aboutService")}
            </h2>

            <div className="mt-6 space-y-4 text-[15px] leading-7 text-black/70">
              <p>{desc}</p>
              <p>{t("serviceDetail.detailContact")}</p>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-black/10">
              <div className="relative h-[220px] w-full md:h-[320px]">
                <Image src={img} alt={title} fill className="object-cover" />
              </div>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border border-black/10 bg-[#F7F7F7] p-8">
                <h3 className="text-lg font-extrabold text-black">{t("serviceDetail.whatWeDo")}</h3>

                <ul className="mt-6 space-y-3 text-sm text-black/70">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-[#F2A900]" />
                    {t("serviceDetail.consultation")}
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-[#F2A900]" />
                    {t("serviceDetail.professionalInstall")}
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-[#F2A900]" />
                    {t("serviceDetail.qualityDelivery")}
                  </li>
                </ul>

                <div className="mt-8">
                  <Link
                    href={`/${locale}/elaqe`}
                    className="inline-flex w-full items-center justify-center rounded-xl bg-[#F2A900] px-6 py-3 text-sm font-semibold text-black transition hover:brightness-95"
                  >
                    {cleanText(service.buttonText) || t("servicesPage.moreDetails")}
                  </Link>
                </div>

                <div className="mt-4 text-xs text-black/50">
                  * {t("serviceDetail.imageNote")}
                </div>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white p-6">
                <div className="text-sm font-semibold text-black">{t("serviceDetail.otherServices")}</div>
                <div className="mt-4 space-y-2">
                  {items
                    .filter((it) => getItemSlug(it) !== pageSlug)
                    .slice(0, 3)
                    .map((it) => (
                      <Link
                        key={cleanText(it.title)}
                        href={`/${locale}${cleanText(it.href) || "/xidmetler"}`}
                        className="flex items-center justify-between rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-black transition hover:bg-black/[0.03]"
                      >
                        <span>{cleanText(it.title)}</span>
                        <span className="text-black/40">→</span>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
