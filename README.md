# ViralClips AI — Frontend

فرونت اند Next.js 14 (App Router + TypeScript + Tailwind) لمشروع ViralClips AI.

## التشغيل محليًا

```bash
npm install
cp .env.local.example .env.local
# عدّل NEXT_PUBLIC_API_URL على رابط الباك اند بتاعك
npm run dev
```

## الشاشات المتاحة

| المسار | الوصف |
|---|---|
| `/` | صفحة الهبوط |
| `/dashboard` | رفع فيديو جديد + قائمة المشاريع |
| `/processing/[id]` | متابعة حالة المعالجة (polling كل 4 ثواني) |
| `/results/[id]` | شبكة الـ10 شورتس الناتجة |
| `/editor/[clipId]` | تعديل عنوان واستايل كابشن كليب معين |

## الربط بالباك اند

كل الاتصال بالـ API متمركز في `lib/api.ts` وبيقرأ الرابط من:

```
NEXT_PUBLIC_API_URL
```

لازم تحطه في Vercel → Project Settings → Environment Variables.

## الرفع على Vercel

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <رابط الريبو بتاعك على GitHub>
git push -u origin main
```

بعدين اربط الريبو من داشبورد Vercel واختار Framework: Next.js (بيتحدد تلقائي).
