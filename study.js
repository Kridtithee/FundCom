// ============================================================
//  FundCom - บทเรียนสรุปเนื้อหา (Study Notes)
//  1 หมวด = ภาพรวม + แผนผัง/ตาราง + จุดสำคัญ + ทริคข้อสอบ
// ============================================================
const STUDY = {

// ================================================================
//  1. OPERATING SYSTEM
// ================================================================
"Operating System": {
  icon: "🖥️",
  tagline: "ตัวกลางระหว่างคนกับเครื่อง · จัดสรรทรัพยากรให้ทุกคน",
  sections: [
    { type: "overview", title: "ภาพรวม",
      text: "ระบบปฏิบัติการ (OS) คือ <b>System Software</b> ที่ทำหน้าที่เป็น <b>ตัวกลาง</b> ระหว่างผู้ใช้/โปรแกรมประยุกต์ กับฮาร์ดแวร์ — คอยจัดสรรทรัพยากรที่มีจำกัด (CPU, RAM, อุปกรณ์ I/O) ให้ทุกโปรแกรมใช้งานได้อย่างเป็นธรรมและมีประสิทธิภาพ" },
    { type: "diagram", title: "🗺️ ตำแหน่งของ OS ในระบบ",
      html: `<div class="d-stack">
        <div class="d-node">👤 ผู้ใช้</div><div class="d-arrow-v">▼</div>
        <div class="d-node">📱 Application Software <span class="d-sub">Word · Browser · Game</span></div><div class="d-arrow-v">▼</div>
        <div class="d-node d-hi">🖥️ Operating System <span class="d-sub">ตัวกลาง · จัดสรรทรัพยากร</span></div><div class="d-arrow-v">▼</div>
        <div class="d-node">⚙️ Hardware <span class="d-sub">CPU · RAM · Disk · I/O</span></div>
      </div>` },
    { type: "table", title: "📋 หน้าที่ 5 ประการของ OS",
      headers: ["หน้าที่", "ทำอะไร"],
      rows: [
        ["🔄 Process Management", "จัดสรรเวลา CPU ให้แต่ละโปรเซส (scheduling)"],
        ["🧠 Memory Management", "บริหาร RAM ที่จำกัด (paging / virtual memory)"],
        ["📁 File Management", "จัดเก็บ เรียกใช้ และควบคุมไฟล์"],
        ["🔌 Device Management", "ควบคุมอุปกรณ์ I/O ผ่าน driver (เช่น spooling)"],
        ["🔐 Security & UI", "สิทธิ์ผู้ใช้ + ส่วนติดต่อผู้ใช้ (Shell/GUI)"],
      ] },
    { type: "diagram", title: "🕰️ วิวัฒนาการ OS (เรียงตามเวลา)",
      html: `<div class="d-timeline">
        <div class="d-tl"><b>Batch</b><span>รันงานเป็นชุด · บัตรเจาะรู<br>ปัญหา: CPU ว่างบ่อย (I/O ช้ากว่า CPU)</span></div>
        <div class="d-tl"><b>Spooling</b><span>ใช้<i>ดิสก์</i>เก็บ Job pool · Overlap อ่านงาน+พิมพ์</span></div>
        <div class="d-tl"><b>Multiprogramming</b><span>หลายโปรแกรมใน RAM พร้อมกัน<br>งานหนึ่งรอ I/O → สลับ CPU ไปงานอื่น</span></div>
        <div class="d-tl"><b>Time-Sharing</b><span>แบ่ง <i>time slice</i> สั้นๆ สลับเร็ว<br>ผู้ใช้รู้สึกเหมือนได้เครื่องคนเดียว</span></div>
        <div class="d-tl"><b>Parallel</b><span>CPU หลายตัวในเครื่องเดียว แชร์ทรัพยากรร่วมกัน</span></div>
        <div class="d-tl"><b>Distributed</b><span>หลายเครื่องอิสระ เชื่อมผ่านเครือข่าย</span></div>
      </div>` },
    { type: "diagram", title: "🔁 วงจรสถานะโปรเซส (ข้อสอบออกบ่อย!)",
      html: `<div class="d-flow">
        <div class="d-step">New</div><div class="d-arrow">→</div>
        <div class="d-step">Ready</div><div class="d-arrow">⇄</div>
        <div class="d-step d-hi">Running</div><div class="d-arrow">→</div>
        <div class="d-step">Terminated</div>
      </div>
      <div class="d-flow" style="margin-top:8px">
        <div class="d-step d-hi">Running</div><div class="d-arrow">→ รอ I/O →</div>
        <div class="d-step">Waiting</div><div class="d-arrow">→ I/O เสร็จ →</div>
        <div class="d-step">Ready</div>
      </div>
      <p class="d-note">หมด time slice → กลับ <b>Ready</b> (แค่โดนแย่ง CPU) · รอ I/O → ไป <b>Waiting</b></p>` },
    { type: "table", title: "☠️ Deadlock: ต้องครบ 4 เงื่อนไขพร้อมกัน",
      headers: ["เงื่อนไข", "ความหมาย"],
      rows: [
        ["1. Mutual Exclusion", "ทรัพยากรใช้ได้ทีละโปรเซส"],
        ["2. Hold and Wait", "ถือของเดิมไว้ แล้วขอของใหม่"],
        ["3. No Preemption", "แย่งทรัพยากรคืนไม่ได้ ต้องรอคืนเอง"],
        ["4. Circular Wait", "รอเป็นวงกลม (A รอ B, B รอ A)"],
      ] },
    { type: "points", title: "📌 คำศัพท์ต้องจำ",
      items: [
        "<b>Buffering</b> ใช้ <b>RAM</b> พักข้อมูลชั่วคราว — <b>Spooling</b> ใช้ <b>ดิสก์</b> (จำสลับกันคือโดนหลอก)",
        "<b>Virtual Memory / Paging</b> ทำให้รันโปรแกรมใหญ่กว่า RAM ได้",
        "<b>Thrashing</b> = page fault ถี่จน CPU มัวแต่สลับหน้า ไม่ได้งาน",
        "<b>System Call</b> = ช่องทางให้โปรแกรมเรียกใช้บริการ Kernel",
        "<b>Kernel</b> แกนกลางคุยฮาร์ดแวร์โดยตรง / <b>Shell</b> รับคำสั่งจากผู้ใช้",
      ] },
    { type: "tips", title: "🎯 ข้อสอบชอบออก",
      items: [
        "Spooling (ดิสก์) vs Buffering (RAM) — สลับคำกันหลอกบ่อยมาก",
        "โปรเซสหมด time slice → ไป Ready (ไม่ใช่ Waiting)",
        "Deadlock ถาม 'ข้อใดไม่ใช่เงื่อนไข' — จำ 4 ข้อให้แม่น",
        "Thrashing vs Deadlock vs Fragmentation แยกให้ออก",
      ] },
    { type: "memory", title: "🧠 จำง่ายๆ",
      text: "รอ I/O = <b>Waiting</b> · โดนแย่ง CPU = <b>Ready</b> · จำสูตร <b>Spool=ดิสก์, Buffer=RAM</b>" },
  ]
},

// ================================================================
//  2. CYBER SECURITY
// ================================================================
"Cyber Security": {
  icon: "🔐",
  tagline: "ปกป้อง 3 สิ่ง: ความลับ ความถูกต้อง และความพร้อมใช้",
  sections: [
    { type: "overview", title: "ภาพรวม",
      text: "ความมั่นคงไซเบอร์มีเป้าหมาย 3 ประการเรียกว่า <b>CIA Triad</b> — ทุกมาตรการป้องกันล้วนออกแบบมาเพื่อปกป้องอย่างน้อยหนึ่งในสามสิ่งนี้ ส่วนการโจมตีก็คือความพยายามทำลายสิ่งเหล่านี้" },
    { type: "diagram", title: "🔺 CIA Triad (หัวใจของบทนี้)",
      html: `<div class="d-tri">
        <div class="d-tri-node"><b>C</b>onfidentiality<span>ความลับ<br>เข้ารหัส · สิทธิ์เข้าถึง</span></div>
        <div class="d-tri-node"><b>I</b>ntegrity<span>ความถูกต้อง<br>Hash · checksum</span></div>
        <div class="d-tri-node"><b>A</b>vailability<span>พร้อมใช้<br>Backup · กัน DDoS</span></div>
      </div>` },
    { type: "table", title: "🦠 เปรียบเทียบมัลแวร์ (ออกสอบทุกปี)",
      headers: ["ชื่อ", "แพร่เองได้?", "ต้องอาศัยโฮสต์?", "พฤติกรรมเด่น"],
      rows: [
        ["Virus", "✗", "✓", "แฝงในไฟล์ ต้องมีคนรันถึงทำงาน"],
        ["Worm", "✓", "✗", "แพร่ผ่านเครือข่ายได้เอง เร็วมาก"],
        ["Trojan", "✗", "✓", "ปลอมเป็นโปรแกรมดี หลอกให้ติดตั้ง"],
        ["Ransomware", "—", "—", "เข้ารหัสไฟล์แล้วเรียกค่าไถ่"],
        ["Spyware", "—", "—", "แอบดูดข้อมูลเงียบๆ ไม่ให้รู้ตัว"],
      ] },
    { type: "table", title: "🔑 การเข้ารหัส 3 แบบ",
      headers: ["แบบ", "กุญแจ", "ตัวอย่าง", "ใช้ทำอะไร"],
      rows: [
        ["Symmetric", "ดอกเดียว", "AES", "เร็ว — เข้ารหัสข้อมูลปริมาณมาก"],
        ["Asymmetric", "คู่ public/private", "RSA", "แลกกุญแจ · เซ็นลายเซ็นดิจิทัล"],
        ["Hash", "ไม่มี (ทางเดียว)", "SHA-256", "ตรวจความสมบูรณ์ ถอดกลับไม่ได้"],
      ] },
    { type: "diagram", title: "🧅 Defense in Depth (ป้องกันเป็นชั้นๆ)",
      html: `<div class="d-stack">
        <div class="d-node">🧑‍💻 นโยบาย + อบรมผู้ใช้ <span class="d-sub">ด่านแรก: คน</span></div><div class="d-arrow-v">▼</div>
        <div class="d-node">🔐 Access Control + 2FA <span class="d-sub">ใครเข้าได้บ้าง</span></div><div class="d-arrow-v">▼</div>
        <div class="d-node">🧱 Firewall + IDS/IPS <span class="d-sub">กรองทราฟฟิกเครือข่าย</span></div><div class="d-arrow-v">▼</div>
        <div class="d-node d-hi">💾 เข้ารหัสข้อมูล + Backup <span class="d-sub">ด่านสุดท้าย: ข้อมูล</span></div>
      </div>
      <p class="d-note">หลักคิด: ไม่มีกำแพงชั้นเดียวที่กันได้หมด — ทะลุชั้นหนึ่งต้องเจออีกชั้น</p>` },
    { type: "points", title: "📌 คำศัพท์ต้องจำ",
      items: [
        "<b>Phishing</b> = อีเมล/เว็บปลอมหว่านแห — <b>Spear Phishing</b> = เจาะจงเป้าหมาย ศึกษาข้อมูลมาก่อน",
        "<b>Zero-day</b> = ช่องโหว่ที่ยังไม่มีแพตช์ (มีเวลาแก้ 0 วัน)",
        "<b>MITM</b> = แอบอยู่กลางทางดักฟัง — กันด้วย HTTPS/TLS",
        "<b>Social Engineering</b> = โจมตี 'คน' ด้วยจิตวิทยา ไม่ใช่แฮกระบบ",
        "<b>Digital Signature</b> เซ็นด้วย <b>private key</b> ผู้ส่ง ตรวจด้วย public key",
        "<b>IDS</b> แค่แจ้งเตือน — <b>IPS</b> แจ้ง + บล็อกได้เลย",
        "<b>Least Privilege</b> = ให้สิทธิ์น้อยที่สุดเท่าที่จำเป็น",
      ] },
    { type: "tips", title: "🎯 ข้อสอบชอบออก",
      items: [
        "Virus vs Worm: ถามว่า 'แพร่เองได้' → Worm เท่านั้น",
        "Hash ถอดกลับไม่ได้ — ถ้าตัวเลือกบอก 'ถอดรหัส hash' คือผิด",
        "เซ็นลายเซ็นดิจิทัลใช้กุญแจไหน — private key ของผู้ส่ง",
        "Ransomware (ไถ่เงิน) vs Spyware (แอบดูด) อย่าสลับ",
      ] },
    { type: "memory", title: "🧠 จำง่ายๆ",
      text: "<b>ไวรัสต้องอาศัยโฮสต์ เวิร์มเดินเองได้</b> · <b>CIA = ลับ·ถูก·พร้อม</b> (Confidentiality·Integrity·Availability)" },
  ]
},

// ================================================================
//  3. DATABASE
// ================================================================
"Database": {
  icon: "🗄️",
  tagline: "จากข้อมูลดิบ สู่สารสนเทศที่ใช้ตัดสินใจ",
  sections: [
    { type: "overview", title: "ภาพรวม",
      text: "<b>Data</b> (ข้อมูลดิบ) ผ่านการประมวลผลกลายเป็น <b>Information</b> (สารสนเทศ) เพื่อใช้ตัดสินใจ — แต่ถ้าเก็บแบบระบบไฟล์เดิมๆ จะเจอปัญหาข้อมูลซ้ำซ้อนและไม่สอดคล้องกัน จึงต้องมี <b>DBMS</b> มาบริหารฐานข้อมูลกลาง" },
    { type: "diagram", title: "🔄 จากข้อมูลสู่การตัดสินใจ",
      html: `<div class="d-flow">
        <div class="d-step">📥 Data<br><span class="d-sub">ข้อมูลดิบ</span></div><div class="d-arrow">→<br><span class="d-sub">ประมวลผล</span></div>
        <div class="d-step d-hi">📊 Information<br><span class="d-sub">สารสนเทศ</span></div><div class="d-arrow">→</div>
        <div class="d-step">🎯 Decision<br><span class="d-sub">ตัดสินใจ</span></div>
      </div>` },
    { type: "table", title: "⚖️ File System vs DBMS",
      headers: ["ประเด็น", "File System", "DBMS"],
      rows: [
        ["ข้อมูลซ้ำซ้อน", "มาก (เก็บแยกไฟล์)", "น้อย (เก็บกลาง)"],
        ["ความสอดคล้อง", "ต่ำ — แก้ที่ไม่ครบ", "สูง"],
        ["ใช้พร้อมกันหลายคน", "ยาก/เสี่ยงพัง", "รองรับ"],
        ["ความปลอดภัย", "ต่ำ", "มีระบบสิทธิ์ + backup"],
      ] },
    { type: "table", title: "🔑 คีย์ 4 แบบ (สับสนกันบ่อย)",
      headers: ["คีย์", "ความหมาย"],
      rows: [
        ["Candidate Key", "ทุกคีย์ที่มีคุณสมบัติเป็น PK ได้ (ตัวเต็งหลายตัว)"],
        ["Primary Key", "ตัวที่ถูกเลือกแล้ว — หนึ่งเดียวต่อตาราง (unique + not null)"],
        ["Foreign Key", "คีย์ที่อ้างอิง PK ของตารางอื่น — เชื่อมความสัมพันธ์"],
        ["Composite Key", "PK ที่ประกอบจากหลายคอลัมน์รวมกัน"],
      ] },
    { type: "diagram", title: "📐 ER Diagram: สัญลักษณ์ 3 อย่าง",
      html: `<div class="d-flow">
        <div class="d-shape-rect">Entity</div><div class="d-arrow">→</div>
        <div class="d-shape-ellipse">Attribute</div><div class="d-arrow">→</div>
        <div class="d-shape-diamond">Relationship</div>
      </div>
      <p class="d-note">สี่เหลี่ยมผืนผ้า = เอนทิตี · วงรี = แอตทริบิวต์ · ข้าวหลามตัด = ความสัมพันธ์</p>` },
    { type: "table", title: "📏 Normalization (1NF → 2NF → 3NF)",
      headers: ["ระดับ", "กฎ (ต้องผ่านขั้นก่อนหน้าก่อน)"],
      rows: [
        ["1NF", "ทุกช่องเก็บค่า <b>atomic</b> ค่าเดียว — ห้าม multi-value ในช่องเดียว"],
        ["2NF", "ผ่าน 1NF + ไม่มี <b>partial dependency</b> (non-key ห้ามพึ่ง PK แค่บางส่วน)"],
        ["3NF", "ผ่าน 2NF + ไม่มี <b>transitive dependency</b> (non-key ห้ามพึ่งกันเองทางอ้อม)"],
      ] },
    { type: "table", title: "💻 คำสั่ง SQL 2 ตระกูล",
      headers: ["ตระกูล", "คำสั่ง", "ใช้ทำอะไร"],
      rows: [
        ["DDL", "CREATE · ALTER · DROP", "นิยาม/แก้ <b>โครงสร้าง</b>"],
        ["DML", "SELECT · INSERT · UPDATE · DELETE", "จัดการ <b>ข้อมูล</b> ข้างใน"],
      ] },
    { type: "points", title: "📌 คำศัพท์ต้องจำ",
      items: [
        "<b>Anomaly 3 แบบ:</b> Insert (เพิ่มไม่ได้) / Update (แก้ไม่ครบ) / Delete (ลบแล้วของอื่นหาย) — แก้ด้วย normalization",
        "<b>Referential Integrity</b> = FK ต้องอ้างอิงข้อมูลที่มีอยู่จริง",
        "<b>Data Independence</b> = เปลี่ยนโครงสร้างภายในได้โดยโปรแกรมไม่พัง",
        "ความสัมพันธ์ <b>1:N</b> พบบ่อยที่สุด (เช่น อาจารย์ 1 คน : หลายวิชา)",
        "<b>DBA</b> = ผู้บริหารฐานข้อมูล (ออกแบบ ดูแลสิทธิ์ backup)",
      ] },
    { type: "tips", title: "🎯 ข้อสอบชอบออก",
      items: [
        "2NF vs 3NF: partial (พึ่งบางส่วน) vs transitive (พึ่งทางอ้อม)",
        "CREATE TABLE เป็น DDL ไม่ใช่ DML — หลอกบ่อย",
        "Candidate Key (หลายตัวเต็ง) vs Primary Key (ตัวที่เลือกแล้วหนึ่งเดียว)",
        "สัญลักษณ์ ER: ถามว่าข้าวหลามตัดคืออะไร → Relationship",
      ] },
    { type: "memory", title: "🧠 จำง่ายๆ",
      text: "<b>1NF ห้ามซ้ำในช่อง · 2NF ห้ามพึ่งบางส่วน · 3NF ห้ามพึ่งทางอ้อม</b> · DDL สร้างโครง DML จัดการข้อมูล" },
  ]
},

// ================================================================
//  4. SDLC
// ================================================================
"SDLC": {
  icon: "🔄",
  tagline: "วงจรชีวิตการพัฒนาระบบ: จากไอเดีย สู่ซอฟต์แวร์ที่ใช้งานได้",
  sections: [
    { type: "overview", title: "ภาพรวม",
      text: "<b>SDLC</b> (System Development Life Cycle) คือกระบวนการพัฒนาระบบสารสนเทศแบบเป็นขั้นตอน มี <b>7 phase</b> ตั้งแต่การวางแผนจนถึงการดูแลหลังติดตั้ง — ส่วน <b>Agile/Scrum</b> คือแนวคิดที่ปรับให้ยืดหยุ่น วนรอบสั้น และรับการเปลี่ยนแปลงได้" },
    { type: "diagram", title: "🛤️ SDLC 7 ขั้นตอน",
      html: `<div class="d-flow d-wrap">
        <div class="d-step"><b>1</b> Planning<span class="d-sub">ศึกษาความเป็นไปได้</span></div><div class="d-arrow">→</div>
        <div class="d-step"><b>2</b> Analysis<span class="d-sub">เก็บ requirement</span></div><div class="d-arrow">→</div>
        <div class="d-step"><b>3</b> Design<span class="d-sub">ออกแบบระบบ/DB/UI</span></div><div class="d-arrow">→</div>
        <div class="d-step"><b>4</b> Development<span class="d-sub">เขียนโค้ด</span></div><div class="d-arrow">→</div>
        <div class="d-step d-hi"><b>5</b> Testing<span class="d-sub">ทดสอบ</span></div><div class="d-arrow">→</div>
        <div class="d-step"><b>6</b> Deployment<span class="d-sub">ติดตั้ง/อบรม</span></div><div class="d-arrow">→</div>
        <div class="d-step"><b>7</b> Maintenance<span class="d-sub">ดูแล/แก้ไข</span></div>
      </div>` },
    { type: "table", title: "⚖️ Waterfall vs Agile",
      headers: ["ประเด็น", "Waterfall", "Agile"],
      rows: [
        ["Requirement", "ชัดเจน ไม่เปลี่ยน", "เปลี่ยนได้ตลอด"],
        ["การส่งมอบ", "ทีเดียวตอนจบ", "ทีละส่วนทุก sprint"],
        ["ลูกค้า", "เจอตอนต้น+ท้าย", "มีส่วนร่วมตลอด"],
        ["เหมาะกับ", "งาน requirement นิ่ง", "งานที่เปลี่ยนแปลงบ่อย"],
      ] },
    { type: "table", title: "🏉 บทบาทใน Scrum (3 บทบาท)",
      headers: ["บทบาท", "หน้าที่"],
      rows: [
        ["Product Owner", "เจ้าของสินค้า — ดูแล backlog จัดลำดับความสำคัญ"],
        ["Scrum Master", "ดูแลกระบวนการ ขจัดอุปสรรค (ไม่ใช่หัวหน้าสั่งงาน)"],
        ["Dev Team", "ทีมลงมือพัฒนางานจริง"],
      ] },
    { type: "diagram", title: "🧪 ลำดับขั้นการทดสอบ",
      html: `<div class="d-flow d-wrap">
        <div class="d-step">Unit<span class="d-sub">ทีละโมดูล</span></div><div class="d-arrow">→</div>
        <div class="d-step">Integration<span class="d-sub">ประกอบกัน</span></div><div class="d-arrow">→</div>
        <div class="d-step">System<span class="d-sub">ทั้งระบบ</span></div><div class="d-arrow">→</div>
        <div class="d-step d-hi">UAT<span class="d-sub">ผู้ใช้จริงทดสอบ</span></div>
      </div>
      <p class="d-note"><b>Regression</b> = ทดสอบย้อนว่าของเดิมไม่พังหลังแก้/เพิ่มฟีเจอร์</p>` },
    { type: "points", title: "📌 คำศัพท์ต้องจำ",
      items: [
        "<b>Sprint</b> = รอบทำงานสั้นๆ แบบ time-boxed (1–4 สัปดาห์) จบต้องมีของส่งมอบ",
        "<b>User Story</b>: “As a [บทบาท], I want [ต้องการ], so that [ประโยชน์]”",
        "<b>Feasibility Study</b> อยู่ phase <b>Planning</b> — ตัดสินใจว่าควรทำไหม",
        "<b>Maintenance 4 แบบ:</b> Corrective (แก้บั๊ก) / Adaptive (ปรับตามสภาพใหม่) / Perfective (เพิ่มประสิทธิภาพ) / Preventive (ป้องกันก่อน)",
        "<b>Alpha</b> = ทดสอบในองค์กร / <b>Beta</b> = ให้ผู้ใช้นอกองค์กรลอง",
        "<b>Prototype</b> เหมาะกับงานที่ requirement ยังไม่ชัด — ทำต้นแบบให้ดูก่อน",
      ] },
    { type: "tips", title: "🎯 ข้อสอบชอบออก",
      items: [
        "ถามว่าโมเดลไหนเหมาะกับ requirement เปลี่ยนบ่อย → Agile (นิ่ง → Waterfall)",
        "Product Owner vs Scrum Master สลับหน้าที่กันหลอก",
        "UAT ทำโดยใคร → ผู้ใช้จริง/ลูกค้า (ไม่ใช่โปรแกรมเมอร์)",
        "Maintenance แบบแก้บั๊ก → Corrective",
      ] },
    { type: "memory", title: "🧠 จำง่ายๆ",
      text: "<b>P-A-D-D-T-D-M</b>: วางแผน·วิเคราะห์·ออกแบบ·พัฒนา·ทดสอบ·ติดตั้ง·ดูแล · <b>PO สั่งของ SM เคลียร์ทาง</b>" },
  ]
},

// ================================================================
//  5. GENERATIVE AI
// ================================================================
"Generative AI": {
  icon: "🤖",
  tagline: "จากกฎ if-else สู่ AI ที่สร้างของใหม่ได้",
  sections: [
    { type: "overview", title: "ภาพรวม",
      text: "AI พัฒนาจาก <b>Rule-based</b> (เขียนกฎเอง) → <b>Machine Learning</b> (ให้เครื่องเรียนรู้จากข้อมูล) → <b>Deep Learning</b> (โครงข่ายประสาทหลายชั้น) → <b>Generative AI / LLM</b> ที่สร้างข้อความ รูปภาพ เสียง ของใหม่ได้" },
    { type: "diagram", title: "🧬 วิวัฒนาการ AI",
      html: `<div class="d-flow d-wrap">
        <div class="d-step">Rule-based<span class="d-sub">if-else ที่คนเขียน</span></div><div class="d-arrow">→</div>
        <div class="d-step">Machine Learning<span class="d-sub">เรียนรู้จากข้อมูล</span></div><div class="d-arrow">→</div>
        <div class="d-step">Deep Learning<span class="d-sub">neural net หลายชั้น</span></div><div class="d-arrow">→</div>
        <div class="d-step d-hi">Generative AI / LLM<span class="d-sub">สร้างของใหม่ได้</span></div>
      </div>` },
    { type: "table", title: "📚 Machine Learning 3 แบบ",
      headers: ["แบบ", "ข้อมูลฝึก", "ตัวอย่าง"],
      rows: [
        ["Supervised", "มีป้ายกำกับ (labeled)", "จำแนกสแปม · ทำนายราคา"],
        ["Unsupervised", "ไม่มีป้ายกำกับ", "Clustering · จัดกลุ่มลูกค้า"],
        ["Reinforcement", "รางวัล/บทลงโทษ", "AI เล่นเกม · หุ่นยนต์"],
      ] },
    { type: "table", title: "💬 คำศัพท์ LLM ต้องรู้",
      headers: ["คำ", "ความหมาย"],
      rows: [
        ["Token", "หน่วยย่อยของข้อความที่โมเดลประมวลผล"],
        ["Prompt", "คำสั่ง/คำถามที่เราป้อนให้โมเดล"],
        ["Temperature", "คุมความสุ่ม — สูง = สร้างสรรค์แต่เสี่ยงเพี้ยน"],
        ["Hallucination", "โมเดลแต่งเรื่องอย่างมั่นใจ (เพราะแค่เดาคำต่อ)"],
        ["Fine-tuning", "ฝึกโมเดลต่อด้วยข้อมูลเฉพาะทาง"],
        ["RAG", "ดึงข้อมูลภายนอกมาประกอบก่อนตอบ — ลด hallucination"],
      ] },
    { type: "table", title: "🎚️ ระดับความสามารถ AI",
      headers: ["ระดับ", "ความหมาย", "สถานะ"],
      rows: [
        ["Narrow AI (ANI)", "เก่งเฉพาะทาง (แนะนำหนัง, แปลภาษา)", "✅ มีอยู่จริงทุกวันนี้"],
        ["General AI (AGI)", "ฉลาดรอบด้านเท่ามนุษย์", "🔬 ยังไม่มีจริง"],
        ["Super AI (ASI)", "ฉลาดกว่ามนุษย์ทุกด้าน", "🔮 ทฤษฎี"],
      ] },
    { type: "points", title: "📌 คำศัพท์ต้องจำ",
      items: [
        "<b>Neural Network</b> เลียนแบบเซลล์ประสาทในสมอง — รับ input ถ่วงน้ำหนัก ส่งต่อเป็นชั้นๆ",
        "<b>Overfitting</b> = ท่องข้อสอบเก่าได้ แต่ข้อสอบใหม่ทำไม่ได้ (จำข้อมูลฝึกแต่ generalize ไม่ได้)",
        "<b>Turing Test</b> (1950): ถ้าแยกไม่ออกว่าคุยกับคนหรือเครื่อง → ผ่าน",
        "<b>Bias</b> มาจากข้อมูลฝึกที่เอนเอียง — garbage in, garbage out",
        "<b>Prompt Engineering</b> = ศิลปะการเขียนคำสั่ง (เร็ว/ถูก) ต่างจาก Fine-tuning (ปรับตัวโมเดล)",
      ] },
    { type: "tips", title: "🎯 ข้อสอบชอบออก",
      items: [
        "Hallucination เกิดเพราะอะไร → โมเดลเดาคำถัดไป ไม่ได้รู้ความจริง",
        "Temperature สูง → สุ่ม/สร้างสรรค์มากขึ้น (ไม่ใช่ถูกต้องขึ้น)",
        "Clustering เป็น Supervised หรือ Unsupervised → Unsupervised",
        "AI ทุกวันนี้อยู่ระดับไหน → Narrow AI (ANI)",
      ] },
    { type: "memory", title: "🧠 จำง่ายๆ",
      text: "<b>โมเดลไม่ได้รู้ แค่เดาคำต่อเก่ง</b> · S-U-R: มีป้าย·ไม่มีป้าย·มีรางวัล (Supervised·Unsupervised·Reinforcement)" },
  ]
},

// ================================================================
//  6. COMPUTATIONAL THINKING
// ================================================================
"Computational Thinking": {
  icon: "🧩",
  tagline: "วิธีคิดแบบนักแก้ปัญหา: แยก หาแบบ ตัดทอน เขียนขั้นตอน",
  sections: [
    { type: "overview", title: "ภาพรวม",
      text: "<b>Computational Thinking</b> คือกระบวนการคิดแก้ปัญหาแบบเป็นระบบ มี <b>4 องค์ประกอบ</b> — เป็นทักษะพื้นฐานก่อนจะเขียนโปรแกรมหรือวาด flowchart ใดๆ" },
    { type: "diagram", title: "🏛️ 4 เสาหลัก (D-P-A-A)",
      html: `<div class="d-flow d-wrap">
        <div class="d-step"><b>1</b> Decomposition<span class="d-sub">แตกปัญหาใหญ่<br>เป็นปัญหาย่อย</span></div><div class="d-arrow">→</div>
        <div class="d-step"><b>2</b> Pattern Recognition<span class="d-sub">หารูปแบบ<br>ที่ซ้ำกัน</span></div><div class="d-arrow">→</div>
        <div class="d-step"><b>3</b> Abstraction<span class="d-sub">ตัดรายละเอียด<br>ไม่จำเป็นออก</span></div><div class="d-arrow">→</div>
        <div class="d-step d-hi"><b>4</b> Algorithm Design<span class="d-sub">เขียนขั้นตอน<br>วิธีแก้</span></div>
      </div>` },
    { type: "table", title: "🔍 4 องค์ประกอบ + ตัวอย่าง",
      headers: ["องค์ประกอบ", "คืออะไร", "ตัวอย่าง"],
      rows: [
        ["Decomposition", "แตกปัญหาใหญ่เป็นย่อย", "จัดงานเลี้ยง → สถานที่/อาหาร/แขก/ตกแต่ง"],
        ["Pattern Recognition", "หารูปแบบที่คล้ายกัน", "เมนูอาหารหลายจานทำขั้นตอนคล้ายกัน"],
        ["Abstraction", "ตัดสิ่งไม่จำเป็น เหลือสาระ", "แผนที่รถไฟฟ้าไม่วาดตึกทุกหลัง"],
        ["Algorithm Design", "เขียนลำดับขั้นตอนชัดเจน", "สูตรอาหาร / คู่มือประกอบเฟอร์นิเจอร์"],
      ] },
    { type: "diagram", title: "📥 โมเดล IPO",
      html: `<div class="d-flow">
        <div class="d-step">Input<span class="d-sub">ข้อมูลเข้า<br>(ผลไม้+น้ำแข็ง)</span></div><div class="d-arrow">→</div>
        <div class="d-step d-hi">Process<span class="d-sub">ประมวลผล<br>(ปั่น/ผสม)</span></div><div class="d-arrow">→</div>
        <div class="d-step">Output<span class="d-sub">ผลลัพธ์<br>(น้ำปั่น 1 แก้ว)</span></div>
      </div>` },
    { type: "table", title: "🔷 สัญลักษณ์ Flowchart",
      headers: ["สัญลักษณ์", "ความหมาย"],
      rows: [
        ["⬭ วงรี", "Start / End (จุดเริ่ม-จบ)"],
        ["▭ สี่เหลี่ยมผืนผ้า", "Process (ประมวลผล/คำนวณ)"],
        ["◇ ข้าวหลามตัด", "Decision (ตัดสินใจ ใช่/ไม่ใช่)"],
        ["▱ สี่เหลี่ยมด้านขนาน", "Input / Output (รับเข้า-แสดงผล)"],
        ["→ ลูกศร", "ทิศทางการไหลของงาน"],
      ] },
    { type: "table", title: "🎛️ โครงสร้างควบคุม 3 แบบ",
      headers: ["แบบ", "คำสั่ง", "ลักษณะ"],
      rows: [
        ["Sequence", "—", "ทำตามลำดับบนลงล่าง"],
        ["Selection", "if / if-else / switch", "เลือกทำตามเงื่อนไข"],
        ["Iteration", "while / do-while / for", "วนซ้ำตามเงื่อนไข"],
      ] },
    { type: "table", title: "🔁 while vs do-while (ออกสอบบ่อย)",
      headers: ["", "while", "do-while"],
      rows: [
        ["ตรวจเงื่อนไข", "ก่อนทำ", "หลังทำ"],
        ["รันขั้นต่ำ", "0 ครั้งได้", "อย่างน้อย 1 ครั้งเสมอ"],
      ] },
    { type: "points", title: "📌 คำศัพท์ต้องจำ",
      items: [
        "<b>อัลกอริทึมที่ดี:</b> ขั้นตอนจำกัด (finite) · ชัดเจนไม่กำกวม (definite) · ทำได้จริง (effective)",
        "<b>Pseudocode</b> = ร่างขั้นตอนด้วยภาษาคนกึ่งโครงสร้าง ก่อนเขียนโค้ดจริง",
        "<b>Debugging</b> = ตามล่าหาและแก้บั๊กในโปรแกรม",
      ] },
    { type: "tips", title: "🎯 ข้อสอบชอบออก",
      items: [
        "ข้าวหลามตัด = Decision — ถามสัญลักษณ์บ่อยที่สุด",
        "do-while รันอย่างน้อย 1 ครั้งเสมอ (while อาจไม่รันเลย)",
        "Abstraction vs Decomposition: ตัดสิ่งไม่จำเป็น vs แตกเป็นย่อย",
        "ลำดับ D-P-A-A ให้ถูก",
      ] },
    { type: "memory", title: "🧠 จำง่ายๆ",
      text: "<b>D-P-A-A: แยก·หาแบบ·ตัดทอน·เขียนขั้นตอน</b> · ข้าวหลามตัดคือที่ตัดสินใจ" },
  ]
},
};
