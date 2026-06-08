import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useMemo, useState } from "react";

const question = "What’s the difference between Mercer and Madison? They look the same.";
const bestAnswer =
  "Mercer and Madison are David Yurman collection names. I don’t have the fully approved answer for the exact difference between those two collections yet.";

const stages = [
  "ask",
  "answer",
  "gap",
  "capture",
  "moving",
  "stack",
  "seal",
  "thanks",
  "notify"
];

function DayGlassBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden bg-[#fbf7ef]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-8%,rgba(255,255,255,0.96),rgba(251,247,239,0.78)_38%,rgba(243,234,216,0.52)_100%)]" />
      <div className="liquid-wave liquid-wave-a" />
      <div className="liquid-wave liquid-wave-b" />
      <div className="liquid-wave liquid-wave-c" />
      <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(255,255,255,0.64),transparent_38%,rgba(255,255,255,0.42)_72%,transparent)]" />
    </div>
  );
}

function GlassCard({ children, className = "" }) {
  return (
    <div className={`border border-white/70 bg-white/50 shadow-glass backdrop-blur-2xl ${className}`}>
      {children}
    </div>
  );
}

function SoftButton({ children, onClick, variant = "glass", disabled = false }) {
  const className =
    variant === "gold"
      ? "border-[#e7b64e] bg-gradient-to-b from-[#f7ca64] to-[#d79b22] text-white shadow-gold"
      : "border-white/80 bg-white/64 text-[#0d2254] shadow-[0_14px_36px_rgba(42,40,33,0.08)] hover:bg-white/78";

  return (
    <button
      className={`min-h-12 rounded-full border px-9 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-4 focus:ring-[#edbd4d]/25 disabled:cursor-default disabled:opacity-70 ${className}`}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

function QuestionIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <path
        d="M8.7 9.2a3.5 3.5 0 1 1 5.9 2.5c-.9.8-1.8 1.3-1.8 2.7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path d="M12 18h.01" stroke="currentColor" strokeLinecap="round" strokeWidth="2.3" />
      <path
        d="M5.5 4.9h13A2.5 2.5 0 0 1 21 7.4v9.2a2.5 2.5 0 0 1-2.5 2.5H8.9L4 21v-3.9a2.5 2.5 0 0 1-1-2V7.4a2.5 2.5 0 0 1 2.5-2.5Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.55"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7.8v4.6l3 1.8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

function QuestionCard({ compact = false }) {
  return (
    <GlassCard
      className={`relative overflow-hidden rounded-[28px] p-5 ${
        compact ? "max-w-[280px]" : "w-full max-w-[520px]"
      }`}
    >
      <div className="absolute -right-12 -top-14 h-32 w-32 rounded-full bg-[#efc65d]/18 blur-3xl" />
      <div className="relative flex items-start gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/80 bg-white/68 text-[#17305f] shadow-[0_12px_28px_rgba(16,37,90,0.08)]">
          <QuestionIcon />
        </span>
        <div className="min-w-0">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#6d7892]">
            Aqui asked
          </p>
          <p
            className={`text-balance font-bold leading-snug text-[#0d2254] ${
              compact ? "text-sm" : "text-xl sm:text-2xl"
            }`}
          >
            {question}
          </p>
        </div>
      </div>
    </GlassCard>
  );
}

function ApprovedAnswer() {
  return (
    <GlassCard className="w-full max-w-[560px] rounded-[28px] p-6">
      <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.11em] text-[#168052]">
        <span className="h-2.5 w-2.5 rounded-full bg-[#25a967] shadow-[0_0_14px_rgba(37,169,103,0.32)]" />
        Approved sources only
      </div>
      <p className="text-balance text-lg font-semibold leading-relaxed text-[#21345f]">{bestAnswer}</p>
    </GlassCard>
  );
}

function GapMessage() {
  return (
    <GlassCard className="w-full max-w-[540px] rounded-[28px] border-[#f1d99b]/80 bg-[#fff8eb]/58 p-6">
      <div className="mb-4 flex items-center gap-3 text-[#b87a14]">
        <span className="grid h-10 w-10 place-items-center rounded-full border border-[#e9c46b]/80 bg-white/64">
          <ClockIcon />
        </span>
        <span className="text-xs font-bold uppercase tracking-[0.12em]">Worth adding</span>
      </div>
      <h2 className="text-balance text-2xl font-extrabold leading-tight text-[#10255a]">
        Good question — this is worth adding.
      </h2>
      <p className="mt-3 text-base leading-relaxed text-[#59657e]">
        We’ll get the right answer reviewed and let you know when it’s ready.
      </p>
    </GlassCard>
  );
}

function AwaitingStack({ active = false }) {
  return (
    <motion.div
      animate={active ? { scale: [1, 0.97, 1.025, 1], y: [0, 4, -2, 0] } : { scale: 1 }}
      className="relative w-full max-w-[390px]"
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <motion.div
        animate={active ? { opacity: [0.25, 0.62, 0.25], scale: [0.92, 1.08, 0.98] } : { opacity: 0.22 }}
        className="absolute inset-x-8 -bottom-7 h-16 rounded-full bg-[#e8b44b]/35 blur-2xl"
      />
      <GlassCard className="relative overflow-hidden rounded-[30px] p-6">
        <div className="mb-5 flex items-center justify-between">
          <p className="text-base font-extrabold text-[#10255a]">Awaiting Answer</p>
          <span className="grid h-10 w-10 place-items-center rounded-full border border-[#efd58f] bg-[#fff7df] text-[#b87a14]">
            <ClockIcon />
          </span>
        </div>
        <div className="relative h-32">
          <div className="absolute bottom-0 left-7 right-7 h-14 rounded-2xl border border-[#efd58f]/60 bg-[#f8d987]/38 shadow-[0_18px_35px_rgba(198,134,25,0.12)]" />
          <div className="absolute bottom-4 left-4 right-4 h-16 rounded-2xl border border-white/70 bg-white/58 shadow-[0_16px_34px_rgba(34,42,62,0.08)]" />
          <div className="absolute bottom-8 left-0 right-0 rounded-2xl border border-white/80 bg-white/78 p-4 shadow-[0_16px_38px_rgba(34,42,62,0.1)]">
            <p className="line-clamp-2 text-sm font-bold leading-snug text-[#10255a]">{question}</p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

function GoldSeal() {
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      className="mx-auto grid h-36 w-36 place-items-center rounded-full bg-[conic-gradient(from_20deg,#d39122,#fff0ae,#dca12d,#fff7c8,#cc891a,#f8d16b,#d39122)] p-2 shadow-gold"
      initial={{ opacity: 0, scale: 0.62, rotate: -8 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="grid h-full w-full place-items-center rounded-full border border-white/70 bg-[radial-gradient(circle_at_32%_22%,#fff8d8,#eeb949_56%,#ca861d)]">
        <motion.svg aria-hidden="true" className="h-16 w-16 text-white drop-shadow" fill="none" viewBox="0 0 64 64">
          <motion.path
            animate={{ pathLength: 1 }}
            d="M18 33.5 28.2 43 47 21"
            initial={{ pathLength: 0 }}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6"
            transition={{ delay: 0.28, duration: 0.62, ease: "easeOut" }}
          />
        </motion.svg>
      </div>
    </motion.div>
  );
}

function StageShell({ label, children }) {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className="relative mx-auto flex min-h-[540px] w-full max-w-[760px] flex-col items-center justify-center overflow-hidden rounded-[34px] border border-white/70 bg-white/42 px-5 py-10 text-center shadow-glass backdrop-blur-2xl sm:px-10"
      exit={{ opacity: 0, y: -16, scale: 0.985 }}
      initial={{ opacity: 0, y: 18, scale: 0.985 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute -top-20 right-6 h-44 w-44 rounded-full bg-[#efc65d]/12 blur-3xl" />
      <div className="absolute -bottom-24 left-6 h-52 w-52 rounded-full bg-white/52 blur-3xl" />
      <div className="relative z-10 mb-8 flex items-center gap-3 rounded-full border border-white/70 bg-white/52 px-4 py-2 shadow-[0_10px_28px_rgba(42,40,33,0.06)]">
        <span className="h-2 w-2 rounded-full bg-[#d7a235]" />
        <span className="text-xs font-bold uppercase tracking-[0.13em] text-[#667088]">{label}</span>
      </div>
      <div className="relative z-10 flex w-full flex-col items-center">{children}</div>
    </motion.section>
  );
}

function CaptureScene({ stage }) {
  const motionState = useMemo(() => {
    if (stage === "capture") return { x: 0, y: -22, scale: 1.03, opacity: 1, rotate: -0.4 };
    if (stage === "moving") return { x: 0, y: 58, scale: 0.58, opacity: 0.86, rotate: 2 };
    return { x: 0, y: 90, scale: 0.2, opacity: 0, rotate: 0 };
  }, [stage]);

  return (
    <div className="relative flex h-[390px] w-full items-center justify-center">
      <motion.div
        animate={{ opacity: stage === "capture" || stage === "moving" ? 0.46 : 0.22, scale: stage === "moving" ? 1.15 : 1 }}
        className="absolute h-72 w-72 rounded-full bg-[#edc454]/30 blur-3xl"
      />
      {stage === "moving" && (
        <motion.div
          animate={{ opacity: [0, 0.7, 0], scale: [0.85, 1.06, 1.18] }}
          className="absolute bottom-20 h-28 w-56 rounded-[999px] border-b-2 border-[#f2ca65]/60"
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      )}
      <motion.div
        animate={motionState}
        className="absolute top-6 z-20 w-full max-w-[520px]"
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      >
        <QuestionCard compact={stage !== "capture"} />
      </motion.div>
      <motion.div
        animate={{ opacity: stage === "stack" ? 1 : 0.45, y: stage === "stack" ? 24 : 56 }}
        className="absolute bottom-4 z-10 w-full"
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <AwaitingStack active={stage === "stack"} />
      </motion.div>
    </div>
  );
}

function KnowledgeGapFlow() {
  const [stage, setStage] = useState("ask");
  const [running, setRunning] = useState(false);

  async function startFlow() {
    if (running) return;
    setRunning(true);
    for (const nextStage of stages.slice(1)) {
      setStage(nextStage);
      await delay(stageDuration(nextStage));
    }
    setRunning(false);
  }

  return (
    <main className="relative z-10 flex min-h-screen flex-col px-4 py-6 text-[#0d2254] sm:px-7">
      <header className="mx-auto mb-6 flex w-full max-w-5xl items-center justify-between gap-4">
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
        <p className="hidden text-sm font-medium text-[#667088] sm:block">Every question helps someone tomorrow.</p>
      </header>

      <div className="flex flex-1 items-center justify-center pb-6">
        <AnimatePresence mode="wait">
          {stage === "ask" && (
            <StageShell key="ask" label="Ask question">
              <QuestionCard />
              <div className="mt-8">
                <SoftButton disabled={running} onClick={startFlow}>
                  Continue
                </SoftButton>
              </div>
            </StageShell>
          )}

          {stage === "answer" && (
            <StageShell key="answer" label="Best available answer">
              <ApprovedAnswer />
            </StageShell>
          )}

          {stage === "gap" && (
            <StageShell key="gap" label="Follow-up detail">
              <GapMessage />
            </StageShell>
          )}

          {(stage === "capture" || stage === "moving" || stage === "stack") && (
            <StageShell key="capture-flow" label={stage === "stack" ? "Awaiting Answer" : "Question captured"}>
              <CaptureScene stage={stage} />
            </StageShell>
          )}

          {stage === "seal" && (
            <StageShell key="seal" label="Confirmation">
              <GoldSeal />
            </StageShell>
          )}

          {stage === "thanks" && (
            <StageShell key="thanks" label="Thank you">
              <GoldSeal />
              <h1 className="mt-7 text-balance text-3xl font-extrabold text-[#10255a]">Thank you, Aqui.</h1>
              <p className="mt-3 max-w-sm text-base leading-relaxed text-[#5c6780]">
                Your question may help the next coworker who asks.
              </p>
            </StageShell>
          )}

          {stage === "notify" && (
            <StageShell key="notify" label="Updates">
              <GoldSeal />
              <h1 className="mt-7 max-w-lg text-balance text-3xl font-extrabold leading-tight text-[#10255a]">
                We’ll let you know when the answer is ready.
              </h1>
              <p className="mt-3 text-base leading-relaxed text-[#5c6780]">You’ll see it in Updates.</p>
              <div className="mt-8">
                <SoftButton variant="gold">Done</SoftButton>
              </div>
            </StageShell>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

function stageDuration(stage) {
  return {
    answer: 1300,
    gap: 1500,
    capture: 900,
    moving: 1100,
    stack: 950,
    seal: 1100,
    thanks: 1500,
    notify: 0
  }[stage];
}

function delay(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

export default function App() {
  return (
    <>
      <DayGlassBackground />
      <KnowledgeGapFlow />
    </>
  );
}
