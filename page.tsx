import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function LandingPage() {
  return (
    <main>
      <Navbar />

      <section className="mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center">
        <span className="mb-6 rounded-clip border border-line px-3 py-1 text-xs text-paper/60">
          فيديو واحد → عشر شورتس
        </span>
        <h1 className="font-display text-4xl font-bold leading-tight sm:text-6xl">
          حوّل حلقة الـ10 دقايق
          <br />
          لعشر <span className="text-pulse">شورتس فيروسية</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-paper/60">
          ارفع الفيديو، وسيبنا نلاقي أقوى اللحظات، نقصها، ونحطلها كابشن متحرك
          جاهز للنشر على TikTok وReels وShorts.
        </p>
        <div className="mt-10 flex gap-4">
          <Link
            href="/dashboard"
            className="rounded-clip bg-pulse px-6 py-3 font-medium text-ink hover:bg-[#ff5c7e]"
          >
            جرب مجانًا — أول كليب من غيرك
          </Link>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-6 py-16 sm:grid-cols-3">
          {[
            {
              title: "اكتشاف ذكي للحظات",
              desc: "الذكاء الاصطناعي بيدور على الهوك واللحظات القوية اللي بتشد المشاهد."
            },
            {
              title: "قص وتأطير تلقائي",
              desc: "تحويل تلقائي للفورمات العمودي مع متابعة وش المتكلم."
            },
            {
              title: "كابشن متحرك",
              desc: "كابشن بيتحرك مع الصوت كلمة كلمة، بأكتر من استايل."
            }
          ].map((f) => (
            <div key={f.title}>
              <h3 className="font-display font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-paper/50">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
