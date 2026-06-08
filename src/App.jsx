import { AnimatePresence, motion, useAnimationControls } from "motion/react";
import React, { useEffect, useState } from "react";

const question = "What's the difference between Mercer and Madison? They look the same.";

const bestAnswer =
  "Mercer and Madison are David Yurman collection names. I don't have the fully approved answer for the exact difference between those two collections yet.";

function DayGlassBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden bg-[#fbf7ef]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_-6%,rgba(255,255,255,0.98),rgba(251,247,239,0.74)_34%,rgba(244,235,218,0.52)_100%)]" />
      <div className="liquid-wave liquid-wave-a" />
      <div className="liquid-wave liquid-wave-b" />
      <div className="liquid-wave liquid-wave-c" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.72),transparent_36%,rgba(255,255,255,0.48)_70%,transparent)]" />
    </div>
  );
}

function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-[28px] border border-white/70 bg-white/48 shadow-glass backdrop-blur-2xl ${className}`}
    >
      {children}
    </div>
  );
}

function SoftButton({ children, onClick, variant = "glass", disabled = false }) {
  const styles =
    variant === "gold"
      ? "border-[#e9b844] bg-gradient-to-b from-[#f6ca65] to-[#dca025] text-white shadow-gold"
      : "border-white/80 bg-white/56 text-[#0d2254] shadow-glass hover:bg-white/72";

  return (
    <button
      className={`min-h-12 rounded-full border px-8 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-4 focus:ring-[#edbd4d]/25 disabled:cursor-default disabled:opacity-70 ${styles}`}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

function FlowStage({ number, title, children, className = "" }) {
  return (
    <GlassCard className={`relative overflow-visible p-5 sm:p-6 ${className}`}>
      <div className="mb-4 flex items-start gap-3">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#e8c46a]/70 bg-white/64 text-sm font-bold text-[#10255a] shadow-[0_8px_22px_rgba(217,166,49,0.16)]">
          {number}
        </span>
        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.12em] text-[#10255a]">
            {title}
          </h2>
        </div>
      </div>
      {children}
    </GlassCard>
  );
}

function QuestionIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <path
        d="M8.7 9.2a3.5 3.5 0 1 1 5.9 2.5c-.9.8-1.8 1.3-1.8 2.7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.9"
      />
      <path d="M12 18h.01" stroke="currentColor" strokeLinecap="round" strokeWidth="2.4" />
      <path
        d="M5.5 4.9h13A2.5 2.5 0 0 1 21 7.4v9.2a2.5 2.5 0 0 1-2.5 2.5H8.8L4 21v-3.9a2.5 2.5 0 0 1-1-2V7.4a2.5 2.5 0 0 1 2.5-2.5Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7.8v4.6l3 1.8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}\n
function QuestionCard({ controls, compact = false }) {
  return (
    <motion.div
      animate={controls}
      className="relative z-20 mx-auto w-full max-w-[430px]"
      initial={false}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      <GlassCard
        className={`relative overflow-hidden border-[#fff8eb] p-5 ${
          compact ? "rounded-[22px]" : "rounded-[30px]"
        }`}
      >
        <div className="absolute -right-10 -top-12 h-28 w-28 rounded-full bg-[#efc65d]/20 blur-2xl" />
        <div className="flex items-start gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/80 bg-white/60 text-[#1b336b] shadow-[0_12px_28px_rgba(16,37,90,0.08)]">
            <QuestionIcon />
          </span>
          <div className="min-w-0">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#6d7892]">
              Aqui asked
            </p>
            <p className="text-balance text-lg font-bold leading-snug text-[#0d2254] sm:text-xl">
              {question}
            </p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

function GapAnswerCard() {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
      <GlassCard className="p-5">
        <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[#188352]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#21a767] shadow-[0_0_16px_rgba(33,167,103,0.34)]" />
          Approved sources only
        </div>
        <p className="text-base font-semibold leading-relaxed text-[#20325f]">{bestAnswer}</p>
      </GlassCard>
      <GlassCard className="border-[#f0d897]/90 bg-[#fff8eb]/52 p-5">
        <div className="mb-3 flex items-center gap-2 text-[#b87915]">
          <span className="grid h-8 w-8 place-items-center rounded-full border border-[#e9c46b]/80 bg-white/58">
            <ClockIcon />
          </span>
          <span className="text-xs font-bold uppercase tracking-[0.1em]">Worth adding</span>
        </div>
        <p className="text-xl font-extrabold leading-tight text-[#0d2254]">
          Good question - this is worth adding.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[#53617d]">
          We'll get the right answer reviewed and let you know when it's ready.
        </p>
      </GlassCard>
    </div>
  );
}

function ReviewStack({ active }) {
  return (
    <motion.div
      animate={
        active
          ? { opacity: 1, y: 0, scale: [1, 0.97, 1.02, 1], filter: "brightness(1.05)" }
          : { opacity: 0.62, y: 10, scale: 0.98 }
      }
      className="relative mx-auto mt-8 w-full max-w-[360px]"
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute inset-x-10 -bottom-5 h-12 rounded-full bg-[#e7b74d]/28 blur-xl" />
      <GlassCard className="relative overflow-hidden p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-extrabold text-[#0d2254]">Awaiting Answer</p>
            <p className="text-xs text-[#68758f]">One question saved with care</p>
          </div>
          <span className="grid h-9 w-9 place-items-center rounded-full border border-[#efd58f] bg-[#fff7df] text-[#bb7b12]">
            <ClockIcon />
          </span>
        </div>
        <div className="relative h-28">
          <div className="absolute bottom-0 left-5 right-5 h-14 rounded-2xl border border-[#efd58f]/60 bg-[#f8d987]/42 shadow-[0_18px_35px_rgba(198,134,25,0.14)]" />
          <div className="absolute bottom-4 left-3 right-3 h-16 rounded-2xl border border-white/70 bg-white/58 shadow-[0_16px_34px_rgba(34,42,62,0.08)]" />
          <div className="absolute bottom-8 left-0 right-0 rounded-2xl border border-white/80 bg-white/76 p-4 shadow-[0_16px_38px_rgba(34,42,62,0.10)]">
            <p className="line-clamp-2 text-sm font-bold leading-snug text-[#10255a]">{question}</p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

function GoldSeal({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          className="mx-auto grid h-32 w-32 place-items-center rounded-full bg-[conic-gradient(from_20deg,#d39122,#fff0ae,#dca12d,#fff7c8,#cc891a,#f8d16b,#d39122)] p-2 shadow-gold"
          exit={{ opacity: 0, scale: 0.9 }}
          initial={{ opacity: 0, scale: 0.65, rotate: -8 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid h-full w-full place-items-center rounded-full border border-white/70 bg-[radial-gradient(circle_at_32%_22%,#fff8d8,#eeb949_56%,#ca861d)]">
            <motion.svg
              aria-hidden="true"
              className="h-16 w-16 text-white drop-shadow"
              fill="none"
              viewBox="0 0 64 64"
            >
              <motion.path
                animate={{ pathLength: 1 }}
                d="M18 33.5 28.2 43 47 21"
                initial={{ pathLength: 0 }}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="6"
                transition={{ delay: 0.35, duration: 0.62, ease: "easeOut" }}
              />
            </motion.svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function KnowledgeGapFlow() {
  const [step, setStep] = useState("start");
  const [running, setRunning] = useState(false);
  const cardControls = useAnimationControls();

  useEffect(() => {
    if (step === "start") {
      cardControls.set({ x: 0, y: 0, scale: 1, opacity: 1, rotate: 0 });
    }
  }, [cardControls, step]);

  async function playFlow() {
    if (running) return;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const travel = isDesktop ? { x: 260, y: 158 } : { x: 0, y: 150 };
    const land = isDesktop ? { x: 284, y: 186 } : { x: 0, y: 178 };
    setRunning(true);
    setStep("capture");
    await cardControls.start({ y: -18, scale: 1.035, rotate: -0.4 });
    setStep("move");
    await cardControls.start({ ...travel, scale: 0.55, rotate: 2, opacity: 0.95 });
    await cardControls.start({ ...land, scale: 0.16, opacity: 0 });
    setStep("stack");
    await delay(760);
    setStep("seal");
    await delay(1250);
    setStep("thanks");
    await delay(1650);
    setStep("final");
    setRunning(false);
  }

  const finalVisible = step === "final";
  const thanksVisible = step === "thanks";
  const sealVisible = step === "seal" || thanksVisible;
  const stackActive = ["stack", "seal", "thanks", "final"].includes(step);

  return (
    <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-6 text-[#0d2254] sm:px-7 lg:px-9">
      <header className="mb-5 grid gap-4 sm:grid-cols-[auto_1fr_auto] sm:items-center">
        <div className="flex items-center gap-3">
          <div className="text-4xl font-serif tracking-tight text-[#11265b]">
            LB<span className="text-[#d99a20]">G</span>
          </div>
          <div className="text-xs font-bold uppercase leading-tight tracking-[0.08em] text-[#111827]">
            Knowledge
            <br />
            System
          </div>
        </div>
        <div className="hidden h-px bg-gradient-to-r from-transparent via-[#d8ad55]/70 to-transparent sm:block" />
        <p className="text-sm font-medium text-[#667088]">Every question helps someone tomorrow.</p>
      </header>

      <section className="mb-5 text-center">
        <h1 className="text-balance text-3xl font-extrabold uppercase tracking-[0.12em] text-[#10255a] sm:text-5xl">
          Knowledge Gap Flow
        </h1>
      </section>

      <div className="grid flex-1 gap-5 lg:grid-cols-[0.96fr_1.1fr_0.96fr] lg:items-stretch">
        <FlowStage number="1" title="Ask A Question" className="min-h-[390px]">
          <div className="space-y-4">
            <QuestionCard controls={cardControls} />
            <p className="text-sm leading-relaxed text-[#64708a]">
              The best available answer appears first, with approved-source boundaries kept clear.
            </p>
          </div>
        </FlowStage>

        <FlowStage number="2" title="Safe Answer">
          <div className="space-y-5">
            <GapAnswerCard />
            <AnimatePresence mode="wait">
              {finalVisible ? (
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                  initial={{ opacity: 0, y: 12 }}
                  key="final"
                  transition={{ duration: 0.45 }}
                >
                  <h2 className="text-balance text-3xl font-extrabold text-[#10255a]">
                    We'll let you know when the answer is ready.
                  </h2>
                  <p className="mx-auto mt-3 max-w-sm text-base leading-relaxed text-[#5c6780]">
                    You'll see it in Updates.
                  </p>
                  <div className="mt-6">
                    <SoftButton variant="gold">Done</SoftButton>
                  </div>
                </motion.div>
              ) : thanksVisible ? (
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                  initial={{ opacity: 0, y: 12 }}
                  key="thanks"
                  transition={{ duration: 0.45 }}
                >
                  <GoldSeal show />
                  <h2 className="mt-6 text-3xl font-extrabold text-[#10255a]">Thank you, Aqui.</h2>
                  <p className="mx-auto mt-3 max-w-sm text-base leading-relaxed text-[#5c6780]">
                    Your question may help the next coworker who asks.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-center"
                  exit={{ opacity: 0, y: -8 }}
                  initial={{ opacity: 0, y: 8 }}
                  key="button"
                >
                  <SoftButton disabled={running} onClick={playFlow}>
                    Continue
                  </SoftButton>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </FlowStage>

        <FlowStage number="3" title="Question Captured" className="min-h-[390px]">
          <div className="relative grid h-full min-h-[300px] place-items-center overflow-visible">
            <motion.div
              animate={
                step === "capture" || step === "move"
                  ? { opacity: 1, scale: 1.08 }
                  : { opacity: 0, scale: 0.92 }
              }
              className="absolute h-64 w-64 rounded-full bg-[#edc454]/24 blur-3xl"
              transition={{ duration: 0.7 }}
            />
            {step === "move" && (
              <motion.div
                animate={{ opacity: [0, 1, 0], pathLength: 1 }}
                className="absolute left-12 top-14 h-40 w-52 rounded-full border-b-2 border-l-2 border-[#f2ca65]/60 blur-[1px]"
                initial={{ opacity: 0 }}
                transition={{ duration: 1.1, ease: "easeOut" }}
              />
            )}
            <ReviewStack active={stackActive} />
            <div className="absolute bottom-1 left-1/2 w-full max-w-xs -translate-x-1/2 text-center">
              <AnimatePresence mode="wait">
                {sealVisible && !thanksVisible && !finalVisible ? (
                  <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 12 }}
                    key="seal"
                  >
                    <GoldSeal show />
                  </motion.div>
                ) : (
                  <motion.p
                    animate={{ opacity: 1 }}
                    className="text-sm leading-relaxed text-[#5d6882]"
                    initial={{ opacity: 0 }}
                    key="copy"
                  >
                    We'll let you know when the answer is ready.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </FlowStage>
      </div>

      <footer className="mt-5 rounded-[22px] border border-white/70 bg-white/40 px-5 py-4 shadow-[0_18px_48px_rgba(41,36,24,0.07)] backdrop-blur-xl">
        <p className="text-center text-sm font-semibold text-[#10255a] sm:text-base">
          Better together. Better answers for everyone.
          <span className="mx-3 hidden text-[#c9972c] sm:inline">|</span>
          <span className="block font-medium text-[#667088] sm:inline">
            Every question strengthens our knowledge and our team.
          </span>
        </p>
      </footer>
    </main>
  );
}

function delay(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

export default function App() {
  return (
    <>
      <DayGlassBackground />
      <KnowledgeGapFlow />
    </>
  );
}
