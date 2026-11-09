# Teo — دليل تثبيت وتفعيل التطبيقات

موقع ستاتيك (HTML/CSS/JS) جاهز للرفع على GitHub والنشر مجانًا على Vercel. مفيش build ولا npm.

## الصفحات
| الملف | الصفحة |
|---|---|
| `index.html` | الرئيسية: اختر جهازك |
| `ios.html`، `android.html`، `webos.html`، `pc.html` | صفحات الأجهزة |
| `guide-var.html` | شرح VAR (آيفون) |
| `guide-next-android.html` | شرح NEXT+ (أندرويد) |
| `guide-0player.html` | شرح 0PLAYER (LG و سامسونج) |
| `guide-next-pc.html` | شرح NEXT+ (كمبيوتر) |

## تعديل البيانات (مكان واحد بس)
افتح `assets/js/config.js` وعدّل:
- `serverCode`: كود السيرفر (VAR و NEXT+)
- `portalCode`: كود تفعيل 0PLAYER
- `whatsapp` و `whatsappMessage`: رقم الواتساب والرسالة الجاهزة
- `store`: رابط المتجر
- `links`: روابط تحميل التطبيقات

كل الصفحات والشاشات التوضيحية وأزرار النسخ هتتحدث تلقائيًا.

## الرفع على GitHub
1. اعمل Repository جديد على github.com (مثلًا `teo-guide`).
2. اضغط **Add file ← Upload files** وارفع **محتوى** الفولدر ده كله (مش الفولدر نفسه): لازم `index.html` يبقى في أول الريبو.
3. اضغط **Commit changes**.

## الربط بـ Vercel (مجاني)
1. ادخل vercel.com وسجّل دخول بحساب GitHub.
2. **Add New ← Project** واختار الريبو.
3. سيب الإعدادات زي ما هي (Framework Preset: **Other**، من غير Build Command) واضغط **Deploy**.
4. أي تعديل ترفعه على GitHub بعد كده، Vercel هينشره تلقائيًا.

لربط دومين خاص: من Vercel ← Project ← Settings ← Domains.

> ملف `vercel.json` بيخلي اللينكات نظيفة (`/ios` بدل `/ios.html`).
# teo
