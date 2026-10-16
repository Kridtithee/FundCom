// ============================================================
//  FundCom - คลังข้อสอบ
//  รอบที่ 1/6: Operating System (50 ข้อ)
// ============================================================

const QUESTIONS = [

// ---------- กลุ่มที่ 1: ซอฟต์แวร์และ OS พื้นฐาน (8 ข้อ) ----------
{topic:"Operating System", q:"ซอฟต์แวร์ (Software) หมายถึงอะไร?",
 choices:["ฮาร์ดแวร์ที่ใช้ประมวลผล","ชุดคำสั่งหรือโปรแกรมคอมพิวเตอร์ที่เขียนขึ้นเพื่อควบคุมการทำงานของเครื่อง","อุปกรณ์รับข้อมูล","ระบบเครือข่าย"],
 answer:1, explain:"Software = ชุดคำสั่ง/โปรแกรมที่เขียนขึ้นเพื่อควบคุมการทำงานของเครื่อง แบ่งเป็น System Software และ Application Software"},

{topic:"Operating System", q:"ซอฟต์แวร์แบ่งออกเป็น 2 ประเภทใหญ่ๆ คืออะไร?",
 choices:["Hardware และ Firmware","System Software และ Application Software","Freeware และ Shareware","Online และ Offline"],
 answer:1, explain:"ซอฟต์แวร์แบ่งเป็น System Software (ซอฟต์แวร์ระบบ) และ Application Software (ซอฟต์แวร์ประยุกต์)"},

{topic:"Operating System", q:"ข้อใดเป็น Application Software?",
 choices:["Windows 11","Microsoft Word","Linux Kernel","BIOS"],
 answer:1, explain:"MS Word เป็น Application Software ส่วน Windows, Linux Kernel, BIOS เป็น System Software"},

{topic:"Operating System", q:"ระบบปฏิบัติการ (OS) จัดเป็นซอฟต์แวร์ประเภทใด?",
 choices:["Application Software","System Software","Firmware","Middleware"],
 answer:1, explain:"OS เป็น System Software ที่ทำหน้าที่เป็นตัวกลางระหว่างผู้ใช้ โปรแกรมประยุกต์ และฮาร์ดแวร์"},

{topic:"Operating System", q:"หน้าที่หลักของ OS คืออะไร?",
 choices:["เขียนโปรแกรมให้ผู้ใช้","เป็นตัวกลางเชื่อมโยงระหว่างผู้ใช้ โปรแกรม และฮาร์ดแวร์ พร้อมจัดสรรทรัพยากร","สร้างฐานข้อมูล","ตรวจไวรัส"],
 answer:1, explain:"OS เป็นตัวกลาง จัดสรรทรัพยากร ควบคุมอุปกรณ์ และให้บริการแก่โปรแกรมต่างๆ"},

{topic:"Operating System", q:"หน้าที่หลัก 5 ประการของ OS ข้อใด ไม่ถูกต้อง?",
 choices:["การจัดการโปรเซส","การจัดการหน่วยความจำ","การจัดการเกม","การจัดการไฟล์"],
 answer:2, explain:"หน้าที่ 5 ประการ: Process, Memory, File, Device และ Security/UI ไม่มี Game Management"},

{topic:"Operating System", q:"การจัดการโปรเซส (Process Management) ทำหน้าที่อะไร?",
 choices:["จัดเก็บไฟล์","จัดสรรเวลาการทำงานของ CPU","ควบคุมคีย์บอร์ด","สำรองข้อมูล"],
 answer:1, explain:"Process Management = จัดสรรเวลาการทำงานของ CPU ให้แต่ละโปรเซส"},

{topic:"Operating System", q:"การจัดการหน่วยความจำ (Memory Management) มีไว้เพื่ออะไร?",
 choices:["บริหาร RAM ที่มีอยู่อย่างจำกัด","สำรองข้อมูลลงดิสก์","เข้ารหัสไฟล์","เชื่อมต่ออินเทอร์เน็ต"],
 answer:0, explain:"Memory Management = บริหารจัดการ RAM ที่มีอยู่อย่างจำกัดให้ใช้ได้อย่างมีประสิทธิภาพ"},

// ---------- กลุ่มที่ 2: ประเภทสิทธิ์ซอฟต์แวร์ (5 ข้อ) ----------
{topic:"Operating System", q:"Shareware คือซอฟต์แวร์ประเภทใด?",
 choices:["ใช้ฟรีตลอดชีพ","ให้ทดลองใช้ฟรีช่วงเวลาหนึ่งก่อนตัดสินใจซื้อ","ห้ามใช้งานเด็ดขาด","ต้องจ่ายเงินก่อนใช้"],
 answer:1, explain:"Shareware = ให้ทดลองใช้ฟรีก่อน (มักมีข้อจำกัดเวลา/ฟีเจอร์) แล้วต้องซื้อถ้าต้องการใช้ต่อ"},

{topic:"Operating System", q:"Freeware ต่างจาก Shareware อย่างไร?",
 choices:["Freeware ใช้ฟรีโดยไม่มีเงื่อนไขเวลา แต่ Shareware มีช่วงทดลอง","ไม่ต่างกัน","Freeware ต้องจ่ายเงิน","Shareware ใช้ฟรีตลอด"],
 answer:0, explain:"Freeware = ใช้ฟรีถาวร (ยังมีลิขสิทธิ์ ห้ามแก้) / Shareware = ทดลองใช้ฟรีชั่วคราว"},

{topic:"Operating System", q:"Open Source Software มีลักษณะเด่นอย่างไร?",
 choices:["ต้องจ่ายเงินรายปี","เปิดเผยซอร์สโค้ดให้แก้ไขและพัฒนาต่อยอดได้ฟรี","ใช้งานได้เฉพาะบน Windows","ห้ามดัดแปลง"],
 answer:1, explain:"Open Source = เปิดเผยซอร์สโค้ด ผู้ใช้สามารถนำไปแก้ไข พัฒนาต่อยอดได้ฟรี"},

{topic:"Operating System", q:"Linux จัดเป็นซอฟต์แวร์ประเภทใดตามสิทธิ์การใช้งาน?",
 choices:["Shareware","Freeware","Open Source","Commercial"],
 answer:2, explain:"Linux เป็น Open Source เผยแพร่ซอร์สโค้ดให้ทุกคนเข้าถึงและแก้ไขได้"},

{topic:"Operating System", q:"ข้อใดถูกต้องเกี่ยวกับ Freeware?",
 choices:["ไม่มีลิขสิทธิ์","มีลิขสิทธิ์ ใช้ฟรี แต่ห้ามแก้ไข","ดัดแปลงได้เสรี","เป็น Open Source เสมอ"],
 answer:1, explain:"Freeware ยังมีลิขสิทธิ์ครอบคลุม ใช้ฟรี แต่ห้ามแก้ไขดัดแปลง"},

// ---------- กลุ่มที่ 3: วิวัฒนาการ OS (10 ข้อ) ----------
{topic:"Operating System", q:"Batch System ทำงานอย่างไร?",
 choices:["ผู้ใช้ป้อนคำสั่งทีละคำสั่งแบบโต้ตอบ","ผู้เขียนโปรแกรมเตรียมชุดงาน ให้โอเปอเรเตอร์จัดกลุ่มและรันทีละกลุ่ม","ประมวลผลแบบเรียลไทม์","ทำงานหลายโปรแกรมพร้อมกัน"],
 answer:1, explain:"Batch System = รวบรวมงาน (Job) เป็นชุด แล้วรันทีละชุด"},

{topic:"Operating System", q:"Batch System ใช้สื่อใดในการป้อนข้อมูล?",
 choices:["คีย์บอร์ด","เมาส์","บัตรเจาะรู (Punch Card)","ทัชสกรีน"],
 answer:2, explain:"ยุค 1950s ป้อนข้อมูลผ่านบัตรเจาะรู แสดงผลผ่าน Line Printer"},

{topic:"Operating System", q:"ข้อเสียที่สำคัญที่สุดของ Batch System คืออะไร?",
 choices:["ข้อมูลสูญหาย","CPU เกิดเวลาว่าง (Idle) บ่อย เพราะความเร็ว I/O ช้ากว่า CPU","ใช้ไฟมาก","แก้ไขโปรแกรมไม่ได้"],
 answer:1, explain:"อุปกรณ์ I/O ช้ากว่า CPU มาก ทำให้ CPU ว่างบ่อย จึงต้องพัฒนา Buffering/Spooling ต่อมา"},

{topic:"Operating System", q:"Buffering คือเทคนิคอะไร?",
 choices:["การลบข้อมูลชั่วคราว","การนำข้อมูลมาพักใน Buffer (หน่วยความจำ) เพื่อให้รับข้อมูลและประมวลผลพร้อมกัน","การเข้ารหัส","การบีบอัดข้อมูล"],
 answer:1, explain:"Buffering = พักข้อมูลในหน่วยความจำชั่วคราว เพื่อให้ I/O และการประมวลผลทำพร้อมกันได้"},

{topic:"Operating System", q:"Spooling System ต่างจาก Buffering อย่างไร?",
 choices:["ไม่ต่างกัน","Spooling ใช้ดิสก์/เทปทำ Overlap ระหว่างอ่านงานกับพิมพ์ โดยรวบรวมงานใน Job pool","Spooling ใช้ RAM น้อยกว่า","Buffering ช้ากว่า"],
 answer:1, explain:"Spooling ใช้ดิสก์เก็บงาน (Job pool) และ Overlap การอ่านงานกับการพิมพ์ผลลัพธ์"},

{topic:"Operating System", q:"Multiprogramming คืออะไร?",
 choices:["ใช้ CPU หลายตัว","โหลดหลายโปรแกรมเข้าสู่ RAM พร้อมกัน เมื่อโปรแกรมหนึ่งรอ I/O จะสลับ CPU ไปโปรแกรมอื่น","ใช้หลายหน้าจอ","เปิดหลายหน้าต่าง"],
 answer:1, explain:"Multiprogramming = โหลดหลายโปรแกรมเข้า RAM พร้อมกัน เพิ่มอัตราการใช้ CPU"},

{topic:"Operating System", q:"Time-Sharing Systems แตกต่างจาก Multiprogramming อย่างไร?",
 choices:["ไม่ต่างกัน","Time-Sharing สลับเร็วจนผู้ใช้โต้ตอบกับโปรแกรมได้เหมือนทำงานคนเดียว","Time-Sharing ใช้ CPU น้อยกว่า","Multiprogramming เร็วกว่า"],
 answer:1, explain:"Time-Sharing (Multitasking) สลับ CPU เร็วมาก ผู้ใช้แต่ละคนรู้สึกเหมือนได้ CPU คนเดียว"},

{topic:"Operating System", q:"Parallel Systems (Multiprocessor) มีลักษณะอย่างไร?",
 choices:["ใช้ CPU มากกว่า 1 ตัวในเครื่องเดียว แชร์บัส/หน่วยความจำ/อุปกรณ์","ใช้คอมพิวเตอร์หลายเครื่องต่อกัน","ใช้ CPU เสมือน","ใช้ GPU"],
 answer:0, explain:"Parallel Systems = หลาย CPU ในเครื่องเดียว แชร์ทรัพยากร (บัส, RAM, I/O) ร่วมกัน"},

{topic:"Operating System", q:"Distributed Systems คืออะไร?",
 choices:["CPU หลายตัวในเครื่องเดียว","คอมพิวเตอร์หลายเครื่องที่มี CPU และหน่วยความจำของตนเอง เชื่อมต่อผ่านสายสื่อสาร","ระบบคลาวด์","ระบบเสมือน"],
 answer:1, explain:"Distributed Systems = หลายเครื่องอิสระ เชื่อมต่อกันผ่านเครือข่าย แชร์ทรัพยากรและสื่อสารกัน"},

{topic:"Operating System", q:"ข้อใด ไม่ใช่ ประโยชน์ของ Parallel Systems?",
 choices:["เพิ่ม Throughput","เพิ่มความน่าเชื่อถือ","ใช้ไฟน้อยลง","เพิ่มความเร็ว"],
 answer:2, explain:"Parallel Systems เพิ่ม Throughput และความน่าเชื่อถือ แต่ไม่ได้ช่วยเรื่องใช้ไฟน้อยลง"},

// ---------- กลุ่มที่ 4: โปรเซสและสถานะ (10 ข้อ) ----------
{topic:"Operating System", q:"Program ต่างจาก Process อย่างไร?",
 choices:["ไม่ต่างกัน","Program = กลุ่มคำสั่งบนดิสก์ (Inactive) / Process = โปรแกรมที่กำลังประมวลผลในหน่วยความจำ","Program ใหญ่กว่า","Process เก่ากว่า"],
 answer:1, explain:"Program = กลุ่มคำสั่งที่จัดเก็บบนดิสก์ (ยังไม่ทำงาน) / Process = โปรแกรมที่กำลัง execute"},

{topic:"Operating System", q:"Job ในบริบทของ OS หมายถึงอะไร?",
 choices:["โปรแกรมที่ยังอยู่บนดิสก์","โปรแกรมที่ถูกเลือกเข้ามาเพื่อเตรียมประมวลผล","ฮาร์ดแวร์","ผู้ใช้งาน"],
 answer:1, explain:"Job = โปรแกรมที่ถูกเลือกเข้ามาเพื่อเตรียมประมวลผล (ระยะก่อนเป็น Process)"},

{topic:"Operating System", q:"Process คืออะไร?",
 choices:["โปรแกรมที่อยู่บนดิสก์","โปรแกรมที่กำลังถูกประมวลผลในหน่วยความจำ (A program in execution)","ไฟล์ข้อมูล","ฮาร์ดแวร์"],
 answer:1, explain:"Process = โปรแกรมที่กำลัง execute อยู่ในหน่วยความจำ"},

{topic:"Operating System", q:"Process States มีทั้งหมดกี่สถานะ?",
 choices:["3","4","5","6"],
 answer:2, explain:"5 สถานะ: Hold, Ready, Running, Wait, Terminate"},

{topic:"Operating System", q:"สถานะ Hold ของโปรเซสคืออะไร?",
 choices:["โปรเซสกำลังรัน","โปรแกรมถูกเลือกแล้วและรอถูกโหลดเข้าหน่วยความจำ","โปรเซสเสร็จแล้ว","โปรเซสรอ I/O"],
 answer:1, explain:"Hold = โปรแกรมถูกเลือก รอโหลดเข้า RAM"},

{topic:"Operating System", q:"สถานะ Ready ของโปรเซสคืออะไร?",
 choices:["อยู่ใน RAM พร้อมจะครอบครอง CPU ทันทีที่ระบบมอบหมาย","กำลังรัน","รอ I/O","เสร็จสิ้น"],
 answer:0, explain:"Ready = อยู่ใน RAM พร้อมรับ CPU ทันทีที่ระบบจัดสรรให้"},

{topic:"Operating System", q:"สถานะ Running ของโปรเซสคืออะไร?",
 choices:["รอโหลด","รอ I/O","กำลังครอบครอง CPU และ execute คำสั่ง","เสร็จแล้ว"],
 answer:2, explain:"Running = โปรเซสกำลังใช้ CPU ประมวลผลคำสั่ง"},

{topic:"Operating System", q:"สถานะ Wait ของโปรเซสคืออะไร?",
 choices:["หยุดประมวลผลชั่วคราวเพื่อรอเหตุการณ์ เช่น รอ I/O","พร้อมทำงาน","กำลังรัน","เสร็จสิ้น"],
 answer:0, explain:"Wait (Blocked) = หยุดชั่วคราวเพื่อรอเหตุการณ์ เช่น รอ I/O เสร็จ"},

{topic:"Operating System", q:"สถานะ Terminate ของโปรเซสคืออะไร?",
 choices:["โปรเซสใหม่","โปรเซสประมวลผลสำเร็จครบทุกคำสั่งแล้ว","โปรเซสพัก","โปรเซสกลับไป Ready"],
 answer:1, explain:"Terminate = โปรเซส execute ครบทุกคำสั่งแล้ว จบการทำงาน"},

{topic:"Operating System", q:"การเปลี่ยนสถานะใด ที่เป็นไปได้ใน Process Lifecycle?",
 choices:["Ready → Wait โดยตรง","Hold → Ready","Terminate → Running","Wait → Hold"],
 answer:1, explain:"Hold → Ready (เมื่อโหลดเข้า RAM) เป็นการเปลี่ยนที่ถูกต้อง ส่วน Terminate → Running เป็นไปไม่ได้"},

// ---------- กลุ่มที่ 5: CPU Scheduling (5 ข้อ) ----------
{topic:"Operating System", q:"FCFS (First-Come First-Served) ทำงานอย่างไร?",
 choices:["โปรเซสที่ร้องขอก่อนได้ CPU ก่อน","โปรเซสสั้นที่สุดได้ก่อน","ตามความสำคัญ","แบ่งเวลาเท่ากัน"],
 answer:0, explain:"FCFS = โปรเซสที่ request ก่อน จะได้ CPU ก่อน (แบบคิวมาก่อนได้ก่อน)"},

{topic:"Operating System", q:"SJF (Short-Job-First) เลือกโปรเซสแบบใดขึ้นมาทำก่อน?",
 choices:["โปรเซสที่ขอ CPU ก่อน","โปรเซสที่ใช้เวลา CPU สั้นที่สุด","โปรเซสที่มี priority สูงสุด","โปรเซสล่าสุด"],
 answer:1, explain:"SJF = เลือกโปรเซสที่ต้องการเวลา CPU สั้นที่สุดขึ้นมาทำก่อน"},

{topic:"Operating System", q:"Priority Scheduling เลือกโปรเซสอย่างไร?",
 choices:["ตามคิว","ตามขนาดไฟล์","ตามลำดับความสำคัญ (Priority) สูงสุด","สุ่ม"],
 answer:2, explain:"Priority Scheduling = คัดเลือกโปรเซสที่มี Priority สูงสุดขึ้นมาทำก่อน"},

{topic:"Operating System", q:"Round-Robin Scheduling เหมาะกับระบบแบบใด?",
 choices:["Batch","Time-Sharing","Real-time อย่างเดียว","Distributed"],
 answer:1, explain:"Round-Robin ใช้ใน Time-Sharing โดยแบ่ง CPU time ให้ทุกโปรเซสเท่าๆ กัน แล้ววนกลับไปต่อคิวใหม่"},

{topic:"Operating System", q:"Round-Robin ต่างจาก FCFS อย่างไร?",
 choices:["RR ไม่มีคิว","RR จำกัดเวลาการใช้ CPU ของแต่ละโปรเซสให้เท่ากัน (Time Quantum) แล้ววนกลับไปต่อคิว","RR ใช้กับ Batch","ไม่ต่างกัน"],
 answer:1, explain:"RR = แบ่งเวลาเท่ากัน (Time Quantum) ถ้าไม่เสร็จในเวลาที่กำหนด จะถูกนำกลับไปต่อคิวใหม่"},

// ---------- กลุ่มที่ 6: Deadlock (3 ข้อ) ----------
{topic:"Operating System", q:"Deadlock คือสภาวะอะไร?",
 choices:["CPU ทำงานหนัก","กลุ่มโปรเซสถูก Block จากการแย่งทรัพยากรกัน ต่างฝ่ายต่างรอ ทำให้ไม่มีใครทำงานต่อได้","RAM เต็ม","ดิสก์เสียหาย"],
 answer:1, explain:"Deadlock = โปรเซสต่างฝ่ายต่างถือทรัพยากรที่อีกฝ่ายต้องการ ทำให้รอกันวนไป ไม่มีใครทำงานได้สำเร็จ"},

{topic:"Operating System", q:"ตัวอย่างของ Deadlock ข้อใดถูกต้อง?",
 choices:["โปรเซส A ถือสแกนเนอร์ รอเครื่องพิมพ์ / โปรเซส B ถือเครื่องพิมพ์ รอสแกนเนอร์","โปรเซส A ใช้ CPU เต็ม","โปรเซส B รอ I/O","RAM ไม่พอ"],
 answer:0, explain:"นี่คือตัวอย่างคลาสสิกของ Deadlock ที่ทั้งสองฝ่ายถือทรัพยากรที่อีกฝ่ายต้องการ"},

{topic:"Operating System", q:"ในสภาวะ Deadlock ทรัพยากรที่ถูกครอบครองจะเป็นอย่างไร?",
 choices:["ถูกปล่อยอัตโนมัติ","ถูกครอบครองจนหมด ไม่มีใครปล่อย","ถูกแชร์ให้ทุกโปรเซส","ถูกลบ"],
 answer:1, explain:"ทรัพยากรถูกครอบครองจนหมด โปรเซสต่างฝ่ายต่างรอ ทำให้เกิดการอับ"},

// ---------- กลุ่มที่ 7: การจัดการหน่วยความจำ (7 ข้อ) ----------
{topic:"Operating System", q:"Monoprogramming คืออะไร?",
 choices:["โหลดได้หลายโปรแกรม","โหลดได้เพียง 1 โปรแกรมเข้าสู่ RAM ร่วมกับ OS ในช่วงเวลาหนึ่ง","ใช้ CPU เดียว","มี RAM ใหญ่"],
 answer:1, explain:"Monoprogramming = ในช่วงเวลาหนึ่ง RAM บรรจุได้เพียง 1 โปรแกรม + OS"},

{topic:"Operating System", q:"Fixed Partition มีข้อเสียหลักคืออะไร?",
 choices:["RAM พัง","เกิด Internal Fragmentation (เศษพื้นที่เหลือในพาร์ติชันที่ใช้ไม่ได้)","ใช้ CPU มาก","ไม่มีข้อเสีย"],
 answer:1, explain:"Fixed Partition แบ่งขนาดคงตัว ทำให้โปรเซสเล็กใช้พื้นที่เหลือในพาร์ติชันไม่ได้ → Internal Fragmentation"},

{topic:"Operating System", q:"Dynamic Partition ต่างจาก Fixed Partition อย่างไร?",
 choices:["ไม่มีพาร์ติชัน","แบ่งพาร์ติชันตามขนาดที่โปรเซสต้องการจริง","ใช้ ROM","ไม่ต่างกัน"],
 answer:1, explain:"Dynamic Partition แบ่งตามขนาดจริงของโปรเซส แต่เมื่อรันไปเรื่อยๆ จะเกิดช่องว่างย่อยๆ ต้องทำ Memory Compaction"},

{topic:"Operating System", q:"Memory Compaction คืออะไร?",
 choices:["ลบโปรเซส","บีบอัดพื้นที่โดยเลื่อนโปรเซสมาชิดกันเพื่อรวมพื้นที่ว่าง","เพิ่ม RAM","สำรองข้อมูล"],
 answer:1, explain:"Compaction = เลื่อนโปรเซสมาชิดกันเพื่อรวบช่องว่างย่อยให้เป็นก้อนใหญ่ใช้ต่อได้"},

{topic:"Operating System", q:"Paging มีกฎสำคัญอย่างไร?",
 choices:["1 Page = 2 Frame","ขนาด 1 Page ต้องเท่ากับ 1 Frame เสมอ และ 1 Frame บรรจุได้เพียง 1 Page","1 Frame หลาย Page","ไม่มีกฎ"],
 answer:1, explain:"Paging แบ่ง RAM เป็น Frame เท่ากัน แบ่งโปรแกรมเป็น Page เท่ากัน โดย 1 Page = 1 Frame"},

{topic:"Operating System", q:"Virtual Memory ช่วยเรื่องอะไร?",
 choices:["ให้โปรเซสทำงานได้แม้ไม่ได้อยู่ใน RAM ทั้งหมด โดยใช้ดิสก์เก็บส่วนที่เหลือ","เพิ่ม CPU","เพิ่มความเร็วเน็ต","เข้ารหัสไฟล์"],
 answer:0, explain:"Virtual Memory ช่วยให้รันโปรแกรมที่ใหญ่กว่า RAM จริงได้ โดยเก็บส่วนหนึ่งใน RAM ส่วนที่เหลือในดิสก์"},

{topic:"Operating System", q:"ข้อใด ไม่ใช่ ประเภทของ Multiprogramming Memory Management?",
 choices:["Fixed Partition","Dynamic Partition","Paging","Spooling"],
 answer:3, explain:"Spooling เป็นเทคนิค I/O ไม่ใช่การจัดการหน่วยความจำ"},

// ---------- กลุ่มที่ 8: การจัดการอุปกรณ์และไฟล์ (5 ข้อ) ----------
{topic:"Operating System", q:"Block Devices มีลักษณะอย่างไร?",
 choices:["ส่งข้อมูลเป็นสายตามลำดับ","จัดเก็บข้อมูลเป็นบล็อกขนาดประมาณ 512-32,768 ไบต์ อ่าน/เขียนแต่ละบล็อกได้อิสระ","ใช้คีย์บอร์ด","ไม่เก็บข้อมูล"],
 answer:1, explain:"Block Devices (เช่น ฮาร์ดดิสก์, เทป) จัดเก็บข้อมูลเป็นบล็อก เข้าถึงแบบสุ่มได้"},

{topic:"Operating System", q:"ข้อใดเป็น Character Device?",
 choices:["ฮาร์ดดิสก์","เทปแม่เหล็ก","สแกนเนอร์","SSD"],
 answer:2, explain:"Character/Stream Devices (สแกนเนอร์, คีย์บอร์ด) รับส่งข้อมูลเป็นสายตามลำดับก่อนหลัง"},

{topic:"Operating System", q:"Device Controller ทำหน้าที่อะไร?",
 choices:["พิมพ์เอกสาร","ตรวจจับ/แก้ไขข้อผิดพลาด ประสานงานอุปกรณ์ และแปลง Stream เป็น Block","เก็บข้อมูล","แสดงผลจอ"],
 answer:1, explain:"Device Controller ตรวจจับข้อผิดพลาด ประสานงานกับอุปกรณ์ และแปลง Stream ให้เป็น Block"},

{topic:"Operating System", q:"การจัดการไฟล์ใน OS ครอบคลุมเรื่องใด?",
 choices:["ชื่อไฟล์ ไดเรกทอรี Path สิทธิ์การเข้าถึง และการสำรองข้อมูล","แค่สร้างไฟล์","แค่ลบไฟล์","แค่เปลี่ยนชื่อ"],
 answer:0, explain:"File Management ดูแลชื่อไฟล์, Directory, Path name, Access rights และการสำรองข้อมูล ผ่าน System Calls"},

{topic:"Operating System", q:"System Calls คืออะไร?",
 choices:["คำสั่ง hardware","ช่องทางให้โปรแกรมเรียกใช้บริการของ OS เช่น จัดการไฟล์","โปรแกรมแปลภาษา","ตัวเลข"],
 answer:1, explain:"System Calls = Interface ให้โปรแกรมประยุกต์ขอใช้บริการจาก OS เช่น อ่าน/เขียนไฟล์"},

// ---------- กลุ่มที่ 9: ประวัติ OS (5 ข้อ) ----------
{topic:"Operating System", q:"DOS มีลักษณะเด่นอย่างไร?",
 choices:["Multi-user","Multi-tasking","Single-user Single-processor รองรับ RAM 640 KB","ใช้ GUI"],
 answer:2, explain:"DOS (1980) เป็น OS สำหรับ PC แบบ Single-user Single-processor รองรับ RAM 640 KB ทำงานแบบ Monoprogramming"},

{topic:"Operating System", q:"UNIX ถูกพัฒนาขึ้นที่ใดและเมื่อใด?",
 choices:["Microsoft, 1990","Bell Labs, 1969","IBM, 1980","Apple, 1985"],
 answer:1, explain:"UNIX พัฒนาที่ Bell Labs ปี 1969 โดย Ken Thompson, Dennis Ritchie, Douglas McIlroy"},

{topic:"Operating System", q:"UNIX เขียนด้วยภาษาโปรแกรมใดเป็นหลัก?",
 choices:["Assembly","C","Java","Python"],
 answer:1, explain:"UNIX เขียนด้วยภาษา C ทำให้ไม่ยึดติดกับฮาร์ดแวร์ เคลื่อนย้ายง่าย"},

{topic:"Operating System", q:"Linux เริ่มพัฒนาโดยใคร?",
 choices:["Bill Gates","Steve Jobs","Linus Torvalds","Dennis Ritchie"],
 answer:2, explain:"Linux เริ่มจาก Kernel โดย Linus Torvalds (1991) นักศึกษาชาวฟินแลนด์ และเปิด Open Source"},

{topic:"Operating System", q:"UNIX แตกต่างจาก DOS อย่างไร?",
 choices:["ไม่ต่างกัน","UNIX เป็น Multi-User, Multitasking / DOS เป็น Single-User, Single-processor","DOS เร็วกว่า","UNIX ใช้บน PC เท่านั้น"],
 answer:1, explain:"UNIX = Multi-User, Multitasking ไม่ยึดติดฮาร์ดแวร์ / DOS = Single-User, Single-processor"},

// ---------- กลุ่มที่ 10: คำสั่ง UNIX (5 ข้อ) ----------
{topic:"Operating System", q:"คำสั่ง ls -la ใช้ทำอะไร?",
 choices:["เปลี่ยน directory","แสดงรายการไฟล์ทั้งหมด รวมทั้งไฟล์ซ่อน พร้อมสิทธิ์และรายละเอียด","ลบไฟล์","คัดลอกไฟล์"],
 answer:1, explain:"ls -la = แสดงไฟล์ทั้งหมด (รวมไฟล์ซ่อน) พร้อมรายละเอียด สิทธิ์ และข้อมูลเพิ่มเติม"},

{topic:"Operating System", q:"คำสั่งใดใช้กลับไปยัง Home Directory?",
 choices:["cd ..","cd ~","cd /","cd home"],
 answer:1, explain:"cd ~ = กลับไป Home Directory (cd .. = ถอยออก 1 ชั้น)"},

{topic:"Operating System", q:"คำสั่ง rm ต่างจาก rmdir อย่างไร?",
 choices:["ไม่ต่างกัน","rm ใช้ลบไฟล์ (rm -r ลบโฟลเดอร์ได้) / rmdir ใช้ลบโฟลเดอร์ว่างเท่านั้น","rm ใช้สร้าง","rmdir ใช้คัดลอก"],
 answer:1, explain:"rm = ลบไฟล์ (rm -r ลบโฟลเดอร์และข้างใน) / rmdir ลบได้เฉพาะโฟลเดอร์ว่าง"},

{topic:"Operating System", q:"คำสั่งใดใช้ค้นหาข้อความในไฟล์?",
 choices:["cat","grep","find","ls"],
 answer:1, explain:"grep = ค้นหาข้อความในไฟล์ (มี option: -c นับจำนวน, -n แสดงเลขบรรทัด)"},

{topic:"Operating System", q:"คำสั่ง mv ใช้ทำอะไร?",
 choices:["ย้ายไฟล์ หรือเปลี่ยนชื่อไฟล์/โฟลเดอร์","ลบไฟล์","คัดลอกไฟล์","สร้างไฟล์"],
 answer:0, explain:"mv = ย้ายไฟล์ หรือเปลี่ยนชื่อไฟล์/โฟลเดอร์ (เทียบเท่า move + rename ใน Windows)"}


// ============================================================
//  รอบที่ 2/6: Cyber Security (50 ข้อ)
// ============================================================

// ---------- กลุ่มที่ 1: CIA Triad และเป้าหมายความปลอดภัย (8 ข้อ) ----------
{topic:"Cyber Security", q:"CIA Triad ในความมั่นคงปลอดภัยไซเบอร์ ประกอบด้วยอะไร?",
 choices:["Control, Integrity, Access","Confidentiality, Integrity, Availability","Confidentiality, Internet, Authentication","Cyber, Information, Attack"],
 answer:1, explain:"CIA Triad = Confidentiality (ความลับ), Integrity (ความถูกต้อง), Availability (ความพร้อมใช้)"},

{topic:"Cyber Security", q:"Confidentiality ใน CIA Triad หมายถึงอะไร?",
 choices:["ข้อมูลพร้อมใช้งานเสมอ","ป้องกันไม่ให้ข้อมูลถูกเปิดเผยหรือเข้าถึงโดยผู้ไม่ได้รับอนุญาต","ข้อมูลถูกต้องครบถ้วน","ข้อมูลมีความเร็วสูง"],
 answer:1, explain:"Confidentiality = รักษาความลับ ป้องกันการเข้าถึงโดยไม่ได้รับอนุญาต เช่น การเข้ารหัส กำหนดสิทธิ์ รหัสผ่าน"},

{topic:"Cyber Security", q:"Integrity ใน CIA Triad หมายถึงอะไร?",
 choices:["ข้อมูลลับ","ข้อมูลพร้อมใช้งาน","ข้อมูลถูกต้อง ไม่ถูกแก้ไข เปลี่ยนแปลง หรือลบโดยไม่ได้รับอนุญาต","ข้อมูลรวดเร็ว"],
 answer:2, explain:"Integrity = รักษาข้อมูลให้ถูกต้อง ไม่ถูกแก้ไข เปลี่ยนแปลง หรือลบโดยไม่ได้รับอนุญาต"},

{topic:"Cyber Security", q:"Availability ใน CIA Triad หมายถึงอะไร?",
 choices:["ระบบและข้อมูลพร้อมใช้งานเมื่อผู้มีสิทธิ์ต้องการ","ข้อมูลลับที่สุด","ข้อมูลถูกต้อง","ข้อมูลรวดเร็ว"],
 answer:0, explain:"Availability = ทำให้ระบบและข้อมูลพร้อมใช้งานเมื่อผู้มีสิทธิ์ต้องการ รวมถึงลดผลกระทบจากเหตุขัดข้องและการโจมตี"},

{topic:"Cyber Security", q:"ข้อใดเป็นตัวอย่างของ Confidentiality ในระบบทะเบียนนักศึกษา?",
 choices:["ผลการเรียนเข้าถึงได้เฉพาะนักศึกษาและเจ้าหน้าที่","การเปลี่ยนเกรดต้องทำโดยผู้มีอำนาจ","ระบบต้องพร้อมใช้งานช่วงลงทะเบียน","ข้อมูลนักศึกษาถูกต้อง"],
 answer:0, explain:"Confidentiality = จำกัดการเข้าถึงข้อมูลให้เฉพาะผู้มีสิทธิ์"},

{topic:"Cyber Security", q:"ข้อใดเป็นตัวอย่างของ Integrity ในระบบ Mobile Banking?",
 choices:["PIN ไม่ถูกเปิดเผย","ยอดเงินโอนต้องไม่ถูกเปลี่ยนระหว่างทาง","ลูกค้าเข้าทำธุรกรรมได้ตลอดเวลา","แอปโหลดเร็ว"],
 answer:1, explain:"Integrity = ข้อมูลต้องไม่ถูกแก้ไขระหว่างทาง เช่น ยอดเงินโอน"},

{topic:"Cyber Security", q:"ข้อใดเป็นตัวอย่างของ Availability ในระบบ Mobile Banking?",
 choices:["PIN ปลอดภัย","ยอดเงินถูกต้อง","ลูกค้าเข้าทำธุรกรรมได้ตลอดเวลา","แอปสวยงาม"],
 answer:2, explain:"Availability = ระบบพร้อมใช้งานเมื่อผู้ใช้ต้องการ"},

{topic:"Cyber Security", q:"DoS/DDoS Attack ส่งผลกระทบต่อองค์ประกอบใดของ CIA Triad มากที่สุด?",
 choices:["Confidentiality","Integrity","Availability","ไม่ส่งผล"],
 answer:2, explain:"DoS/DDoS สร้าง Traffic จำนวนมาก ทำให้ระบบล่มหรือไม่ตอบสนอง → กระทบ Availability โดยตรง"},

// ---------- กลุ่มที่ 2: ความเสี่ยงและ Defense in Depth (5 ข้อ) ----------
{topic:"Cyber Security", q:"ความเสี่ยงทางไซเบอร์ (Cybersecurity Risk) หมายถึงอะไร?",
 choices:["การโจมตีที่เกิดขึ้นแล้ว","โอกาสที่ภัยคุกคามจะใช้ประโยชน์จากช่องโหว่ และส่งผลกระทบต่อ CIA Triad","ช่องโหว่ในระบบ","มาตรการป้องกัน"],
 answer:1, explain:"Risk = โอกาสที่ Threat ใช้ Vulnerability เพื่อโจมตี และเกิดผลกระทบ"},

{topic:"Cyber Security", q:"ลำดับความสัมพันธ์ 5 ขั้นตอนของความเสี่ยงทางไซเบอร์ คือข้อใด?",
 choices:["Attack → Threat → Vulnerability → Risk → Control","Threat → Vulnerability → Attack → Risk → Security Control","Risk → Threat → Attack → Vulnerability → Control","Vulnerability → Risk → Threat → Attack → Control"],
 answer:1, explain:"ลำดับ: Threat (ภัยคุกคาม) → Vulnerability (ช่องโหว่) → Attack (การโจมตี) → Risk (ความเสี่ยง) → Security Control (มาตรการควบคุม)"},

{topic:"Cyber Security", q:"Vulnerability (ช่องโหว่) หมายถึงอะไร?",
 choices:["ภัยคุกคาม","จุดอ่อนของเทคโนโลยี ระบบ กระบวนการ หรือบุคลากร","การโจมตี","มาตรการป้องกัน"],
 answer:1, explain:"Vulnerability = จุดอ่อนที่อาจถูกใช้ประโยชน์ เช่น ซอฟต์แวร์ไม่แพตช์ รหัสผ่านอ่อน ขาดการอบรม"},

{topic:"Cyber Security", q:"Defense in Depth คือแนวคิดอะไร?",
 choices:["ใช้มาตรการเดียวที่แข็งแกร่งที่สุด","ใช้มาตรการป้องกันหลายชั้นร่วมกัน เพราะไม่มีมาตรการเดียวที่ป้องกันได้ทั้งหมด","ป้องกันเฉพาะที่สำคัญ","ป้องกันด้วย hardware เท่านั้น"],
 answer:1, explain:"Defense in Depth = ใช้มาตรการป้องกันหลายชั้น (Layered Defense) เพื่อลดความเสี่ยงจากจุดอ่อนเพียงจุดเดียว"},

{topic:"Cyber Security", q:"ข้อใด ไม่ใช่ ตัวอย่างของ Security Control?",
 choices:["Firewall","การอบรมพนักงาน","การเข้ารหัสข้อมูล","การปล่อยช่องโหว่ไว้"],
 answer:3, explain:"Security Control = มาตรการลดความเสี่ยง เช่น Firewall, การอบรม, การเข้ารหัส ส่วนการปล่อยช่องโหว่คือการเพิ่มความเสี่ยง"},

// ---------- กลุ่มที่ 3: ประเภทการโจมตีทางไซเบอร์ (14 ข้อ) ----------
{topic:"Cyber Security", q:"Phishing / Social Engineering คือการโจมตีแบบใด?",
 choices:["โจมตีระบบโดยตรง","หลอกลวงทางสังคมให้ผู้ใช้เปิดเผยข้อมูลสำคัญ","สร้าง Traffic จำนวนมาก","ดักฟังการสื่อสาร"],
 answer:1, explain:"Phishing/Social Engineering = หลอกลวงผู้ใช้ให้เปิดเผยข้อมูลสำคัญ เช่น Username, Password"},

{topic:"Cyber Security", q:"Brute Force Attack คืออะไร?",
 choices:["หลอกผู้ใช้","ลองรหัสผ่านทุกความเป็นไปได้ไปเรื่อยๆ","สร้าง Traffic","ดักฟัง"],
 answer:1, explain:"Brute Force = ลองรหัสผ่านทุกความ組合 ที่เป็นไปได้จนกว่าจะเจอ (ใช้เวลามาก แต่การันตีถ้าเวลาพอ)"},

{topic:"Cyber Security", q:"Dictionary Attack คืออะไร?",
 choices:["ลองรหัสผ่านจากรายการคำที่พบบ่อย/พจนานุกรม","โจมตีด้วยพจนานุกรม","อ่านข้อมูลจากดิสก์","สร้างพายุเครือข่าย"],
 answer:0, explain:"Dictionary Attack = ใช้รายการคำศัพท์/รหัสผ่านที่พบบ่อยลองเข้าสู่ระบบ"},

{topic:"Cyber Security", q:"Credential Stuffing คืออะไร?",
 choices:["ใช้รหัสผ่านที่รั่วไหลจากเว็บหนึ่ง ไปลองเข้าอีกเว็บหนึ่ง","ใส่ข้อมูลในฐานข้อมูล","ใช้ OTP ปลอม","ดักฟัง"],
 answer:0, explain:"Credential Stuffing = ใช้ Username/Password ที่เคยรั่วไหลจากที่หนึ่ง ไปลองกับอีกที่หนึ่ง เพราะคนมักใช้รหัสเดิม"},

{topic:"Cyber Security", q:"Virus ในทางไซเบอร์คืออะไร?",
 choices:["โปรแกรมที่แพร่ตัวเองผ่านเครือข่ายได้เอง","โปรแกรมที่แทรกตัวกับไฟล์อื่น และแพร่เมื่อไฟล์นั้นถูกเรียกใช้","โปรแกรมปลอมตัว","โปรแกรมเรียกร้องค่าไถ่"],
 answer:1, explain:"Virus = แทรกตัวกับไฟล์อื่น (ต้องมี Host) ถึงจะแพร่กระจาย"},

{topic:"Cyber Security", q:"Worm ต่างจาก Virus อย่างไร?",
 choices:["Worm ช้ากว่า","Worm จำลองและแพร่ตัวเองผ่านเครือข่ายได้โดยไม่ต้องอาศัยไฟล์ต้นแบบ","Worm อันตรายน้อยกว่า","Worm ไม่มีจริง"],
 answer:1, explain:"Worm = แพร่ตัวเองผ่านเครือข่ายได้เอง ไม่ต้องมี Host File"},

{topic:"Cyber Security", q:"Trojan Horse คือมัลแวร์ประเภทใด?",
 choices:["แพร่ตัวเองผ่านเครือข่าย","ปลอมตัวเป็นโปรแกรมที่ถูกต้องเพื่อหลอกให้ผู้ใช้ติดตั้ง","เข้ารหัสไฟล์","สอดแนม"],
 answer:1, explain:"Trojan = ปลอมตัวเป็นโปรแกรมที่ดูปกติ แต่แท้จริงเป็นอันตราย ไม่แพร่ตัวเองเหมือน Virus/Worm"},

{topic:"Cyber Security", q:"Ransomware ทำอะไร?",
 choices:["สอดแนมข้อมูล","เข้ารหัสไฟล์/ล็อคระบบเพื่อเรียกร้องค่าไถ่","สร้าง Traffic","ปลอมตัว"],
 answer:1, explain:"Ransomware = เข้ารหัสไฟล์หรือล็อคระบบ แล้วเรียกร้องค่าไถ่ (Ransom Demand) บางครั้งขู่เปิดเผยข้อมูลด้วย (Double Extortion)"},

{topic:"Cyber Security", q:"Spyware ทำหน้าที่อะไร?",
 choices:["เข้ารหัสไฟล์","สอดแนมและรวบรวมข้อมูลพฤติกรรมผู้ใช้","แพร่ผ่านเครือข่าย","ปลอมตัว"],
 answer:1, explain:"Spyware = แอบสอดแนม เก็บข้อมูลผู้ใช้ (ปุ่มกด, ประวัติเบราว์เซอร์, ข้อมูลส่วนตัว)"},

{topic:"Cyber Security", q:"Rootkit คือมัลแวร์ประเภทใด?",
 choices:["เรียกร้องค่าไถ่","รักษาการเข้าถึงระดับสิทธิ์สูง และซ่อนกิจกรรมจากการตรวจจับ","สร้าง Traffic","สอดแนม"],
 answer:1, explain:"Rootkit = ซ่อนตัวอยู่ในระดับลึก รักษาสิทธิ์สูง เพื่อให้ผู้โจมตีเข้าถึงได้แบบเนียนๆ"},

{topic:"Cyber Security", q:"Bot / Botnet คืออะไร?",
 choices:["โปรแกรมปิดเครื่อง","อุปกรณ์ที่ถูกควบคุมระยะไกลเพื่อนำไปรวมกลุ่มโจมตีระบบอื่น","โปรแกรมแสกนไวรัส","ไฟร์วอลล์"],
 answer:1, explain:"Bot = อุปกรณ์ที่ถูกควบคุมระยะไกล / Botnet = กลุ่ม Bot ที่ถูกสั่งให้โจมตีพร้อมกัน เช่น DDoS"},

{topic:"Cyber Security", q:"Man-in-the-Middle (MitM) Attack ส่งผลต่อ CIA Triad ด้านใด?",
 choices:["Availability เท่านั้น","Confidentiality และ Integrity","Integrity เท่านั้น","ไม่ส่งผล"],
 answer:1, explain:"MitM = ดักรับ/แก้ไขข้อมูลระหว่างการสื่อสาร → กระทบ Confidentiality และ Integrity"},

{topic:"Cyber Security", q:"SQL Injection (SQLi) คือการโจมตีแบบใด?",
 choices:["ยิง Traffic จำนวนมาก","แทรกคำสั่ง SQL ผ่านช่องทาง Input เพื่อเข้าถึง/แก้ไขฐานข้อมูล","ดักฟังเครือข่าย","หลอกผู้ใช้"],
 answer:1, explain:"SQLi = แทรกคำสั่ง SQL ผ่าน Input ที่ไม่ปลอดภัย เพื่อเข้าถึง ดัดแปลง หรือลบข้อมูลในฐานข้อมูล"},

{topic:"Cyber Security", q:"Cross-Site Scripting (XSS) คืออะไร?",
 choices:["แทรกสคริปต์อันตรายลงในหน้าเว็บ ให้รันบนเบราว์เซอร์ของผู้ใช้รายอื่น","สร้าง Traffic จำนวนมาก","ดักฟังเครือข่าย","ขโมยฮาร์ดแวร์"],
 answer:0, explain:"XSS = แทรก JavaScript อันตรายลงในหน้าเว็บที่ผู้ใช้รายอื่นเปิด → ขโมย Cookie, Session, หรือ Redirect"},

// ---------- กลุ่มที่ 4: เครื่องมือเฝ้าระวังภัยคุกคาม (2 ข้อ) ----------
{topic:"Cyber Security", q:"Have I Been Pwned (HIBP) ใช้ทำอะไร?",
 choices:["สแกนไวรัส","ตรวจสอบว่า Email หรือ Password เคยปรากฏในเหตุการณ์ข้อมูลรั่วไหลหรือไม่","เข้ารหัสไฟล์","สแกนพอร์ต"],
 answer:1, explain:"HIBP = บริการตรวจสอบว่า Email/Password เคยถูกเปิดเผยใน Data Breach หรือไม่"},

{topic:"Cyber Security", q:"SOCRadar (CTI Platform) ให้บริการอะไร?",
 choices:["สแกนไวรัส","ค้นหาและแจ้งเตือนภัยคุกคามภายนอก เช่น Dark Web Monitoring, Credential Leak, Phishing Domain","สำรองข้อมูล","เข้ารหัส"],
 answer:1, explain:"SOCRadar = แพลตฟอร์ม Cyber Threat Intelligence (CTI) เฝ้าระวังภัยภายนอกองค์กร"},

// ---------- กลุ่มที่ 5: Access Control (4 ข้อ) ----------
{topic:"Cyber Security", q:"Access Control ประกอบด้วย 4 ขั้นตอน เรียงตามลำดับใด?",
 choices:["Authentication → Identification → Authorization → Auditing","Identification → Authentication → Authorization → Accounting/Auditing","Authorization → Identification → Auditing → Authentication","Identification → Authorization → Authentication → Auditing"],
 answer:1, explain:"ลำดับ: Identification → Authentication → Authorization → Accounting/Auditing"},

{topic:"Cyber Security", q:"Identification ใน Access Control หมายถึงอะไร?",
 choices:["พิสูจน์ตัวตน","แจ้งระบุตัวตน เช่น Username","กำหนดสิทธิ์","บันทึก Log"],
 answer:1, explain:"Identification = บอกว่าระบุตัวตน ว่า 'ฉันคือใคร' เช่น การกรอก Username"},

{topic:"Cyber Security", q:"Multi-Factor Authentication (MFA) คืออะไร?",
 choices:["ใช้รหัสผ่านหลายตัว","ใช้หลายปัจจัยในการพิสูจน์ตัวตน เช่น Password + OTP","ใช้หลายบัญชี","ใช้หลายอุปกรณ์"],
 answer:1, explain:"MFA = ใช้หลายปัจจัยร่วมกัน เช่น สิ่งที่รู้ (Password) + สิ่งที่มี (OTP/Smart Card) + สิ่งที่เป็น (Biometrics)"},

{topic:"Cyber Security", q:"RBAC (Role-Based Access Control) คืออะไร?",
 choices:["กำหนดสิทธิ์ตามบทบาท/ตำแหน่ง","กำหนดสิทธิ์แบบสุ่ม","ให้สิทธิ์ทุกคนเท่ากัน","ปิดระบบ"],
 answer:0, explain:"RBAC = กำหนดสิทธิ์ตาม Role เช่น Admin, User, Guest เพื่อความสะดวกในการจัดการ"},

// ---------- กลุ่มที่ 6: Network Security (3 ข้อ) ----------
{topic:"Cyber Security", q:"Firewall ทำหน้าที่หลักอะไร?",
 choices:["สแกนไวรัสในไฟล์","กรอง Traffic ขาเข้า/ขาออกตามนโยบายความปลอดภัย (Rules/Policies)","สำรองข้อมูลอัตโนมัติ","เข้ารหัสไฟล์"],
 answer:1, explain:"Firewall = กรอง Traffic ตาม Rules ป้องกันการเข้าถึงที่ไม่ได้รับอนุญาต"},

{topic:"Cyber Security", q:"Firewall ตัดสินใจอนุญาต/บล็อก Traffic ตามอะไร?",
 choices:["สุ่ม","Rules / Policies ที่กำหนดไว้","ขนาดไฟล์","สีของ Packet"],
 answer:1, explain:"Firewall ใช้ Rules/Policies ที่ผู้ดูแลกำหนด เช่น IP, Port, Protocol"},

{topic:"Cyber Security", q:"ข้อใด ไม่ใช่ หน้าที่ของ Firewall?",
 choices:["กรอง Traffic","ป้องกันการเข้าถึงที่ไม่ได้รับอนุญาต","สแกนหาไวรัสในไฟล์","กำหนดนโยบายความปลอดภัยเครือข่าย"],
 answer:2, explain:"การสแกนไวรัสเป็นหน้าที่ของ Antivirus/Anti-Malware ไม่ใช่ Firewall"},

// ---------- กลุ่มที่ 7: Threat Detection (3 ข้อ) ----------
{topic:"Cyber Security", q:"IDS (Intrusion Detection System) ทำหน้าที่อะไร?",
 choices:["บล็อก Traffic อัตโนมัติ","เฝ้าระวัง ตรวจวิเคราะห์ และแจ้งเตือน (Alert) ผู้ดูแลระบบ","สแกนไวรัส","เข้ารหัส"],
 answer:1, explain:"IDS = ตรวจจับและแจ้งเตือน แต่ไม่บล็อกอัตโนมัติ"},

{topic:"Cyber Security", q:"IPS (Intrusion Prevention System) ต่างจาก IDS อย่างไร?",
 choices:["ไม่ต่างกัน","IPS ติดตั้งแบบ Inline ตรวจจับและตอบสนองอัตโนมัติ เช่น Drop Packet, Block Traffic","IPS ช้ากว่า","IPS ใช้กับ endpoint"],
 answer:1, explain:"IPS = ติดตั้ง Inline ตรวจจับและบล็อกอัตโนมัติ ไม่ใช่แค่แจ้งเตือนเหมือน IDS"},

{topic:"Cyber Security", q:"IDS ตรวจสอบพฤติกรรมผิดปกติได้ 2 แบบ คืออะไร?",
 choices:["Fast และ Slow","Signature-based และ Anomaly-based","Hard และ Soft","In และ Out"],
 answer:1, explain:"Signature-based = ตรวจจับตามรูปแบบที่รู้จัก / Anomaly-based = ตรวจจับความผิดปกติจากพฤติกรรม"},

// ---------- กลุ่มที่ 8: Endpoint Security (2 ข้อ) ----------
{topic:"Cyber Security", q:"Antivirus / Anti-Malware ทำหน้าที่อะไร?",
 choices:["กรอง Traffic","ตรวจจับ ป้องกัน และกำจัดมัลแวร์","เข้ารหัสข้อมูล","สำรองข้อมูล"],
 answer:1, explain:"Antivirus/Anti-Malware = ตรวจจับ ป้องกัน และกำจัดมัลแวร์บน Endpoint"},

{topic:"Cyber Security", q:"EDR (Endpoint Detection and Response) ต่างจาก Antivirus อย่างไร?",
 choices:["ไม่ต่างกัน","EDR เฝ้าระวัง วิเคราะห์ และตอบสนองต่อการโจมตีที่ซับซ้อนได้ลึกกว่า เช่น กักกันไฟล์ แยกเครื่องออกจากเครือข่าย","EDR ถูกกว่า","EDR ใช้กับเครือข่าย"],
 answer:1, explain:"EDR = เครื่องมือขั้นสูงกว่า Antivirus ตรวจจับและตอบสนองเชิงรุก"},

// ---------- กลุ่มที่ 9: Data Security & Cryptography (6 ข้อ) ----------
{topic:"Cyber Security", q:"Data Lifecycle ประกอบด้วยขั้นตอนใด?",
 choices:["Create → Store → Use → Share → Archive → Destroy","Create → Delete","Read → Write","Input → Output"],
 answer:0, explain:"Data Lifecycle: Create/Collect → Store → Use/Process → Share/Transmit → Archive → Destroy"},

{topic:"Cyber Security", q:"DLP (Data Loss Prevention) คืออะไร?",
 choices:["สำรองข้อมูล","มาตรการป้องกันข้อมูลสูญหาย/รั่วไหลออกนอกองค์กร","เข้ารหัสข้อมูล","บีบอัดข้อมูล"],
 answer:1, explain:"DLP = ป้องกันข้อมูลสำคัญรั่วไหลออกไปภายนอก เช่น บล็อกการส่งอีเมลที่มีเลขบัตรประชาชน"},

{topic:"Cyber Security", q:"Symmetric Key Encryption มีลักษณะอย่างไร?",
 choices:["ใช้กุญแจคู่ (Public/Private)","ใช้กุญแจดอกเดียวในการเข้าและถอดรหัส","ไม่มีกุญแจ","ใช้รหัสผ่านอย่างเดียว"],
 answer:1, explain:"Symmetric = ใช้กุญแจเดียวกัน เข้ารหัส/ถอดรหัส รวดเร็ว (เช่น AES) แต่กระจายคีย์ยาก"},

{topic:"Cyber Security", q:"Asymmetric Key Encryption มีลักษณะอย่างไร?",
 choices:["ใช้กุญแจดอกเดียว","ใช้กุญแจคู่ ได้แก่ Public Key (เข้ารหัส) และ Private Key (ถอดรหัส)","ไม่มีกุญแจ","ใช้ AES"],
 answer:1, explain:"Asymmetric = Public Key เข้ารหัส, Private Key ถอดรหัส จัดการคีย์ง่ายกว่า แต่ช้ากว่า"},

{topic:"Cyber Security", q:"Digital Signature (ลายเซ็นดิจิทัล) ให้คุณสมบัติใด?",
 choices:["Confidentiality เท่านั้น","Integrity, Authenticity และ Non-repudiation","Availability","ความเร็ว"],
 answer:1, explain:"Digital Signature = ใช้ Private Key เข้ารหัส Message Digest ยืนยัน Integrity, Authenticity (ตัวตน) และ Non-repudiation (ปฏิเสธไม่ได้)"},

{topic:"Cyber Security", q:"Hash Function ใช้ทำอะไรในงานความปลอดภัย?",
 choices:["เข้ารหัสไฟล์ทั้งไฟล์","สร้าง Message Digest ขนาดคงที่จากข้อมูล เพื่อตรวจสอบ Integrity","สำรองข้อมูล","เพิ่มความเร็วเน็ต"],
 answer:1, explain:"Hash Function = สร้างค่า Hash ขนาดคงที่ ถ้าข้อมูลเปลี่ยนแม้แต่นิดเดียว Hash จะเปลี่ยนทันที → ใช้ตรวจ Integrity"},

// ---------- กลุ่มที่ 10: Application Security (3 ข้อ) ----------
{topic:"Cyber Security", q:"Secure SDLC / DevSecOps เน้นเรื่องใด?",
 choices:["เขียนโค้ดเร็ว","บูรณาการความปลอดภัยเข้าในทุกขั้นตอนของการพัฒนา ตั้งแต่ต้น","ทดสอบหลัง deploy","ใช้แค่ firewall"],
 answer:1, explain:"Secure SDLC / DevSecOps = นำความปลอดภัยเข้าในทุก Phase ของการพัฒนา ไม่ใช่แค่ตอนท้าย"},

{topic:"Cyber Security", q:"SAST (Static Application Security Testing) ต่างจาก DAST อย่างไร?",
 choices:["ไม่ต่างกัน","SAST วิเคราะห์โค้ดโดยไม่ต้องรัน / DAST ทดสอบขณะแอปทำงาน","SAST ช้ากว่า","DAST ใช้กับโค้ด"],
 answer:1, explain:"SAST = วิเคราะห์ Source Code (White-box) / DAST = ทดสอบแอปที่รันอยู่ (Black-box)"},

{topic:"Cyber Security", q:"WAF (Web Application Firewall) ใช้ทำอะไร?",
 choices:["กรอง Web Traffic ป้องกันการโจมตีเว็บแอป เช่น SQLi, XSS","สแกนไวรัสในไฟล์","เข้ารหัสข้อมูล","สำรองเว็บ"],
 answer:0, explain:"WAF = กรอง Web Traffic ตรวจจับ/บล็อกการโจมตีเว็บแอป เช่น SQL Injection, XSS"},

// ---------- เพิ่มเติม: Web Application Attack (2 ข้อ) ----------
{topic:"Cyber Security", q:"Broken Access Control คือช่องโหว่แบบใด?",
 choices:["การควบคุมการเข้าถึงที่ผิดพลาด ทำให้ผู้ใช้เข้าถึงข้อมูล/ฟังก์ชันที่ไม่ควรได้","การโหลดช้า","การเข้ารหัสผิด","การสำรองข้อมูลล้มเหลว"],
 answer:0, explain:"Broken Access Control = ผู้ใช้สามารถเข้าถึงข้อมูลหรือฟังก์ชันที่ตนไม่มีสิทธิ์ เป็นช่องโหว่ยอดนิยมใน OWASP"},

{topic:"Cyber Security", q:"Security Misconfiguration คืออะไร?",
 choices:["การกำหนดค่าเริ่มต้น/ค่าความปลอดภัยไม่เหมาะสม เช่น เปิด Debug mode, ใช้รหัสผ่าน default","การเขียนโค้ดผิด","การลบไฟล์","การอัปเดตระบบ"],
 answer:0, explain:"Security Misconfiguration = ตั้งค่าความปลอดภัยไม่ดี เช่น เปิด Debug, รหัสผ่าน default, พอร์ตไม่จำเป็นเปิดอยู่"}
// ============================================================
//  รอบที่ 3/6: Database System and Data Management (50 ข้อ)
// ============================================================

// ---------- กลุ่มที่ 1: จากข้อมูลสู่การตัดสินใจ (4 ข้อ) ----------
{topic:"Database", q:"กระบวนการเปลี่ยนข้อมูลเป็นคุณค่า (From Data to Decision) มีลำดับอย่างไร?",
 choices:["Information → Data → Insight → Decision","Raw Data → Organized Data → Information → Insight → Decision","Decision → Insight → Data","Data → Decision ทันที"],
 answer:1, explain:"ลำดับ: Raw Data → Organized Data → Information → Insight → Decision"},

{topic:"Cyber Security", q:"ข้อใดคือตัวอย่างของ Raw Data?",
 choices:["ยอดขายเฉลี่ยรายเดือน","ตัวเลขดิบที่ยังไม่ผ่านการประมวลผล เช่น 25, 30, 45","กราฟแนวโน้ม","ข้อสรุปผู้บริหาร"],
 answer:1, explain:"Raw Data = ข้อมูลดิบที่ยังไม่ผ่านการจัดระเบียบหรือประมวลผล"},

{topic:"Database", q:"Information ต่างจาก Data อย่างไร?",
 choices:["ไม่ต่างกัน","Information = ข้อมูลที่ผ่านการประมวลผลและมีความหมายต่อการใช้งาน","Data มีค่ามากกว่า","Information ดิบกว่า"],
 answer:1, explain:"Information = Data ที่ผ่านการประมวลผล จัดระเบียบ และตีความแล้ว มีความหมายต่อผู้ใช้"},

{topic:"Database", q:"Insight หมายถึงอะไร?",
 choices:["ข้อมูลดิบ","ข้อมูลเชิงลึกที่ได้จากการวิเคราะห์ ช่วยในการตัดสินใจ","ไฟล์ข้อมูล","ฐานข้อมูล"],
 answer:1, explain:"Insight = ข้อมูลเชิงลึกที่ได้จากการวิเคราะห์ นำไปสู่การตัดสินใจ"},

// ---------- กลุ่มที่ 2: โครงสร้างและปัญหาของ File System (6 ข้อ) ----------
{topic:"Database", q:"โครงสร้างข้อมูลจากเล็กไปใหญ่ เรียงลำดับใดถูกต้อง?",
 choices:["Bit → Byte → Field → Record → File","Bit → Field → Byte → File → Record","File → Record → Field → Byte → Bit","Byte → Bit → File → Record → Field"],
 answer:0, explain:"Bit → Byte → Field → Record → File"},

{topic:"Database", q:"Bit คืออะไร?",
 choices:["หน่วยที่เล็กที่สุดของข้อมูล มีค่า 0 หรือ 1","กลุ่มของ Record","แถวในตาราง","ไฟล์"],
 answer:0, explain:"Bit = หน่วยข้อมูลที่เล็กที่สุด มีค่า 0 หรือ 1"},

{topic:"Database", q:"Field ในโครงสร้างข้อมูลหมายถึงอะไร?",
 choices:["กลุ่มของไฟล์","คอลัมน์หรือคุณลักษณะหนึ่งของข้อมูล","แถวข้อมูล","หน่วยความจำ"],
 answer:1, explain:"Field = คอลัมน์/คุณลักษณะหนึ่ง เช่น ชื่อ, นามสกุล, อายุ"},

{topic:"Database", q:"Record คืออะไร?",
 choices:["กลุ่มของ Field ที่รวมกันเป็น 1 หน่วยข้อมูล","กลุ่มของไฟล์","กลุ่มของบิต","กลุ่มของตาราง"],
 answer:0, explain:"Record = กลุ่มของ Field ที่รวมกันเป็นข้อมูล 1 หน่วย เช่น ข้อมูลของนักเรียน 1 คน"},

{topic:"Database", q:"Data Redundancy หมายถึงอะไร?",
 choices:["ข้อมูลสูญหาย","ความซ้ำซ้อนของข้อมูล เก็บชุดเดียวกันไว้มากกว่า 1 แห่ง","ข้อมูลผิดพลาด","ข้อมูลถูกลบ"],
 answer:1, explain:"Data Redundancy = เก็บข้อมูลชุดเดียวกันไว้หลายที่ เปลืองพื้นที่และเสี่ยงต่อความขัดแย้ง"},

{topic:"Database", q:"Data Inconsistency หมายถึงอะไร?",
 choices:["ข้อมูลสูญหาย","ข้อมูลชุดเดียวกันในหลายที่มีค่าไม่ตรงกัน","ข้อมูลซ้ำ","ข้อมูลมากเกินไป"],
 answer:1, explain:"Data Inconsistency = ข้อมูลเดียวกันในหลายที่ เก็บค่าไม่ตรงกัน ทำให้เชื่อถือไม่ได้"},

// ---------- กลุ่มที่ 3: ปัญหาของ File System เพิ่มเติม (4 ข้อ) ----------
{topic:"Database", q:"Data Dependence ในระบบแฟ้มข้อมูลหมายถึงอะไร?",
 choices:["ข้อมูลพึ่งพากัน","หากแก้ไขโครงสร้างข้อมูลต้องแก้ไขโปรแกรมตามไปด้วย","ข้อมูลไม่ขึ้นกับใคร","ข้อมูลสูญหาย"],
 answer:1, explain:"Data Dependence = โปรแกรมผูกติดกับโครงสร้างข้อมูล แก้โครงสร้างต้องแก้โปรแกรม"},

{topic:"Database", q:"Atomic ในบริบทของฐานข้อมูลหมายถึงอะไร?",
 choices:["การทำงานต้องเสร็จสมบูรณ์ตั้งแต่ต้นจนจบกระบวนการ","การทำงานทีละขั้น","การลบข้อมูล","การเพิ่มข้อมูล"],
 answer:0, explain:"Atomic = ทำงานเป็นหน่วยเดียว ต้องสำเร็จทั้งหมดหรือไม่ทำเลย (All or Nothing)"},

{topic:"Database", q:"ปัญหาด้าน Security ในระบบแฟ้มข้อมูลคืออะไร?",
 choices:["ไม่มีปัญหา","ขาดการป้องกันการเข้าถึงข้อมูลของผู้ใช้แต่ละคน","ข้อมูลไม่ปลอดภัยเพราะไม่มี firewall","ข้อมูลถูกเข้ารหัส"],
 answer:1, explain:"ระบบแฟ้มข้อมูลมักขาดการควบคุมสิทธิ์การเข้าถึงที่เหมาะสม"},

{topic:"Database", q:"ข้อใด ไม่ใช่ ปัญหาของระบบแฟ้มข้อมูล?",
 choices:["Data Redundancy","Data Inconsistency","Data Dependence","Data Encryption"],
 answer:3, explain:"Data Encryption = การเข้ารหัสข้อมูล เป็นมาตรการความปลอดภัย ไม่ใช่ปัญหา"},

// ---------- กลุ่มที่ 4: DBMS และองค์ประกอบ (6 ข้อ) ----------
{topic:"Database", q:"DBMS คืออะไร?",
 choices:["ฐานข้อมูล","ซอฟต์แวร์ที่ใช้ในการนิยาม สร้าง บำรุงรักษา ควบคุมการเข้าถึง และสำรอง/เรียกคืนข้อมูล","ฮาร์ดแวร์","ผู้ใช้งาน"],
 answer:1, explain:"DBMS = Database Management System ซอฟต์แวร์จัดการฐานข้อมูล"},

{topic:"Database", q:"DBMS มีองค์ประกอบ 5 ประการ ข้อใด ไม่ถูกต้อง?",
 choices:["Hardware","Software","Data","Network"],
 answer:3, explain:"5 องค์ประกอบ: Hardware, Software, Data, Users และ Procedure ไม่มี Network"},

{topic:"Database", q:"ในองค์ประกอบของ DBMS ข้อใดถูกแยกออกจากซอฟต์แวร์อย่างชัดเจน?",
 choices:["Hardware","Data","Users","Procedure"],
 answer:1, explain:"Data ถูกแยกจากซอฟต์แวร์ชัดเจน การเปลี่ยนซอฟต์แวร์จะไม่กระทบข้อมูล"},

{topic:"Database", q:"DBA (Database Administrator) มีหน้าที่อะไร?",
 choices:["ใช้งานฐานข้อมูลทั่วไป","รับผิดชอบสร้าง บำรุงรักษา และกำหนดสิทธิ์การเข้าถึงฐานข้อมูล","เขียนโปรแกรม","ขายฐานข้อมูล"],
 answer:1, explain:"DBA = ผู้บริหารฐานข้อมูล รับผิดชอบสร้าง บำรุงรักษา กำหนดสิทธิ์ ดูแลความปลอดภัย"},

{topic:"Database", q:"Procedure ในองค์ประกอบของ DBMS หมายถึงอะไร?",
 choices:["การผ่าตัด","ขั้นตอนการปฏิบัติงาน ชุดคำสั่ง และกฎเกณฑ์ในการใช้งาน","โปรแกรม","ตาราง"],
 answer:1, explain:"Procedure = ขั้นตอน/กฎเกณฑ์ในการใช้งานฐานข้อมูลของแต่ละองค์กร"},

{topic:"Database", q:"ข้อใดเป็น DBMS ที่นิยมในปัจจุบัน?",
 choices:["MySQL","PostgreSQL","Oracle Database","ถูกทุกข้อ"],
 answer:3, explain:"DBMS ยอดนิยม: MySQL, MariaDB, PostgreSQL, Oracle Database, Microsoft SQL Server"},

// ---------- กลุ่มที่ 5: สถาปัตยกรรมฐานข้อมูล ANSI/SPARC (5 ข้อ) ----------
{topic:"Database", q:"สถาปัตยกรรมฐานข้อมูล ANSI/SPARC แบ่งเป็นกี่ระดับ?",
 choices:["2","3","4","5"],
 answer:1, explain:"3 ระดับ: Internal, Conceptual, External"},

{topic:"Database", q:"Internal Level ในสถาปัตยกรรม ANSI/SPARC หมายถึงอะไร?",
 choices:["ระดับที่ผู้ใช้เห็น","การจัดเก็บข้อมูลจริงเชิงกายภาพ (Physical Storage)","ระดับแนวคิด","ระดับภายนอก"],
 answer:1, explain:"Internal Level = ระดับกายภาพ ว่าข้อมูลถูกจัดเก็บอย่างไรบนดิสก์"},

{topic:"Database", q:"Conceptual Level ในสถาปัตยกรรม ANSI/SPARC หมายถึงอะไร?",
 choices:["การจัดเก็บกายภาพ","โครงสร้างหลักที่อธิบายว่าจัดเก็บข้อมูลอะไรและมีความสัมพันธ์กันอย่างไร แสดงเป็นตาราง","มุมมองผู้ใช้","การเข้ารหัส"],
 answer:1, explain:"Conceptual Level = โครงสร้างหลัก แสดงเป็น Table/Relation อธิบาย Entity และความสัมพันธ์"},

{topic:"Database", q:"External Level ในสถาปัตยกรรม ANSI/SPARC หมายถึงอะไร?",
 choices:["การจัดเก็บกายภาพ","โครงสร้างหลัก","ระดับที่ติดต่อผู้ใช้โดยตรง แสดงเฉพาะข้อมูลที่ผู้ใช้แต่ละกลุ่มจำเป็นต้องเห็น (User View)","ระดับความปลอดภัย"],
 answer:2, explain:"External Level = User View แสดงเฉพาะข้อมูลที่ผู้ใช้แต่ละกลุ่มจำเป็นต้องเห็น"},

{topic:"Database", q:"ข้อใดถูกต้องเกี่ยวกับสถาปัตยกรรม ANSI/SPARC?",
 choices:["การแก้ไข External Level ส่งผลกระทบต่อ Internal Level ทันที","การใช้งานใน External Level ไม่ส่งผลต่อโครงสร้างการจัดเก็บหลัก","ทั้ง 3 ระดับเหมือนกัน","มีแค่ 1 ระดับ"],
 answer:1, explain:"External Level แยกจาก Internal/Conceptual ทำให้ผู้ใช้ทำงานได้โดยไม่กระทบโครงสร้างหลัก"},

// ---------- กลุ่มที่ 6: Relationship Types (4 ข้อ) ----------
{topic:"Database", q:"ความสัมพันธ์แบบ One-to-Many (1:M) ตัวอย่างที่ถูกต้องคือข้อใด?",
 choices:["นักศึกษา กับ Transcript","ลูกค้า กับ ใบเสร็จ (ลูกค้า 1 คนมีได้หลายใบเสร็จ)","อาจารย์ กับ ชั้นเรียน","ผู้ใช้ กับ รหัสผ่าน"],
 answer:1, explain:"1:M = ฝ่ายหนึ่งมีได้หลาย เช่น ลูกค้า 1 คน มีใบเสร็จหลายใบ"},

{topic:"Database", q:"ความสัมพันธ์แบบ Many-to-Many (M:N) ตัวอย่างที่ถูกต้องคือข้อใด?",
 choices:["ลูกค้า กับ ใบเสร็จ","นักศึกษา กับ Transcript","อาจารย์ กับ ชั้นเรียน (อาจารย์สอนหลายชั้น ชั้นมีหลายอาจารย์)","ผู้ใช้ กับ Email"],
 answer:2, explain:"M:N = ทั้งสองฝ่ายมีได้หลาย เช่น อาจารย์สอนหลายชั้นเรียน และชั้นเรียนมีอาจารย์หลายคน"},

{topic:"Database", q:"ความสัมพันธ์แบบ One-to-One (1:1) ตัวอย่างที่ถูกต้องคือข้อใด?",
 choices:["ลูกค้า กับ ใบเสร็จ","อาจารย์ กับ ชั้นเรียน","นักศึกษา กับ Transcript","ร้านค้า กับ สินค้า"],
 answer:2, explain:"1:1 = ฝ่ายหนึ่งสัมพันธ์กับอีกฝ่ายเพียง 1 เท่านั้น เช่น นักศึกษา 1 คน มี Transcript 1 ชุด"},

{topic:"Database", q:"ความสัมพันธ์ในฐานข้อมูลเชิงสัมพันธ์ มีกี่ประเภทหลัก?",
 choices:["1","2","3","4"],
 answer:2, explain:"3 ประเภท: 1:1, 1:M, M:N"},

// ---------- กลุ่มที่ 7: Database Models (5 ข้อ) ----------
{topic:"Database", q:"Hierarchical Model มีโครงสร้างอย่างไร?",
 choices:["ตาราง 2 มิติ","โครงสร้างต้นไม้กลับหัว มี Root และแต่ละ Entity มี Parent ได้เพียง 1 ตัว","เครือข่ายซับซ้อน","กราฟ"],
 answer:1, explain:"Hierarchical = โครงสร้างต้นไม้ แต่ละ Entity มี Parent ได้ 1 ตัว ค้นหาง่ายแต่ไม่รองรับ M:N"},

{topic:"Database", q:"ข้อเสียหลักของ Hierarchical Model คืออะไร?",
 choices:["ช้าเกินไป","ไม่สามารถกำหนดความสัมพันธ์แบบ Many-to-Many ได้","ใช้พื้นที่มาก","ไม่รองรับการค้นหา"],
 answer:1, explain:"Hierarchical Model ไม่รองรับ M:N โดยตรง"},

{topic:"Database", q:"Network Model ต่างจาก Hierarchical Model อย่างไร?",
 choices:["ไม่ต่างกัน","Network Model ยืดหยุ่นกว่า แต่ซับซ้อนสูง","Network Model เร็วกว่า","Hierarchical ยืดหยุ่นกว่า"],
 answer:1, explain:"Network Model ยืดหยุ่นกว่า (Entity มี Parent ได้หลายตัว) แต่ซับซ้อน"},

{topic:"Database", q:"Relational Model แสดงข้อมูลในรูปแบบใด?",
 choices:["ต้นไม้","เครือข่าย","ตาราง 2 มิติ (Table/Relation)","กราฟ"],
 answer:2, explain:"Relational Model = ตาราง 2 มิติ (Relation) ที่มีแถวและคอลัมน์"},

{topic:"Database", q:"แบบจำลองฐานข้อมูลที่นิยมใช้มากที่สุดในปัจจุบันคือ?",
 choices:["Hierarchical","Network","Relational","Object-Oriented"],
 answer:2, explain:"Relational Model เป็นที่นิยมสูงสุด ใช้ใน MySQL, PostgreSQL, Oracle ฯลฯ"},

// ---------- กลุ่มที่ 8: โครงสร้างและ Keys (8 ข้อ) ----------
{topic:"Database", q:"ในฐานข้อมูลเชิงสัมพันธ์ รีเลชัน (Relation) หมายถึงอะไร?",
 choices:["ตาราง","คอลัมน์","แถว","ไฟล์"],
 answer:0, explain:"Relation = ตารางที่เก็บข้อมูล"},

{topic:"Database", q:"Attribute ในฐานข้อมูลเชิงสัมพันธ์ หมายถึงอะไร?",
 choices:["แถว","คอลัมน์","ตาราง","คีย์"],
 answer:1, explain:"Attribute = คอลัมน์/คุณลักษณะของ Entity"},

{topic:"Database", q:"Tuple ในฐานข้อมูลเชิงสัมพันธ์ หมายถึงอะไร?",
 choices:["คอลัมน์","แถวข้อมูล","ตาราง","คีย์"],
 answer:1, explain:"Tuple = แถวข้อมูล 1 แถวในตาราง"},

{topic:"Database", q:"Degree ในฐานข้อมูลเชิงสัมพันธ์ หมายถึงอะไร?",
 choices:["จำนวนแถวทั้งหมด","จำนวนคอลัมน์ทั้งหมด","จำนวนตาราง","จำนวนคีย์"],
 answer:1, explain:"Degree = จำนวนคอลัมน์ (Attribute) ทั้งหมดของ Relation"},

{topic:"Database", q:"Cardinality ในฐานข้อมูลเชิงสัมพันธ์ หมายถึงอะไร?",
 choices:["จำนวนคอลัมน์","จำนวนแถว (Tuple) ทั้งหมด","จำนวนตาราง","จำนวนคีย์"],
 answer:1, explain:"Cardinality = จำนวนแถวทั้งหมดของ Relation"},

{topic:"Database", q:"Super Key คืออะไร?",
 choices:["คีย์ที่มีค่าน้อยสุด","แอตตริบิวต์หรือกลุ่มแอตตริบิวต์ที่บอกความเป็นเอกลักษณ์ของ Tuple","คีย์นอก","คีย์ที่ซ้ำได้"],
 answer:1, explain:"Super Key = Attribute หรือกลุ่มของ Attribute ที่ระบุ Tuple ได้ไม่ซ้ำ"},

{topic:"Database", q:"Candidate Key คืออะไร?",
 choices:["Super Key ที่เล็กที่สุดที่บอกความแตกต่างของ Tuple ได้","Primary Key","Foreign Key","คีย์ที่ซ้ำได้"],
 answer:0, explain:"Candidate Key = Super Key ชุดที่เล็กที่สุดที่สามารถระบุ Tuple ได้ไม่ซ้ำ"},

{topic:"Database", q:"Primary Key มีคุณสมบัติอย่างไร?",
 choices:["ซ้ำได้","เป็น null ได้","มีได้เพียง 1 ตัวต่อตาราง ห้ามซ้ำและห้ามเป็น null","ใช้เชื่อมตารางอื่น"],
 answer:2, explain:"Primary Key = Candidate Key ที่ถูกเลือก มีได้ 1 ตัวต่อตาราง ห้ามซ้ำ ห้าม null"},

// ---------- กลุ่มที่ 9: Foreign Key และ Relational Operations (5 ข้อ) ----------
{topic:"Database", q:"Foreign Key คืออะไร?",
 choices:["คีย์หลักของตารางตัวเอง","แอตตริบิวต์ที่ใช้เชื่อมโยงไปยัง Primary Key ของอีกรีเลชัน","คีย์ที่ไม่ซ้ำ","คีย์ที่สร้างใหม่"],
 answer:1, explain:"Foreign Key = Attribute ที่เชื่อมไปยัง Primary Key ของอีกตาราง (ซ้ำหรือ null ได้)"},

{topic:"Database", q:"Foreign Key มีคุณสมบัติอย่างไร?",
 choices:["ห้ามซ้ำ ห้าม null","สามารถซ้ำหรือเป็น null ได้","ต้องไม่ซ้ำ","ไม่มีในตาราง"],
 answer:1, explain:"Foreign Key สามารถซ้ำได้ (หลายแถวอ้างถึงแถวเดียวกัน) และเป็น null ได้"},

{topic:"Database", q:"การดำเนินการ SELECT ใน Relational Operations ทำอะไร?",
 choices:["เลือกเฉพาะคอลัมน์","เลือกชุด Tuple (แถว) ตามเงื่อนไขบูลีน","รวม 2 รีเลชัน","ลบข้อมูล"],
 answer:1, explain:"SELECT = เลือกแถว (Tuple) ตามเงื่อนไข เช่น WHERE"},

{topic:"Database", q:"การดำเนินการ PROJECT ใน Relational Operations ทำอะไร?",
 choices:["เลือกแถว","เลือกเฉพาะคอลัมน์ (Attribute) ที่ต้องการ","รวมตาราง","สร้างตาราง"],
 answer:1, explain:"PROJECT = เลือกเฉพาะคอลัมน์ที่ต้องการ"},

{topic:"Database", q:"การดำเนินการ JOIN ใน Relational Operations ทำอะไร?",
 choices:["ลบตาราง","รวม 2 รีเลชันเข้าด้วยกันตามเงื่อนไขที่กำหนด","สร้างตาราง","ลบข้อมูล"],
 answer:1, explain:"JOIN = รวม 2 ตารางตามเงื่อนไข (มักใช้ Primary Key + Foreign Key)"},

// ---------- กลุ่มที่ 10: SQL Commands (5 ข้อ) ----------
{topic:"Database", q:"DDL (Data Definition Language) ใช้ทำอะไร?",
 choices:["จัดการข้อมูล","กำหนดคุณลักษณะและกฎเกณฑ์ของฐานข้อมูล (โครงสร้าง)","สำรองข้อมูล","สอบถามข้อมูล"],
 answer:1, explain:"DDL = นิยามโครงสร้าง เช่น CREATE, ALTER, DROP เก็บใน Data Dictionary"},

{topic:"Database", q:"DML (Data Manipulation Language) ใช้ทำอะไร?",
 choices:["จัดการข้อมูล เช่น เพิ่ม ลบ แก้ไข และค้นหา","กำหนดโครงสร้าง","ตั้งค่าเซิร์ฟเวอร์","สำรองข้อมูล"],
 answer:0, explain:"DML = จัดการข้อมูล เช่น INSERT, UPDATE, DELETE, SELECT"},

{topic:"Database", q:"คำสั่ง SQL ใดใช้เพิ่มข้อมูลใหม่?",
 choices:["INSERT INTO","ADD INTO","PUT INTO","NEW ROW"],
 answer:0, explain:"INSERT INTO = เพิ่มข้อมูลใหม่ลงตาราง"},

{topic:"Database", q:"คำสั่ง SQL ใดใช้ลบแถวข้อมูลตามเงื่อนไข?",
 choices:["DROP","DELETE FROM","REMOVE FROM","CLEAR"],
 answer:1, explain:"DELETE FROM ... WHERE ... = ลบแถวตามเงื่อนไข (ถ้าไม่ใส่ WHERE จะลบทั้งหมด)"},

{topic:"Database", q:"คำสั่ง SQL ใดใช้แก้ไขข้อมูลที่มีอยู่?",
 choices:["MODIFY","CHANGE","UPDATE ... SET ... WHERE","EDIT"],
 answer:2, explain:"UPDATE ... SET ... WHERE = แก้ไขข้อมูลตามเงื่อนไข"},

// ---------- กลุ่มที่ 11: Data Lifecycle และ Data Quality (4 ข้อ) ----------
{topic:"Database", q:"Data Lifecycle มีกี่ขั้นตอนหลัก?",
 choices:["3","5","7","10"],
 answer:2, explain:"7 ขั้นตอน: Collect → Store → Process → Use → Share → Archive → Delete"},

{topic:"Database", q:"Data Lifecycle ขั้นตอนแรกและขั้นตอนสุดท้ายคืออะไร?",
 choices:["Collect และ Delete","Store และ Archive","Process และ Share","Collect และ Archive"],
 answer:0, explain:"ขั้นแรก = Collect (เก็บรวบรวม) / ขั้นสุดท้าย = Delete (ลบข้อมูล)"},

{topic:"Database", q:"Data Quality มีกี่มิติหลัก?",
 choices:["3","4","6","8"],
 answer:2, explain:"6 มิติ: Accuracy, Completeness, Consistency, Timeliness, Validity, Uniqueness"},

{topic:"Database", q:"ข้อใด ไม่ใช่ มิติของคุณภาพข้อมูล (Data Quality)?",
 choices:["Accuracy","Completeness","Consistency","Compression"],
 answer:3, explain:"Compression = การบีบอัดข้อมูล ไม่ใช่มิติของคุณภาพข้อมูล"},

// ---------- กลุ่มที่ 12: Data Quality และ Data Cleaning (4 ข้อ) ----------
{topic:"Database", q:"Accuracy ใน Data Quality หมายถึงอะไร?",
 choices:["ข้อมูลสะท้อนข้อเท็จจริง ปราศจากข้อผิดพลาด","ข้อมูลครบถ้วน","ข้อมูลสอดคล้องกัน","ข้อมูลเป็นปัจจุบัน"],
 answer:0, explain:"Accuracy = ความถูกต้อง ตรงตามข้อเท็จจริง"},

{topic:"Database", q:"Consistency ใน Data Quality หมายถึงอะไร?",
 choices:["ข้อมูลถูกต้อง","ข้อมูลไม่ซ้ำ","ข้อมูลเดียวกันมีค่าและรูปแบบตรงกันทุกระบบ","ข้อมูลเป็นปัจจุบัน"],
 answer:2, explain:"Consistency = ความสอดคล้อง ข้อมูลเดียวกันต้องมีค่าและรูปแบบตรงกัน"},

{topic:"Database", q:"Uniqueness ใน Data Quality หมายถึงอะไร?",
 choices:["ข้อมูลไม่ถูกบันทึกซ้ำโดยไม่จำเป็น","ข้อมูลครบถ้วน","ข้อมูลถูกต้อง","ข้อมูลใหม่"],
 answer:0, explain:"Uniqueness = ความไม่ซ้ำซ้อน ข้อมูลไม่ถูกบันทึกซ้ำ"},

{topic:"Database", q:"Data Cleaning คืออะไร?",
 choices:["การลบข้อมูลทั้งหมด","กระบวนการตรวจหาและแก้ไขข้อมูลที่มีปัญหา เช่น Missing, Invalid, Duplicate","การเข้ารหัสข้อมูล","การสำรองข้อมูล"],
 answer:1, explain:"Data Cleaning = ตรวจหาและแก้ไขข้อมูลที่มีปัญหา เช่น ค่าหาย, ค่าผิดช่วง, รูปแบบไม่สอดคล้อง, ซ้ำ"},
// ============================================================
//  รอบที่ 4/6: SDLC & Agile (50 ข้อ)
// ============================================================

// ---------- กลุ่มที่ 1: ภาพรวมการพัฒนาระบบ (5 ข้อ) ----------
{topic:"SDLC", q:"การพัฒนาระบบ (System Development) หมายถึงอะไร?",
 choices:["แค่การเขียนโปรแกรม","กระบวนการวิเคราะห์ ออกแบบ สร้าง ทดสอบ นำไปใช้ และปรับปรุงระบบ","การขายระบบ","การติดตั้งระบบ"],
 answer:1, explain:"System Development = กระบวนการครบวงจร ไม่ใช่แค่เขียนโค้ด"},

{topic:"SDLC", q:"องค์ประกอบของระบบสารสนเทศ (Information System) มี 4 ส่วน คืออะไร?",
 choices:["Hardware, Software, Network, Data","People, Process, Data, Technology","Input, Process, Output, Feedback","Plan, Do, Check, Act"],
 answer:1, explain:"IS = People + Process + Data + Technology"},

{topic:"SDLC", q:"บทบาทใดทำหน้าที่เป็นตัวกลางระหว่างผู้ใช้กับทีมเทคนิค?",
 choices:["Developer","System Analyst / Business Analyst","Tester","Admin"],
 answer:1, explain:"System Analyst/BA = วิเคราะห์ความต้องการและแปลงให้ทีมเทคนิคเข้าใจ"},

{topic:"SDLC", q:"บทบาทใดรับผิดชอบคุณภาพของซอฟต์แวร์?",
 choices:["Developer","Tester / QA","PM","User"],
 answer:1, explain:"Tester/QA = ตรวจสอบคุณภาพ ค้นหาข้อบกพร่องก่อนส่งมอบ"},

{topic:"SDLC", q:"ทำไมต้องมีกระบวนการพัฒนาระบบที่เป็นระบบ?",
 choices:["เพื่อให้เขียนโค้ดเร็วขึ้น","เพื่อให้ข้อกำหนดชัดเจน ควบคุมคุณภาพ บริหารเวลา/งบ และลดความเสี่ยง","เพื่อลดจำนวนพนักงาน","เพื่อให้โปรแกรมสวย"],
 answer:1, explain:"กระบวนการที่เป็นระบบช่วยให้ทุกอย่างชัดเจน ควบคุมได้ ลดความเสี่ยง"},

// ---------- กลุ่มที่ 2: SDLC Phase 1 - Planning (5 ข้อ) ----------
{topic:"SDLC", q:"SDLC Phase แรกคืออะไร?",
 choices:["Design","Planning","Testing","Development"],
 answer:1, explain:"Phase 1 = Planning (การวางแผน) ระบุปัญหา วัตถุประสงค์ ขอบเขต"},

{topic:"SDLC", q:"In Scope และ Out of Scope ใช้เพื่ออะไร?",
 choices:["แสดงรายชื่อทีม","กำหนดขอบเขตงาน ป้องกัน Scope Creep","คำนวณราคา","ทดสอบ"],
 answer:1, explain:"การกำหนดขอบเขตชัดเจน (In/Out of Scope) ป้องกัน Scope Creep (ขอบเขตบานปลาย)"},

{topic:"SDLC", q:"Feasibility Study 4 ด้าน คืออะไร?",
 choices:["Technical, Economic, Operational, Schedule","Fast, Slow, Big, Small","Design, Build, Test, Deploy","Plan, Do, Check, Act"],
 answer:0, explain:"4 ด้าน: Technical (เทคนิค), Economic (เศรษฐกิจ), Operational (ปฏิบัติการ), Schedule (เวลา)"},

{topic:"SDLC", q:"Technical Feasibility ตรวจสอบเรื่องอะไร?",
 choices:["งบประมาณ","ความเป็นไปได้ทางเทคนิคว่าเทคโนโลยีรองรับได้ไหม","ความพึงพอใจผู้ใช้","เวลาที่ใช้"],
 answer:1, explain:"Technical Feasibility = เทคโนโลยี/ทีมงานรองรับได้หรือไม่"},

{topic:"SDLC", q:"Economic Feasibility ตรวจสอบเรื่องอะไร?",
 choices:["เทคโนโลยี","ผลตอบแทนทางการเงิน ความคุ้มค่าของการลงทุน","ผู้ใช้","เวลา"],
 answer:1, explain:"Economic Feasibility = ความคุ้มค่าทางการเงิน ROI"},

// ---------- กลุ่มที่ 3: Phase 2 - Requirements Analysis (6 ข้อ) ----------
{topic:"SDLC", q:"SDLC Phase ที่ 2 คืออะไร?",
 choices:["Design","Requirements Analysis","Development","Testing"],
 answer:1, explain:"Phase 2 = Requirements Analysis (การวิเคราะห์ความต้องการ)"},

{topic:"SDLC", q:"เทคนิคใด ไม่ใช่ การรวบรวมความต้องการ?",
 choices:["สัมภาษณ์ (Interview)","แบบสอบถาม (Questionnaire)","สังเกตการณ์ (Observation)","สุ่มเดา"],
 answer:3, explain:"เทคนิคที่ใช้: Interview, Questionnaire, Observation, Document Analysis, Workshop"},

{topic:"SDLC", q:"SRS (Software Requirements Specification) คืออะไร?",
 choices:["เอกสารระบุข้อกำหนดความต้องการของซอฟต์แวร์","โค้ด","แบบทดสอบ","รายงาน"],
 answer:0, explain:"SRS = เอกสารระบุความต้องการที่ชัดเจน ใช้เป็นข้อตกลงระหว่างทีมและผู้ใช้"},

{topic:"SDLC", q:"Functional Requirements หมายถึงอะไร?",
 choices:["คุณภาพของระบบ","ระบบต้องทำอะไรได้ (ฟังก์ชัน)","ความเร็ว","ความปลอดภัย"],
 answer:1, explain:"Functional Requirements = ระบบต้องทำอะไรได้ เช่น ล็อกอิน, ค้นหา, สั่งซื้อ"},

{topic:"SDLC", q:"Non-Functional Requirements หมายถึงอะไร?",
 choices:["ฟังก์ชันของระบบ","คุณลักษณะ/คุณภาพของระบบ เช่น Performance, Security, Usability","หน้าจอ","ฐานข้อมูล"],
 answer:1, explain:"Non-Functional = คุณภาพ เช่น Performance, Security, Usability, Reliability"},

{topic:"SDLC", q:"ข้อใดเป็น Non-Functional Requirement?",
 choices:["ระบบต้องล็อกอินได้","ระบบต้องโหลดหน้าเว็บภายใน 2 วินาที","ระบบต้องเพิ่มสินค้าได้","ระบบต้องลบผู้ใช้ได้"],
 answer:1, explain:"ข้อกำหนดเรื่องเวลาโหลด (Performance) เป็น Non-Functional"},

// ---------- กลุ่มที่ 4: Phase 3 - System Design (4 ข้อ) ----------
{topic:"SDLC", q:"SDLC Phase ที่ 3 คืออะไร?",
 choices:["Development","System Design","Testing","Maintenance"],
 answer:1, explain:"Phase 3 = System Design (การออกแบบระบบ)"},

{topic:"SDLC", q:"System Architecture ในขั้น Design ครอบคลุมเรื่องใด?",
 choices:["โครงสร้างโดยรวมของระบบ","หน้าจอ","ฐานข้อมูล","โค้ด"],
 answer:0, explain:"System Architecture = โครงสร้างโดยรวม ว่าส่วนประกอบต่างๆ เชื่อมกันอย่างไร"},

{topic:"SDLC", q:"UI Design ในขั้น System Design ทำอะไร?",
 choices:["ออกแบบฐานข้อมูล","ออกแบบส่วนติดต่อผู้ใช้ (หน้าจอ, ปุ่ม, การจัดวาง)","เขียนโค้ด","ทดสอบ"],
 answer:1, explain:"UI Design = ออกแบบ User Interface ให้ใช้งานง่าย สวยงาม"},

{topic:"SDLC", q:"Security Design ในขั้น System Design ครอบคลุมเรื่องใด?",
 choices:["Authentication, Authorization, Data Protection","หน้าจอ","รายงาน","โค้ด"],
 answer:0, explain:"Security Design = ออกแบบความปลอดภัยตั้งแต่ต้น เช่น Authentication, Authorization, Data Protection"},

// ---------- กลุ่มที่ 5: Phase 4 - Development (4 ข้อ) ----------
{topic:"SDLC", q:"SDLC Phase ที่ 4 คืออะไร?",
 choices:["Development / Implementation","Testing","Design","Planning"],
 answer:0, explain:"Phase 4 = Development / Implementation (การพัฒนา/สร้าง)"},

{topic:"SDLC", q:"กิจกรรมในขั้น Development มีอะไรบ้าง?",
 choices:["เขียนโค้ด สร้างฐานข้อมูล พัฒนา UI และรวมระบบ","แค่เขียนโค้ด","แค่ทดสอบ","แค่วางแผน"],
 answer:0, explain:"Development = Coding + Database + UI + Module + Integration"},

{topic:"SDLC", q:"Version Control (เช่น Git) มีไว้เพื่ออะไร?",
 choices:["ตกแต่งโค้ด","ติดตามการเปลี่ยนแปลงของโค้ด จัดการเวอร์ชัน และทำงานร่วมกัน","ทดสอบโค้ด","คอมไพล์"],
 answer:1, explain:"Version Control = ติดตามการเปลี่ยนแปลง ทำงานร่วมกันได้โดยไม่ทับซ้อน"},

{topic:"SDLC", q:"Code Review มีประโยชน์อย่างไร?",
 choices:["ทำให้โค้ดยาว","ตรวจสอบคุณภาพโค้ดโดยเพื่อนร่วมทีม ลดข้อผิดพลาด","ทำให้ช้า","เพิ่มราคา"],
 answer:1, explain:"Code Review = ให้เพื่อนร่วมทีมช่วยตรวจโค้ดก่อน merge ลดบั๊กและเพิ่มคุณภาพ"},

// ---------- กลุ่มที่ 6: Phase 5 - Testing (6 ข้อ) ----------
{topic:"SDLC", q:"SDLC Phase ที่ 5 คืออะไร?",
 choices:["Development","System Testing","Deployment","Maintenance"],
 answer:1, explain:"Phase 5 = System Testing (การทดสอบระบบ)"},

{topic:"SDLC", q:"Unit Testing คืออะไร?",
 choices:["ทดสอบทั้งระบบ","ทดสอบส่วนเล็กที่สุด เช่น ฟังก์ชัน","ทดสอบโดยผู้ใช้","ทดสอบพร้อมกัน"],
 answer:1, explain:"Unit Testing = ทดสอบหน่วยเล็กสุด เช่น ฟังก์ชัน/เมธอด"},

{topic:"SDLC", q:"Integration Testing คืออะไร?",
 choices:["ทดสอบแยกส่วน","ทดสอบการรวมโมดูลเข้าด้วยกัน","ทดสอบโดยผู้ใช้","ทดสอบประสิทธิภาพ"],
 answer:1, explain:"Integration Testing = ทดสอบการทำงานร่วมกันของโมดูล"},

{topic:"SDLC", q:"System Testing คืออะไร?",
 choices:["ทดสอบแยกส่วน","ทดสอบทั้งระบบโดยรวม","ทดสอบผู้ใช้","ทดสอบโค้ด"],
 answer:1, explain:"System Testing = ทดสอบระบบโดยรวมทั้ง Functional และ Non-Functional"},

{topic:"SDLC", q:"UAT (User Acceptance Testing) คืออะไร?",
 choices:["ทดสอบหน่วย","ทดสอบรวม","ทดสอบโดยผู้ใช้จริง เพื่อยอมรับระบบ","ทดสอบประสิทธิภาพ"],
 answer:2, explain:"UAT = ทดสอบโดยผู้ใช้จริง ก่อน accept ระบบ"},

{topic:"SDLC", q:"ข้อใด ไม่ใช่ Non-Functional Testing?",
 choices:["Performance Testing","Load Testing","Security Testing","Unit Testing"],
 answer:3, explain:"Unit Testing เป็น Functional Testing ระดับหน่วย"},

// ---------- กลุ่มที่ 7: Phase 6 - Deployment (5 ข้อ) ----------
{topic:"SDLC", q:"SDLC Phase ที่ 6 คืออะไร?",
 choices:["Testing","System Deployment","Maintenance","Planning"],
 answer:1, explain:"Phase 6 = System Deployment (การนำระบบไปใช้งาน)"},

{topic:"SDLC", q:"Direct Conversion คือกลยุทธ์แบบใด?",
 choices:["ทำขนานกัน","เปลี่ยนทันทีจากระบบเก่าเป็นระบบใหม่","เปลี่ยนทีละส่วน","ใช้นำร่อง"],
 answer:1, explain:"Direct Conversion = เปลี่ยนทันที (Big Bang) เสี่ยงสูงแต่ประหยัด"},

{topic:"SDLC", q:"Parallel Conversion คือกลยุทธ์แบบใด?",
 choices:["เปลี่ยนทันที","ทำระบบเก่าและใหม่ขนานกันชั่วคราว","เปลี่ยนทีละส่วน","ใช้นำร่อง"],
 answer:1, explain:"Parallel = รันทั้งสองระบบขนานกัน ปลอดภัยแต่ต้นทุนสูง"},

{topic:"SDLC", q:"Phase Conversion คือกลยุทธ์แบบใด?",
 choices:["เปลี่ยนทันที","ทำขนานกัน","เปลี่ยนทีละส่วน/โมดูล","ใช้นำร่อง"],
 answer:2, explain:"Phase Conversion = ค่อยๆ เปลี่ยนทีละส่วน/โมดูล"},

{topic:"SDLC", q:"Pilot Conversion คือกลยุทธ์แบบใด?",
 choices:["เปลี่ยนทั้งองค์กรทันที","ใช้นำร่องในบางแผนก/สาขา ก่อนขยายทั้งองค์กร","ทำขนานกัน","เปลี่ยนทีละส่วน"],
 answer:1, explain:"Pilot = ทดลองในพื้นที่เล็กก่อน (เช่น 1 สาขา) แล้วค่อยขยาย"},

// ---------- กลุ่มที่ 8: Phase 7 - Maintenance (5 ข้อ) ----------
{topic:"SDLC", q:"SDLC Phase ที่ 7 คืออะไร?",
 choices:["Testing","Deployment","System Maintenance","Development"],
 answer:2, explain:"Phase 7 = System Maintenance (การบำรุงรักษาระบบ)"},

{topic:"SDLC", q:"Corrective Maintenance คือการบำรุงรักษาแบบใด?",
 choices:["แก้ไขข้อผิดพลาดที่พบหลังใช้งาน","ปรับตามสภาพแวดล้อมใหม่","ปรับปรุงประสิทธิภาพ","ป้องกันปัญหาในอนาคต"],
 answer:0, explain:"Corrective = แก้บั๊ก/ข้อผิดพลาดที่พบหลัง deploy"},

{topic:"SDLC", q:"Adaptive Maintenance คือการบำรุงรักษาแบบใด?",
 choices:["แก้บั๊ก","ปรับตามสภาพแวดล้อม/เทคโนโลยีที่เปลี่ยนไป","ปรับปรุงประสิทธิภาพ","ป้องกันปัญหา"],
 answer:1, explain:"Adaptive = ปรับตามการเปลี่ยนแปลงภายนอก เช่น OS ใหม่, กฎหมายใหม่"},

{topic:"SDLC", q:"Perfective Maintenance คือการบำรุงรักษาแบบใด?",
 choices:["แก้บั๊ก","ปรับตามสภาพแวดล้อม","ปรับปรุงประสิทธิภาพ/เพิ่มฟังก์ชัน","ป้องกันปัญหาในอนาคต"],
 answer:2, explain:"Perfective = ปรับปรุงให้ดีขึ้น เพิ่มฟังก์ชัน ปรับ performance"},

{topic:"SDLC", q:"Preventive Maintenance คือการบำรุงรักษาแบบใด?",
 choices:["แก้บั๊ก","ปรับสภาพแวดล้อม","ปรับปรุงประสิทธิภาพ","ป้องกันปัญหาที่อาจเกิดขึ้นในอนาคต"],
 answer:3, explain:"Preventive = ป้องกันปัญหาในอนาคต เช่น refactor, อัปเดต library"},

// ---------- กลุ่มที่ 9: Agile Manifesto & Principles (6 ข้อ) ----------
{topic:"SDLC", q:"Agile Manifesto ให้คุณค่า 4 ข้อ ข้อใดถูกต้อง?",
 choices:["เอกสาร > ซอฟต์แวร์","บุคคล+ปฏิสัมพันธ์ > กระบวนการ+เครื่องมือ","สัญญา > ความร่วมมือ","แผน > การตอบสนอง"],
 answer:1, explain:"Agile ให้คุณค่า: บุคคล+ปฏิสัมพันธ์, ซอฟต์แวร์ใช้งานได้, ความร่วมมือกับลูกค้า, ตอบสนองต่อการเปลี่ยนแปลง"},

{topic:"SDLC", q:"Agile ให้คุณค่าอะไรมากกว่า 'เอกสารที่ครบถ้วน'?",
 choices:["แผนงานที่สมบูรณ์","ซอฟต์แวร์ที่ใช้งานได้จริง","สัญญาที่รัดกุม","งบประมาณ"],
 answer:1, explain:"Agile = ซอฟต์แวร์ที่ใช้งานได้จริง > เอกสารที่ครบถ้วน"},

{topic:"SDLC", q:"Agile ให้คุณค่าอะไรมากกว่า 'การปฏิบัติตามแผน'?",
 choices:["การตอบสนองต่อการเปลี่ยนแปลง","เอกสาร","สัญญา","เครื่องมือ"],
 answer:0, explain:"Agile = การตอบสนองต่อการเปลี่ยนแปลง > การปฏิบัติตามแผน"},

{topic:"SDLC", q:"หลักการ Agile ข้อ 'Early & Continuous Delivery' หมายถึงอะไร?",
 choices:["ส่งมอบช้าแต่สมบูรณ์","ส่งมอบซอฟต์แวร์ที่มีคุณค่าให้ลูกค้าตั้งแต่เนิ่นๆ และต่อเนื่อง","ส่งมอบครั้งเดียว","ส่งมอบปีละครั้ง"],
 answer:1, explain:"Early & Continuous Delivery = ส่งมอบบ่อยและเร็ว เพื่อรับ feedback เร็ว"},

{topic:"SDLC", q:"Incremental Development หมายถึงอะไร?",
 choices:["พัฒนาแบบวนซ้ำ","แบ่งพัฒนาและส่งมอบทีละส่วนเพิ่ม เพื่อเพิ่มความสามารถใหม่","พัฒนาแบบขนาน","พัฒนาแบบ waterfall"],
 answer:1, explain:"Incremental = แบ่งส่งมอบทีละส่วน เพิ่มฟีเจอร์ใหม่ๆ ให้ระบบ"},

{topic:"SDLC", q:"Iterative Development หมายถึงอะไร?",
 choices:["พัฒนาแบบวนซ้ำ ปรับปรุงระบบที่มีอยู่ให้ดีขึ้น","แบ่งส่งมอบทีละส่วน","ทำครั้งเดียว","ทำขนาน"],
 answer:0, explain:"Iterative = วนซ้ำ ปรับปรุงของเดิมให้ดีขึ้นในแต่ละรอบ"},

// ---------- กลุ่มที่ 10: Scrum (5 ข้อ) ----------
{topic:"SDLC", q:"Scrum มี 3 Pillars (เสาหลัก) คืออะไร?",
 choices:["Plan, Do, Check","Transparency, Inspection, Adaptation","Fast, Good, Cheap","Input, Process, Output"],
 answer:1, explain:"3 Pillars: Transparency (โปร่งใส), Inspection (ตรวจสอบ), Adaptation (ปรับตัว)"},

{topic:"SDLC", q:"Product Backlog คืออะไร?",
 choices:["รายการงานที่ทำเสร็จ","รายการความต้องการ/ฟีเจอร์ทั้งหมดที่จัดลำดับความสำคัญแล้ว","รายการบั๊ก","รายงาน"],
 answer:1, explain:"Product Backlog = รายการความต้องการทั้งหมด เรียงตามความสำคัญ"},

{topic:"SDLC", q:"Sprint Backlog คืออะไร?",
 choices:["รายการทั้งหมด","รายการงานที่เลือกมาทำในรอบ Sprint ปัจจุบัน","รายงานสรุป","รายการบั๊ก"],
 answer:1, explain:"Sprint Backlog = subset ของ Product Backlog ที่เลือกมาทำใน Sprint"},

{topic:"SDLC", q:"Sprint ใน Scrum ปกติใช้เวลากี่สัปดาห์?",
 choices:["1-4 สัปดาห์","1-2 วัน","1-6 เดือน","1 ปี"],
 answer:0, explain:"Sprint = 1-4 สัปดาห์ (มักใช้ 2 สัปดาห์)"},

{topic:"SDLC", q:"Increment ใน Scrum คืออะไร?",
 choices:["การเพิ่มจำนวนคน","ส่วนของระบบที่พัฒนาเสร็จและใช้งานได้จริงในแต่ละรอบ","การเพิ่มงบ","การเพิ่มเวลา"],
 answer:1, explain:"Increment = ส่วนของซอฟต์แวร์ที่เสร็จและใช้งานได้จริงในแต่ละ Sprint"},

// ---------- กลุ่มที่ 11: User Story และ Traditional vs Agile (5 ข้อ) ----------
{topic:"SDLC", q:"User Story เขียนในรูปแบบใด?",
 choices:["If ... Then ... Else","As a <user>, I want <feature>, so that <benefit>","SELECT ... FROM ... WHERE","Input → Process → Output"],
 answer:1, explain:"User Story: 'As a <type of user>, I want <action/feature>, so that <benefit/value>'"},

{topic:"SDLC", q:"User Story ข้อใดเขียนถูกต้อง?",
 choices:["ระบบต้องล็อกอินได้","As a user, I want to log in, so that I can access my account","Login","เพิ่มปุ่ม Login"],
 answer:1, explain:"User Story ต้องมี 3 ส่วน: role + action + benefit"},

{topic:"SDLC", q:"Traditional (Waterfall) ทำงานอย่างไร?",
 choices:["Plan Everything → Build Everything → Deliver Once","ทำวนซ้ำ","ส่งมอบทุกสัปดาห์","ปรับตาม feedback ตลอด"],
 answer:0, explain:"Traditional = วางแผนทั้งหมด → สร้างทั้งหมด → ส่งมอบครั้งเดียว"},

{topic:"SDLC", q:"Agile ทำงานอย่างไร?",
 choices:["Plan → Build → Deliver ครั้งเดียว","Plan → Build → Test → Deliver → Feedback → Improve → Repeat","ทำตามแผนเป๊ะ","ไม่ต้องวางแผน"],
 answer:1, explain:"Agile = วนซ้ำ ทำงานเป็นรอบสั้น ส่งมอบบ่อย รับ feedback ปรับปรุง"},

{topic:"SDLC", q:"ข้อใดเป็นข้อเสียของ Traditional (Waterfall)?",
 choices:["รับการเปลี่ยนแปลงยาก ผู้ใช้เห็นระบบช้า พบปัญหาช่วงท้าย","ช้าเกินไป","ไม่มีเอกสาร","ไม่ทดสอบ"],
 answer:0, explain:"Waterfall รับการเปลี่ยนแปลงยาก เห็นระบบช้า และเจอปัญหาตอนท้ายโครงการ"}
// ============================================================
//  รอบที่ 5/6: Generative AI (50 ข้อ)
// ============================================================

// ---------- กลุ่มที่ 1: บทนำและวิวัฒนาการของ AI (8 ข้อ) ----------
{topic:"Generative AI", q:"Paradigm Shift ด้านคอมพิวเตอร์เรียงตามยุคใดถูกต้อง?",
 choices:["Mainframes → PCs/LANs → Internet → Cloud → Mobile → IoT → AI","AI → Internet → Mainframes","Cloud → Mainframes → AI","Mobile → IoT → Mainframes"],
 answer:0, explain:"วิวัฒนาการ: Mainframes (1960s) → PCs/LANs → Internet → Cloud → Mobile → IoT → AI"},

{topic:"Generative AI", q:"Turing Test ถูกเสนอโดยใคร และเมื่อใด?",
 choices:["John McCarthy, 1956","Alan Turing, 1950","Linus Torvalds, 1991","Geoffrey Hinton, 1986"],
 answer:1, explain:"Turing Test (The Imitation Game) เสนอโดย Alan Turing ในปี 1950"},

{topic:"Generative AI", q:"Turing Test มีจุดประสงค์อะไร?",
 choices:["ทดสอบความเร็วเครื่อง","ทดสอบว่าเครื่องจักรแสดงพฤติกรรมเลียนแบบการสนทนาของมนุษย์ได้หรือไม่","ทดสอบความจุ RAM","ทดสอบเน็ต"],
 answer:1, explain:"Turing Test = ทดสอบว่าเครื่องจักรสนทนาได้เหมือนมนุษย์หรือไม่"},

{topic:"Generative AI", q:"ข้อจำกัดของ Turing Test คืออะไร?",
 choices:["ใช้เวลานาน","การสนทนาเหมือนมนุษย์ไม่ได้พิสูจน์ถึงความเข้าใจหรือสติปัญญาที่แท้จริง","ต้องใช้คอมพิวเตอร์แรงสูง","ไม่สามารถทำได้จริง"],
 answer:1, explain:"Turing Test วัดได้แค่พฤติกรรมที่แสดงออก ไม่ได้ยืนยันความเข้าใจที่แท้จริง"},

{topic:"Generative AI", q:"AI (Artificial Intelligence) หมายถึงอะไร?",
 choices:["ระบบคอมพิวเตอร์ที่ทำงานที่ต้องใช้ความสามารถเชิงปัญญา","หุ่นยนต์","ซอฟต์แวร์ทั่วไป","ฮาร์ดแวร์"],
 answer:0, explain:"AI = การสร้างระบบคอมพิวเตอร์ให้ทำงานที่ต้องใช้ความสามารถเชิงปัญญา"},

{topic:"Generative AI", q:"คำว่า 'ฉลาด' ในบริบทของ AI หมายถึงอะไร?",
 choices:["มีสติเหมือนมนุษย์","สามารถเลือกหรือสร้างผลลัพธ์ที่เหมาะสมกับเป้าหมาย","รวดเร็ว","จดจำได้มาก"],
 answer:1, explain:"'ฉลาด' ของ AI = เลือก/สร้างผลลัพธ์ที่เหมาะสมกับเป้าหมาย ไม่ได้หมายถึงการมีสติแบบมนุษย์"},

{topic:"Generative AI", q:"AI มีความสามารถหลักกี่ด้าน?",
 choices:["3","4","6","10"],
 answer:2, explain:"6 ด้าน: Perception, Language, Learning, Reasoning, Problem Solving, Decision Making"},

{topic:"Generative AI", q:"ข้อใด ไม่ใช่ ความสามารถหลัก 6 ด้านของ AI?",
 choices:["Perception (การรับรู้)","Language (ภาษา)","Emotion (อารมณ์)","Decision Making (การตัดสินใจ)"],
 answer:2, explain:"6 ด้าน: Perception, Language, Learning, Reasoning, Problem Solving, Decision Making"},

// ---------- กลุ่มที่ 2: Rule-based vs Learning-based (4 ข้อ) ----------
{topic:"Generative AI", q:"Rule-based System ทำงานอย่างไร?",
 choices:["เรียนรู้จากข้อมูล","มนุษย์เขียนกฎชัดเจน (IF-THEN)","ใช้ Neural Network","สุ่มคำตอบ"],
 answer:1, explain:"Rule-based = มนุษย์เขียนกฎ IF-THEN เหมาะกับปัญหาที่เงื่อนไขแน่นอน"},

{topic:"Generative AI", q:"Learning-based System ทำงานอย่างไร?",
 choices:["มนุษย์เขียนกฎทุกกรณี","โมเดลเรียนรู้และสร้างรูปแบบจากข้อมูล","ใช้สูตรคณิตศาสตร์ตายตัว","ไม่มีกฎ"],
 answer:1, explain:"Learning-based = โมเดลเรียนรู้จากข้อมูล เหมาะกับงานซับซ้อน เช่น ภาพ เสียง ภาษา"},

{topic:"Generative AI", q:"ข้อดีของ Rule-based System คืออะไร?",
 choices:["ยืดหยุ่นสูง","ตรวจสอบและอธิบายได้ง่าย","ทำงานกับข้อมูลซับซ้อนได้ดี","ไม่ต้องเขียนโปรแกรม"],
 answer:1, explain:"Rule-based = ตรวจสอบง่าย เพราะมีกฎชัดเจน แต่ยืดหยุ่นน้อย"},

{topic:"Generative AI", q:"ข้อเสียของ Learning-based System คืออะไร?",
 choices:["ทำงานช้า","อาจอธิบายเหตุผลได้ยาก ต้องใช้ข้อมูลมาก","ตรวจสอบง่าย","ไม่ต้องฝึกโมเดล"],
 answer:1, explain:"Learning-based = อธิบายได้ยากกว่า และต้องใช้ข้อมูลฝึกจำนวนมาก"},

// ---------- กลุ่มที่ 3: การจัดประเภท AI (6 ข้อ) ----------
{topic:"Generative AI", q:"ANI (Artificial Narrow Intelligence) คืออะไร?",
 choices:["AI ที่ฉลาดเท่ามนุษย์ทุกด้าน","AI เฉพาะทาง เช่น Siri, Google Translate","AI ที่เหนือมนุษย์","AI ที่มีสติ"],
 answer:1, explain:"ANI = AI เฉพาะทาง ทำงานได้ดีในด้านเดียว เช่น Siri, Google Translate"},

{topic:"Generative AI", q:"AGI (Artificial General Intelligence) คืออะไร?",
 choices:["AI เฉพาะทาง","AI ที่มีความสามารถแก้ปัญหาทัดเทียมมนุษย์ (กำลังพัฒนา)","AI ที่เหนือมนุษย์","AI เล็กๆ"],
 answer:1, explain:"AGI = AI ที่ฉลาดเท่ามนุษย์ทุกด้าน ยังอยู่ระหว่างการพัฒนา"},

{topic:"Generative AI", q:"ASI (Artificial Super Intelligence) คืออะไร?",
 choices:["AI เฉพาะทาง","AI ทัดเทียมมนุษย์","AI ขั้นสุดยอดที่เหนือมนุษย์ทุกด้าน (ยังเป็นทฤษฎี)","AI แบบเก่า"],
 answer:2, explain:"ASI = AI ที่เหนือมนุษย์ทุกด้าน ยังเป็นเพียงทฤษฎี"},

{topic:"Generative AI", q:"Reactive Machines มีลักษณะอย่างไร?",
 choices:["มีหน่วยความจำและเรียนรู้ได้","ไม่มีหน่วยความจำ ไม่เรียนรู้ด้วยตนเอง","มีสติ","เข้าใจอารมณ์"],
 answer:1, explain:"Reactive Machines = ตอบสนองต่อ input แต่ไม่มีความจำ ไม่เรียนรู้"},

{topic:"Generative AI", q:"Limited Memory AI มีลักษณะอย่างไร?",
 choices:["ไม่มีความจำ","มีหน่วยความจำ เรียนรู้จากข้อมูลชุดเก่าได้","มีสติ","เข้าใจอารมณ์มนุษย์"],
 answer:1, explain:"Limited Memory = มีความจำชั่วคราว เรียนรู้จากข้อมูลชุดเก่าได้"},

{topic:"Generative AI", q:"Theory of Mind AI คืออะไร?",
 choices:["AI ที่ไม่มีอารมณ์","AI ที่เข้าใจอารมณ์และความรู้สึกของมนุษย์ได้ (อยู่ระหว่างการวิจัย)","AI ที่เข้าใจฟิสิกส์","AI ที่ฉลาดเท่ามนุษย์"],
 answer:1, explain:"Theory of Mind = AI ที่เข้าใจอารมณ์/ความเชื่อของมนุษย์ได้ ปัจจุบันอยู่ระหว่างการวิจัย"},

// ---------- กลุ่มที่ 4: Machine Learning พื้นฐาน (10 ข้อ) ----------
{topic:"Generative AI", q:"สมการพื้นฐานของ Machine Learning คืออะไร?",
 choices:["y = f(x; θ)","y = x + 1","E = mc²","a² + b² = c²"],
 answer:0, explain:"ML สร้างโมเดล y = f(x; θ) โดย x = input, y = output, θ = พารามิเตอร์"},

{topic:"Generative AI", q:"Training Phase ของ ML คืออะไร?",
 choices:["นำโมเดลไปใช้งานจริง","ปรับค่าพารามิเตอร์ θ จากข้อมูลฝึก","ทดสอบโมเดล","บันทึกโมเดล"],
 answer:1, explain:"Training Phase = ฝึกโมเดล ปรับค่า θ ให้ fit กับข้อมูล"},

{topic:"Generative AI", q:"Inference Phase ของ ML คืออะไร?",
 choices:["ฝึกโมเดล","นำ Trained Model ไปทำนายผลลัพธ์จากข้อมูลใหม่","ปรับพารามิเตอร์","ลบโมเดล"],
 answer:1, explain:"Inference Phase = ใช้โมเดลที่ฝึกแล้วทำนายข้อมูลใหม่"},

{topic:"Generative AI", q:"Supervised Learning ใช้ข้อมูลแบบใด?",
 choices:["ไม่มี Label","มี Label","ไม่มีข้อมูล","มีแค่ Input"],
 answer:1, explain:"Supervised Learning = เรียนรู้จากข้อมูลที่มี Label (คำตอบที่ถูกต้อง)"},

{topic:"Generative AI", q:"Unsupervised Learning ใช้ข้อมูลแบบใด?",
 choices:["มี Label","ไม่มี Label","มีแค่ Output","มีแค่ไฟล์"],
 answer:1, explain:"Unsupervised Learning = เรียนรู้จากข้อมูลที่ไม่มี Label เพื่อหาโครงสร้าง/กลุ่มที่ซ่อนอยู่"},

{topic:"Generative AI", q:"Reinforcement Learning เรียนรู้แบบใด?",
 choices:["จาก Label","จากตัวอย่าง","ลองผิดลองถูกผ่าน Agent + Environment รับ Reward/Penalty","อ่านหนังสือ"],
 answer:2, explain:"Reinforcement Learning = Agent เรียนรู้ผ่าน Action, State และ Reward/Penalty"},

{topic:"Generative AI", q:"Regression ใน Supervised Learning ใช้ทำอะไร?",
 choices:["จำแนกกลุ่ม","ทำนายค่าต่อเนื่อง เช่น ราคาบ้าน","จัดกลุ่ม","ลดมิติ"],
 answer:1, explain:"Regression = ทำนายค่าต่อเนื่อง เช่น ราคา, อุณหภูมิ, ยอดขาย"},

{topic:"Generative AI", q:"Classification ใน Supervised Learning ใช้ทำอะไร?",
 choices:["ทำนายค่าต่อเนื่อง","จำแนกกลุ่ม/ประเภท เช่น ตรวจมะเร็งจากภาพ","จัดกลุ่มลูกค้า","บีบอัดข้อมูล"],
 answer:1, explain:"Classification = จำแนกกลุ่ม เช่น สแปม/ไม่สแปม, มะเร็ง/ไม่มะเร็ง"},

{topic:"Generative AI", q:"Clustering จัดอยู่ใน ML ประเภทใด?",
 choices:["Supervised","Unsupervised","Reinforcement","Generative"],
 answer:1, explain:"Clustering = จัดกลุ่มข้อมูลที่ไม่มี Label เป็น Unsupervised Learning"},

{topic:"Generative AI", q:"Recommendation System เช่น Netflix, Shopee ใช้ ML แบบใด?",
 choices:["Supervised เท่านั้น","Unsupervised","Reinforcement เท่านั้น","ไม่มี"],
 answer:1, explain:"Recommendation System ใช้ Unsupervised Learning แนะนำจากพฤติกรรมที่คล้ายกัน"},

// ---------- กลุ่มที่ 5: Generative AI & LLM (10 ข้อ) ----------
{topic:"Generative AI", q:"Discriminative AI ต่างจาก Generative AI อย่างไร?",
 choices:["ไม่ต่างกัน","Discriminative แยกแยะ/ทำนายประเภท / Generative สร้างเนื้อหาใหม่","Discriminative ใหม่กว่า","Generative เก่ากว่า"],
 answer:1, explain:"Discriminative = แยกแยะ/ทำนาย (classification) / Generative = สร้าง (ข้อความ ภาพ เสียง)"},

{topic:"Generative AI", q:"ข้อใดเป็น Generative AI?",
 choices:["Netflix Recommendation","ChatGPT","Antivirus","Excel"],
 answer:1, explain:"ChatGPT เป็น Generative AI ที่สร้างข้อความใหม่ได้"},

{topic:"Generative AI", q:"Generative AI สร้างเนื้อหาประเภทใดได้?",
 choices:["เฉพาะข้อความ","เฉพาะภาพ","ข้อความ ภาพ เสียง วิดีโอ และโค้ด","เฉพาะวิดีโอ"],
 answer:2, explain:"Generative AI สร้างได้หลายแบบ: ข้อความ, ภาพ, เสียง, วิดีโอ, โค้ด"},

{topic:"Generative AI", q:"LLM (Large Language Model) เรียนรู้จากอะไร?",
 choices:["กฎที่มนุษย์เขียน","บริบทและรูปแบบภาษาจากพารามิเตอร์หลายแสนล้านตัว","ฐานข้อมูล SQL","ไฟล์ Excel"],
 answer:1, explain:"LLM เรียนรู้บริบทและรูปแบบภาษาจากข้อมูลขนาดใหญ่ มีพารามิเตอร์หลายแสนล้านตัว"},

{topic:"Generative AI", q:"LLM ใช้สถาปัตยกรรมอะไรเป็นหลัก?",
 choices:["CNN","Transformer","RNN","SVM"],
 answer:1, explain:"LLM สมัยใหม่ใช้ Transformer (เปิดตัวปี 2017) เป็นสถาปัตยกรรมหลัก"},

{topic:"Generative AI", q:"Next Token Prediction คืออะไร?",
 choices:["ทำนายคำถัดไปในประโยค","ลบ Token","นับ Token","แบ่งครึ่ง Token"],
 answer:0, explain:"LLM ทำงานโดยทำนาย Token ถัดไปจากบริบทก่อนหน้า"},

{topic:"Generative AI", q:"Tokenization คืออะไร?",
 choices:["การลบ Token","การแบ่งข้อความเป็น Token ย่อยๆ","การเข้ารหัส","การแปลภาษา"],
 answer:1, explain:"Tokenization = แบ่งข้อความผู้ใช้ออกเป็นหน่วยย่อย (Token)"},

{topic:"Generative AI", q:"Embedding ใน LLM คืออะไร?",
 choices:["การลบ Token","แปลง Token ID เป็นเวกเตอร์ตัวเลขที่สื่อความหมาย","การพิมพ์ข้อความ","การนับคำ"],
 answer:1, explain:"Embedding = แปลง Token เป็น Vector ตัวเลข เพื่อให้โมเดลเข้าใจความหมายเชิงบริบท"},

{topic:"Generative AI", q:"Hallucination ของ LLM คืออะไร?",
 choices:["โมเดลทำงานช้า","โมเดลสร้างข้อมูลเท็จที่ฟังดูสมเหตุสมผล","โมเดลลืมข้อมูล","โมเดลใช้ไฟมาก"],
 answer:1, explain:"Hallucination = LLM สร้างข้อมูลเท็จที่ดูน่าเชื่อถือ เพราะเลือก Token ตามความน่าจะเป็น ไม่ได้ตรวจสอบความจริง"},

{topic:"Generative AI", q:"Context Window ของ LLM คืออะไร?",
 choices:["หน้าต่างโปรแกรม","จำนวน Token สูงสุดที่โมเดลพิจารณาได้ในครั้งหนึ่ง","หน่วยความจำถาวร","ขนาดไฟล์"],
 answer:1, explain:"Context Window = จำนวน Token สูงสุดที่โมเดลพิจารณาได้ใน 1 ครั้ง ไม่ใช่ความจำถาวร"},

// ---------- กลุ่มที่ 6: ML Development Lifecycle (8 ข้อ) ----------
{topic:"Generative AI", q:"AI/ML Development Lifecycle มีกี่ขั้นตอนหลัก?",
 choices:["3","4","6","10"],
 answer:2, explain:"6 ขั้นตอน: Data Gathering → Data Preparation → Modeling → Evaluation → Deployment → Monitoring"},

{topic:"Generative AI", q:"ขั้นตอนแรกของ ML Lifecycle คืออะไร?",
 choices:["Training","Data Gathering","Deployment","Monitoring"],
 answer:1, explain:"Data Gathering = รวบรวมข้อมูล กำหนดปัญหา เป้าหมาย Input/Output"},

{topic:"Generative AI", q:"Data Cleansing คืออะไร?",
 choices:["ลบข้อมูลทั้งหมด","จัดการค่าที่หายไปหรือผิดปกติ","เข้ารหัสข้อมูล","เพิ่มข้อมูล"],
 answer:1, explain:"Data Cleansing = จัดการ Missing Values, Outliers, Duplicates"},

{topic:"Generative AI", q:"Data Splitting ใน ML แบ่งเป็นอัตราส่วนเท่าไร?",
 choices:["50/50/0","70/15/15 (Train/Validation/Test)","90/5/5","33/33/33"],
 answer:1, explain:"นิยมแบ่งเป็น Training 70%, Validation 15%, Test 15%"},

{topic:"Generative AI", q:"Underfitting คืออะไร?",
 choices:["โมเดลเรียนรู้ข้อมูลฝึกมากเกินไป","โมเดลเรียนรู้ข้อมูลฝึกน้อยเกินไป ไม่สามารถจับรูปแบบได้","โมเดลเพอร์เฟกต์","โมเดลลบข้อมูล"],
 answer:1, explain:"Underfitting = โมเดลง่ายเกินไป เรียนรู้ไม่พอ จับรูปแบบไม่ได้"},

{topic:"Generative AI", q:"Overfitting คืออะไร?",
 choices:["โมเดลเรียนรู้ข้อมูลฝึกมากเกินไป จนทำงานกับข้อมูลใหม่ได้แย่","โมเดลเรียนรู้น้อย","โมเดลเพอร์เฟกต์","โมเดลไม่ทำงาน"],
 answer:0, explain:"Overfitting = โมเดลจำข้อมูลฝึกเกินไป จน generalize ไม่ได้"},

{topic:"Generative AI", q:"Metric ใดใช้ประเมิน Classification Model?",
 choices:["MAE, MSE","Accuracy, Precision, Recall, F1-score","RSI, MACD","CPU, RAM"],
 answer:1, explain:"Classification Metrics: Accuracy, Precision, Recall, F1-score"},

{topic:"Generative AI", q:"Data Drift คืออะไร?",
 choices:["ข้อมูลหาย","ข้อมูลจริงใน production เปลี่ยนไปจากข้อมูลที่ใช้ฝึก","ข้อมูลซ้ำ","ข้อมูลใหญ่ขึ้น"],
 answer:1, explain:"Data Drift = ข้อมูลจริงเปลี่ยนไป ทำให้โมเดลเสื่อมประสิทธิภาพ ต้อง retrain"},

// ---------- กลุ่มที่ 7: ความเสี่ยงและ Responsible AI (4 ข้อ) ----------
{topic:"Generative AI", q:"ข้อใด ไม่ใช่ ความเสี่ยงของ Generative AI?",
 choices:["Hallucination","Bias (อคติ)","Overreliance (พึ่งพามากเกินไป)","ทำงานได้ฟรี"],
 answer:3, explain:"ความเสี่ยง: Hallucination, Bias, Outdated Knowledge, Overreliance, Misuse"},

{topic:"Generative AI", q:"Bias ใน AI หมายถึงอะไร?",
 choices:["AI เร็ว","อคติที่ฝังอยู่ในข้อมูลหรือโมเดล ทำให้ผลลัพธ์ไม่เป็นธรรม","AI ช้า","AI แพง"],
 answer:1, explain:"Bias = อคติในข้อมูลฝึกหรือโมเดล ทำให้ผลลัพธ์เอนเอียง ไม่เป็นธรรม"},

{topic:"Generative AI", q:"Data Minimization ในบริบทของ AI คืออะไร?",
 choices:["ส่งข้อมูลเยอะที่สุด","ส่งเฉพาะข้อมูลที่จำเป็นให้ AI","ลบข้อมูล","สำรองข้อมูล"],
 answer:1, explain:"Data Minimization = ส่งเฉพาะข้อมูลจำเป็น ไม่ป้อนข้อมูลส่วนตัว/ความลับ"},

{topic:"Generative AI", q:"Anonymization ก่อนใช้ AI คืออะไร?",
 choices:["ใส่ข้อมูลเพิ่ม","ปกปิดตัวตนข้อมูลก่อนใช้งาน เช่น ลบชื่อ นามสกุล เลขบัตร","เข้ารหัสไฟล์","สำรอง"],
 answer:1, explain:"Anonymization = ปกปิดข้อมูลระบุตัวตนก่อนส่งให้ AI"},

// ---------- กลุ่มที่ 8: Responsible Use of AI (6 ข้อ) ----------
{topic:"Generative AI", q:"ข้อใด ไม่ใช่ หลัก Responsible Use of AI?",
 choices:["Verify","Protect","Be Transparent","Copy ทั้งหมดโดยไม่อ้างอิง"],
 answer:3, explain:"หลัก: Verify, Protect, Be Transparent, Respect Copyright, Human Oversight, Use Appropriate Tools"},

{topic:"Generative AI", q:"หลัก 'Verify' ใน Responsible AI คืออะไร?",
 choices:["ตรวจสอบข้อเท็จจริงเสมอ","เชื่อ AI ทันที","ลบข้อมูล","ปิดระบบ"],
 answer:0, explain:"Verify = ตรวจสอบข้อเท็จจริงจาก AI เสมอ เพราะ AI อาจ hallucinate"},

{topic:"Generative AI", q:"หลัก 'Protect' ใน Responsible AI คืออะไร?",
 choices:["ป้องกันภัย","คุ้มครองข้อมูลส่วนตัวและความลับ","ใส่รหัส","เข้ารหัส"],
 answer:1, explain:"Protect = ไม่ป้อนข้อมูลส่วนตัว/ความลับ และคุ้มครองข้อมูล"},

{topic:"Generative AI", q:"หลัก 'Be Transparent' ใน Responsible AI คืออะไร?",
 choices:["เปิดเผยเมื่อมีการใช้ AI ในงาน","ปิดบัง","โกหก","ลบข้อมูล"],
 answer:0, explain:"Be Transparent = เปิดเผยว่าใช้ AI ช่วยในงาน เพื่อความโปร่งใส"},

{topic:"Generative AI", q:"หลัก 'Respect Copyright' ใน Responsible AI คืออะไร?",
 choices:["คัดลอกได้เสรี","เคารพลิขสิทธิ์และสิทธิของผู้อื่น","ลบเครดิต","ใช้ส่วนตัวไม่ต้องอ้างอิง"],
 answer:1, explain:"Respect Copyright = เคารพลิขสิทธิ์ ให้เครดิตเจ้าของผลงาน"},

{topic:"Generative AI", q:"หลัก 'Human Oversight' ใน Responsible AI คืออะไร?",
 choices:["ให้ AI ตัดสินใจทั้งหมด","ให้มนุษย์เป็นผู้ตรวจสอบและรับผิดชอบการตัดสินใจขั้นสุดท้าย","ปิด AI","ห้ามใช้ AI"],
 answer:1, explain:"Human Oversight = มนุษย์ต้องตรวจสอบและรับผิดชอบการตัดสินใจสุดท้ายเสมอ"},

// ---------- กลุ่มที่ 9: ตัวอย่างและประยุกต์ (2 ข้อ) ----------
{topic:"Generative AI", q:"ข้อใดคือ Generative AI สำหรับสร้างภาพ?",
 choices:["ChatGPT","Midjourney / DALL-E","GitHub Copilot","Google Translate"],
 answer:1, explain:"Midjourney, DALL-E, Stable Diffusion = Generative AI สร้างภาพ"},

{topic:"Generative AI", q:"GitHub Copilot ใช้ทำอะไร?",
 choices:["สร้างภาพ","ช่วยเขียนโค้ด (Code Generation)","แก้ไวรัส","ตัดต่อวิดีโอ"],
 answer:1, explain:"GitHub Copilot = Generative AI ช่วยเขียนโค้ด แนะนำ completion"}

// ============================================================
//  รอบที่ 6/6: Computational Thinking (50 ข้อ)
// ============================================================

// ---------- กลุ่มที่ 1: บทนำการแก้ปัญหา (6 ข้อ) ----------
{topic:"Computational Thinking", q:"Problem Solving (การแก้ปัญหา) หมายถึงอะไร?",
 choices:["การเขียนโปรแกรม","กระบวนการคิดอย่างมีเหตุผลและเป็นระบบ เพื่อค้นหาแนวทางจัดการกับปัญหา","การท่องจำ","การสอบ"],
 answer:1, explain:"Problem Solving = กระบวนการคิดอย่างมีเหตุผลและเป็นระบบ ตั้งแต่เข้าใจปัญหา วิเคราะห์ ออกแบบ ดำเนินการ และตรวจสอบ"},

{topic:"Computational Thinking", q:"หัวใจสำคัญของการแก้ปัญหาที่ดีคืออะไร?",
 choices:["ได้คำตอบเร็ว","ได้คำตอบที่ถูกต้องและสามารถอธิบายขั้นตอน เหตุผล และตรวจสอบได้","ใช้เทคโนโลยีขั้นสูง","ไม่ต้องคิดมาก"],
 answer:1, explain:"การแก้ปัญหาที่ดีต้องอธิบายขั้นตอน เหตุผล และตรวจสอบความถูกต้องได้"},

{topic:"Computational Thinking", q:"ข้อใด ไม่ใช่ ความสำคัญของการแก้ปัญหาอย่างเป็นระบบ?",
 choices:["เข้าใจปัญหาถูกต้อง","ลดข้อผิดพลาด","เพิ่มประสิทธิภาพ","เพิ่มความซับซ้อนของปัญหา"],
 answer:3, explain:"5 ความสำคัญ: เข้าใจปัญหา, ลดข้อผิดพลาด, เพิ่มประสิทธิภาพ, ตรวจสอบได้, ประยุกต์ใช้กับปัญหาใหม่"},

{topic:"Computational Thinking", q:"การแก้ปัญหาอย่างเป็นระบบช่วยเรื่องใด?",
 choices:["เข้าใจปัญหาถูกต้อง ลดข้อผิดพลาด เพิ่มประสิทธิภาพ","ทำให้ปัญหาหายไปเอง","ทำให้ไม่ต้องคิด","เพิ่มความซับซ้อน"],
 answer:0, explain:"การแก้ปัญหาอย่างเป็นระบบช่วยให้เข้าใจปัญหา ลดข้อผิดพลาด และเพิ่มประสิทธิภาพ"},

{topic:"Computational Thinking", q:"ทำไมการประยุกต์ใช้กับปัญหาใหม่จึงสำคัญ?",
 choices:["ทำให้เรียนรู้ช้า","นำหลักการที่เคยใช้ไปแก้ปัญหาในสถานการณ์อื่นได้","ใช้เวลามากขึ้น","ทำให้สับสน"],
 answer:1, explain:"การประยุกต์ใช้ = นำหลักการ/วิธีที่เรียนรู้ไปใช้กับปัญหาใหม่ได้ ลดการเริ่มจากศูนย์"},

{topic:"Computational Thinking", q:"ข้อใด ไม่ใช่ ประโยชน์ของการแก้ปัญหาอย่างเป็นระบบ?",
 choices:["ลดข้อผิดพลาด","ตรวจสอบและปรับปรุงได้","ประยุกต์ใช้กับปัญหาใหม่","เพิ่มความสับสน"],
 answer:3, explain:"การแก้ปัญหาอย่างเป็นระบบช่วยลดความสับสน ไม่ใช่เพิ่ม"},

// ---------- กลุ่มที่ 2: กระบวนการแก้ปัญหา 6 ขั้นตอน (8 ข้อ) ----------
{topic:"Computational Thinking", q:"กระบวนการแก้ปัญหาอย่างเป็นระบบ ขั้นตอนแรกคืออะไร?",
 choices:["Plan","Understand","Implement","Evaluate"],
 answer:1, explain:"ขั้นแรก: Understand = ทำความเข้าใจปัญหาก่อน"},

{topic:"Computational Thinking", q:"ขั้น Understand ในกระบวนการแก้ปัญหา ต้องตอบคำถามอะไร?",
 choices:["ราคาเท่าไหร่","ปัญหาคืออะไร ต้องการผลลัพธ์แบบใด ขอบเขตเป็นอย่างไร","ใช้ภาษาอะไร","ใครทำ"],
 answer:1, explain:"Understand = ปัญหาคืออะไร ต้องการผลลัพธ์แบบใด ขอบเขตแค่ไหน"},

{topic:"Computational Thinking", q:"กระบวนการแก้ปัญหา 6 ขั้นตอน เรียงตามลำดับใดถูกต้อง?",
 choices:["Understand → Analyze → Find Root Cause → Plan → Implement → Evaluate","Plan → Analyze → Understand → Implement → Evaluate → Root Cause","Understand → Plan → Analyze → Evaluate → Implement","Analyze → Understand → Plan → Implement → Evaluate"],
 answer:0, explain:"ลำดับ: Understand → Analyze → Find Root Cause → Plan → Implement → Evaluate"},

{topic:"Computational Thinking", q:"ขั้น Analyze ในกระบวนการแก้ปัญหา ต้องตอบคำถามอะไร?",
 choices:["ราคาเท่าไหร่","ต้องใช้ข้อมูลอะไร มีเงื่อนไข/ข้อจำกัดใดบ้าง","ใครทำ","ใช้ภาษาอะไร"],
 answer:1, explain:"Analyze = วิเคราะห์ ว่าต้องใช้ข้อมูลอะไร มีเงื่อนไข/ข้อจำกัด"},

{topic:"Computational Thinking", q:"Find Root Cause ในกระบวนการแก้ปัญหา หมายถึงอะไร?",
 choices:["แก้ตามอาการ","ระบุสาเหตุที่แท้จริงของปัญหา ไม่ใช่แค่แก้ที่อาการ (Symptom)","หาใครผิด","รายงานปัญหา"],
 answer:1, explain:"Root Cause = สาเหตุที่แท้จริง ไม่ใช่แค่แก้ที่อาการที่แสดงออกมา"},

{topic:"Computational Thinking", q:"ข้อความ 'ไม่สามารถลงทะเบียนได้' จัดเป็นอะไร?",
 choices:["Root Cause","Symptom (อาการของปัญหา)","Solution","Plan"],
 answer:1, explain:"'ไม่สามารถลงทะเบียนได้' เป็นเพียง Symptom ต้องหาสาเหตุที่แท้จริงต่อไป"},

{topic:"Computational Thinking", q:"ขั้น Plan ในกระบวนการแก้ปัญหา ต้องตอบคำถามอะไร?",
 choices:["ราคาเท่าไหร่","ควรดำเนินการอย่างไร มีลำดับขั้นตอนอย่างไร","ใครทำ","เมื่อไหร่"],
 answer:1, explain:"Plan = วางแผนวิธีแก้ ควรดำเนินการอย่างไร ลำดับขั้นตอนเป็นอย่างไร"},

{topic:"Computational Thinking", q:"ถ้าผลลัพธ์ในขั้น Evaluate ไม่ตรงเป้า ควรทำอย่างไร?",
 choices:["หยุด","ย้อนกลับไปวิเคราะห์หรือปรับปรุงขั้นตอนก่อนหน้า","ลบข้อมูล","เริ่มใหม่ทั้งหมด"],
 answer:1, explain:"ถ้าไม่ตรงเป้า สามารถย้อนกลับไปปรับปรุงขั้นตอนก่อนหน้าได้ (Iterative Process)"},

// ---------- กลุ่มที่ 3: Computational Thinking และ 4 องค์ประกอบ (8 ข้อ) ----------
{topic:"Computational Thinking", q:"Computational Thinking (CT) หมายถึงอะไร?",
 choices:["การคิดเลขเร็ว","กระบวนการคิดเพื่อวิเคราะห์และแก้ปัญหาอย่างเป็นระบบ โดยใช้เทคนิคของวิทยาการคอมพิวเตอร์","การเขียนโปรแกรม","การใช้คอมพิวเตอร์"],
 answer:1, explain:"CT = กระบวนการคิดอย่างเป็นระบบ เพื่อให้มนุษย์หรือคอมพิวเตอร์นำไปปฏิบัติได้"},

{topic:"Computational Thinking", q:"ข้อใดถูกต้องเกี่ยวกับ Computational Thinking?",
 choices:["ต้องเริ่มจากการเขียนโปรแกรม","ไม่ได้หมายถึงการคิดคำนวณทางคณิตศาสตร์เท่านั้น และไม่จำเป็นต้องเริ่มจากการเขียนโปรแกรม","ใช้ได้เฉพาะกับคณิตศาสตร์","ต้องใช้คอมพิวเตอร์เท่านั้น"],
 answer:1, explain:"CT ไม่ใช่แค่การคิดเลข และไม่จำเป็นต้องเริ่มจากการเขียนโปรแกรม"},

{topic:"Computational Thinking", q:"Computational Thinking มีกี่องค์ประกอบหลัก?",
 choices:["2","3","4","5"],
 answer:2, explain:"4 องค์ประกอบ: Decomposition, Pattern Recognition, Abstraction, Algorithm Design"},

{topic:"Computational Thinking", q:"4 องค์ประกอบของ CT คืออะไร?",
 choices:["Input, Process, Output, Storage","Decomposition, Pattern Recognition, Abstraction, Algorithm Design","Plan, Do, Check, Act","Analysis, Design, Code, Test"],
 answer:1, explain:"CT 4 องค์ประกอบ: Decomposition, Pattern Recognition, Abstraction, Algorithm Design"},

{topic:"Computational Thinking", q:"Decomposition หมายถึงอะไร?",
 choices:["รวมปัญหาทั้งหมด","แบ่งปัญหาที่ซับซ้อนออกเป็นปัญหาย่อย เพื่อให้ง่ายต่อการวิเคราะห์","ลบปัญหา","ซ่อนปัญหา"],
 answer:1, explain:"Decomposition = แยกปัญหาใหญ่ออกเป็นปัญหาย่อยที่จัดการได้ง่ายขึ้น"},

{topic:"Computational Thinking", q:"Pattern Recognition ใน CT หมายถึงอะไร?",
 choices:["จำชื่อคน","ค้นหาความเหมือน ความแตกต่าง หรือรูปแบบที่เกิดซ้ำ","ลบข้อมูลซ้ำ","จัดเรียงข้อมูล"],
 answer:1, explain:"Pattern Recognition = หารูปแบบ/ความเหมือนที่ซ้ำ เพื่อนำแนวทางที่มีอยู่มาประยุกต์"},

{topic:"Computational Thinking", q:"Abstraction ใน CT หมายถึงอะไร?",
 choices:["ซ่อนปัญหา","เลือกเฉพาะข้อมูลและรายละเอียดที่สำคัญ ตัดรายละเอียดที่ไม่เกี่ยวข้องออก","ลบข้อมูล","จัดกลุ่ม"],
 answer:1, explain:"Abstraction = เลือกเฉพาะสาระสำคัญ ตัดรายละเอียดที่ไม่จำเป็นต่อการแก้ปัญหา"},

{topic:"Computational Thinking", q:"Algorithm Design ใน CT หมายถึงอะไร?",
 choices:["ออกแบบหน้าจอ","กำหนดลำดับขั้นตอนและเงื่อนไขที่ชัดเจน เพื่อให้แก้ปัญหาได้อย่างถูกต้อง","วาดรูป","เขียนรายงาน"],
 answer:1, explain:"Algorithm Design = ออกแบบขั้นตอนวิธีที่ชัดเจน เป็นลำดับเพื่อแก้ปัญหา"},

// ---------- กลุ่มที่ 4: ตัวอย่าง Decomposition & Pattern Recognition (4 ข้อ) ----------
{topic:"Computational Thinking", q:"การแบ่งระบบร้านค้าออนไลน์เป็น ระบบสินค้า ระบบชำระเงิน ระบบจัดส่ง จัดเป็น CT องค์ประกอบใด?",
 choices:["Abstraction","Decomposition","Pattern Recognition","Algorithm Design"],
 answer:1, explain:"การแยกระบบใหญ่ออกเป็นระบบย่อย = Decomposition"},

{topic:"Computational Thinking", q:"การสังเกตว่าทุกรายวิชาต้องตรวจสอบสถานะนักศึกษาก่อนลงทะเบียน จัดเป็น CT องค์ประกอบใด?",
 choices:["Decomposition","Pattern Recognition","Abstraction","Algorithm"],
 answer:1, explain:"การเห็นรูปแบบที่เกิดซ้ำ = Pattern Recognition"},

{topic:"Computational Thinking", q:"การเลือกระบุเฉพาะรหัสนักศึกษาและสถานภาพ ไม่ใช้ชื่อเล่นหรือที่อยู่ จัดเป็น CT องค์ประกอบใด?",
 choices:["Decomposition","Abstraction","Pattern Recognition","Algorithm"],
 answer:1, explain:"การเลือกเฉพาะข้อมูลที่สำคัญ ตัดส่วนที่ไม่จำเป็น = Abstraction"},

{topic:"Computational Thinking", q:"การเขียนลำดับขั้นตอน 'ตรวจสอบสถานะ → ตรวจสอบวิชาบังคับก่อน → ตรวจสอบที่นั่ง → ลงทะเบียน' จัดเป็น CT องค์ประกอบใด?",
 choices:["Decomposition","Abstraction","Pattern Recognition","Algorithm Design"],
 answer:3, explain:"การกำหนดลำดับขั้นตอนที่ชัดเจน = Algorithm Design"},

// ---------- กลุ่มที่ 5: การทำความเข้าใจปัญหา (4 คำถาม) (5 ข้อ) ----------
{topic:"Computational Thinking", q:"หลักการสำคัญในการทำความเข้าใจปัญหาคืออะไร?",
 choices:["ต้องเข้าใจว่า 'ปัญหาคืออะไร' ก่อนตัดสินใจว่า 'จะแก้อย่างไร'","เริ่มแก้ทันที","ถามคนอื่นก่อน","รอให้ปัญหาหายไป"],
 answer:0, explain:"ต้องเข้าใจปัญหาก่อน จึงจะแก้ได้อย่างถูกต้อง"},

{topic:"Computational Thinking", q:"4 คำถามสำคัญในการทำความเข้าใจปัญหา คืออะไร?",
 choices:["What, Information, Constraints, Expected Outcome","Who, When, Where, Why","Input, Process, Output, Storage","Plan, Do, Check, Act"],
 answer:0, explain:"4 คำถาม: ปัญหาคืออะไร ต้องใช้ข้อมูลอะไร มีเงื่อนไขอะไร ต้องการผลลัพธ์แบบใด"},

{topic:"Computational Thinking", q:"Why ต้องถามว่า 'ปัญหาคืออะไร' ก่อน?",
 choices:["เพื่อไม่ให้เสียเวลา","เพื่อเข้าใจขอบเขตและเป้าหมายของปัญหา ก่อนเลือกวิธีแก้","เพื่อให้คนอื่นพอใจ","ตามธรรมเนียม"],
 answer:1, explain:"การเข้าใจปัญหาก่อนช่วยให้เลือกวิธีแก้ที่ตรงจุด"},

{topic:"Computational Thinking", q:"Constraints ในบริบทการแก้ปัญหา หมายถึงอะไร?",
 choices:["ข้อมูลนำเข้า","เงื่อนไข/ข้อจำกัดของปัญหา","ผลลัพธ์","ผู้ออกแบบ"],
 answer:1, explain:"Constraints = เงื่อนไข/ข้อจำกัด เช่น เวลา งบประมาณ ทรัพยากร"},

{topic:"Computational Thinking", q:"Expected Outcome หมายถึงอะไร?",
 choices:["ข้อมูลนำเข้า","ผลลัพธ์ที่คาดหวัง/ต้องการ","วิธีการ","เงื่อนไข"],
 answer:1, explain:"Expected Outcome = ผลลัพธ์ที่คาดหวังจาการแก้ปัญหา"},

// ---------- กลุ่มที่ 6: IPO Model (4 ข้อ) ----------
{topic:"Computational Thinking", q:"IPO Model ประกอบด้วยอะไร?",
 choices:["Input, Process, Output","Internal, Program, Output","Interface, Process, Operation","Input, Program, Option"],
 answer:0, explain:"IPO = Input (ข้อมูลเข้า) → Process (ประมวลผล) → Output (ผลลัพธ์)"},

{topic:"Computational Thinking", q:"Input ใน IPO Model หมายถึงอะไร?",
 choices:["ผลลัพธ์","ข้อมูลที่รับเข้ามาเพื่อใช้ในการประมวลผล","การคำนวณ","การแสดงผล"],
 answer:1, explain:"Input = ข้อมูลที่รับเข้ามา เช่น รหัสนักศึกษา, รหัสวิชา"},

{topic:"Computational Thinking", q:"Process ใน IPO Model หมายถึงอะไร?",
 choices:["การป้อนข้อมูล","การดำเนินการกับข้อมูลตามขั้นตอนและเงื่อนไข","การแสดงผล","การลบข้อมูล"],
 answer:1, explain:"Process = ดำเนินการกับ Input ตามขั้นตอน เช่น ตรวจสอบเงื่อนไข"},

{topic:"Computational Thinking", q:"Output ใน IPO Model หมายถึงอะไร?",
 choices:["ข้อมูลนำเข้า","การประมวลผล","ข้อมูลหรือผลลัพธ์ที่ได้จากการประมวลผล","ฮาร์ดแวร์"],
 answer:2, explain:"Output = ผลลัพธ์ที่ได้ เช่น 'ลงทะเบียนสำเร็จ' หรือข้อความแจ้งสาเหตุ"},

// ---------- กลุ่มที่ 7: Flowchart (7 ข้อ) ----------
{topic:"Computational Thinking", q:"Flowchart (ผังงาน) คืออะไร?",
 choices:["ตารางข้อมูล","แผนภาพที่ใช้สัญลักษณ์รูปภาพและลูกศรแสดงถึงขั้นตอนการทำงานหรืออัลกอริทึม","โค้ดโปรแกรม","สูตรคณิตศาสตร์"],
 answer:1, explain:"Flowchart = แผนภาพที่ใช้สัญลักษณ์แสดงขั้นตอนการทำงาน และทิศทางการไหลของข้อมูล"},

{topic:"Computational Thinking", q:"ข้อใด ไม่ใช่ ประโยชน์ของ Flowchart?",
 choices:["ช่วยลำดับขั้นตอนการทำงาน","ช่วยตรวจสอบ/แก้ไขโปรแกรม","ช่วยให้ผู้อื่นศึกษาการทำงานได้ง่าย","ช่วยเข้ารหัสข้อมูล"],
 answer:3, explain:"Flowchart ไม่เกี่ยวกับการเข้ารหัสข้อมูล"},

{topic:"Computational Thinking", q:"System Flowchart แสดงอะไร?",
 choices:["ลำดับคำสั่งในโปรแกรม","ขั้นตอนการทำงานภายในระบบงานทั้งหมด รวมวัสดุ อุปกรณ์ บุคลากร และหน่วยงาน","โค้ด","ตาราง"],
 answer:1, explain:"System Flowchart = แสดงขั้นตอนการทำงานของระบบทั้งหมด"},

{topic:"Computational Thinking", q:"Program Flowchart แสดงอะไร?",
 choices:["แผนกในบริษัท","ลำดับขั้นตอนการทำงานภายในโปรแกรม เช่น รับข้อมูล คำนวณ แสดงผล","ผู้ใช้","ฐานข้อมูล"],
 answer:1, explain:"Program Flowchart = ลำดับคำสั่งในโปรแกรม"},

{topic:"Computational Thinking", q:"สัญลักษณ์วงรี (Oval) ใน Flowchart ใช้แทนอะไร?",
 choices:["Process","Decision","Start/Stop (จุดเริ่มต้น/สิ้นสุด)","Input/Output"],
 answer:2, explain:"วงรี = Start/Stop (จุดเริ่มต้น/สิ้นสุด)"},

{topic:"Computational Thinking", q:"สัญลักษณ์สี่เหลี่ยมขนมเปียกปูน (Diamond) ใน Flowchart ใช้แทนอะไร?",
 choices:["Process","Decision (การตัดสินใจ)","Input/Output","Start/Stop"],
 answer:1, explain:"Diamond = Decision (การตัดสินใจ) มีทางออก 2 ทาง"}],

{topic:"Computational Thinking", q:"สัญลักษณ์สี่เหลี่ยมด้านขนาน (Parallelogram) ใน Flowchart ใช้แทนอะไร?",
 choices:["Process","Decision","Input/Output","Start/Stop"],
 answer:2, explain:"Parallelogram = Input/Output (รับข้อมูล/แสดงผล)"},

// ---------- กลุ่มที่ 8: Operators (4 ข้อ) ----------
{topic:"Computational Thinking", q:"ตัวดำเนินการเปรียบเทียบ 'ไม่เท่ากับ' ใน Flowchart คือสัญลักษณ์ใด?",
 choices:["!=","<>","==","=!"],
 answer:1, explain:"<> ใช้แทน 'ไม่เท่ากับ' ใน Flowchart (บางตำราใช้ != ก็ได้)"},

{topic:"Computational Thinking", q:"สัญลักษณ์ '%' ในตัวดำเนินการคณิตศาสตร์คืออะไร?",
 choices:["เปอร์เซ็นต์","Modulo (หารเอาเศษ)","คูณ","หาร"],
 answer:1, explain:"% = Modulo หารเอาเศษ เช่น 7 % 3 = 1"},

{topic:"Computational Thinking", q:"ตัวดำเนินการ '>=' หมายถึงอะไร?",
 choices:["มากกว่า","น้อยกว่า","มากกว่าหรือเท่ากับ","ไม่เท่ากับ"],
 answer:2, explain:">= = มากกว่าหรือเท่ากับ"},

{topic:"Computational Thinking", q:"ตัวดำเนินการทางคณิตศาสตร์ '*', '/', '+' และ '-' ตามลำดับคืออะไร?",
 choices:["คูณ หาร บวก ลบ","บวก ลบ คูณ หาร","หาร คูณ ลบ บวก","ยกกำลัง หาร บวก ลบ"],
 answer:0, explain:"*, /, +, - = คูณ, หาร, บวก, ลบ"},

// ---------- กลุ่มที่ 9: Control Structures (Sequence/Selection/Iteration) (6 ข้อ) ----------
{topic:"Computational Thinking", q:"Flowchart ที่ดีมีกี่จุดเริ่มต้นและจุดสิ้นสุด?",
 choices:["หลายจุดเท่าที่ต้องการ","1 จุดเริ่มต้น 1 จุดสิ้นสุด","ไม่มี","2 จุด"],
 answer:1, explain:"Flowchart ที่ดีมี 1 จุดเริ่มต้น และ 1 จุดสิ้นสุด"}],

{topic:"Computational Thinking", q:"Control Structure มี 3 ลักษณะ ข้อใด ไม่ถูกต้อง?",
 choices:["Sequence","Selection","Iteration","Recursion"],
 answer:3, explain:"3 ลักษณะ: Sequence, Selection, Iteration (Recursion เป็นเทคนิค ไม่ใช่ Control Structure พื้นฐาน)"},

{topic:"Computational Thinking", q:"Sequence (แบบลำดับ) ทำงานอย่างไร?",
 choices:["ทำงานตามเงื่อนไข","ทำงานเรียงลำดับจากบนลงล่างตามคำสั่ง","ทำงานซ้ำ","ทำงานสุ่ม"],
 answer:1, explain:"Sequence = ทำตามลำดับจากบนลงล่าง"},

{topic:"Computational Thinking", q:"Selection (แบบมีทางเลือก) ทำงานอย่างไร?",
 choices:["เรียงลำดับ","เลือกทำงานตามเงื่อนไข เช่น IF-THEN-ELSE หรือ CASE","ทำซ้ำ","ข้ามทั้งหมด"],
 answer:1, explain:"Selection = เลือกทำงานตามเงื่อนไข มี 2 แบบ: IF-THEN-ELSE และ CASE"},

{topic:"Computational Thinking", q:"IF-THEN-ELSE เหมาะกับสถานการณ์ใด?",
 choices:["ทางเลือก 2 ทางเลือก","ทางเลือกมากกว่า 2","ทำซ้ำ","ไม่มีทางเลือก"],
 answer:0, explain:"IF-THEN-ELSE = ทางเลือก 2 ทางเลือก (จริง/เท็จ)"},

{topic:"Computational Thinking", q:"CASE เหมาะกับสถานการณ์ใด?",
 choices:["ทางเลือก 2 ทางเลือก","ทางเลือกมากกว่า 2 (เช่น การตัดเกรด A, B, C, D, F)","ทำซ้ำ","ไม่มีทางเลือก"],
 answer:1, explain:"CASE = เลือกจากหลายทางเลือก เช่น ตัดเกรด, เลือกเมนู"},

// ---------- กลุ่มที่ 10: Iteration / Loops (4 ข้อ) ----------
{topic:"Computational Thinking", q:"Iteration (Looping) คืออะไร?",
 choices:["ทำงานครั้งเดียว","ทำงานซ้ำตามเงื่อนไข","ข้ามคำสั่ง","หยุด"],
 answer:1, explain:"Iteration = ทำงานซ้ำตามเงื่อนไข ใช้สำหรับงานที่ต้องทำซ้ำ"},

{topic:"Computational Thinking", q:"DO-WHILE Loop ตรวจสอบเงื่อนไขเมื่อไหร่?",
 choices:["ตรวจสอบเงื่อนไขก่อนทำ","ตรวจสอบเงื่อนไขหลังทำ","ไม่ตรวจสอบ","ตรวจสอบกลางทาง"],
 answer:0, explain:"DO-WHILE = ตรวจสอบเงื่อนไขก่อนทำ ถ้าเป็นจริงทำ ถ้าเป็นเท็จเลิกลูป"},

{topic:"Computational Thinking", q:"REPEAT-UNTIL Loop ทำงานอย่างไร?",
 choices:["ตรวจสอบเงื่อนไขก่อนทำ","ทำชุดคำสั่งก่อนอย่างน้อย 1 ครั้ง แล้วตรวจสอบเงื่อนไข ถ้าเท็จวนกลับไปทำซ้ำ จนกว่าเงื่อนไขจะเป็นจริง","ไม่ทำเลย","ทำครั้งเดียว"],
 answer:1, explain:"REPEAT-UNTIL = ทำก่อนอย่างน้อย 1 ครั้ง แล้วตรวจสอบเงื่อนไข ถ้าเท็จวนกลับ"},

{topic:"Computational Thinking", q:"DO-WHILE กับ REPEAT-UNTIL ต่างกันอย่างไร?",
 choices:["ไม่ต่างกัน","DO-WHILE ตรวจสอบก่อนทำ (อาจไม่ทำเลย) / REPEAT-UNTIL ทำก่อนอย่างน้อย 1 ครั้ง","REPEAT-UNTIL เร็วกว่า","DO-WHILE ทำซ้ำไม่ได้"],
 answer:1, explain:"DO-WHILE = เช็คก่อนทำ / REPEAT-UNTIL = ทำก่อนแล้วเช็ค (ทำอย่างน้อย 1 ครั้ง)"}

];
