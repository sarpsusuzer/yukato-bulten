(() => {
  const A = (h) => `assets/${h}.svg`;
  const img = (h, cls = 'fill') => `<img class="${cls}" src="${A(h)}" alt="">`;
  // 16px icon box; optional nested insets replicate Figma's inset-* icon frames
  const ic = (h) => `<span class="ic16">${img(h)}</span>`;
  const icInset = (h, outer, inner, extra = '') =>
    `<span class="ic16" ${extra}><span class="abs" style="inset:${outer}"><span class="abs" style="inset:${inner}">${img(h)}</span></span></span>`;

  /* ---------- Sidebar ---------- */
  const NAV = [
    { label: 'ANASAYFA', items: [{ id: 'yenilikler', text: 'Yenilikler', icon: () => `<span class="nav-ic">${img('5fd18')}</span>` }] },
    {
      label: 'BU AY', items: [
        { id: 'otomatik-randevu-atama', text: 'Otomatik Randevu Atama', icon: () => `<span class="nav-ic s14">${img('5dd3b')}</span>` },
        { id: 'irsaliye-havuzu', text: 'İrsaliye Havuzu', icon: () => `<span class="nav-ic">${img('3a0ca')}</span>` },
        { id: 'alt-lojistik-atamasi', text: 'Alt Lojistik Ataması', icon: () => `<span class="nav-ic"><span class="abs" style="inset:0 -6.25%">${img('6b1bc')}</span></span>` },
        { id: 'sesli-bildirim', text: 'Sesli Bildirim', icon: () => `<span class="nav-ic">${img('07bb7')}</span>` },
      ]
    },
    { label: 'GELECEK AY', items: [{ id: 'siradakiler', text: 'Sıradakiler', icon: () => `<span class="nav-ic">${img('ab51e')}</span>` }] },
    { label: 'ARŞİV', items: [{ id: 'gecmis-bultenler', text: 'Geçmiş Bültenler', icon: () => `<span class="nav-ic s14">${img('bbfa2')}</span>` }] },
  ];

  const sidebar = (active) => `
    <div class="sb-top">
      <a class="brand" href="#/yenilikler" aria-label="Yukato Nexus Tedarikçi Bülteni">
        <img src="${A('bd2c6')}" width="47.65" height="36.83" alt="">
        <div class="brand-word"><img src="${A('42593')}" width="75" height="22.44" alt="yukato"><span>NEXUS TEDARİKÇİ BÜLTENİ</span></div>
      </a>
      <img class="sb-rule" src="${A('2872c')}" height="1" alt="">
      ${NAV.map((g) => `
        <nav class="nav-list" aria-label="${g.label}">
          <div class="nav-label">${g.label}</div>
          ${g.items.map((i) => `<a class="nav-item${i.id === active ? ' active' : ''}" href="#/${i.id}"${i.id === active ? ' aria-current="page"' : ''}>${i.icon()}<span>${i.text}</span></a>`).join('')}
        </nav>`).join('')}
    </div>
    <div class="sb-bottom">
      <img class="sb-rule" src="${A('3b6de')}" height="1" alt="">
      <p class="vision">Tek sevkiyat. Tek akış. Tek gerçek.</p>
    </div>`;

  const bell = `<button class="bell" aria-label="Bildirimler"><img src="${A('f4faa')}" width="18" height="18" alt=""></button>`;
  const play = `<span class="play" role="img" aria-label="Videoyu oynat"><img src="${A('1a759')}" width="28" height="28" alt=""></span>`;

  /* ---------- Yenilikler ---------- */
  const yenilikler = () => {
    const card = (o) => `
      <a class="feat-card" href="#/${o.id}">
        <div class="fc-head">
          <div class="fc-icon${o.plain ? ' plain' : ''}">${o.icon}</div>
          <p class="fc-title">${o.title}</p>
          <span class="chip ${o.chip === 'Canlı' ? 'live' : 'pilot'}">${o.chip}</span>
        </div>
        <p class="fc-text">${o.text}</p>
        <div class="fc-foot">Keşfet →</div>
      </a>`;
    return `
      <div class="page-head between enter-1">
        <div class="titles">
          <h1 class="page-title slate">Yenilikler</h1>
          <p class="page-sub">Eylül 2026 • Operasyonlarınızı Kesintisiz Yönetin.</p>
        </div>
        ${bell}
      </div>
      <div class="video wide enter-2"><img class="poster" src="assets/yenilikler-video.png" alt="">${play}</div>
      <section class="feat-wrap">
        <h2 class="section-h">Bu Ay Yenilikler</h2>
        <div class="feat-grid">
          ${card({ id: 'otomatik-randevu-atama', title: 'Otomatik Randevu Atama', chip: 'Canlı', plain: true, icon: `<img src="${A('dda29')}" width="44" height="44" alt="">`, text: 'Otomatik randevu ile en uygun randevu zamanını ve rampayı atar; mal kabul görevlisi ise bu atamayı gerekirse düzenleyerek süreci yönetir.' })}
          ${card({ id: 'irsaliye-havuzu', title: 'İrsaliye Havuzu', chip: 'Canlı', icon: `<span class="abs" style="left:12px;top:12px;width:20px;height:20px">${img('e9626')}</span>`, text: 'Tüm irsaliyelerinizi tek bir havuzda yönetir, onaylar ve takibini yapabilirsiniz.' })}
          ${card({ id: 'alt-lojistik-atamasi', title: 'Alt Lojistik Ataması', chip: 'Pilot', icon: `<span class="abs" style="left:12px;top:12px;width:20px;height:20px"><span class="abs" style="inset:0 -5%">${img('dc203')}</span></span>`, text: 'Alt lojistik tedarikçilerini sistemde eşleyebilmesi, kendisine atanan bir sevkiyatı bu alt lojistik tedarikçilerinden birine devredebilir.' })}
          ${card({ id: 'sesli-bildirim', title: 'Sesli Bildirim', chip: 'Pilot', icon: `<span class="abs" style="left:12px;top:12px;width:20px;height:20px">${img('37eb9')}</span>`, text: 'Randevu ataması, rampa çağrısı gibi süreçlerde sesli bildirim ile yapılan bilgilendirmeler kaçırılmaz hale gelir.' })}
        </div>
      </section>`;
  };

  /* ---------- Feature page template ---------- */
  const stat = (icon, title, sub) => `<div class="stat"><div class="stat-ic">${icon}</div><div class="stat-tx"><b>${title}</b><span>${sub}</span></div></div>`;
  const metric = (kind, title, sub) => {
    const map = {
      up: ['', 'YÜKSELİŞ', 'e98b6'],
      down: ['down', 'DÜŞÜŞ', '2e0d5'],
      target: ['', 'HEDEF', 'df9fb'],
    };
    const [c, tag, icon] = map[kind];
    return `<div class="metric${kind === 'target' ? ' target' : ''}">
      <div class="m-top"><div class="m-ic ${c}"><span class="abs" style="left:7px;top:7px;width:14px;height:14px">${img(icon)}</span></div><span class="m-tag ${c}">${tag}</span></div>
      <b>${title}</b><span class="d">${sub}</span></div>`;
  };

  const feature = (p) => `
    <div class="page-head">
      <div class="titles"><h1 class="page-title">${p.title}</h1><p class="page-sub">Eylül 2026</p></div>
      <button class="btn-solid">${p.cta}</button>
      ${bell}
    </div>
    <div class="video"><img class="poster" src="assets/feature-video.png" alt="">${play}</div>
    <section class="compare">
      <div class="card-today"><h2 class="ct-title">Bugün</h2><div class="stats">${p.today.map((s) => stat(...s)).join('')}</div></div>
      <div class="card-nexus"><h2 class="cn-title">Nexus İle</h2><div class="stats">${p.nexus.map((s) => stat(...s)).join('')}</div></div>
    </section>
    <section class="problem">
      <div class="sec-title-row"><div class="warn-ic"><span class="ic16">${img('0fa09')}</span></div><h2 class="sec-title">Problem Tanımı</h2></div>
      <div class="problem-list">${p.problems.map((t) => `<div class="bullet"><i></i><p>${t}</p></div>`).join('')}</div>
    </section>
    <section class="metrics">
      <h2 class="sec-title">Başarı Kriterleri</h2>
      <div class="metric-row">${p.metrics.slice(0, 3).map((m) => metric(...m)).join('')}</div>
      <div class="metric-row">${p.metrics.slice(3).map((m) => metric(...m)).join('')}</div>
    </section>
    <section class="how">
      <h2 class="sec-title">Özellik Nasıl Çalışacak?</h2>
      <div class="steps">${p.steps.map(([t, d], i) => `<div class="step"><div class="step-n">${i + 1}</div><div class="step-tx"><b>${t}</b><p>${d}</p></div></div>`).join('')}</div>
    </section>
    ${p.settings ? `
    <section class="settings">
      <div class="settings-head">
        <div class="set-ic"><span class="ic16">${img('64da1')}</span></div>
        <h2 class="sec-title">${p.settings.title}</h2>
        ${p.settings.button ? `<button class="btn-outline">${p.settings.button}</button>` : ''}
      </div>
      <div class="settings-list">${p.settings.items.map((t) => `<div class="set-item"><i></i><p>${t}</p></div>`).join('')}</div>
      ${p.settings.cta ? `<a class="cta-bar" href="#/${p.id}"><span>${p.settings.cta}</span><img src="${A('72d51')}" width="20" height="20" alt=""></a>` : ''}
    </section>` : ''}`;

  const PAGES = {};

  PAGES['otomatik-randevu-atama'] = () => feature({
    id: 'otomatik-randevu-atama',
    title: 'Otomatik Randevu Atama', cta: 'Nexus ile Başla',
    today: [
      [ic('954b1'), 'Teyit Bekleyen Randevular', 'Uzun süre beklemeler'],
      [`<span class="ic16"><span class="abs" style="left:3.2px;top:0;width:12.8px;height:12.8px"><span class="abs" style="inset:0 -12.11% -0.39% 0">${img('b4c32')}</span></span><span class="abs" style="left:0;top:3.2px;width:12.8px;height:12.8px"><span class="abs" style="inset:12.58% 0 12.42% 0"><span class="abs" style="inset:-7.81% -5.86%">${img('f839c')}</span></span></span></span>`, 'Yığılan Araçlar', 'Sırada bekleyen sürücü ve araçlar'],
      [ic('759ff'), 'Belirsiz Değişimler', 'Kapanan günlük fatura tutarı'],
    ],
    nexus: [
      [ic('81e7f'), '%94 Otomatik Eşleşme', 'Hatasız akıllı araç-yük eşleşmesi'],
      [ic('dece5'), 'Haftalık Tasarruf', 'Önlenen demuraj ve bekleme maliyeti'],
    ],
    problems: [
      'Sevklerinin birçoğunun randevusuz ilerlemesi',
      'Mal kabul ekibinin kendi randevu vermek istememesi/yoğun olması',
      'Kısa mesafeli sevkiyatlarda randevu vermek için çok kısa bir süre bulunması',
      'Kısa mesafeli sevkiyatlarda sürücü takosunun bilinmemesi',
      'Nakliyecilerin sürücünün işinin ne zaman biteceğini bilmemesi',
    ],
    metrics: [
      ['up', 'Randevulu sevkiyat oranı', 'Planlı sevkiyat hedefi'],
      ['up', 'Randevu uyum oranı', 'Zamanında varış oranı'],
      ['down', 'Randevu atama süresi', 'AI ile hız optimizasyonu'],
      ['down', 'Sürücü bekleme süresi', 'Depoda bekleme azaltma'],
      ['up', 'Sürücü verimliliği', 'Günlük teslimat kapasitesi'],
      ['target', 'AI tamamlanma oranı', '&gt; 70% hedef'],
    ],
    steps: [
      ['Randevu Süresi Hesaplaması', 'Aracın içerdiği mal miktarı, ürün çeşitliliği ve boşaltmanın yapılacağı depo sistem tarafından bilinir. Dökme ürünlerde süre uzatılır, donuk depo boşaltmaları için daha uzun belirlenir.'],
      ['Kriterlere Göre Randevu ve Rampa Ataması', 'AI algoritması perakendeci depolarının yoğunluk durumu, sevkiyat önceliklendirme, sürücünün geçmiş randevu uyumu, depo anlık kapasitesi ve rampa uygunluğunu değerlendirir.'],
      ['Randevu Öneri Tavsiyesi Nedeni', 'Sistem, atama yaptığı randevu zamanı ve rampanın gerekçesini metinsel olarak açıklar. Örnek: "Rampa 2 bu saatte boş, geçmiş performansa göre %95 zamanında geliş kaydı var."'],
    ],
    settings: {
      title: 'Özelleştirilebilir Ayarlar', button: 'Ayarları Yapılandır',
      items: [
        'Minimum kaç dakika sonrasına randevu atanabilir süresi',
        'Randevular arası minimum buffer süresi',
        'Aynı güne randevu bulunamazsa haber ver seçeneği',
        'Önceki teslimat noktasının bitiş saatine göre ek buffer süresi',
        'Otomatik randevu sisteminin çalışacağı rampalar',
      ],
    },
  });

  PAGES['irsaliye-havuzu'] = () => feature({
    id: 'irsaliye-havuzu',
    title: 'İrsaliye Havuzu', cta: 'İrsaliye Havuzuna Git',
    today: [
      [icInset('a0aca', '8.33% 12.5%', '-5.63% -6.25%'), 'Manuel Veri Girişi', 'Yaşanan zaman kayıpları'],
      [ic('f1d9f'), 'Hatalı Eşleşmeler', 'Sevk ve fatura hataları'],
      [ic('44c73'), 'Kayıp İrsaliyeler', 'Takip zorluğu ve kaybolma riskleri'],
    ],
    nexus: [
      [ic('7ad8e'), 'OCR ile Hızlı Tarama', 'Farklı formatlardaki irsaliyeleri okuma'],
      [ic('cb18e'), 'Otomatik Sevkiyat Eşleşmesi', 'İrsaliye ve sevkiyatların hatasız eşleşmesi'],
      [ic('945f9'), 'Merkezi Havuz Yönetimi', 'Güvenli ve kolay irsaliye takibi'],
    ],
    problems: [
      'Tedarikçilerin irsaliyelerini sisteme manuel girmesi zaman kaybına neden olması',
      'İrsaliye numaralarının hatalı girilmesi sevkiyat eşleşme hatalarına yol açması',
      'Parsiyel taşıma firmalarının irsaliye kayıtları ile tedarikçi kayıtları arasında uyumsuzluk',
      'İrsaliyelerin sevkiyatla eşleştirilmesinin tamamen manuel süreçlerle yönetilmesi',
      'Eşleşmeyen irsaliyelerin takibinin zorluğu ve kayıp riski',
    ],
    metrics: [
      ['up', 'OCR doğruluk oranı', 'Tarama başarı oranı'],
      ['up', 'Otomatik eşleşme oranı', 'Sevkiyat eşleşme hedefi'],
      ['down', 'Manuel giriş süresi', 'Dijital süreç dönüşümü'],
      ['down', 'İrsaliye işlem hızı', 'Hızlı işlem döngüsü'],
      ['up', 'Doğru eşleşme oranı', 'Doğru veri kalitesi'],
      ['target', 'Havuz bekleme süresi', '&lt; 7 gün hedef'],
    ],
    steps: [
      ['İrsaliye Yükleme ve OCR Tarama', 'Tedarikçi PDF, PNG ve JPEG formatındaki irsaliyeleri sisteme yükler. Yüklenen irsaliyeler OCR ile taranarak irsaliye numarası otomatik okunur.'],
      ['Doğrulama ve Havuza Ekleme', 'OCR ile okunamayan irsaliye numaraları için manuel giriş yapılabilir. Sipariş numarası ve lojistik firması seçilerek yükleme işlemi tamamlanır.'],
      ['Otomatik Eşleştirme', 'Parsiyel taşıma firması tarafından oluşturulan sevkiyatlarda girilen irsaliye numaraları, İrsaliye Havuzu\'ndaki kayıtlarla otomatik olarak eşleştirilir. Eşleşen irsaliyeler sevkiyata eklenir.'],
      ['Havuz Yönetimi', 'Eşleşmeyen irsaliyeler havuzda beklemeye devam eder. Tedarikçi havuza yüklediği irsaliyeleri eşleşmeden önce silebilir. Havuzdaki irsaliyeler maksimum 7 gün boyunca bekletilir.'],
    ],
    settings: {
      title: 'Sistem Kuralları ve Yetkileriniz', cta: 'İrsaliye Havuzunu Görüntüle',
      items: [
        'Aynı irsaliye numarasının ikinci kez yüklenmesine izin verilmemelidir',
        'Doğrulanan irsaliyeler İrsaliye Havuzu\'na kaydedilmelidir',
        'Eşleşen irsaliyeler otomatik sevkiyata eklenmeli ve havuzdan kaldırılmalıdır',
        'İrsaliye Havuzu görüntüleme yetkisi tedarikçi ve nakliye kullanıcılarında olmalıdır',
        'Havuzdaki irsaliyeler maksimum 7 gün boyunca bekletilmelidir',
      ],
    },
  });

  PAGES['alt-lojistik-atamasi'] = () => feature({
    id: 'alt-lojistik-atamasi',
    title: 'Alt Lojistik Ataması', cta: 'Alt Tedarikçi Tanımla',
    today: [
      [ic('ff84d'), 'Sistem Dışı Takip', 'Alt yükleniciye verilen işlerin manuel yürütülmesi'],
      [icInset('adbf5', '33.33% 8.33%', '-14.06% -5.63%'), 'İletişim Kopukluğu', 'Sürücü atanmadığı için sürecin izlenememesi'],
      [ic('f3fb4'), 'Hesap ve Yetki Karmaşası', 'Alt firmaların sisteme girememesi'],
    ],
    nexus: [
      [`<span class="ic16"><span class="abs" style="left:0;top:-0.9px;width:16px;height:16px">${img('81c35')}</span></span>`, 'Tek Tıkla Alt Lojistik Ataması', 'İşin anında alt lojistik firmasına devredilmesi'],
      [icInset('c770a', '21.88% 9.38%', '0'), 'Esnek Yetki ve Görünürlük Yönetimi', 'Yetkiler ve görünürlük kontrolü'],
      [ic('78eea'), 'Bütünleşik Operasyon Ağı', 'Aynı iş akışında sorunsuz ve şeffafça buluşma'],
    ],
    problems: [
      'Nakliye firmalarının alt yüklenici araçlarını/sürücülerini sisteme tanımlayamaması',
      'Alt lojistik tedarikçilerine iş atama sürecinin manuel ve takipsiz olması',
      'Nakliye firmalarının taşere ettikleri işleri dijital platform üzerinden izleyip yönetememesi',
      'Alt taşıyıcı firmaya yetki verme/kısıtlama mekanizmasının bulunmaması',
      'Nakliye firmasının alt tedarikçi operasyonlarını izleyememesi ve raporlayamaması',
    ],
    metrics: [
      ['up', 'Alt tedarikçi atama oranı', 'Dijital atama hedefi'],
      ['up', 'İş kabul hızı', 'Ortalama kabul süresi'],
      ['down', 'Yetki yönetim süresi', 'Setting bazlı yönetim'],
      ['up', 'Operasyonel şeffaflık', 'Tedarikçi görünürlüğü'],
      ['up', 'Doğru eşleşme oranı', 'Hatasız yönlendirme'],
      ['target', 'Alt tedarikçi memnuniyeti', '&gt; 85% hedef'],
    ],
    steps: [
      ['Alt Lojistik Tedarikçi Tanımlama', 'Nakliye firmaları kendilerine anlaşmalı alt lojistik tedarikçileri tanımlayabilir. Ceva gibi bir nakliye firması, Kooperatif gibi alt taşıyıcı firmaları sisteme ekleyerek iş birliği ağını oluşturur.'],
      ['İş Atama ve Kabul', 'Nakliye firması kendisine atanan bir işi kabul ederek, "sürücü ata" yerine "alt lojistik tedarikçisine ata" seçeneğiyle iş ataması yapabilir. Alt tedarikçi işi kabul eder veya reddeder.'],
      ['Yetki ve Görünürlük Yönetimi', 'Nakliye firmasının sahip olduğu görüntüleme ve düzenleme yetkileri, setting ile alt lojistik tedarikçisine verilebilir veya kısıtlanabilir. Alt taşıyıcı bilgisi varsayılan olarak tedarikçi ile paylaşılmaz.'],
      ['Operasyon ve Raporlama', 'Akgıda (tedarikçi) nakliye firması olarak Ceva\'yı görmeye devam eder. Kooperatif tarafından taşıma yapıldığı bilgisi Ceva\'ya aittir. İleride talep gelirse bu bilgiyi setting ile tedarikçiye gösterme inisiyatifi kullanılabilir.'],
    ],
    settings: {
      title: 'Sistem Kuralları ve Yetkileriniz', button: 'Alt Yüklenicileri Yönet',
      items: [
        'Alt taşıyıcı bilgisi varsayılan olarak tedarikçi ile paylaşılmamalıdır',
        'Nakliye firması alt tedarikçiye yetki verme/kısıtlama yapabilmelidir',
        'Tedarikçi, nakliye firmasını görmeye devam etmeli, alt taşıyıcıyı görmemelidir',
        'Alt tedarikçi firma bilgisi gösterme/göstermeme setting ile yönetilebilmelidir',
        'Alt lojistik tedarikçisi tüm yetkileri nakliye firmasından devralabilmelidir',
      ],
    },
  });

  PAGES['sesli-bildirim'] = () => feature({
    id: 'sesli-bildirim',
    title: 'Sesli Bildirim', cta: 'Sürücü Raporlarını İncele',
    today: [
      [ic('25407'), 'Manuel Arama Yükü', 'Sürücülere ulaşmak için harcanan zaman'],
      [icInset('adbf5', '33.33% 8.33%', '-14.06% -5.63%'), 'İletişim Kopukluğu ve Gecikmeler', 'Bildirim görmeyen sürücülerin süreci aksatması'],
      [ic('ac493'), 'Soğuk Zincir Riskleri', 'Frigolu sevkiyatlarda bekleme tehlikesi'],
    ],
    nexus: [
      [icInset('03ec7', '12.5%', '-6.25%'), 'Otomatik Arama', 'Sistem tarafından saniyeler içersinde aranma'],
      [icInset('234ab', '8.33%', '-4.69%'), 'Sıfır Operasyonel Efor', 'Rampa çağrıları ve bildirimlerinin eforsuz yapılması'],
      [ic('83936'), 'Kesintisiz ve Akıcı İletişim', 'Sürücü aksiyonuna veya mesafeye göre arama'],
    ],
    problems: [
      'Sürücülerin randevu atamalarından haberdar olmaması ve onay sürecinin gecikmesi',
      'Rampa çağrısı yapıldığında sürücüye ulaşılamaması ve bekleme sürelerinin uzaması',
      'Donuk/soğuk sevkiyatlarda tedarikçi randevularının sürücüye bildirilememesi',
      'Teslim noktasına varış sonrası sürücü ile iletişim kurulmasında manuel süreç yükü',
      'Arama tetikleme mantığının tanımsız olması ve tutarsız iletişim deneyimi',
    ],
    metrics: [
      ['up', 'Arama başarı oranı', 'Başarılı iletişim hedefi'],
      ['up', 'Randevu onay hızı', '15 dk içinde onay'],
      ['down', 'Rampa bekleme süresi', 'Azalan bekleme süresi'],
      ['up', 'Sürücü ulaşılabilirlik', 'Anlık ulaşılabilirlik'],
      ['up', 'Doğru eşleşme oranı', 'Tek seferlik bilgilendirme'],
      ['target', 'Otomatik arama oranı', '&gt; 90% hedef'],
    ],
    steps: [
      ['Randevu Bildirim Araması', 'Sürücü "teslime geliyor" durumunda ve randevusu onaylanmamışsa, ilk arama randevu atamasından 15 dakika sonra yapılır. İşlem yapılmazsa 15 dakikada bir, toplam 2 arama tekrarlanır. Sürücü onaylarsa arama süreci durur.'],
      ['Donuk Sevkiyat Bilgilendirme', 'Sevkiyat soğuk/frigo işaretliyse, randevuyu tedarikçi alır ve sürücüden onay beklenmez. Sürücüye tek seferlik bilgilendirme amaçlı arama yapılır.'],
      ['Teslim Noktası Varış Aramaları', 'Sürücü teslim noktasına vardığında sayaç sıfırlanarak kural seti devreye girer: randevu ataması yoksa arama yapılmaz, randevu var ancak işlem görmediyse 15 dk arayla 2 arama, rampaya çağrıldıysa bilgilendirme araması tetiklenir.'],
      ['Rampa Çağrısı Araması', 'Varış bilgisi ve en az bir irsaliye işlem görmüşse teslimat yapıldı sayılır ve tüm randevu/rampa aramaları tamamen durur. Ortak geofence durumunda her depo bağımsız olarak kendi kural setini çalıştırır.'],
    ],
  });

  /* ---------- Sıradakiler ---------- */
  const ROADMAP = [
    { year: '2026', title: 'Eksik Teslimat &amp; Red Analizi', desc: 'Teslim edilen ürünlerde eksik, hasar ve red durumlarının anlık takibi. Tedarikçiye otomatik bildirim ve kök neden analizi.', tags: ['Operasyonel Hız', 'Kalite Yönetimi'] },
    { year: '2027', title: 'Yard Management', desc: 'Depo sahası içi araç hareketlerinin dijital yönetimi. Park alanı, bekleme süresi ve saha içi yönlendirme optimizasyonu.', tags: ['Maliyet Düşürücü', 'Saha Verimliliği'] },
    { year: '2028', title: 'Master Schedule Board', desc: 'Tüm tedarik zinciri operasyonlarının tek bir ekrandan planlanması. Depo, araç ve rampa kaynaklarının entegre takvim görünümü.', tags: ['Stratejik Planlama', 'Tam Görünürlük'] },
  ];
  const OPTIONS = ['Eksik Teslimat &amp; Red Analizi', 'Yard Management'];
  let vote = 0;
  let voted = false;

  const optionsHtml = () => OPTIONS.map((o, i) => `
    <button class="option${i === vote ? ' sel' : ''}" data-opt="${i}" role="radio" aria-checked="${i === vote}">
      <span class="radio"></span><span>${o}</span>
    </button>`).join('');

  PAGES['siradakiler'] = () => `
    <div class="page-head between"><h1 class="page-title">Sıradakiler</h1>${bell}</div>
    <p class="sub-note">Yayın sırasını tedarikçideki etki belirler — teknik kolaylık değil.</p>
    <div class="roadmap">
      <div class="panel">
        <div class="tl-head"><h2>Yol Haritası</h2><p>Sıradaki ürün ve operasyonel iyileştirmeleri zaman çizelgesi ile takip edin.</p></div>
        <div class="timeline">
          <div class="rail">${ROADMAP.map((_, i) => `<div class="rail-seg"><img src="${A(i === 0 ? 'f6f65' : 'd0726')}" width="12" height="12" alt=""><i></i></div>`).join('')}</div>
          <div class="tl-list">${ROADMAP.map((r, i) => `
            <div class="tl-item${i === 0 ? ' active' : ''}">
              <div class="tl-title"><span class="date-badge">${r.year}</span><b>${r.title}</b></div>
              <p class="tl-desc">${r.desc}</p>
              <div class="tags">${r.tags.map((t) => `<span class="tag">${t}</span>`).join('')}</div>
            </div>`).join('')}
          </div>
        </div>
      </div>
      <div class="rm-note"><p>Tarihler hedeftir ve her sayıda güncellenir.</p><hr></div>
    </div>
    <section class="panel feedback">
      <h2>Sizin operasyonunuz için en acil olan çözüm hangisi?</h2>
      <div class="options" role="radiogroup" id="options">${optionsHtml()}</div>
      <button class="submit" id="submit">Gönder</button>
      <p class="thanks" id="thanks" role="status" aria-live="polite"></p>
    </section>`;

  /* ---------- Geçmiş Bültenler ---------- */
  const UPDATES = [
    { month: 'Ağustos 2026', date: '24 Ağustos 2026', cat: 'Yeni Özellik', title: 'Kontenjan Bazlı Atama', desc: 'Sürücü ve araç kotalarını günlük/haftalık bazda sınırlandırarak otomatik atamaları daha verimli yönetin.' },
    { month: 'Ağustos 2026', date: '10 Ağustos 2026', cat: 'İyileştirme', title: 'Dropway - Rota Optimizasyonu', desc: 'Parçalı sevkiyatlarda indirme noktaları arası mesafeyi minimuma indiren yeni algoritma yayında.' },
  ];
  const CATS = ['Tümü', 'Yeni Özellik', 'İyileştirme'];
  const archive = { q: '', cat: 'Tümü' };

  const updList = () => {
    const q = archive.q.trim().toLocaleLowerCase('tr');
    const rows = UPDATES.filter((u) => (archive.cat === 'Tümü' || u.cat === archive.cat) &&
      (!q || (u.title + ' ' + u.desc + ' ' + u.cat).toLocaleLowerCase('tr').includes(q)));
    if (!rows.length) return '<p class="empty">Aramanızla eşleşen bülten bulunamadı.</p>';
    const months = [...new Set(rows.map((r) => r.month))];
    return months.map((m) => `
      <div class="month"><h2>${m}</h2>
        ${rows.filter((r) => r.month === m).map((u) => `
          <article class="upd">
            <div class="upd-main">
              <span class="upd-date">${u.date}</span>
              <div class="upd-row"><span class="badge ${u.cat === 'Yeni Özellik' ? 'new' : 'imp'}">${u.cat}</span><b>${u.title}</b></div>
              <p>${u.desc}</p>
            </div>
            <button class="upd-go" aria-label="${u.title} detayına git"><img src="${A('a8b4a')}" width="16" height="16" alt=""></button>
          </article>`).join('')}
      </div>`).join('');
  };

  PAGES['gecmis-bultenler'] = () => `
    <div class="page-head between"><h1 class="page-title">Geçmiş Bültenler</h1>${bell}</div>
    <div class="archive">
      <div class="tools">
        <label class="search"><img src="${A('39f74')}" width="18" height="18" alt=""><input id="q" type="search" placeholder="Bültenlerde ara..." value="${archive.q}" aria-label="Bültenlerde ara"></label>
        <div class="filter" id="filter">
          <button aria-haspopup="listbox" aria-expanded="false"><span id="filter-label">${archive.cat === 'Tümü' ? 'Kategoriye Göre Filtrele' : archive.cat}</span><img src="${A('dbf4b')}" width="16" height="16" alt=""></button>
          <div class="menu" role="listbox">${CATS.map((c) => `<button role="option" data-cat="${c}" class="${c === archive.cat ? 'on' : ''}">${c}</button>`).join('')}</div>
        </div>
      </div>
      <div id="upd-list" style="display:flex;flex-direction:column;gap:32px">${updList()}</div>
    </div>`;

  PAGES['yenilikler'] = yenilikler;

  /* ---------- Router ---------- */
  const TITLES = {
    'yenilikler': 'Yenilikler', 'otomatik-randevu-atama': 'Otomatik Randevu Atama', 'irsaliye-havuzu': 'İrsaliye Havuzu',
    'alt-lojistik-atamasi': 'Alt Lojistik Ataması', 'sesli-bildirim': 'Sesli Bildirim', 'siradakiler': 'Sıradakiler', 'gecmis-bultenler': 'Geçmiş Bültenler',
  };
  const GAPS = { 'siradakiler': 'gap-32', 'gecmis-bultenler': 'gap-40' };
  const sb = document.getElementById('sidebar');
  const ct = document.getElementById('content');

  const bind = (id) => {
    if (id === 'siradakiler') {
      const wrap = document.getElementById('options');
      wrap.addEventListener('click', (e) => {
        const b = e.target.closest('[data-opt]'); if (!b) return;
        vote = +b.dataset.opt; voted = false;
        wrap.innerHTML = optionsHtml();
        const t = document.getElementById('thanks'); t.textContent = '';
        document.getElementById('submit').disabled = false;
      });
      document.getElementById('submit').addEventListener('click', (e) => {
        voted = true; e.currentTarget.disabled = true;
        document.getElementById('thanks').textContent = `Teşekkürler! Oyunuz kaydedildi: ${OPTIONS[vote].replace('&amp;', '&')}`;
      });
    }
    if (id === 'gecmis-bultenler') {
      const list = document.getElementById('upd-list');
      document.getElementById('q').addEventListener('input', (e) => { archive.q = e.target.value; list.innerHTML = updList(); });
      const f = document.getElementById('filter');
      const btn = f.querySelector(':scope > button');
      btn.addEventListener('click', () => { const o = f.classList.toggle('open'); btn.setAttribute('aria-expanded', o); });
      f.querySelector('.menu').addEventListener('click', (e) => {
        const b = e.target.closest('[data-cat]'); if (!b) return;
        archive.cat = b.dataset.cat;
        f.querySelectorAll('.menu button').forEach((x) => x.classList.toggle('on', x === b));
        document.getElementById('filter-label').textContent = archive.cat === 'Tümü' ? 'Kategoriye Göre Filtrele' : archive.cat;
        f.classList.remove('open'); btn.setAttribute('aria-expanded', 'false');
        list.innerHTML = updList();
      });
      document.addEventListener('click', (e) => { if (!f.contains(e.target)) f.classList.remove('open'); });
    }
  };

  const render = () => {
    const id = (location.hash.replace(/^#\//, '') || 'yenilikler');
    const key = PAGES[id] ? id : 'yenilikler';
    sb.innerHTML = sidebar(key);
    ct.className = 'content ' + (GAPS[key] || '');
    ct.innerHTML = PAGES[key]();
    document.title = `${TITLES[key]} · Yukato Nexus Tedarikçi Bülteni`;
    window.scrollTo(0, 0);
    bind(key);
  };
  window.addEventListener('hashchange', render);
  render();
})();
