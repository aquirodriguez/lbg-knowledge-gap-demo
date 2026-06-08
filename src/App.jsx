import { AnimatePresence, motion } from "motion/react";
import * as React from "react";

const QUESTION = "What’s the difference between Mercer and Madison?";
const FOLLOW_UP = "What are the key differences?";

function DayGlassBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden bg-[#fbf7ef]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-8%,rgba(255,255,255,0.96),rgba(251,247,239,0.78)_38%,rgba(243,234,216,0.52)_100%)]" />
      <div className="liquid-wave liquid-wave-a" />
      <div className="liquid-wave liquid-wave-b" />
      <div className="liquid-wave liquid-wave-c" />
      <motion.div animate={{ opacity: [0.22, 0.44, 0.26], x: [-18, 18, -18] }} className="absolute left-[12%] top-[18%] h-72 w-72 rounded-full bg-white/54 blur-3xl" transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }} />
      <motion.div animate={{ opacity: [0.14, 0.32, 0.18], x: [20, -20, 20] }} className="absolute right-[8%] top-[36%] h-80 w-80 rounded-full bg-[#eec667]/20 blur-3xl" transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }} />
    </div>
  );
}

function Glass({ children, className = "" }) {
  return <div className={`border border-white/75 bg-white/50 shadow-[0_24px_70px_rgba(41,37,30,0.1),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-2xl ${className}`}>{children}</div>;
}

function SoftButton({ children, onClick, variant = "glass" }) {
  const styles = variant === "gold"
    ? "border-[#e4ae39] bg-gradient-to-b from-[#f6cf73] via-[#e9b84c] to-[#cf8f20] text-white shadow-[0_16px_32px_rgba(198,137,26,0.26),inset_0_1px_0_rgba(255,255,255,0.55)]"
    : "border-white/80 bg-white/64 text-[#0d2254] shadow-[0_14px_34px_rgba(37,34,28,0.08),inset_0_1px_0_rgba(255,255,255,0.86)]";
  return <button className={`min-h-12 rounded-full border px-10 text-sm font-extrabold transition duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#e9bb53]/24 ${styles}`} onClick={onClick} type="button">{children}</button>;
}

function ModalShell({ children, mode }) {
  return (
    <main className="relative z-10 grid min-h-screen place-items-center overflow-hidden px-4 py-5 text-[#10255a]">
      <motion.section animate={{ height: mode === "app" ? "min(760px, calc(100vh - 40px))" : "min(680px, calc(100vh - 40px))" }} className="relative flex w-full max-w-[620px] flex-col overflow-hidden rounded-[38px] border border-white/76 bg-white/42 p-5 shadow-[0_30px_90px_rgba(45,40,31,0.12),inset_0_1px_0_rgba(255,255,255,0.88)] backdrop-blur-2xl sm:p-7" transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_45%_9%,rgba(255,255,255,0.86),transparent_30%),radial-gradient(circle_at_70%_74%,rgba(237,196,84,0.11),transparent_34%),linear-gradient(142deg,rgba(255,255,255,0.34),transparent_45%,rgba(255,255,255,0.18))]" />
        <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-[#efc45b]/14 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-2 h-56 w-56 rounded-full bg-white/50 blur-3xl" />
        <div className="relative flex min-h-0 flex-1 flex-col">{children}</div>
      </motion.section>
    </main>
  );
}

function LbgMark() {
  return <div className="flex items-center gap-3"><div className="font-serif text-[34px] leading-none tracking-tight text-[#12275a]">LB<span className="text-[#d7981f]">G</span></div><div className="text-[11px] font-extrabold uppercase leading-[1.05] tracking-[0.08em] text-[#1b2536]">Knowledge<br />System</div></div>;
}

function ArrowIcon() {
  return <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24"><path d="M12 19V5m0 0-5 5m5-5 5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>;
}
function QuestionGlyph() {
  return <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24"><path d="M8.6 9.1a3.5 3.5 0 1 1 5.8 2.6c-.9.8-1.8 1.3-1.8 2.7" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" /><path d="M12 18h.01" stroke="currentColor" strokeLinecap="round" strokeWidth="2.4" /><path d="M5.4 4.8h13.2A2.4 2.4 0 0 1 21 7.2v8.9a2.4 2.4 0 0 1-2.4 2.4H9l-5 2v-3.6a2.4 2.4 0 0 1-1-1.9V7.2a2.4 2.4 0 0 1 2.4-2.4Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.55" /></svg>;
}
function ClockGlyph() {
  return <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.75" /><path d="M12 7.8v4.5l3 1.8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.75" /></svg>;
}
function CheckGlyph({ className = "h-14 w-14" }) {
  return <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 64 64"><motion.path d="M17.5 33.5 28 43.5 47 21.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.64, delay: 0.22, ease: "easeOut" }} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" /></svg>;
}

function AskQuestionState({ onSubmit }) {
  const topics = ["Rolex", "David Yurman", "Repairs", "Registry", "Clienteling"];
  return <motion.div className="flex min-h-0 flex-1 flex-col" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12, scale: 0.985 }} transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}>
    <LbgMark />
    <div className="flex flex-1 flex-col justify-center py-7">
      <motion.div animate={{ y: [0, -4, 0] }} className="mb-10 h-28 rounded-[34px] border border-white/58 bg-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]" transition={{ duration: 5.6, ease: "easeInOut", repeat: Infinity }} />
      <h1 className="text-2xl font-extrabold tracking-tight text-[#10255a]">Good morning, Aqui</h1>
      <p className="mt-2 text-sm font-semibold text-[#667088]">What would you like help with today?</p>
      <div className="mt-8 flex items-center gap-3 rounded-full border border-white/78 bg-white/72 py-3 pl-5 pr-3 shadow-[0_18px_42px_rgba(42,38,31,0.11),inset_0_1px_0_rgba(255,255,255,0.94)] backdrop-blur-2xl">
        <p className="min-w-0 flex-1 text-sm font-bold leading-snug text-[#10255a]">{QUESTION}</p>
        <button aria-label="Submit question" className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[#efc75e] bg-gradient-to-b from-[#f6ca5a] to-[#d99b20] text-white shadow-[0_13px_24px_rgba(211,148,31,0.28),inset_0_1px_0_rgba(255,255,255,0.55)] transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#e9bb53]/28" onClick={onSubmit} type="button"><ArrowIcon /></button>
      </div>
      <div className="mt-8"><p className="mb-3 text-xs font-extrabold text-[#10255a]">Suggested topics</p><div className="grid grid-cols-2 gap-3 sm:grid-cols-5">{topics.map((topic, index) => <Glass className="grid min-h-16 place-items-center rounded-2xl px-2 text-center text-[11px] font-extrabold text-[#40506e]" key={topic}><span className={`mb-1 h-2 w-2 rounded-full ${index === 1 ? "bg-[#d9a12b]" : "bg-[#2f6edb]/38"}`} />{topic}</Glass>)}</div></div>
    </div>
    <div className="flex items-center gap-3 text-xs font-bold text-[#65728a]"><span className="grid h-8 w-8 place-items-center rounded-full border border-[#f0d282] bg-[#fff8df] text-[#c1881d]"><CheckGlyph className="h-4 w-4" /></span>Answers use approved LBG knowledge.</div>
  </motion.div>;
}

function ProductFrame({ children }) {
  return <motion.div className="mx-auto w-full max-w-[430px] rounded-[32px] border border-white/76 bg-white/44 p-5 text-left shadow-[0_26px_70px_rgba(42,40,33,0.1),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-2xl" initial={{ opacity: 0, y: 16, scale: 0.985 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10, scale: 0.985 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}
function TopBar() {
  return <div className="mb-7 flex items-center justify-between text-[#10255a]"><span className="text-2xl leading-none">←</span><div className="flex items-center gap-4 text-lg leading-none"><span className="h-5 w-4 rounded-sm border-2 border-current border-b-0" /><span className="font-extrabold tracking-widest">...</span></div></div>;
}
function Meta() {
  return <p className="mt-3 flex items-center gap-2 text-xs font-bold text-[#65728a]"><span className="grid h-4 w-4 place-items-center rounded-full border border-[#8191b3] text-[9px]">i</span>Asked just now</p>;
}

function AnswerState() {
  return <ProductFrame><TopBar /><h1 className="max-w-sm text-xl font-extrabold leading-snug text-[#10255a]">{QUESTION}</h1><Meta />
    <Glass className="mt-6 rounded-[24px] p-5"><div className="mb-4 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.1em] text-[#b67b14]"><span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-b from-[#f6cf73] to-[#d99b20] text-white shadow-[0_10px_22px_rgba(211,148,31,0.24)]"><CheckGlyph className="h-5 w-5" /></span>TRAINER APPROVED</div><p className="text-base font-bold leading-relaxed text-[#21345f]">Mercer and Madison are David Yurman collections with different design styles.</p><p className="mt-3 text-sm font-semibold text-[#667088]">Here’s the short version.</p></Glass>
    <motion.div animate={{ boxShadow: ["0 12px 30px rgba(42,40,33,0.07)", "0 16px 42px rgba(211,148,31,0.14)", "0 12px 30px rgba(42,40,33,0.07)"] }} className="mt-5 flex items-center gap-3 rounded-2xl border border-white/74 bg-white/66 px-4 py-3" transition={{ duration: 1.6, ease: "easeInOut", repeat: 1, repeatDelay: 0.2 }}><span className="text-[#2f6edb]"><QuestionGlyph /></span><span className="flex-1 text-sm font-bold text-[#10255a]">{FOLLOW_UP}</span><span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[#10255a] shadow-[0_8px_18px_rgba(37,34,28,0.06)]"><ArrowIcon /></span></motion.div>
    <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/74 bg-white/58 px-4 py-3 text-sm font-extrabold text-[#10255a] shadow-[0_12px_30px_rgba(42,40,33,0.06)]">Learn more<span>⌄</span></div><p className="mt-5 text-center text-xs font-bold text-[#667088]">Was this helpful?</p>
  </ProductFrame>;
}

function GapDetectedState() {
  return <ProductFrame><TopBar /><h1 className="max-w-sm text-xl font-extrabold leading-snug text-[#10255a]">{QUESTION}</h1><Meta />
    <Glass className="mt-6 rounded-[24px] border-[#efd58f]/88 bg-[#fff8e8]/68 p-5"><div className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-[#edd38d] bg-white/66 text-[#b67b14] shadow-[0_10px_24px_rgba(198,137,26,0.1)]"><QuestionGlyph /></span><div><h2 className="text-base font-extrabold leading-snug text-[#9f6713]">I don’t have the full answer to that yet.</h2><p className="mt-2 text-sm font-semibold leading-relaxed text-[#746247]">I’ll send this for review so you get the right answer.</p></div></div></Glass>
    <Glass className="mt-4 rounded-[24px] p-5"><h2 className="text-sm font-extrabold text-[#10255a]">What I can tell you</h2><p className="mt-2 text-sm font-semibold leading-relaxed text-[#536078]">Mercer and Madison are different David Yurman collections. I need an approved side-by-side comparison before giving more detail.</p></Glass>
    <motion.p animate={{ opacity: [0.62, 1, 0.62] }} className="mt-5 text-sm font-extrabold text-[#b67b14]" transition={{ duration: 1.4, ease: "easeInOut", repeat: Infinity }}>Adding this to review...</motion.p>
  </ProductFrame>;
}

function GlassQuestionCard({ className = "" }) {
  return <motion.div animate={{ y: [0, -8, 0], rotate: [-4, -1, -4] }} className={`relative h-[154px] w-[132px] rounded-[26px] border border-white/82 bg-white/52 p-4 text-left shadow-[0_24px_55px_rgba(31,36,51,0.13),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-2xl ${className}`} transition={{ duration: 3.2, ease: "easeInOut", repeat: Infinity }}><div className="absolute inset-0 rounded-[26px] bg-[linear-gradient(138deg,rgba(255,255,255,0.78),transparent_44%,rgba(239,196,91,0.16))]" /><div className="relative mb-3 flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.1em] text-[#9099aa]"><span className="grid h-5 w-5 place-items-center rounded-md border border-white/74 bg-white/62"><QuestionGlyph /></span>Your question</div><p className="relative text-[12px] font-extrabold leading-snug text-[#10255a]">{FOLLOW_UP}</p><div className="relative mt-4 space-y-1.5"><div className="h-1.5 w-20 rounded-full bg-[#9aa5ba]/18" /><div className="h-1.5 w-14 rounded-full bg-[#9aa5ba]/14" /></div></motion.div>;
}
function GlowPedestal() {
  return <div className="relative h-32 w-80"><motion.div animate={{ opacity: [0.36, 0.74, 0.44], scale: [0.92, 1.06, 0.98] }} className="absolute inset-x-8 bottom-3 h-20 rounded-[999px] bg-[#efc45b]/28 blur-2xl" transition={{ duration: 2.8, ease: "easeInOut", repeat: Infinity }} /><motion.div animate={{ scale: [0.96, 1.02, 0.96] }} className="absolute inset-x-5 bottom-4 h-16 rounded-[999px] border border-[#f2d583]/70 bg-[radial-gradient(ellipse_at_center,rgba(255,247,216,0.8),rgba(239,196,91,0.18)_56%,rgba(255,255,255,0.12))] shadow-[0_20px_58px_rgba(213,151,34,0.18)]" transition={{ duration: 3.1, ease: "easeInOut", repeat: Infinity }} /><div className="absolute inset-x-12 bottom-9 h-9 rounded-[999px] border border-white/72 bg-white/22 backdrop-blur-xl" /><div className="absolute inset-x-20 bottom-[54px] h-2 rounded-full bg-[#f7d477]/64 blur-sm" /></div>;
}
function LightTrail({ phase }) {
  const visible = ["travel", "queue", "confirm"].includes(phase);
  return <motion.div animate={{ opacity: visible ? 1 : 0 }} className="pointer-events-none absolute inset-0 z-10" transition={{ duration: 0.4 }}><svg className="absolute left-[calc(50%-128px)] top-[174px] h-40 w-[330px] overflow-visible" fill="none" viewBox="0 0 330 160"><motion.path animate={{ pathLength: visible ? 1 : 0, opacity: visible ? [0.15, 0.8, 0.34] : 0 }} d="M38 116C95 80 118 95 156 65C198 31 238 34 292 52" stroke="url(#trailWide)" strokeLinecap="round" strokeWidth="15" transition={{ duration: 1.75, ease: "easeInOut" }} /><motion.path animate={{ pathLength: visible ? 1 : 0 }} d="M38 116C95 80 118 95 156 65C198 31 238 34 292 52" stroke="url(#trailCore)" strokeLinecap="round" strokeWidth="3" transition={{ duration: 1.45, ease: "easeInOut" }} /><defs><linearGradient id="trailWide" x1="38" x2="292" y1="116" y2="52"><stop stopColor="#ffffff" stopOpacity="0.08" /><stop offset="0.45" stopColor="#f1c763" stopOpacity="0.72" /><stop offset="1" stopColor="#fff4c2" stopOpacity="0.18" /></linearGradient><linearGradient id="trailCore" x1="38" x2="292" y1="116" y2="52"><stop stopColor="#fff9db" stopOpacity="0.18" /><stop offset="0.5" stopColor="#f6d36e" stopOpacity="0.95" /><stop offset="1" stopColor="#ffffff" stopOpacity="0.22" /></linearGradient></defs></svg>{[0, 1, 2].map((item) => <motion.span animate={visible ? { opacity: [0, 0.9, 0], x: [-126, -6, 114], y: [94, 42, 50], scale: [0.6, 1.1, 0.5] } : { opacity: 0 }} className="absolute left-1/2 top-[130px] h-2 w-2 rounded-full bg-[#f6d36e] shadow-[0_0_20px_8px_rgba(239,196,91,0.28)]" key={item} transition={{ delay: item * 0.28, duration: 1.9, ease: "easeInOut", repeat: visible ? 2 : 0, repeatDelay: 0.35 }} />)}</motion.div>;
}
function ParticleField({ active }) {
  return <div className="pointer-events-none absolute inset-0 overflow-hidden">{Array.from({ length: 14 }).map((_, index) => <motion.span animate={{ opacity: [0, 0.58 * active, 0], y: [18, -28, -60], scale: [0.5, 1, 0.55] }} className="absolute h-1.5 w-1.5 rounded-full bg-[#f2cf75] shadow-[0_0_14px_4px_rgba(239,196,91,0.2)]" key={index} style={{ left: `${18 + ((index * 43) % 64)}%`, top: `${34 + ((index * 29) % 42)}%` }} transition={{ delay: index * 0.22, duration: 3.8 + (index % 3) * 0.4, ease: "easeInOut", repeat: Infinity }} />)}</div>;
}
function ReviewQueueStack({ phase }) {
  const show = phase === "queue" || phase === "confirm";
  return <motion.div animate={{ opacity: show ? (phase === "confirm" ? 0 : 1) : 0, scale: phase === "queue" ? [0.92, 1.035, 1] : 0.96, y: phase === "queue" ? [28, -2, 0] : 24 }} className="absolute left-1/2 top-[142px] z-20 w-[300px] -translate-x-1/2" transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}><motion.div animate={{ opacity: show ? [0.24, 0.62, 0.28] : 0, scale: [0.92, 1.08, 1] }} className="absolute inset-x-8 top-32 h-20 rounded-full bg-[#efc45b]/35 blur-2xl" transition={{ duration: 1.2, ease: "easeOut" }} /><div className="relative rounded-[30px] border border-white/76 bg-white/48 p-5 shadow-[0_28px_70px_rgba(42,40,33,0.11),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-2xl"><div className="mb-4 flex items-center justify-between text-left"><div><p className="text-[13px] font-extrabold text-[#10255a]">Review Queue</p><p className="text-[11px] font-semibold text-[#73809a]">New questions</p></div><span className="grid h-9 w-9 place-items-center rounded-full border border-[#efd58f] bg-[#fff7df] text-[#b87a14]"><ClockGlyph /></span></div><div className="relative h-36"><motion.div animate={phase === "queue" ? { y: [4, 9, 6] } : {}} className="absolute bottom-1 left-7 right-7 h-12 rounded-2xl border border-[#f0d282]/70 bg-[#f7d477]/32 shadow-[0_16px_38px_rgba(211,150,35,0.16)]" /><motion.div animate={phase === "queue" ? { y: [0, 5, 2] } : {}} className="absolute bottom-5 left-4 right-4 h-14 rounded-2xl border border-white/70 bg-white/54 shadow-[0_18px_40px_rgba(34,42,62,0.09)]" /><motion.div animate={phase === "queue" ? { y: [-22, 0, -2], rotate: [-4, -1, -1] } : {}} className="absolute bottom-10 left-0 right-0 rounded-2xl border border-white/86 bg-white/78 p-4 text-left shadow-[0_18px_44px_rgba(34,42,62,0.12)]"><p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#b87a14]">New Question</p><p className="text-[12px] font-extrabold leading-snug text-[#10255a]">{FOLLOW_UP}</p></motion.div></div></div></motion.div>;
}
function ConfirmationGlassBox({ phase }) {
  const show = phase === "confirm";
  return <motion.div animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0.9, y: show ? 0 : 24 }} className="absolute inset-x-0 top-[54px] z-30 mx-auto h-[330px]" transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}><motion.div animate={show ? { opacity: [0.26, 0.72, 0.42], scale: [0.9, 1.1, 1] } : {}} className="absolute left-1/2 top-[82px] h-60 w-60 -translate-x-1/2 rounded-full bg-[#efc45b]/34 blur-3xl" transition={{ duration: 2.8, ease: "easeInOut", repeat: Infinity }} /><div className="absolute left-1/2 top-[200px] -translate-x-1/2"><GlowPedestal /></div><motion.div animate={show ? { y: [18, -8, 0], rotate: [-2, 1, 0] } : {}} className="absolute left-1/2 top-[62px] grid h-48 w-56 -translate-x-1/2 place-items-center rounded-[32px] border border-white/76 bg-white/34 shadow-[0_30px_86px_rgba(215,156,44,0.2),inset_0_1px_0_rgba(255,255,255,0.88)] backdrop-blur-2xl" transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}><div className="absolute inset-x-5 bottom-0 h-24 rounded-[25px] border border-[#f0d282]/70 bg-[#f6cf71]/22" /><div className="absolute inset-x-8 top-4 h-8 rounded-full bg-white/32 blur-sm" /><motion.div animate={show ? { opacity: 1, y: [26, -5, 0], scale: [0.72, 1.08, 1] } : {}} className="relative grid h-24 w-24 place-items-center rounded-full border border-[#f1cf76]/80 bg-white/32 text-[#d89c25] shadow-[0_18px_48px_rgba(211,148,31,0.23)]" transition={{ delay: 0.55, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}><CheckGlyph /></motion.div></motion.div></motion.div>;
}

function CaptureTransferConfirmAnimation({ onComplete, sound }) {
  const [phase, setPhase] = React.useState("capture");
  React.useEffect(() => {
    sound.play("transfer");
    const timers = [setTimeout(() => setPhase("travel"), 1800), setTimeout(() => setPhase("queue"), 3850), setTimeout(() => setPhase("confirm"), 5650), setTimeout(onComplete, 8200)];
    return () => timers.forEach(clearTimeout);
  }, [onComplete, sound]);
  const copy = { capture: ["Capturing your question...", "This makes sure the right detail gets reviewed."], travel: ["On its way", "Sending it to someone who can confirm it."], queue: ["Added to the review queue", "It’s in line for an approved answer."], confirm: ["Question added for review", "You’ll get the answer once it’s ready."] }[phase];
  const cardMotion = phase === "capture" ? { x: 0, y: -8, scale: 1, opacity: 1 } : phase === "travel" ? { x: 122, y: 24, scale: 0.82, opacity: 1 } : phase === "queue" ? { x: 0, y: 16, scale: 0.62, opacity: 0.18 } : { x: 0, y: 16, scale: 0.5, opacity: 0 };
  return <motion.div className="relative flex min-h-0 flex-1 flex-col justify-between py-2 text-center" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.985 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
    <div className="relative h-[430px] overflow-hidden rounded-[30px] border border-white/42 bg-white/18"><ParticleField active={phase !== "capture" ? 1 : 0.75} /><motion.div animate={{ opacity: phase === "confirm" ? 0.12 : phase === "queue" ? 0.28 : 1, scale: phase === "travel" ? 0.92 : 1 }} className="absolute left-1/2 top-[238px] -translate-x-1/2" transition={{ duration: 0.8, ease: "easeOut" }}><GlowPedestal /></motion.div><LightTrail phase={phase} /><motion.div className="absolute left-1/2 top-[98px] z-30 -translate-x-1/2" animate={cardMotion} transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}><GlassQuestionCard /></motion.div><ReviewQueueStack phase={phase} /><ConfirmationGlassBox phase={phase} /></div>
    <AnimatePresence mode="wait"><motion.div key={phase} className="mx-auto mt-7 max-w-sm px-3" initial={{ opacity: 0, y: 10, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -8, filter: "blur(8px)" }} transition={{ duration: 0.42, ease: "easeOut" }}><h1 className="text-2xl font-extrabold tracking-tight text-[#10255a]">{copy[0]}</h1><p className="mt-3 text-sm font-semibold leading-relaxed text-[#65728a]">{copy[1]}</p></motion.div></AnimatePresence>
  </motion.div>;
}

function GoldSeal() {
  return <div className="relative mx-auto grid h-64 w-64 place-items-center"><motion.div animate={{ opacity: [0.16, 0.32, 0.18], scale: [0.9, 1.08, 0.96] }} className="absolute h-48 w-48 rounded-full bg-[#e5aa35]/26 blur-3xl" transition={{ duration: 3.8, ease: "easeInOut", repeat: Infinity }} /><motion.div animate={{ opacity: [0, 0.36, 0], scale: [0.55, 1.22, 1.62] }} className="absolute h-36 w-36 rounded-full border border-[#e5b147]/50" transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }} /><motion.div animate={{ opacity: [0, 0.34, 0.08], scale: [0.72, 1.08, 1] }} className="absolute bottom-10 h-20 w-44 rounded-full bg-[#a76610]/22 blur-xl" transition={{ delay: 0.28, duration: 0.64, ease: "easeOut" }} /><motion.div animate={{ opacity: 1, rotate: [-8, 1.5, 0], scale: [1.28, 0.88, 1.035, 1], y: [-132, 18, -3, 0] }} className="relative grid h-40 w-40 place-items-center rounded-full bg-[conic-gradient(from_20deg,#c88717,#fff1b6,#d99d29,#fff7cf,#bf7d12,#f5ce66,#c88717)] p-2 shadow-[0_20px_50px_rgba(198,137,26,0.28),inset_0_1px_0_rgba(255,255,255,0.64)]" initial={{ opacity: 0, rotate: -8, scale: 1.22, y: -132 }} transition={{ duration: 0.86, ease: [0.16, 1, 0.3, 1], times: [0, 0.48, 0.74, 1] }}><div className="grid h-full w-full place-items-center rounded-full border border-white/76 bg-[radial-gradient(circle_at_32%_22%,#fff9dd,#efbd4d_56%,#c78619)] text-white"><CheckGlyph className="h-16 w-16 drop-shadow" /></div></motion.div></div>;
}
function ThankYouState({ onAwesome }) {
  return <motion.div className="flex flex-1 flex-col items-center justify-center text-center" initial={{ opacity: 0, scale: 0.985 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, y: -12, scale: 0.985 }} transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}><GoldSeal /><h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[#10255a]">Thank you, Aqui.</h1><p className="mt-3 max-w-sm text-base font-semibold leading-relaxed text-[#5f6b83]">You helped flag something worth answering.</p><div className="mt-9"><SoftButton onClick={onAwesome} variant="gold">Awesome</SoftButton></div></motion.div>;
}
function BellBubble() {
  return <div className="relative mx-auto grid h-60 w-60 place-items-center"><motion.div animate={{ opacity: [0.18, 0.42, 0.2], scale: [0.86, 1.08, 0.96] }} className="absolute h-44 w-44 rounded-full bg-[#efc45b]/20 blur-3xl" transition={{ duration: 3.4, ease: "easeInOut", repeat: Infinity }} /><motion.div animate={{ scale: [0.9, 1.06, 1], opacity: 1 }} className="relative grid h-40 w-40 place-items-center rounded-full border border-white/78 bg-white/42 shadow-[0_26px_62px_rgba(42,40,33,0.1),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-2xl" initial={{ scale: 0.86, opacity: 0 }} transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}><div className="absolute inset-4 rounded-full border border-white/52 bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,0.78),transparent_36%),rgba(255,255,255,0.16)]" /><motion.div animate={{ rotate: [0, -7, 6, -4, 3, 0], y: [0, -2, 0] }} className="relative text-[#d99b20]" transition={{ delay: 0.2, duration: 1.05, ease: "easeInOut" }}><svg aria-hidden="true" className="h-20 w-20 drop-shadow" fill="none" viewBox="0 0 64 64"><path d="M19 29.4c0-7.3 5.4-13 13-13s13 5.7 13 13v10.2l3.6 6.4H15.4l3.6-6.4V29.4Z" fill="url(#bellGold)" stroke="#b87916" strokeLinejoin="round" strokeWidth="2.2" /><path d="M27 48.5c1.2 2.5 3 3.7 5 3.7s3.8-1.2 5-3.7" stroke="#b87916" strokeLinecap="round" strokeWidth="2.2" /><path d="M32 16v-3" stroke="#b87916" strokeLinecap="round" strokeWidth="2.2" /><defs><linearGradient id="bellGold" x1="21" x2="44" y1="17" y2="48"><stop stopColor="#fff1b6" /><stop offset="0.5" stopColor="#e9b84c" /><stop offset="1" stopColor="#c88717" /></linearGradient></defs></svg></motion.div></motion.div><motion.span animate={{ opacity: 1, scale: [0.6, 1.12, 1], y: [8, -2, 0] }} className="absolute right-8 top-8 grid h-9 w-9 place-items-center rounded-full border border-white/82 bg-[#efbd4d] text-sm font-extrabold text-white shadow-[0_12px_24px_rgba(211,148,31,0.25)]" initial={{ opacity: 0, scale: 0.6, y: 8 }} transition={{ delay: 0.42, duration: 0.5, ease: "easeOut" }}>1</motion.span></div>;
}
function NotificationState() {
  return <motion.div className="flex flex-1 flex-col items-center justify-center text-center" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}><BellBubble /><h1 className="mt-1 max-w-md text-3xl font-extrabold leading-tight tracking-tight text-[#10255a]">We’ll let you know when it’s ready.</h1><p className="mt-3 text-base font-semibold leading-relaxed text-[#5f6b83]">You’ll see the update here.</p><div className="mt-9"><SoftButton>Got it</SoftButton></div></motion.div>;
}

function KnowledgeGapDemo() {
  const [state, setState] = React.useState("ask");
  const sound = React.useMemo(() => createSoundDesign(), []);
  const timers = React.useRef([]);
  const clearTimers = React.useCallback(() => { timers.current.forEach(clearTimeout); timers.current = []; }, []);
  React.useEffect(() => clearTimers, [clearTimers]);
  function schedule(callback, ms) { timers.current.push(setTimeout(callback, ms)); }
  function submitQuestion() { clearTimers(); sound.play("submit"); setState("answer"); schedule(() => setState("gap"), 1900); schedule(() => setState("captureTransferConfirm"), 4100); }
  function completeCapture() { sound.play("stamp"); setState("thankYou"); }
  function showNotification() { sound.play("bell"); setState("notified"); }
  return <ModalShell mode={["ask", "answer", "gap"].includes(state) ? "app" : "hero"}><AnimatePresence mode="wait">{state === "ask" && <AskQuestionState key="ask" onSubmit={submitQuestion} />}{state === "answer" && <AnswerState key="answer" />}{state === "gap" && <GapDetectedState key="gap" />}{state === "captureTransferConfirm" && <CaptureTransferConfirmAnimation key="capture" onComplete={completeCapture} sound={sound} />}{state === "thankYou" && <ThankYouState key="thank-you" onAwesome={showNotification} />}{state === "notified" && <NotificationState key="notified" />}</AnimatePresence></ModalShell>;
}

function createSoundDesign() {
  let context;
  let master;
  function getContext() { if (!context) { context = new AudioContext(); master = context.createGain(); master.gain.value = 0.32; master.connect(context.destination); } if (context.state === "suspended") context.resume(); return context; }
  function tone({ frequency, start = 0, duration = 0.16, type = "sine", gain = 0.18, detune = 0 }) { const ctx = getContext(); const oscillator = ctx.createOscillator(); const envelope = ctx.createGain(); const now = ctx.currentTime + start; oscillator.type = type; oscillator.frequency.setValueAtTime(frequency, now); oscillator.detune.setValueAtTime(detune, now); envelope.gain.setValueAtTime(0.0001, now); envelope.gain.exponentialRampToValueAtTime(gain, now + 0.018); envelope.gain.exponentialRampToValueAtTime(0.0001, now + duration); oscillator.connect(envelope); envelope.connect(master); oscillator.start(now); oscillator.stop(now + duration + 0.03); }
  function noise({ start = 0, duration = 0.24, gain = 0.08, highpass = 480, lowpass = 2800 }) { const ctx = getContext(); const length = Math.max(1, Math.floor(ctx.sampleRate * duration)); const buffer = ctx.createBuffer(1, length, ctx.sampleRate); const data = buffer.getChannelData(0); for (let i = 0; i < length; i += 1) { const fade = 1 - i / length; data[i] = (Math.random() * 2 - 1) * fade * fade; } const source = ctx.createBufferSource(); const high = ctx.createBiquadFilter(); const low = ctx.createBiquadFilter(); const envelope = ctx.createGain(); const now = ctx.currentTime + start; high.type = "highpass"; high.frequency.value = highpass; low.type = "lowpass"; low.frequency.value = lowpass; envelope.gain.setValueAtTime(0.0001, now); envelope.gain.exponentialRampToValueAtTime(gain, now + 0.02); envelope.gain.exponentialRampToValueAtTime(0.0001, now + duration); source.buffer = buffer; source.connect(high); high.connect(low); low.connect(envelope); envelope.connect(master); source.start(now); source.stop(now + duration + 0.03); }
  return { play(cue) { try { if (cue === "submit") { tone({ frequency: 430, duration: 0.08, gain: 0.12 }); tone({ frequency: 610, start: 0.045, duration: 0.12, gain: 0.08 }); } if (cue === "transfer") { noise({ duration: 0.48, gain: 0.07, highpass: 700, lowpass: 4300 }); tone({ frequency: 523.25, start: 0.03, duration: 0.28, gain: 0.07 }); tone({ frequency: 659.25, start: 0.2, duration: 0.34, gain: 0.055 }); } if (cue === "stamp") { tone({ frequency: 123.47, duration: 0.1, gain: 0.16, type: "triangle" }); noise({ start: 0.006, duration: 0.13, gain: 0.095, highpass: 60, lowpass: 540 }); tone({ frequency: 523.25, start: 0.1, duration: 0.24, gain: 0.09 }); tone({ frequency: 659.25, start: 0.18, duration: 0.3, gain: 0.075 }); tone({ frequency: 783.99, start: 0.28, duration: 0.36, gain: 0.055 }); } if (cue === "bell") { tone({ frequency: 880, duration: 0.18, gain: 0.09 }); tone({ frequency: 1174.66, start: 0.14, duration: 0.2, gain: 0.075 }); tone({ frequency: 880, start: 0.32, duration: 0.18, gain: 0.055 }); } } catch {} } };
}

export default function App() {
  return <><DayGlassBackground /><KnowledgeGapDemo /></>;
}
