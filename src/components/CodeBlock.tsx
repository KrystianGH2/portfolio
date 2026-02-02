import { CardContent } from "@/components/ui/card";

function CodeBlock() {
  return (
    <CardContent
      className="
    relative
    rounded-2xl
    bg-gradient-to-br from-indigo-950/80 to-slate-900/80
    border border-white/10
    p-6
    font-mono
    text-sm
    leading-6
    text-slate-200
    shadow-xl
    backdrop-blur-md
  "
    >
      <pre className="space-y-1">
        <div className="text-purple-400">const developer = &#123;</div>

        <div className="pl-4">
          <span className="text-sky-400">name</span>:{" "}
          <span className="text-emerald-400">"Krystian Cruz"</span>,
        </div>

        <div className="pl-4">
          <span className="text-sky-400">role</span>:{" "}
          <span className="text-emerald-400">"Front-End Developer"</span>,
        </div>

        <div className="pl-4">
          <span className="text-sky-400">loves</span>: [
        </div>

        <div className="pl-8 text-emerald-400">"Clean Code",</div>
        <div className="pl-8 text-emerald-400">"Problem Solving",</div>
        <div className="pl-8 text-emerald-400">"Building Products"</div>

        <div className="pl-4">],</div>

        <div className="pl-4">
          <span className="text-sky-400">coffee</span>:{" "}
          <span className="text-orange-400">true</span>,
        </div>

        <div className="text-purple-400">&#125;;</div>
      </pre>
    </CardContent>
  );
}

export default CodeBlock;
