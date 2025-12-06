<div dir="rtl">

<img src="https://play-lh.googleusercontent.com/8sBD9eA_PkgRpE0Pi5zj4ZLgkvgVhSkEyH2SjAqAkcLc-c_5qX7hhz5H3XqQCpDbGgVq=w480-h960-rw" width="120" />

# تطبيق السيرة النبوية

## - متجر جوجل بلاي:

<div dir="ltr">

### https://play.google.com/store/apps/details?id=com.seira.seiranabawayaa

</div>

<br />

<br />

## - نسخة الويب: https://elseira.vercel.app

---

## 📸 لقطات من التطبيق

<img height="500" src="https://play-lh.googleusercontent.com/hD6FQ-e51X1lxlA4FlEiSmgp7aw5nsiXMEzxG-ljh1VAVp6hoJnKejlXnMJmc7J_kO9jZ892-1rsSfrONvm-fw=w5120-h2880-rw" width="300" />

<img height="500" src="https://play-lh.googleusercontent.com/fXKHBMUqGtiYSolr2O834Gy6DMEzuzLToZdHcuG6GBNvoNvRDimuVehXR-zKeyTgd_pqJEwgKTE1ayv0z28lzAg=w5120-h2880-rw" width="300" />

<img height="500" src="https://play-lh.googleusercontent.com/frCb0pETtMcVNpIa9zfIy5PT-h0cPf1Opg4PDDCCnjpoKjyY11Ml2GcFYpuG4XX7C53LHjtQIOVswJ2XkHNNrw=w5120-h2880-rw" width="300" />

<img height="500" src="https://play-lh.googleusercontent.com/7q1ybG8HqgRV7ddUgoorkoY5iVQsA4FVfsynutEQLbG3fTHGCiRl0E7Pu4Jd48vxsdj3-XqMGPeMk5XJxuRQNg=w5120-h2880-rw" width="300" />

<img height="500" src="https://play-lh.googleusercontent.com/Erwy99DUnC9xUP8Y4_Lam7PxIufXZxNxsXXVCUERINwfCZs_H0rr4g7Lks8kyRrwt3ytCEiZQMeCbVjp7zmn=w5120-h2880-rw" width="300" />

---

# تقرير تقني عن تطبيق السيرة النبوية

## 1️⃣ التقنيات المستخدمة

يعتمد تطبيق **السيرة النبوية** على إطار **Flutter** لبناء واجهات متعددة المنصات، مع استخدام حزم أساسية مثل `provider` لإدارة الحالة، و`shared_preferences` لتخزين الإعدادات محليًا، و`flutter_pdfview` لعرض ملفات PDF، بالإضافة إلى `device_info_plus` لجمع بيانات الجهاز لتحسين الأداء. كما يستفيد التطبيق من `webview_flutter` لعرض المحتوى داخل التطبيق، و`intl` لدعم التنسيق المحلي.

---

## 2️⃣ بنية الكود وميزات التصميم

يعتمد التطبيق على **MultiProvider** لتوفير إدارة حالة منظمة وقابلة للتوسع. كما تم تطبيق آلية **Write-through Cache** داخل `AppPreferences` لتقليل عمليات القراءة والكتابة على الذاكرة الدائمة. ويقدم الكود معالجة ذكية للذاكرة من خلال `ImageCache` لضبط حجم الكاش حسب قدرات الجهاز، مما يحسّن أداء التطبيق ويزيد من ثباته.

---

## 3️⃣ ميزات التطبيق

يوفر التطبيق تجربة استخدام غنية تشمل تخصيص المظهر (Themes)، وتغيير نوع الخط (Font Family)، وحجم الخط (Font Size)، والمسافة بين الأسطر (Line Height). يتم دعم المفضلة (Favorites) والعلامات المرجعية (Bookmarks) عبر تخزين محلي باستخدام `shared_preferences`. كما يعتمد التطبيق على `flutter_staggered_grid_view` و`scrollable_positioned_list` لتقديم عرض مرن وسلس للمحتوى.

---

## 4️⃣ أداء التطبيق على Android

تم تعزيز أداء التطبيق عبر **Parallel Initialization** لتسريع تشغيل التطبيق، و**Adaptive Image Cache** لمنع مشكلات الذاكرة خاصة على الأجهزة الضعيفة، إضافة إلى **Pre-caching** للصور الثقيلة لتحسين سرعة العرض. هذه التقنيات ساهمت في خفض وقت التحميل وجعل تجربة المستخدم أكثر سلاسة واستقرارًا.

</div>
