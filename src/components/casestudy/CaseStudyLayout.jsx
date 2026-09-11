import { Link } from "react-router-dom";
import { Eyebrow } from "../ui/Eyebrow";
import { SpecTable } from "./SpecTable";
import { DecisionBlock } from "./DecisionBlock";
import { Timeline } from "./Timeline";

// Kerangka halaman case study. Setiap blok opsional — Rehub sengaja
// lebih pendek dari PLN, dan struktur ini tidak memaksanya
// berpura-pura punya kedalaman yang sama.

function Block({ eyebrow, children }) {
  return (
    <section className="mt-16 md:mt-24">
      <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
      {children}
    </section>
  );
}

// TIMELINE — penempatan bebas.
//
// Timeline dapat muncul di salah satu titik berikut. Ubah
// `timeline.placement` di file konten untuk memindahkannya; tidak ada
// komponen yang perlu disentuh, dan tiap case study boleh berbeda.
//
//   after-header  ·  after-problem  ·  after-constraints  ·  after-role
//   after-decisions  ·  after-feedback  ·  after-outcome
//
// Default bila tidak diisi: after-header.

export function CaseStudyLayout({ study, next }) {
  const {
    problem,
    constraints,
    role,
    decisions,
    feedback,
    outcome,
    handoff,
    timeline,
  } = study;

  const timelineAt = (anchor) => {
    if (!timeline?.items?.length) return null;
    if ((timeline.placement ?? "after-header") !== anchor) return null;
    return (
      <Block eyebrow={timeline.eyebrow ?? "Timeline"}>
        <Timeline items={timeline.items} />
      </Block>
    );
  };

  return (
    <article className="mx-auto max-w-page px-6 pb-24 pt-28 md:pt-32">
      <Link
        to="/#work"
        className="font-label text-label uppercase text-text-mute transition-colors hover:text-text-hi"
      >
        ← All work
      </Link>

      <header className="mt-8">
        {/* Nama klien duduk di eyebrow, bukan dijejalkan ke dalam h1 —
            judul tetap menjelaskan apa yang dibangun, bukan untuk siapa. */}
        <span className="font-label text-label uppercase text-accent">
          Case study{study.client ? ` · ${study.client}` : ""}
        </span>

        <h1 className="mt-3 max-w-3xl text-title text-text-hi">
          {study.title}
        </h1>

        <p className="mt-4 max-w-2xl text-lead text-text">{study.subtitle}</p>

        <div className="mt-8 max-w-xl">
          <SpecTable rows={study.spec} />
        </div>
      </header>

      {timelineAt("after-header")}

      {problem ? (
        <Block eyebrow={problem.eyebrow}>
          <p className="max-w-2xl text-body text-text">{problem.intro}</p>

          <div className="mt-8 flex flex-col gap-6">
            {problem.points.map((point) => (
              <div key={point.title} className="border-l border-hairline pl-5">
                <h3 className="text-lead text-text-hi">{point.title}</h3>
                <p className="mt-2 max-w-2xl text-body text-text">
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </Block>
      ) : null}

      {timelineAt("after-problem")}

      {constraints ? (
        <Block eyebrow={constraints.eyebrow}>
          <ul className="flex max-w-2xl flex-col gap-3">
            {constraints.items.map((item, i) => (
              <li key={i} className="flex gap-3 text-body text-text">
                <span aria-hidden="true" className="text-text-mute">
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Block>
      ) : null}

      {timelineAt("after-constraints")}

      {role ? (
        <Block eyebrow={role.eyebrow}>
          <p className="max-w-2xl text-body text-text">{role.intro}</p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {role.points.map((point) => (
              <div
                key={point.title}
                className="rounded-card border border-hairline bg-surface shadow-raise p-5"
              >
                <h3 className="text-caption font-medium text-text-hi">
                  {point.title}
                </h3>
                <p className="mt-2 text-caption text-text">{point.body}</p>
              </div>
            ))}
          </div>
        </Block>
      ) : null}

      {timelineAt("after-role")}

      {decisions ? (
        <Block eyebrow={decisions.eyebrow}>
          <div className="flex flex-col gap-12">
            {decisions.items.map((decision, i) => (
              <DecisionBlock key={decision.id} decision={decision} index={i} />
            ))}
          </div>
        </Block>
      ) : null}

      {timelineAt("after-decisions")}

      {feedback ? (
        <Block eyebrow={feedback.eyebrow}>
          <p className="max-w-2xl text-body text-text">{feedback.intro}</p>

          <div className="mt-8 flex flex-col gap-4">
            {feedback.items.map((item, i) => (
              <div
                key={i}
                className="grid gap-4 rounded-card border border-hairline bg-surface shadow-raise p-5 md:grid-cols-2"
              >
                <div>
                  <span className="font-label text-label uppercase text-text-mute">
                    They said
                  </span>
                  <p className="mt-2 text-caption text-text">{item.said}</p>
                </div>
                <div className="border-t border-hairline pt-4 md:border-l md:border-t-0 md:pl-5 md:pt-0">
                  <span className="font-label text-label uppercase text-accent">
                    I changed
                  </span>
                  <p className="mt-2 text-caption text-text">{item.changed}</p>
                </div>
              </div>
            ))}
          </div>

          {feedback.outro ? (
            <p className="mt-6 max-w-2xl text-body text-text">
              {feedback.outro}
            </p>
          ) : null}
        </Block>
      ) : null}

      {timelineAt("after-feedback")}

      {outcome ? (
        <Block eyebrow={outcome.eyebrow}>
          <p className="max-w-2xl text-body text-text">{outcome.result}</p>

          {outcome.reflections?.length ? (
            <div className="mt-8">
              <span className="font-label text-label uppercase text-text-mute">
                What I would do differently
              </span>
              <ul className="mt-3 flex max-w-2xl flex-col gap-3">
                {outcome.reflections.map((item, i) => (
                  <li key={i} className="flex gap-3 text-body text-text">
                    <span aria-hidden="true" className="text-text-mute">
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {outcome.learned ? (
            <p className="mt-8 max-w-2xl border-l-2 border-accent/40 pl-5 text-body text-text">
              {outcome.learned}
            </p>
          ) : null}
        </Block>
      ) : null}

      {timelineAt("after-outcome")}

      {handoff ? (
        <Block eyebrow={handoff.eyebrow}>
          <p className="max-w-2xl text-body text-text">{handoff.intro}</p>

          <div className="mt-8 flex flex-col gap-6">
            {handoff.points.map((point) => (
              <div key={point.title} className="border-l border-hairline pl-5">
                <h3 className="text-caption font-medium text-text-hi">
                  {point.title}
                </h3>
                <p className="mt-2 max-w-2xl text-body text-text">
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </Block>
      ) : null}

      {next ? (
        <nav className="mt-20 flex items-center justify-between border-t border-hairline pt-8">
          <span className="font-label text-label uppercase text-text-mute">
            Next
          </span>
          <Link
            to={`/work/${next.slug}`}
            className="group inline-flex items-center gap-3 text-lead text-text-hi hover:text-accent"
          >
            {next.title}
            <span
              aria-hidden="true"
              className="transition-transform duration-150 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </nav>
      ) : null}
    </article>
  );
}
