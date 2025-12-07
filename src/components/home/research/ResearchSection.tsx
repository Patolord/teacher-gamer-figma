import Link from "next/link";

interface ResearchSectionProps {
  sectionIndex?: number;
}

export default function ResearchSection({
  sectionIndex,
}: ResearchSectionProps) {
  const articles = [
    {
      title: "Multiverse - Role-Playing Games as an Educational Discipline",
      authors: "Reznichek, Z.",
      journal: "Academia Letters",
      year: "2021",
      views: "7,228 Views",
      abstract:
        "The idea that when you play role-playing games (RPGs): you submerge yourself 'in-game' to adventure, explore, and problem-solve through experimentation, puts your imagination, sense of self, and morality to the test. This paper explores RPGs as a distinct educational discipline that fosters critical thinking, creativity, and collaborative learning.",
      link: "https://www.academia.edu/",
    },
    {
      title: "What is 'Authentic Education'?",
      authors: "Reznichek, Z.",
      journal: "Academia Letters",
      year: "2021",
      views: "24,241 Views • Top 4%",
      abstract:
        "The simple response would include that an 'authentic education' is designed to guide students to develop their unique talents and abilities, rather than forcing them to conform to standardized measures. This paper examines the philosophical foundations of authentic education and its implications for modern pedagogy.",
      link: "https://www.academia.edu/",
    },
    {
      title: "Converging Approaches is the Future of Education",
      authors: "Reznichek, Z. & Taiwo, O.",
      journal: "Academia.edu",
      year: "2021",
      views: "194 Views",
      abstract:
        "Current education systems were invented over a hundred years ago to meet the needs of the industrial revolution. This paper argues that the future of education lies in converging multiple pedagogical approaches to meet the diverse needs of 21st-century learners, emphasizing personalization, interdisciplinary learning, and real-world application.",
      link: "https://www.academia.edu/",
    },
    {
      title:
        "Self-Determination Theory and the Case Against Extrinsic Goals in Education",
      authors: "Reznichek, Z.",
      journal: "Academia.edu",
      year: "2021",
      views: "177 Views",
      abstract:
        "By the end of the 20th century, concerns over students' dependency, self-doubt, demotivation, and anxiety had reached critical levels. This paper examines Self-Determination Theory and argues against the overuse of extrinsic motivators in educational settings, advocating for intrinsic motivation through autonomy, competence, and relatedness.",
      link: "https://www.academia.edu/",
    },
    {
      title: "Start The Writing Journey",
      authors: "Reznichek, Z. & Jennings, K.",
      journal: "Academia.edu",
      year: "2025",
      views: "120 Views",
      abstract:
        "Education is not only about major milestones, like graduations and certifications, but also about the journey of continuous learning and growth. This paper explores pedagogical approaches to help students begin their writing journey with confidence, creativity, and authentic voice.",
      link: "https://www.academia.edu/",
    },
    {
      title:
        "As if Authenticity Matters: The Fall of Contemplation and The Rise of The Social Realm",
      authors: "Reznichek, Z.",
      journal: "Education Thesis",
      year: "2010",
      views: "3 Views",
      abstract:
        "As a corrupted byproduct of socioeconomic politics, curriculum philosophy is unsuitable to solve educational challenges. This defended thesis examines the decline of contemplative practices in education and the emergence of social constructivism as the dominant educational paradigm, questioning whether authenticity still matters in modern pedagogy.",
      link: "https://www.academia.edu/",
    },
  ];

  return (
    <section
      data-scroll-section={sectionIndex}
      className="relative w-full flex items-center justify-center py-24"
    >
      {/* Background geral */}
      <div className="absolute inset-0 bg-cover bg-no-repeat bg-center bg-[url('/0_0.jpeg')]" />

      {/* Transições top/bottom */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50 z-10" />
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-yellow-500/10 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-yellow-500/10 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50 z-10" />

      <div
        data-section-content
        className="container mx-auto px-8 md:px-8 max-w-6xl relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 bg-[linear-gradient(135deg,#fff_0%,#c47020_20%,#d09a11_40%,#fff_100%)] bg-[length:200%_200%] bg-clip-text text-transparent inline-block whitespace-nowrap animate-gradientShift">
            Research & Publications
          </h2>
          <p className="text-white/80 text-base md:text-lg mt-4 max-w-3xl mx-auto">
            Evidence-based research supporting the Teacher-Gamer methodology
          </p>
        </div>

        {/* Grid de cartas */}
        <div className="grid gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          {articles.map((article, index) => {
            const backgroundImage =
              index % 2 === 0 ? "/magic1.png" : "/magic2.png";

            return (
              <article
                key={article.title}
                className="relative mx-auto w-full max-w-xs aspect-[2/3] group cursor-pointer"
              >
                <Link
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block h-full cursor-pointer"
                >
                  {/* Card frame */}
                  <div
                    className="absolute inset-0 bg-center bg-contain bg-no-repeat drop-shadow-[0_25px_40px_rgba(0,0,0,0.7)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-[1.02] cursor-pointer"
                    style={{ backgroundImage: `url('${backgroundImage}')` }}
                  />

                  {/* Conteúdo em cima da moldura */}
                  <div className="relative h-full flex flex-col px-12 pt-20 pb-7 cursor-pointer">
                    {/* Título */}
                    <div className="mt-3">
                      <h3 className="text-md font-extrabold leading-snug line-clamp-3 text-center cursor-pointer px-1">
                        {article.title}
                      </h3>
                    </div>

                    {/* Texto (como "caixa de texto" da carta) */}
                    <div className="mt-4 flex-1">
                      <div className=" rounded-md px-3 py-2 text-sm leading-snug text-gray-900 overflow-hidden h-full font-bold cursor-pointer">
                        <p className="line-clamp-7">{article.abstract}</p>
                      </div>
                    </div>

                    {/* Barra "tipo" / autores / ano */}
                    <div className="mt-3 bg-black/70 border border-amber-500/40 rounded px-2 mb-6 py-1 flex flex-col gap-1 text-xs text-amber-100 cursor-pointer mx-1">
                      <div className="flex justify-between gap-2">
                        <span className="font-semibold truncate cursor-pointer">
                          {article.authors}
                        </span>
                        <span className="italic text-amber-200/80 truncate cursor-pointer">
                          {article.journal}
                        </span>
                      </div>
                      <div className="flex justify-between gap-2 text-sm text-amber-200/80">
                        <span>{article.year}</span>
                        <span className="truncate cursor-pointer">
                          {article.views}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
