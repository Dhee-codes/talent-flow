import { useState } from "react";

const heroAssets = {
  badge: "/images/course-badge.png",
  curvePrimary: "/images/hero-curve.png",
  curveSecondary: "/images/hero-curve2.png",
  learner: "/images/hero-learner.png",
} as const;

type CourseBadgeProps = {
  totalCourses: number;
  imageSrc?: string;
};

type HeroIllustrationProps = {
  title: string;
  imageAlt?: string;
  imageSrc?: string;
};

function CourseBadge({ totalCourses, imageSrc }: CourseBadgeProps) {
  const [hasImageError, setHasImageError] = useState(false);

  if (imageSrc && !hasImageError) {
    return (
      <img
        className="block h-[118px] w-[118px] object-contain lg:h-[132px] lg:w-[132px]"
        src={imageSrc}
        alt={`${totalCourses} courses available`}
        onError={() => setHasImageError(true)}
      />
    );
  }

  return (
    <div
      className="grid h-[118px] w-[118px] place-items-center rounded-full bg-[#5f88f9] text-white lg:h-[132px] lg:w-[132px]"
      aria-label={`${totalCourses} courses available`}
    >
      <span className="text-[2.4rem] font-bold leading-none lg:text-[2.9rem]">
        {totalCourses}
      </span>
      <span className="pb-3 text-[1.15rem] leading-none lg:text-[1.35rem]">
        Courses
      </span>
    </div>
  );
}

function HeroIllustration({
  title,
  imageAlt = "Learner holding a laptop",
  imageSrc = heroAssets.learner,
}: HeroIllustrationProps) {
  const [hasLearnerError, setHasLearnerError] = useState(false);

  return (
    <div
      className="relative h-[220px] w-[260px] sm:h-[240px] sm:w-[280px] lg:h-[270px] lg:w-[330px] xl:h-[286px] xl:w-[352px]"
      aria-label={`${title} visual`}
    >
      <div className="absolute left-[0] top-[0] z-20 sm:left-[2px] lg:left-[2px] lg:top-[8px] xl:left-[8px]">
        <CourseBadge totalCourses={500} imageSrc={heroAssets.badge} />
      </div>

      <img
        className="pointer-events-none absolute left-[-4px] top-[118px] z-10 w-[112px] sm:left-[0] sm:top-[128px] sm:w-[124px] lg:left-[-6px] lg:top-[156px] lg:w-[150px] xl:left-[-2px] xl:top-[168px] xl:w-[160px]"
        src={heroAssets.curvePrimary}
        alt=""
        aria-hidden="true"
      />
      <img
        className="pointer-events-none absolute left-[4px] top-[127px] z-10 w-[102px] sm:left-[12px] sm:top-[139px] sm:w-[114px] lg:left-[8px] lg:top-[170px] lg:w-[136px] xl:left-[14px] xl:top-[183px] xl:w-[144px]"
        src={heroAssets.curveSecondary}
        alt=""
        aria-hidden="true"
      />

      <div className="absolute bottom-0 right-[-6px] z-20 h-[214px] w-[164px] sm:right-[-4px] sm:h-[234px] sm:w-[178px] lg:right-[-10px] lg:h-[270px] lg:w-[208px] xl:right-[-8px] xl:h-[286px] xl:w-[220px]">
        {!hasLearnerError ? (
          <img
            className="block h-full w-full object-contain object-bottom"
            src={imageSrc}
            alt={imageAlt}
            onError={() => setHasLearnerError(true)}
          />
        ) : (
          <div className="flex h-full items-center justify-center rounded-3xl border border-[#d8dff8] bg-[#f7f9ff] text-center text-xs text-[#6a7080]">
            Add `/public/images/hero-learner.png`
          </div>
        )}
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="bg-[#eef2fb]">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-10 px-6 py-10 sm:px-8 lg:min-h-[360px] lg:grid-cols-[390px_360px] lg:justify-between lg:gap-[48px] lg:px-[48px] lg:py-[34px] xl:max-w-[1360px] xl:grid-cols-[410px_390px] xl:px-[56px]">
        <div className="max-w-[336px] lg:max-w-[360px] xl:max-w-[390px]">
          <p className="mb-2 text-[14px] font-medium leading-[1.35] text-[#161616] lg:text-[13px]">
            Learn your favorite course
          </p>

          <h1 className="m-0 max-w-[320px] text-[32px] font-bold leading-[0.96] tracking-[-0.045em] text-[#171717] lg:max-w-[340px] lg:text-[31px] xl:max-w-[360px] xl:text-[34px]">
            Start learning from anywhere and build your career
          </h1>

          <p className="mb-5 mt-4 max-w-[300px] text-[12px] leading-[1.45] text-[#6a7080] lg:max-w-[320px] lg:text-[11px] xl:max-w-[336px]">
            With lots of expert mentors, and flexible, engaging content. Ready
            to embark on a journey of career growth?
          </p>

          <button
            className="rounded-[5px] bg-[#6790ff] px-[14px] py-[8px] text-[12px] font-medium text-white transition hover:bg-[#5a84fa] lg:px-[15px] lg:py-[8px] lg:text-[12px]"
            type="button"
          >
            Get Started
          </button>
        </div>

        <div className="flex justify-center lg:justify-end xl:pr-[16px]">
          <HeroIllustration title="Learning from anywhere" />
        </div>
      </div>
    </section>
  );
}
