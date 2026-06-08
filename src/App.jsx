import { AnimatePresence, motion } from "motion/react";
import React, { useMemo, useState } from "react";

const question = "What\u2019s the difference between Mercer and Madison? They look the same.";
const bestAnswer =
  "Mercer and Madison are David Yurman collection names. I don\u2019t have the fully approved answer for the exact difference between those two collections yet.";

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
    <div
      className={`border border-white/70 bg-white/50 shadow-glass backdrop-blur-2xl ${className}`}
    >
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

function QuestionCard({ compact = false, className = "" }) {
  return (
    <GlassCard
      className={`relative overflow-hidden rounded-[28px] p-5 ${
        compact ? "max-w-[280px]" : "w-full max-w-[520px]"
      } ${className}`}
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
        Good question {"\u2014"} this is worth adding.
      </h2>
      <p className="mt-3 text-base leading-relaxed text-[#59657e]">
        We{"\u2019"}ll get the right answer reviewed and let you know when it{"\u2019"}s ready.
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
          <div>
            <p className="text-base font-extrabold text-[#10255a]">Awaiting Answer</p>
          </div>
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
    <div className="relative mx-auto grid h-48 w-48 place-items-center">
      <motion.div
        animate={{ opacity: [0, 0.34, 0], scale: [0.55, 1.28, 1.72] }}
        className="absolute h-36 w-36 rounded-full border border-[#e5b147]/50"
        initial={{ opacity: 0, scale: 0.55 }}
        transition={{ delay: 0.32, duration: 0.9, ease: "easeOut" }}
      />
      <motion.div
        animate={{ opacity: [0, 0.32, 0.16], scale: [0.72, 1.08, 1] }}
        className="absolute h-24 w-40 rounded-full bg-[#c88b1f]/22 blur-xl"
        initial={{ opacity: 0, scale: 0.68 }}
        transition={{ delay: 0.25, duration: 0.58, ease: "easeOut" }}
      />
      <motion.div
        animate={{
          opacity: 1,
          rotate: [-7, 1.2, 0],
          scale: [1.22, 0.92, 1.02, 1],
          y: [-118, 12, -3, 0]
        }}
        className="relative grid h-36 w-36 place-items-center rounded-full bg-[conic-gradient(from_20deg,#d39122,#fff0ae,#dca12d,#fff7c8,#cc891a,#f8d16b,#d39122)] p-2 shadow-gold"
        initial={{ opacity: 0, rotate: -7, scale: 1.18, y: -118 }}
        transition={{ duration: 0.82, ease: [0.16, 1, 0.3, 1], times: [0, 0.46, 0.72, 1] }}
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
              transition={{ delay: 0.46, duration: 0.5, ease: "easeOut" }}
            />
          </motion.svg>
        </div>
      </motion.div>
    </div>
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
  const sound = useMemo(() => createSoundDesign(), []);

  async function startFlow() {
    if (running) return;
    sound.play("tap");
    setRunning(true);
    for (const nextStage of stages.slice(1)) {
      setStage(nextStage);
      sound.play(nextStage);
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
            <StageShell
              key="capture-flow"
              label={stage === "stack" ? "Awaiting Answer" : "Question captured"}
            >
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
                We{"\u2019"}ll let you know when the answer is ready.
              </h1>
              <p className="mt-3 text-base leading-relaxed text-[#5c6780]">You{"\u2019"}ll see it in Updates.</p>
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
    answer: 3400,
    gap: 3600,
    capture: 1400,
    moving: 1600,
    stack: 1500,
    seal: 1600,
    thanks: 3200,
    notify: 0
  }[stage];
}

function createSoundDesign() {
  let context;
  let master;

  function getContext() {
    if (!context) {
      context = new AudioContext();
      master = context.createGain();
      master.gain.value = 0.16;
      master.connect(context.destination);
    }
    if (context.state === "suspended") context.resume();
    return context;
  }

  function tone({ frequency, start = 0, duration = 0.16, type = "sine", gain = 0.22, detune = 0 }) {
    const ctx = getContext();
    const oscillator = ctx.createOscillator();
    const envelope = ctx.createGain();
    const now = ctx.currentTime + start;

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, now);
    oscillator.detune.setValueAtTime(detune, now);
    envelope.gain.setValueAtTime(0.0001, now);
    envelope.gain.exponentialRampToValueAtTime(gain, now + 0.018);
    envelope.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    oscillator.connect(envelope);
    envelope.connect(master);
    oscillator.start(now);
    oscillator.stop(now + duration + 0.02);
  }

  function noise({ start = 0, duration = 0.22, gain = 0.08, highpass = 520, lowpass = 2600 }) {
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
    envelope.gain.exponentialRampToValueAtTime(gain, now + 0.025);
    envelope.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    source.buffer = buffer;
    source.connect(high);
    high.connect(low);
    low.connect(envelope);
    envelope.connect(master);
    source.start(now);
    source.stop(now + duration + 0.02);
  }

  return {
    play(cue) {
      try {
        if (cue === "tap") {
          tone({ frequency: 420, duration: 0.08, gain: 0.08 });
        }
        if (cue === "answer") {
          tone({ frequency: 520, duration: 0.14, gain: 0.07 });
        }
        if (cue === "gap") {
          tone({ frequency: 330, duration: 0.13, gain: 0.055, type: "triangle" });
          tone({ frequency: 440, start: 0.06, duration: 0.12, gain: 0.045, type: "triangle" });
        }
        if (cue === "capture") {
          tone({ frequency: 620, duration: 0.12, gain: 0.065 });
          noise({ start: 0.02, duration: 0.18, gain: 0.025, highpass: 900, lowpass: 3200 });
        }
        if (cue === "moving") {
          noise({ duration: 0.34, gain: 0.045, highpass: 700, lowpass: 4200 });
          tone({ frequency: 560, start: 0.04, duration: 0.22, gain: 0.035, detune: 8 });
        }
        if (cue === "stack") {
          tone({ frequency: 280, duration: 0.09, gain: 0.06, type: "triangle" });
          tone({ frequency: 390, start: 0.08, duration: 0.12, gain: 0.05, type: "sine" });
        }
        if (cue === "seal") {
          tone({ frequency: 138.59, duration: 0.11, gain: 0.09, type: "triangle" });
          noise({ start: 0.006, duration: 0.12, gain: 0.055, highpass: 70, lowpass: 520 });
          tone({ frequency: 523.25, start: 0.09, duration: 0.22, gain: 0.065 });
          tone({ frequency: 659.25, start: 0.16, duration: 0.28, gain: 0.058 });
          tone({ frequency: 783.99, start: 0.24, duration: 0.34, gain: 0.048 });
        }
        if (cue === "thanks") {
          tone({ frequency: 587.33, duration: 0.2, gain: 0.045 });
          tone({ frequency: 739.99, start: 0.09, duration: 0.25, gain: 0.04 });
        }
        if (cue === "notify") {
          tone({ frequency: 659.25, duration: 0.16, gain: 0.04 });
        }
      } catch {
        // Sound is a small enhancement; the flow should stay silent if audio is unavailable.
      }
    }
  };
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
