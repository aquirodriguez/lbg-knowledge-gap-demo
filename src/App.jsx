import { AnimatePresence, motion } from "motion/react";
import * as React from "react";

const QUESTION = "What’s the difference between Mercer and Madison?";
const FOLLOW_UP = "What are the key differences?";

const navy = "#10255a";
const muted = "#667088";
const gold = "#d99b20";

function DayGlassBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden bg-[#fbf7ef]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(255,255,255,0.96),rgba(251,247,239,0.82)_38%,rgba(238,225,201,0.52)_100%)]" />
      <div className="liquid-wave liquid-wave-a" />
      <div className="liquid-wave liquid-wave-b" />
      <div className="liquid-wave liquid-wave-c" />
      <motion.div
        animate={{ opacity: [0.18, 0.38, 0.2], x: [-18, 18, -18] }}
        className="absolute left-[10%] top-[18%] h-72 w-72 rounded-full bg-white/60 blur-3xl"
        transition={{ duration: 11, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        animate={{ opacity: [0.12, 0.28, 0.14], x: [20, -20, 20] }}
        className="absolute right-[8%] top-[34%] h-80 w-80 rounded-full bg-[#eec667]/20 blur-3xl"
        transition={{ duration: 13, ease: "easeInOut", repeat: Infinity }}
      />
    </div>
  );
}

function ModalShell({ children, compact = false }) {
  return (
    <main className="relative z-10 grid min-h-screen place-items-center overflow-hidden px-3 py-4 text-[#10255a] sm:px-5">
      <motion.section
        animate={{ height: compact ? "min(690px, calc(100vh - 32px))" : "min(760px, calc(100vh - 32px))" }}
        className="relative flex w-full max-w-[620px] flex-col overflow-hidden rounded-[36px] border border-white/80 bg-white/46 p-4 shadow-[0_30px_90px_rgba(45,40,31,0.12),inset_0_1px_0_rgba(255,255,255,0.92)] backdrop-blur-2xl sm:p-7"
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_42%_4%,rgba(255,255,255,0.92),transparent_30%),radial-gradient(circle_at_72%_75%,rgba(237,196,84,0.12),transparent_36%),linear-gradient(145deg,rgba(255,255,255,0.38),transparent_46%,rgba(255,255,255,0.16))]" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#efc45b]/12 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-0 h-56 w-56 rounded-full bg-white/50 blur-3xl" />
        <div className="relative flex min-h-0 flex-1 flex-col">{children}</div>
      </motion.section>
    </main>
  );
}

function LbgMark({ small = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`font-serif leading-none tracking-tight text-[#12275a] ${small ? "text-[30px]" : "text-[36px]"}`}>
        LB<span className="text-[#d7981f]">G</span>
      </div>
      <div className="text-[10px] font-extrabold uppercase leading-[1.05] tracking-[0.09em] text-[#1b2536]">
        Knowledge
        <br />
        System
      </div>
    </div>
  );
}

function SoftButton({ children, onClick, variant = "glass", ariaLabel }) {
  const styles =
    variant === "gold"
      ? "border-[#e1ad39] bg-gradient-to-b from-[#f8d778] via-[#e9b84c] to-[#c98b1a] text-white shadow-[0_16px_32px_rgba(198,137,26,0.28),inset_0_1px_0_rgba(255,255,255,0.6)]"
      : "border-white/82 bg-white/66 text-[#10255a] shadow-[0_14px_34px_rgba(37,34,28,0.08),inset_0_1px_0_rgba(255,255,255,0.88)]";

  return (
    <button
      aria-label={ariaLabel}
      className={`min-h-12 rounded-full border px-10 text-sm font-extrabold transition duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#e9bb53]/24 ${styles}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

function ArrowIcon({ className = "h-6 w-6" }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
      <path d="M12 19V5m0 0-5 5m5-5 5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function QuestionGlyph({ className = "h-5 w-5" }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
      <path d="M8.4 9.1a3.6 3.6 0 1 1 5.9 2.8c-.9.8-1.8 1.3-1.8 2.7" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <path d="M12 18.1h.01" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
      <path d="M5.4 4.8h13.2A2.4 2.4 0 0 1 21 7.2v8.9a2.4 2.4 0 0 1-2.4 2.4H9l-5 2v-3.6a2.4 2.4 0 0 1-1-1.9V7.2a2.4 2.4 0 0 1 2.4-2.4Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.55" />
    </svg>
  );
}

function ClockGlyph({ className = "h-5 w-5" }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M12 7.8v4.5l3 1.8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.75" />
    </svg>
  );
}

function CheckGlyph({ className = "h-14 w-14", delay = 0.18 }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 64 64">
      <motion.path
        animate={{ pathLength: 1 }}
        d="M17.5 33.5 28 43.5 47 21.5"
        initial={{ pathLength: 0 }}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6"
        transition={{ duration: 0.62, delay, ease: "easeOut" }}
      />
    </svg>
  );
}

function BellGlyph({ className = "h-16 w-16" }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 64 64">
      <path
        d="M19 29.4c0-7.3 5.4-13 13-13s13 5.7 13 13v10.2l3.6 6.4H15.4l3.6-6.4V29.4Z"
        fill="url(#bellGold)"
        stroke="#b87916"
        strokeLinejoin="round"
        strokeWidth="2.2"
      />
      <path d="M27 48.5c1.2 2.5 3 3.7 5 3.7s3.8-1.2 5-3.7" stroke="#b87916" strokeLinecap="round" strokeWidth="2.2" />
      <path d="M32 16v-3" stroke="#b87916" strokeLinecap="round" strokeWidth="2.2" />
      <defs>
        <linearGradient id="bellGold" x1="21" x2="44" y1="17" y2="48">
          <stop stopColor="#fff1b6" />
          <stop offset="0.5" stopColor="#e9b84c" />
          <stop offset="1" stopColor="#c88717" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function AvatarGlyph() {
  return (
    <div className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-white/82 bg-[radial-gradient(circle_at_50%_20%,#f0c09b,#b77a52_58%,#6b3d2d)] shadow-[0_12px_26px_rgba(37,34,28,0.12)]">
      <div className="absolute top-1.5 h-4 w-5 rounded-t-full bg-[#2d1b14]" />
      <div className="absolute top-4 h-4 w-4 rounded-full bg-[#c98961]" />
      <div className="absolute bottom-0 h-4 w-8 rounded-t-full bg-[#17295b]" />
      <div className="absolute left-2 top-4 h-1 w-1 rounded-full bg-[#22160f]" />
      <div className="absolute right-2 top-4 h-1 w-1 rounded-full bg-[#22160f]" />
    </div>
  );
}

function TopicIcon({ topic }) {
  const common = "h-7 w-7";
  if (topic === "Rolex") {
    return (
      <svg aria-hidden="true" className={common} fill="none" viewBox="0 0 32 32">
        <path d="M7 23 5 10l6 6 5-10 5 10 6-6-2 13H7Z" stroke="#129542" strokeLinejoin="round" strokeWidth="2.2" />
        <path d="M8 26h16" stroke="#129542" strokeLinecap="round" strokeWidth="2.2" />
      </svg>
    );
  }
  if (topic === "David Yurman") {
    return (
      <svg aria-hidden="true" className={common} fill="none" viewBox="0 0 32 32">
        <path d="M8 12h16v14H8V12Z" fill="#ffefe9" stroke="#ff4f20" strokeLinejoin="round" strokeWidth="2" />
        <path d="M16 12v14M7 16h18M12 12c-3-3 1-6 4 0m0 0c3-6 7-3 4 0" stroke="#ff4f20" strokeLinecap="round" strokeWidth="2" />
      </svg>
    );
  }
  if (topic === "Repairs") {
    return (
      <svg aria-hidden="true" className={common} fill="none" viewBox="0 0 32 32">
        <path d="m21 6 5 5-4 4-2-2-8 8v3H9v-3l8-8-2-2 6-5Z" stroke="#2f6edb" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
      </svg>
    );
  }
  if (topic === "Registry") {
    return (
      <svg aria-hidden="true" className={common} fill="none" viewBox="0 0 32 32">
        <path d="M9 6h11l4 4v16H9V6Z" fill="#eef5ff" stroke="#2f6edb" strokeLinejoin="round" strokeWidth="2" />
        <path d="M20 6v5h5M13 16h8M13 20h6" stroke="#2f6edb" strokeLinecap="round" strokeWidth="2" />
      </svg>
    );
  }
  if (topic === "Clienteling") {
    return (
      <svg aria-hidden="true" className={common} fill="none" viewBox="0 0 32 32">
        <circle cx="13" cy="11" r="4" stroke="#9b3fe8" strokeWidth="2" />
        <path d="M5 25c1.3-5 4.2-7.5 8-7.5s6.7 2.5 8 7.5" stroke="#9b3fe8" strokeLinecap="round" strokeWidth="2" />
        <path d="M22 12c2.8.3 4.7 2.4 5.6 6" stroke="#9b3fe8" strokeLinecap="round" strokeWidth="2" />
      </svg>
    );
  }
  return (
    <svg aria-hidden="true" className={common} fill="none" viewBox="0 0 32 32">
      <path d="M16 5v22M21 9.5c-1.4-1.2-3.1-1.8-5.1-1.8-3 0-5 1.5-5 3.8 0 5.4 10.8 2.6 10.8 8 0 2.7-2.4 4.5-5.8 4.5-2.4 0-4.5-.8-6.1-2.3" stroke="#d99b20" strokeLinecap="round" strokeWidth="2.2" />
    </svg>
  );
}

function AskQuestionState({ onSubmit }) {
  const topics = ["Rolex", "David Yurman", "Repairs", "Registry", "Clienteling"];

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="flex min-h-0 flex-1 flex-col"
      exit={{ opacity: 0, y: -12, scale: 0.985 }}
      initial={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-start justify-between">
        <LbgMark />
        <div className="flex items-center gap-3">
          <div className="relative grid h-11 w-11 place-items-center rounded-full border border-white/78 bg-white/72 shadow-[0_12px_28px_rgba(37,34,28,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl">
            <BellGlyph className="h-5 w-5" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-[#e7b33f]" />
          </div>
          <AvatarGlyph />
        </div>
      </div>

      <div className="relative flex flex-1 flex-col justify-center py-3 sm:py-5">
        <div className="pointer-events-none absolute inset-x-2 top-12 h-60 rounded-[42%_58%_48%_52%/42%_40%_60%_58%] bg-[linear-gradient(145deg,rgba(255,255,255,0.36),rgba(242,225,195,0.16))] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]" />
        <motion.div
          animate={{ opacity: [0.35, 0.64, 0.38], x: [-10, 10, -10] }}
          className="pointer-events-none absolute left-10 top-20 h-44 w-80 rounded-full bg-white/50 blur-3xl"
          transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
        />
        <div className="relative">
          <h1 className="text-[1.7rem] font-extrabold tracking-tight text-[#10255a] sm:text-3xl">Good morning, Aqui</h1>
          <p className="mt-2 text-sm font-semibold text-[#667088]">What would you like help with today?</p>

          <div className="mt-8 flex items-center gap-3 rounded-[28px] border border-white/80 bg-white/76 py-3 pl-5 pr-3 shadow-[0_18px_42px_rgba(42,38,31,0.12),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-2xl">
            <p className="min-w-0 flex-1 text-sm font-bold leading-snug text-[#10255a]">{QUESTION}</p>
            <button
              aria-label="Submit question"
              className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[#efc75e] bg-gradient-to-b from-[#f6ca5a] to-[#d99b20] text-white shadow-[0_13px_24px_rgba(211,148,31,0.3),inset_0_1px_0_rgba(255,255,255,0.58)] transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#e9bb53]/28"
              onClick={onSubmit}
              type="button"
            >
              <ArrowIcon />
            </button>
          </div>

          <div className="mt-8">
            <p className="mb-3 text-xs font-extrabold text-[#10255a]">Suggested topics</p>
            <div className="grid grid-cols-5 gap-2 sm:gap-3">
              {topics.map((topic) => (
                <div
                  className="flex min-h-[78px] flex-col items-center justify-center rounded-2xl border border-white/78 bg-white/66 px-1 text-center shadow-[0_12px_26px_rgba(42,38,31,0.08),inset_0_1px_0_rgba(255,255,255,0.92)] backdrop-blur-xl"
                  key={topic}
                >
                  <TopicIcon topic={topic} />
                  <span className="mt-2 text-[10px] font-extrabold leading-tight text-[#40506e]">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 text-xs font-bold text-[#65728a]">
        <span className="grid h-8 w-8 place-items-center rounded-full border border-[#f0d282] bg-[#fff8df] text-[#c1881d]">
          <CheckGlyph className="h-4 w-4" delay={0} />
        </span>
        Answers use approved LBG knowledge.
      </div>
    </motion.div>
  );
}

function ProductScreen({ children }) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className="mx-auto flex w-full max-w-[430px] flex-1 flex-col justify-center"
      exit={{ opacity: 0, y: -10, scale: 0.985 }}
      initial={{ opacity: 0, y: 16, scale: 0.985 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="rounded-[32px] border border-white/78 bg-white/48 p-5 text-left shadow-[0_26px_70px_rgba(42,40,33,0.1),inset_0_1px_0_rgba(255,255,255,0.92)] backdrop-blur-2xl">
        {children}
      </div>
    </motion.div>
  );
}

function TopControls() {
  return (
    <div className="mb-6 flex items-center justify-between text-[#10255a]">
      <span className="text-2xl leading-none">←</span>
      <div className="flex items-center gap-4 text-lg leading-none">
        <span className="h-5 w-4 rounded-sm border-2 border-current border-b-0" />
        <span className="font-extrabold tracking-widest">...</span>
      </div>
    </div>
  );
}

function MetaLine() {
  return (
    <p className="mt-3 flex items-center gap-2 text-xs font-bold text-[#65728a]">
      <span className="grid h-4 w-4 place-items-center rounded-full border border-[#8191b3] text-[9px]">i</span>
      Asked just now
    </p>
  );
}

function AnswerState() {
  return (
    <ProductScreen>
      <TopControls />
      <h1 className="max-w-sm text-xl font-extrabold leading-snug text-[#10255a]">{QUESTION}</h1>
      <MetaLine />
      <GlassCard className="mt-6 p-5">
        <div className="mb-4 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.1em] text-[#b67b14]">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-b from-[#f6cf73] to-[#d99b20] text-white shadow-[0_10px_22px_rgba(211,148,31,0.24)]">
            <CheckGlyph className="h-5 w-5" delay={0} />
          </span>
          TRAINER APPROVED
        </div>
        <p className="text-base font-bold leading-relaxed text-[#21345f]">
          Mercer and Madison are David Yurman collections with different design styles.
        </p>
        <p className="mt-3 text-sm font-semibold text-[#667088]">Here’s the short version.</p>
      </GlassCard>
      <motion.div
        animate={{ boxShadow: ["0 12px 30px rgba(42,40,33,0.07)", "0 16px 42px rgba(211,148,31,0.14)", "0 12px 30px rgba(42,40,33,0.07)"] }}
        className="mt-5 flex items-center gap-3 rounded-2xl border border-white/74 bg-white/66 px-4 py-3"
        transition={{ duration: 1.8, ease: "easeInOut" }}
      >
        <span className="text-[#2f6edb]">
          <QuestionGlyph />
        </span>
        <span className="flex-1 text-sm font-bold text-[#10255a]">{FOLLOW_UP}</span>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[#10255a] shadow-[0_8px_18px_rgba(37,34,28,0.06)]">
          <ArrowIcon className="h-4 w-4" />
        </span>
      </motion.div>
      <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/74 bg-white/58 px-4 py-3 text-sm font-extrabold text-[#10255a] shadow-[0_12px_30px_rgba(42,40,33,0.06)]">
        Learn more
        <span>⌄</span>
      </div>
      <p className="mt-5 text-center text-xs font-bold text-[#667088]">Was this helpful?</p>
    </ProductScreen>
  );
}

function GapState() {
  return (
    <ProductScreen>
      <TopControls />
      <h1 className="max-w-sm text-xl font-extrabold leading-snug text-[#10255a]">{QUESTION}</h1>
      <MetaLine />
      <GlassCard className="mt-6 border-[#efd58f]/88 bg-[#fff8e8]/70 p-5">
        <div className="flex gap-4">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-[#edd38d] bg-white/68 text-[#b67b14] shadow-[0_10px_24px_rgba(198,137,26,0.1)]">
            <QuestionGlyph />
          </span>
          <div>
            <h2 className="text-base font-extrabold leading-snug text-[#9f6713]">I don’t have the full answer to that yet.</h2>
            <p className="mt-2 text-sm font-semibold leading-relaxed text-[#746247]">
              I’ll send this for review so you get the right answer.
            </p>
          </div>
        </div>
      </GlassCard>
      <GlassCard className="mt-4 p-5">
        <h2 className="text-sm font-extrabold text-[#10255a]">What I can tell you</h2>
        <p className="mt-2 text-sm font-semibold leading-relaxed text-[#536078]">
          Mercer and Madison are different David Yurman collections. I need an approved side-by-side comparison before giving more detail.
        </p>
      </GlassCard>
      <motion.p
        animate={{ opacity: [0.62, 1, 0.62] }}
        className="mt-5 text-sm font-extrabold text-[#b67b14]"
        transition={{ duration: 1.4, ease: "easeInOut", repeat: Infinity }}
      >
        Adding this to review...
      </motion.p>
    </ProductScreen>
  );
}

function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-[24px] border border-white/78 bg-white/58 shadow-[0_18px_48px_rgba(42,40,33,0.08),inset_0_1px_0_rgba(255,255,255,0.92)] backdrop-blur-2xl ${className}`}
    >
      {children}
    </div>
  );
}

const phaseCopy = {
  capture: ["Capturing your question...", "This makes sure the right detail gets reviewed."],
  travel: ["On its way", "Sending it to someone who can confirm it."],
  queue: ["Added to the review queue", "It’s in line for an approved answer."],
  confirm: ["Question added for review", "You’ll get the answer once it’s ready."]
};

function CaptureTransferConfirmAnimation({ onComplete, sound }) {
  const [phase, setPhase] = React.useState("capture");

  React.useEffect(() => {
    sound.play("transfer");
    const timers = [
      window.setTimeout(() => setPhase("travel"), 3000),
      window.setTimeout(() => setPhase("queue"), 6600),
      window.setTimeout(() => setPhase("confirm"), 10100),
      window.setTimeout(onComplete, 13400)
    ];
    return () => timers.forEach(window.clearTimeout);
  }, [onComplete, sound]);

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="flex min-h-0 flex-1 flex-col items-center justify-center text-center"
      exit={{ opacity: 0, scale: 0.985 }}
      initial={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <HeroStage phase={phase} />
      <AnimatePresence mode="wait">
        <motion.div
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          className="mx-auto mt-4 max-w-sm px-3"
          exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
          initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
          key={phase}
          transition={{ duration: 0.38, ease: "easeOut" }}
        >
          <h1 className="text-[1.55rem] font-extrabold tracking-tight text-[#10255a] sm:text-[1.7rem]">{phaseCopy[phase][0]}</h1>
          <p className="mt-2 text-sm font-semibold leading-relaxed text-[#65728a]">{phaseCopy[phase][1]}</p>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

function HeroStage({ phase }) {
  return (
    <div className="relative mx-auto aspect-[540/330] w-full max-w-[540px] overflow-hidden rounded-[32px] border border-white/58 bg-white/18 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.74),transparent_34%),radial-gradient(circle_at_52%_70%,rgba(237,196,84,0.13),transparent_35%)]" />
      <ParticleField active={phase !== "capture" ? 1 : 0.72} />
      <PedestalAnchor phase={phase} />
      <LightTrail phase={phase} />
      <CapturedCardAnchor phase={phase} />
      <ReviewQueueTray phase={phase} />
      <ConfirmationChamber phase={phase} />
    </div>
  );
}

function PedestalAnchor({ phase }) {
  const visible = phase !== "confirm";
  const x = phase === "capture" ? "-50%" : phase === "travel" ? "-58%" : "-62%";
  return (
    <motion.div
      animate={{ opacity: visible ? (phase === "queue" ? 0.42 : 1) : 0.08, x, scale: phase === "travel" ? 0.96 : 1 }}
      className="absolute left-1/2 top-[55%] z-10 w-[54%] -translate-y-1/2"
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <GlowPedestal />
    </motion.div>
  );
}

function CapturedCardAnchor({ phase }) {
  const states = {
    capture: { left: "50%", top: "29%", scale: 1, rotate: -3, opacity: 1 },
    travel: { left: "58%", top: "24%", scale: 0.9, rotate: 5, opacity: 1 },
    queue: { left: "70%", top: "44%", scale: 0.62, rotate: -1, opacity: 0.32 },
    confirm: { left: "50%", top: "52%", scale: 0.44, rotate: 0, opacity: 0 }
  };
  return (
    <motion.div
      animate={states[phase]}
      className="absolute z-40 -translate-x-1/2 -translate-y-1/2"
      transition={{ duration: phase === "queue" ? 1.45 : 1.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <GlassQuestionCard />
    </motion.div>
  );
}

function GlassQuestionCard() {
  return (
    <motion.div
      animate={{ y: [0, -7, 0], rotate: [-2.5, -0.5, -2.5] }}
      className="relative h-[150px] w-[126px] rounded-[28px] border border-white/86 bg-white/50 p-4 text-left shadow-[0_26px_58px_rgba(31,36,51,0.15),inset_0_1px_0_rgba(255,255,255,0.94),inset_0_-18px_36px_rgba(239,196,91,0.09)] backdrop-blur-2xl"
      transition={{ duration: 3.8, ease: "easeInOut", repeat: Infinity }}
    >
      <div className="absolute inset-0 rounded-[26px] bg-[linear-gradient(138deg,rgba(255,255,255,0.82),transparent_44%,rgba(239,196,91,0.17))]" />
      <div className="absolute inset-x-5 top-2 h-6 rounded-full bg-white/36 blur-sm" />
      <div className="absolute -bottom-5 left-5 right-5 h-8 rounded-full bg-[#d8a23a]/12 blur-xl" />
      <div className="relative mb-3 flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.1em] text-[#9099aa]">
        <span className="grid h-5 w-5 place-items-center rounded-md border border-white/74 bg-white/62 text-[#63708b]">
          <QuestionGlyph className="h-3.5 w-3.5" />
        </span>
        Your question
      </div>
      <p className="relative text-[12px] font-extrabold leading-snug text-[#10255a]">{FOLLOW_UP}</p>
      <div className="relative mt-4 space-y-1.5">
        <div className="h-1.5 w-20 rounded-full bg-[#9aa5ba]/18" />
        <div className="h-1.5 w-14 rounded-full bg-[#9aa5ba]/14" />
      </div>
    </motion.div>
  );
}

function GlowPedestal() {
  return (
    <div className="relative h-[150px] w-full">
      <motion.div
        animate={{ opacity: [0.3, 0.68, 0.36], scale: [0.92, 1.08, 0.96] }}
        className="absolute inset-x-[18%] bottom-[5%] h-[44%] rounded-[999px] bg-[#e8b13b]/34 blur-2xl"
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        animate={{ scale: [0.97, 1.025, 0.97], opacity: [0.82, 1, 0.84] }}
        className="absolute inset-x-[8%] bottom-[18%] h-[47%] rounded-[999px] border border-[#f3d583]/82 bg-[radial-gradient(ellipse_at_center,rgba(255,250,225,0.95),rgba(239,196,91,0.34)_42%,rgba(255,255,255,0.22)_68%,rgba(255,255,255,0.05))] shadow-[0_24px_68px_rgba(213,151,34,0.22),inset_0_1px_0_rgba(255,255,255,0.84)]"
        transition={{ duration: 3.2, ease: "easeInOut", repeat: Infinity }}
      />
      <div className="absolute inset-x-[15%] bottom-[30%] h-[28%] rounded-[999px] border border-white/70 bg-white/28 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]" />
      <div className="absolute inset-x-[26%] bottom-[42%] h-[15%] rounded-[999px] bg-white/46 blur-[1px]" />
      <motion.div
        animate={{ opacity: [0, 0.55, 0], scale: [0.65, 1.22, 1.65] }}
        className="absolute left-1/2 top-[48%] h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#efc45b]/38"
        transition={{ duration: 2.7, ease: "easeOut", repeat: Infinity, repeatDelay: 0.45 }}
      />
    </div>
  );
}

function LightTrail({ phase }) {
  const visible = phase === "travel" || phase === "queue" || phase === "confirm";
  return (
    <motion.div animate={{ opacity: visible ? 1 : 0 }} className="pointer-events-none absolute inset-0 z-20" transition={{ duration: 0.4 }}>
      <svg className="absolute inset-0 h-full w-full overflow-visible" fill="none" viewBox="0 0 540 330">
        <motion.path
          animate={{ pathLength: visible ? 1 : 0, opacity: visible ? [0.08, 0.9, 0.55] : 0 }}
          d="M178 208C230 161 268 184 313 136C357 88 410 98 452 134"
          stroke="url(#trailWide)"
          strokeLinecap="round"
          strokeWidth="25"
          transition={{ duration: 2.55, ease: "easeInOut" }}
        />
        <motion.path
          animate={{ pathLength: visible ? 1 : 0 }}
          d="M178 208C230 161 268 184 313 136C357 88 410 98 452 134"
          stroke="url(#trailCore)"
          strokeLinecap="round"
          strokeWidth="4.5"
          transition={{ duration: 2.25, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="trailWide" x1="178" x2="452" y1="208" y2="134">
            <stop stopColor="#ffffff" stopOpacity="0.1" />
            <stop offset="0.45" stopColor="#f1c763" stopOpacity="0.76" />
            <stop offset="1" stopColor="#fff4c2" stopOpacity="0.22" />
          </linearGradient>
          <linearGradient id="trailCore" x1="178" x2="452" y1="208" y2="134">
            <stop stopColor="#fff9db" stopOpacity="0.2" />
            <stop offset="0.5" stopColor="#f6d36e" stopOpacity="0.98" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0.25" />
          </linearGradient>
        </defs>
      </svg>
      {[0, 1, 2, 3].map((item) => (
        <motion.span
          animate={
            visible
              ? { opacity: [0, 0.9, 0], left: ["36%", "55%", "76%"], top: ["63%", "39%", "43%"], scale: [0.55, 1.15, 0.55] }
              : { opacity: 0 }
          }
          className="absolute h-2 w-2 rounded-full bg-[#f6d36e] shadow-[0_0_22px_9px_rgba(239,196,91,0.3)]"
          key={item}
          transition={{ delay: item * 0.28, duration: 2.55, ease: "easeInOut", repeat: visible ? 2 : 0, repeatDelay: 0.5 }}
        />
      ))}
    </motion.div>
  );
}

function ReviewQueueTray({ phase }) {
  const show = phase === "queue" || phase === "confirm";
  return (
    <motion.div
      animate={{
        opacity: show ? (phase === "confirm" ? 0 : 1) : 0,
        scale: phase === "queue" ? [0.88, 1.04, 1] : 0.96,
        y: phase === "queue" ? [18, -3, 0] : 18
      }}
      className="absolute left-[59%] top-[22%] z-30 w-[38%] max-w-[218px]"
      transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        animate={{ opacity: show ? [0.22, 0.74, 0.34] : 0, scale: [0.9, 1.13, 1] }}
        className="absolute inset-x-4 top-[68%] h-20 rounded-full bg-[#efc45b]/38 blur-2xl"
        transition={{ duration: 1.35, ease: "easeOut" }}
      />
      <div className="relative overflow-hidden rounded-[28px] border border-white/82 bg-white/48 p-4 shadow-[0_30px_76px_rgba(42,40,33,0.13),inset_0_1px_0_rgba(255,255,255,0.94),inset_0_-20px_45px_rgba(239,196,91,0.11)] backdrop-blur-2xl">
        <div className="absolute inset-x-5 top-2 h-8 rounded-full bg-white/36 blur-sm" />
        <div className="mb-3 flex items-center justify-between text-left">
          <div>
            <p className="text-[12px] font-extrabold text-[#10255a]">Review Queue</p>
            <p className="text-[10px] font-semibold text-[#73809a]">New questions</p>
          </div>
          <span className="grid h-8 w-8 place-items-center rounded-full border border-[#efd58f] bg-[#fff7df] text-[#b87a14]">
            <ClockGlyph className="h-4 w-4" />
          </span>
        </div>
        <div className="relative h-32">
          <motion.div
            animate={phase === "queue" ? { y: [4, 10, 6] } : {}}
            className="absolute bottom-0 left-8 right-8 h-11 rounded-2xl border border-[#f0d282]/70 bg-[#f7d477]/36 shadow-[0_16px_38px_rgba(211,150,35,0.17)]"
          />
          <motion.div
            animate={phase === "queue" ? { y: [0, 7, 3] } : {}}
            className="absolute bottom-5 left-4 right-4 h-14 rounded-2xl border border-white/74 bg-white/54 shadow-[0_18px_40px_rgba(34,42,62,0.09)]"
          />
          <motion.div
            animate={phase === "queue" ? { y: [-25, 0, -2], rotate: [-4, -1, -1] } : {}}
            className="absolute bottom-10 left-0 right-0 rounded-2xl border border-white/88 bg-white/78 p-3 text-left shadow-[0_18px_44px_rgba(34,42,62,0.12),inset_0_1px_0_rgba(255,255,255,0.9)]"
          >
            <p className="mb-1.5 text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#b87a14]">New Question</p>
            <p className="text-[11px] font-extrabold leading-snug text-[#10255a]">{FOLLOW_UP}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function ConfirmationChamber({ phase }) {
  const show = phase === "confirm";
  return (
    <motion.div
      animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0.9, y: show ? 0 : 20 }}
      className="absolute inset-0 z-40"
      transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        animate={show ? { opacity: [0.22, 0.68, 0.42], scale: [0.9, 1.1, 1] } : {}}
        className="absolute left-1/2 top-[42%] h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#efc45b]/34 blur-3xl"
        transition={{ duration: 2.8, ease: "easeInOut", repeat: Infinity }}
      />
      <div className="absolute left-1/2 top-[60%] w-[52%] -translate-x-1/2 -translate-y-1/2">
        <GlowPedestal />
      </div>
      <motion.div
        animate={show ? { y: [22, -8, 0], rotate: [-2, 1, 0] } : {}}
        className="absolute left-1/2 top-[43%] grid h-[58%] w-[43%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[34px] border border-white/82 bg-white/34 shadow-[0_34px_92px_rgba(215,156,44,0.22),inset_0_1px_0_rgba(255,255,255,0.92),inset_0_-24px_48px_rgba(239,196,91,0.12)] backdrop-blur-2xl"
        transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-x-5 bottom-0 h-[54%] rounded-[28px] border border-[#f0d282]/74 bg-[#f6cf71]/22" />
        <div className="absolute inset-x-6 top-5 h-10 rounded-full bg-white/38 blur-sm" />
        <div className="absolute left-5 top-7 h-[70%] w-4 rounded-full bg-white/28 blur-sm" />
        <div className="absolute right-5 top-7 h-[70%] w-4 rounded-full bg-[#f6d36e]/12 blur-sm" />
        <motion.div
          animate={show ? { opacity: [0, 0.58, 0], scale: [0.8, 1.24, 1.58] } : {}}
          className="absolute h-32 w-32 rounded-full border border-[#f1cf76]/50"
          transition={{ delay: 0.75, duration: 1.2, ease: "easeOut" }}
        />
        <motion.div
          animate={show ? { opacity: 1, y: [34, -8, 0], scale: [0.64, 1.12, 1] } : {}}
          className="relative grid h-28 w-28 place-items-center rounded-full border border-[#f1cf76]/84 bg-[radial-gradient(circle_at_35%_22%,rgba(255,255,255,0.84),rgba(255,248,220,0.55)_42%,rgba(239,196,91,0.28))] text-[#d89c25] shadow-[0_20px_52px_rgba(211,148,31,0.26),inset_0_1px_0_rgba(255,255,255,0.84)]"
          transition={{ delay: 0.68, duration: 0.92, ease: [0.22, 1, 0.36, 1] }}
        >
          <CheckGlyph />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function ParticleField({ active = 1 }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 16 }).map((_, index) => (
        <motion.span
          animate={{ opacity: [0, 0.58 * active, 0], y: [18, -28, -60], scale: [0.5, 1, 0.55] }}
          className="absolute h-1.5 w-1.5 rounded-full bg-[#f2cf75] shadow-[0_0_14px_4px_rgba(239,196,91,0.2)]"
          key={index}
          style={{ left: `${16 + ((index * 41) % 68)}%`, top: `${30 + ((index * 29) % 44)}%` }}
          transition={{ delay: index * 0.2, duration: 3.8 + (index % 3) * 0.42, ease: "easeInOut", repeat: Infinity }}
        />
      ))}
    </div>
  );
}

function SealMedallion() {
  return (
    <div className="relative mx-auto grid h-60 w-60 place-items-center">
      <motion.div
        animate={{ opacity: [0.16, 0.34, 0.18], scale: [0.9, 1.08, 0.96] }}
        className="absolute h-48 w-48 rounded-full bg-[#e5aa35]/28 blur-3xl"
        transition={{ duration: 3.8, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        animate={{ opacity: [0, 0.5, 0], scale: [0.52, 1.28, 1.8] }}
        className="absolute h-40 w-40 rounded-full border border-[#e5b147]/56"
        transition={{ delay: 0.42, duration: 1.05, ease: "easeOut" }}
      />
      <motion.div
        animate={{ opacity: 1, rotate: [-9, 1.8, 0], scale: [1.35, 0.82, 1.045, 1], y: [-138, 22, -4, 0] }}
        className="relative grid h-40 w-40 place-items-center rounded-full bg-[conic-gradient(from_20deg,#b97710,#fff1b6,#d99d29,#fff8d5,#bd7b12,#f5ce66,#b97710)] p-2 shadow-[0_22px_54px_rgba(198,137,26,0.3),inset_0_1px_0_rgba(255,255,255,0.68)]"
        initial={{ opacity: 0, rotate: -8, scale: 1.2, y: -126 }}
        transition={{ duration: 0.98, ease: [0.16, 1, 0.3, 1], times: [0, 0.48, 0.75, 1] }}
      >
        <div className="absolute inset-1 rounded-full border border-[#fff6c7]/60" />
        <div className="absolute inset-3 rounded-full border border-[#9d6811]/22" />
        {Array.from({ length: 24 }).map((_, index) => (
          <span
            className="absolute left-1/2 top-1/2 h-[86px] w-[2px] origin-bottom rounded-full bg-white/18"
            key={index}
            style={{ transform: `translate(-50%, -100%) rotate(${index * 15}deg)` }}
          />
        ))}
        <div className="relative grid h-full w-full place-items-center rounded-full border border-white/76 bg-[radial-gradient(circle_at_32%_22%,#fff9dd,#efbd4d_56%,#c78619)] text-white">
          <CheckGlyph className="h-16 w-16 drop-shadow" />
        </div>
      </motion.div>
    </div>
  );
}

function ThankYouState({ onAwesome }) {
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-1 flex-col items-center justify-center text-center"
      exit={{ opacity: 0, y: -12, scale: 0.985 }}
      initial={{ opacity: 0, scale: 0.985 }}
      transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
    >
      <SealMedallion />
      <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-[#10255a]">Thank you, Aqui.</h1>
      <p className="mt-3 max-w-sm text-base font-semibold leading-relaxed text-[#5f6b83]">You helped flag something worth answering.</p>
      <div className="mt-8">
        <SoftButton onClick={onAwesome} variant="gold">
          Awesome
        </SoftButton>
      </div>
    </motion.div>
  );
}

function BellBubble() {
  return (
    <div className="relative mx-auto grid h-56 w-56 place-items-center">
      <motion.div
        animate={{ opacity: [0.18, 0.42, 0.2], scale: [0.86, 1.08, 0.96] }}
        className="absolute h-44 w-44 rounded-full bg-[#efc45b]/20 blur-3xl"
        transition={{ duration: 3.4, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        animate={{ scale: [0.9, 1.06, 1], opacity: 1 }}
        className="relative grid h-40 w-40 place-items-center rounded-full border border-white/80 bg-white/44 shadow-[0_26px_62px_rgba(42,40,33,0.1),inset_0_1px_0_rgba(255,255,255,0.92)] backdrop-blur-2xl"
        initial={{ scale: 0.86, opacity: 0 }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-4 rounded-full border border-white/54 bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,0.8),transparent_36%),rgba(255,255,255,0.16)]" />
        <motion.div
          animate={{ rotate: [0, -7, 6, -4, 3, 0], y: [0, -2, 0] }}
          className="relative text-[#d99b20]"
          transition={{ delay: 0.2, duration: 1.05, ease: "easeInOut" }}
        >
          <BellGlyph className="h-20 w-20 drop-shadow" />
        </motion.div>
      </motion.div>
      <motion.span
        animate={{ opacity: 1, scale: [0.6, 1.12, 1], y: [8, -2, 0] }}
        className="absolute right-8 top-8 grid h-9 w-9 place-items-center rounded-full border border-white/82 bg-[#efbd4d] text-sm font-extrabold text-white shadow-[0_12px_24px_rgba(211,148,31,0.25)]"
        initial={{ opacity: 0, scale: 0.6, y: 8 }}
        transition={{ delay: 0.42, duration: 0.5, ease: "easeOut" }}
      >
        1
      </motion.span>
    </div>
  );
}

function NotificationState() {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-1 flex-col items-center justify-center text-center"
      exit={{ opacity: 0, y: -12 }}
      initial={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
    >
      <BellBubble />
      <h1 className="mt-1 max-w-md text-3xl font-extrabold leading-tight tracking-tight text-[#10255a]">
        We’ll let you know when it’s ready.
      </h1>
      <p className="mt-3 text-base font-semibold leading-relaxed text-[#5f6b83]">You’ll see the update here.</p>
      <div className="mt-8">
        <SoftButton>Got it</SoftButton>
      </div>
    </motion.div>
  );
}

function HeroObjectReview() {
  return (
    <main className="relative z-10 min-h-screen overflow-hidden px-4 py-6 text-[#10255a]">
      <section className="mx-auto flex min-h-[calc(100vh-48px)] w-full max-w-[1180px] flex-col rounded-[38px] border border-white/78 bg-white/42 p-5 shadow-[0_30px_90px_rgba(45,40,31,0.12),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-2xl sm:p-7">
        <div className="mb-5 flex items-center justify-between gap-4">
          <LbgMark />
          <div className="rounded-full border border-white/76 bg-white/60 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[#8a6a24] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
            Hero Object Review
          </div>
        </div>
        <div className="grid flex-1 grid-cols-1 gap-4 lg:grid-cols-3">
          <HeroObjectTile title="Captured Question" subtitle="Glass card lifted above a layered capture base">
            <CapturedObjectStill />
          </HeroObjectTile>
          <HeroObjectTile title="Light Path" subtitle="Directional champagne trail from base to queue">
            <TrailObjectStill />
          </HeroObjectTile>
          <HeroObjectTile title="Review Queue" subtitle="Layered glass tray receiving the question">
            <QueueObjectStill />
          </HeroObjectTile>
          <HeroObjectTile title="Confirmation Chamber" subtitle="Glass box with accepted check rising inside">
            <ConfirmationObjectStill />
          </HeroObjectTile>
          <HeroObjectTile title="Stamped Seal" subtitle="Gold medallion payoff for the thank-you moment">
            <div className="scale-[0.82]">
              <SealMedallion />
            </div>
          </HeroObjectTile>
          <HeroObjectTile title="Notification Bubble" subtitle="Bell protected inside liquid glass">
            <div className="scale-[0.92]">
              <BellBubble />
            </div>
          </HeroObjectTile>
        </div>
      </section>
    </main>
  );
}

function HeroObjectTile({ children, title, subtitle }) {
  return (
    <div className="relative flex min-h-[330px] flex-col overflow-hidden rounded-[30px] border border-white/76 bg-white/44 p-4 shadow-[0_20px_54px_rgba(42,38,31,0.09),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-2xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.65),transparent_32%),radial-gradient(circle_at_52%_76%,rgba(239,196,91,0.14),transparent_38%)]" />
      <div className="relative flex min-h-0 flex-1 items-center justify-center rounded-[24px] border border-white/46 bg-white/16">
        {children}
      </div>
      <div className="relative pt-4 text-center">
        <h2 className="text-lg font-extrabold tracking-tight text-[#10255a]">{title}</h2>
        <p className="mt-1 text-xs font-semibold leading-relaxed text-[#667088]">{subtitle}</p>
      </div>
    </div>
  );
}

function CapturedObjectStill() {
  return (
    <div className="relative h-[250px] w-full">
      <div className="absolute left-1/2 top-[54%] w-[330px] max-w-[84%] -translate-x-1/2 -translate-y-1/2">
        <GlowPedestal />
      </div>
      <div className="absolute left-1/2 top-[32%] -translate-x-1/2 -translate-y-1/2">
        <GlassQuestionCard />
      </div>
      <MiniSparkles />
    </div>
  );
}

function TrailObjectStill() {
  return (
    <div className="relative h-[250px] w-full overflow-hidden">
      <div className="absolute left-[25%] top-[57%] w-[260px] -translate-x-1/2 -translate-y-1/2 opacity-90">
        <GlowPedestal />
      </div>
      <svg className="absolute inset-0 h-full w-full overflow-visible" fill="none" viewBox="0 0 360 250">
        <path d="M86 166C129 119 166 151 204 105C242 59 286 70 325 103" stroke="rgba(239,196,91,0.18)" strokeLinecap="round" strokeWidth="34" />
        <path d="M86 166C129 119 166 151 204 105C242 59 286 70 325 103" stroke="url(#reviewTrail)" strokeLinecap="round" strokeWidth="7" />
        <defs>
          <linearGradient id="reviewTrail" x1="86" x2="325" y1="166" y2="103">
            <stop stopColor="#ffffff" stopOpacity="0.18" />
            <stop offset="0.42" stopColor="#f2ca65" stopOpacity="1" />
            <stop offset="1" stopColor="#fff4c2" stopOpacity="0.24" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute left-[73%] top-[38%] -translate-x-1/2 -translate-y-1/2 scale-[0.76]">
        <GlassQuestionCard />
      </div>
      <MiniSparkles />
    </div>
  );
}

function QueueObjectStill() {
  return (
    <div className="relative h-[250px] w-full">
      <div className="absolute left-1/2 top-[50%] w-[260px] -translate-x-1/2 -translate-y-1/2">
        <StaticQueueTray />
      </div>
      <MiniSparkles />
    </div>
  );
}

function StaticQueueTray() {
  return (
    <div className="relative">
      <div className="absolute inset-x-8 top-[72%] h-20 rounded-full bg-[#efc45b]/40 blur-2xl" />
      <div className="relative overflow-hidden rounded-[30px] border border-white/84 bg-white/50 p-5 shadow-[0_30px_76px_rgba(42,40,33,0.14),inset_0_1px_0_rgba(255,255,255,0.94),inset_0_-20px_45px_rgba(239,196,91,0.12)] backdrop-blur-2xl">
        <div className="absolute inset-x-6 top-2 h-8 rounded-full bg-white/38 blur-sm" />
        <div className="mb-4 flex items-center justify-between text-left">
          <div>
            <p className="text-[13px] font-extrabold text-[#10255a]">Review Queue</p>
            <p className="text-[11px] font-semibold text-[#73809a]">New questions</p>
          </div>
          <span className="grid h-9 w-9 place-items-center rounded-full border border-[#efd58f] bg-[#fff7df] text-[#b87a14]">
            <ClockGlyph />
          </span>
        </div>
        <div className="relative h-36">
          <div className="absolute bottom-0 left-9 right-9 h-12 rounded-2xl border border-[#f0d282]/70 bg-[#f7d477]/38 shadow-[0_16px_38px_rgba(211,150,35,0.18)]" />
          <div className="absolute bottom-5 left-5 right-5 h-16 rounded-2xl border border-white/76 bg-white/56 shadow-[0_18px_40px_rgba(34,42,62,0.1)]" />
          <div className="absolute bottom-11 left-0 right-0 rotate-[-1deg] rounded-2xl border border-white/88 bg-white/78 p-4 text-left shadow-[0_18px_44px_rgba(34,42,62,0.13),inset_0_1px_0_rgba(255,255,255,0.9)]">
            <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#b87a14]">New Question</p>
            <p className="text-[12px] font-extrabold leading-snug text-[#10255a]">{FOLLOW_UP}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConfirmationObjectStill() {
  return (
    <div className="relative h-[250px] w-full">
      <div className="absolute left-1/2 top-[62%] w-[320px] max-w-[86%] -translate-x-1/2 -translate-y-1/2">
        <GlowPedestal />
      </div>
      <div className="absolute left-1/2 top-[43%] h-[150px] w-[190px] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 rounded-[34px] border border-white/82 bg-white/34 shadow-[0_34px_92px_rgba(215,156,44,0.22),inset_0_1px_0_rgba(255,255,255,0.92),inset_0_-24px_48px_rgba(239,196,91,0.12)] backdrop-blur-2xl" />
        <div className="absolute inset-x-5 bottom-0 h-[54%] rounded-[28px] border border-[#f0d282]/74 bg-[#f6cf71]/22" />
        <div className="absolute inset-x-6 top-5 h-10 rounded-full bg-white/38 blur-sm" />
        <div className="absolute left-5 top-7 h-[70%] w-4 rounded-full bg-white/28 blur-sm" />
        <div className="absolute right-5 top-7 h-[70%] w-4 rounded-full bg-[#f6d36e]/12 blur-sm" />
        <div className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#f1cf76]/84 bg-[radial-gradient(circle_at_35%_22%,rgba(255,255,255,0.84),rgba(255,248,220,0.55)_42%,rgba(239,196,91,0.28))] text-[#d89c25] shadow-[0_20px_52px_rgba(211,148,31,0.26),inset_0_1px_0_rgba(255,255,255,0.84)]">
          <CheckGlyph className="h-12 w-12" />
        </div>
      </div>
      <MiniSparkles />
    </div>
  );
}

function MiniSparkles() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {Array.from({ length: 10 }).map((_, index) => (
        <motion.span
          animate={{ opacity: [0, 0.7, 0], y: [8, -18, -36], scale: [0.55, 1, 0.55] }}
          className="absolute h-1.5 w-1.5 rounded-full bg-[#f2cf75] shadow-[0_0_14px_4px_rgba(239,196,91,0.2)]"
          key={index}
          style={{ left: `${18 + ((index * 47) % 66)}%`, top: `${32 + ((index * 31) % 42)}%` }}
          transition={{ delay: index * 0.18, duration: 3.2 + (index % 3) * 0.35, ease: "easeInOut", repeat: Infinity }}
        />
      ))}
    </div>
  );
}

function KnowledgeGapDemo() {
  const [state, setState] = React.useState("ask");
  const sound = React.useMemo(() => createSoundDesign(), []);
  const timers = React.useRef([]);

  const clearTimers = React.useCallback(() => {
    timers.current.forEach(window.clearTimeout);
    timers.current = [];
  }, []);

  React.useEffect(() => clearTimers, [clearTimers]);

  function schedule(callback, ms) {
    const timer = window.setTimeout(callback, ms);
    timers.current.push(timer);
  }

  function submitQuestion() {
    clearTimers();
    sound.play("submit");
    setState("answer");
    schedule(() => setState("gap"), 2300);
    schedule(() => setState("captureTransferConfirm"), 5200);
  }

  function completeCapture() {
    sound.play("stamp");
    setState("thankYou");
  }

  function showNotification() {
    sound.play("bell");
    setState("notified");
  }

  return (
    <ModalShell compact={state !== "ask" && state !== "answer" && state !== "gap"}>
      <AnimatePresence mode="wait">
        {state === "ask" && <AskQuestionState key="ask" onSubmit={submitQuestion} />}
        {state === "answer" && <AnswerState key="answer" />}
        {state === "gap" && <GapState key="gap" />}
        {state === "captureTransferConfirm" && <CaptureTransferConfirmAnimation key="capture" onComplete={completeCapture} sound={sound} />}
        {state === "thankYou" && <ThankYouState key="thank-you" onAwesome={showNotification} />}
        {state === "notified" && <NotificationState key="notified" />}
      </AnimatePresence>
    </ModalShell>
  );
}

function createSoundDesign() {
  let context;
  let master;

  function getContext() {
    if (!context) {
      context = new AudioContext();
      master = context.createGain();
      master.gain.value = 0.34;
      master.connect(context.destination);
    }
    if (context.state === "suspended") context.resume();
    return context;
  }

  function tone({ frequency, start = 0, duration = 0.16, type = "sine", gain = 0.18 }) {
    const ctx = getContext();
    const oscillator = ctx.createOscillator();
    const envelope = ctx.createGain();
    const now = ctx.currentTime + start;
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, now);
    envelope.gain.setValueAtTime(0.0001, now);
    envelope.gain.exponentialRampToValueAtTime(gain, now + 0.018);
    envelope.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    oscillator.connect(envelope);
    envelope.connect(master);
    oscillator.start(now);
    oscillator.stop(now + duration + 0.03);
  }

  function noise({ start = 0, duration = 0.24, gain = 0.08, highpass = 480, lowpass = 2800 }) {
    const ctx = getContext();
    const length = Math.max(1, Math.floor(ctx.sampleRate * duration));
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let index = 0; index < length; index += 1) {
      const fade = 1 - index / length;
      data[index] = (Math.random() * 2 - 1) * fade * fade;
    }
    const source = ctx.createBufferSource();
    const high = ctx.createBiquadFilter();
    const low = ctx.createBiquadFilter();
    const envelope = ctx.createGain();
    const now = ctx.currentTime + start;
    high.type = "highpass";
    high.frequency.value = highpass;
    low.type = "lowpass";
    low.frequency.value = lowpass;
    envelope.gain.setValueAtTime(0.0001, now);
    envelope.gain.exponentialRampToValueAtTime(gain, now + 0.02);
    envelope.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    source.buffer = buffer;
    source.connect(high);
    high.connect(low);
    low.connect(envelope);
    envelope.connect(master);
    source.start(now);
    source.stop(now + duration + 0.03);
  }

  return {
    play(cue) {
      try {
        if (cue === "submit") {
          tone({ frequency: 430, duration: 0.08, gain: 0.12 });
          tone({ frequency: 610, start: 0.045, duration: 0.12, gain: 0.08 });
        }
        if (cue === "transfer") {
          noise({ duration: 0.5, gain: 0.075, highpass: 700, lowpass: 4300 });
          tone({ frequency: 523.25, start: 0.03, duration: 0.28, gain: 0.07 });
          tone({ frequency: 659.25, start: 0.22, duration: 0.34, gain: 0.055 });
        }
        if (cue === "stamp") {
          tone({ frequency: 123.47, duration: 0.1, gain: 0.17, type: "triangle" });
          noise({ start: 0.006, duration: 0.14, gain: 0.1, highpass: 60, lowpass: 540 });
          tone({ frequency: 523.25, start: 0.1, duration: 0.24, gain: 0.1 });
          tone({ frequency: 659.25, start: 0.18, duration: 0.3, gain: 0.08 });
          tone({ frequency: 783.99, start: 0.28, duration: 0.36, gain: 0.06 });
        }
        if (cue === "bell") {
          tone({ frequency: 880, duration: 0.18, gain: 0.1 });
          tone({ frequency: 1174.66, start: 0.14, duration: 0.2, gain: 0.08 });
          tone({ frequency: 880, start: 0.32, duration: 0.18, gain: 0.06 });
        }
      } catch {
        // Audio remains optional if the browser blocks it.
      }
    }
  };
}

export default function App() {
  const showObjectReview =
    typeof window !== "undefined" && new URLSearchParams(window.location.search).get("objects") === "1";

  return (
    <>
      <DayGlassBackground />
      {showObjectReview ? <HeroObjectReview /> : <KnowledgeGapDemo />}
    </>
  );
}
