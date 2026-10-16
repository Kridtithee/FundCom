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

];
