// =========================================================
//  FundCom app logic
// =========================================================
const LS_WEAK = 'fundcom_weak_cards'; // same key as v1 — keeps existing weak-card history
const TOPIC_ORDER = Object.keys(STUDY);

let state = {
  page: 'home',
  currentTopic: null,
  currentList: [], index: 0, isFlipped: false, weakCards: [],
  mode: 'flashcard',
};

// ---------- storage ----------
function loadWeak() { try { return JSON.parse(localStorage.getItem(LS_WEAK)) || []; } catch (e) { return []; } }
function saveWeak(w) { localStorage.setItem(LS_WEAK, JSON.stringify(w)); }
function addWeak(i) { const w = loadWeak(); if (!w.includes(i)) { w.push(i); saveWeak(w); } }
function removeWeak(i) { saveWeak(loadWeak().filter(x => x !== i)); }

// ---------- navigation ----------
const PAGES = ['home', 'study', 'mode', 'flashcard', 'choice', 'result'];
function showPage(id) {
  state.page = id;
  PAGES.forEach(p => document.getElementById('page-' + p).classList.toggle('hidden', p !== id));
  window.scrollTo({ top: 0 });
}

// ---------- helpers ----------
function shuffle(arr) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function topicIndices(topic) {
  if (topic === 'all') return QUESTIONS.map((_, i) => i);
  return QUESTIONS.map((q, i) => q.topic === topic ? i : -1).filter(i => i >= 0);
}
function topicStats(topic) {
  const idx = topicIndices(topic);
  const weakSet = new Set(loadWeak());
  const weak = idx.filter(i => weakSet.has(i)).length;
  return { total: idx.length, weak, mastered: idx.length - weak };
}

// =========================================================
//  HOME
// =========================================================
function renderHome() {
  showPage('home');
  const weakAll = loadWeak().length;
  const totalAll = QUESTIONS.length;
  const masteredAll = totalAll - weakAll;
  const pct = totalAll ? Math.round(masteredAll / totalAll * 100) : 0;

  document.getElementById('dashStats').innerHTML = `
    <div class="stat-card"><div class="stat-num">${pct}%</div><div class="stat-label">🎯 ความแม่นยำรวม</div></div>
    <div class="stat-card"><div class="stat-num">${weakAll}</div><div class="stat-label">📌 ยังไม่แม่น</div></div>
    <div class="stat-card"><div class="stat-num">${totalAll}</div><div class="stat-label">🃏 บัตรทั้งหมด</div></div>`;

  const grid = document.getElementById('topicGrid');
  grid.innerHTML = '';
  TOPIC_ORDER.forEach(t => {
    const s = topicStats(t);
    const p = s.total ? Math.round(s.mastered / s.total * 100) : 0;
    const card = document.createElement('div');
    card.className = 'topic-card';
    card.innerHTML = `
      <div class="topic-head"><span class="topic-icon">${STUDY[t].icon}</span>
        <div><div class="topic-name">${t}</div><div class="topic-sub">${s.mastered}/${s.total} แม่นแล้ว${s.weak ? ` · <span class="weak-tag">${s.weak} ยังไม่แม่น</span>` : ''}</div></div>
      </div>
      <div class="mini-bar"><div class="mini-fill" style="width:${p}%"></div></div>
      <div class="topic-actions">
        <button class="btn-study" onclick="openStudy('${t}')">📖 เรียนเนื้อหา</button>
        <button class="btn-practice" onclick="selectMode('${t}')">🎴 ทบทวน</button>
      </div>`;
    grid.appendChild(card);
  });
}

// =========================================================
//  STUDY PAGE
// =========================================================
function openStudy(topic) {
  state.currentTopic = topic;
  const s = STUDY[topic];
  const stats = topicStats(topic);
  let html = `
    <button class="btn-ghost" onclick="renderHome()">← กลับหน้าแรก</button>
    <div class="study-hero"><span class="study-icon">${s.icon}</span>
      <div><h1 style="text-align:left;margin:0">${topic}</h1>
      <p class="small" style="margin:4px 0 0">${s.tagline}</p></div>
    </div>`;
  s.sections.forEach(sec => { html += renderSection(sec); });
  html += `
    <div class="study-cta box">
      <b>พร้อมทบทวน ${stats.total} ข้อของหมวดนี้หรือยัง?</b>
      <div style="display:flex;gap:10px;margin-top:12px;flex-wrap:wrap">
        <button class="btn-practice" style="flex:1" onclick="playMode('flashcard')">🎴 แฟลชการ์ด</button>
        <button class="btn-practice" style="flex:1" onclick="playMode('choice')">📝 ปรนัย</button>
      </div>
    </div>
    <button class="btn-ghost" onclick="renderHome()">← กลับหน้าแรก</button>`;
  document.getElementById('studyContent').innerHTML = html;
  showPage('study');
}

function esc(s) { return s; } // content is authored HTML, trusted
function renderSection(sec) {
  let inner = '';
  if (sec.type === 'overview') inner = `<p class="lead">${sec.text}</p>`;
  else if (sec.type === 'diagram') inner = sec.html;
  else if (sec.type === 'table') {
    inner = `<div class="tbl-wrap"><table class="tbl"><thead><tr>${sec.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${sec.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  }
  else if (sec.type === 'points') inner = `<ul class="pts">${sec.items.map(i => `<li>${i}</li>`).join('')}</ul>`;
  else if (sec.type === 'tips') inner = `<ul class="pts">${sec.items.map(i => `<li>${i}</li>`).join('')}</ul>`;
  else if (sec.type === 'memory') inner = `<p class="memory-text">${sec.text}</p>`;
  const cls = sec.type === 'tips' ? 'sec sec-tips' : sec.type === 'memory' ? 'sec sec-memory' : 'sec';
  return `<div class="${cls}"><h2 class="sec-title">${sec.title}</h2>${inner}</div>`;
}

// =========================================================
//  MODE SELECT
// =========================================================
function selectMode(topic) {
  state.currentTopic = topic;
  const label = topic === 'all' ? 'ทุกหัวข้อ' : topic === 'weak' ? 'ข้อที่ยังไม่แม่น' : topic;
  document.getElementById('modeTopicName').textContent = label;
  document.getElementById('modeTopicIcon').textContent = topic === 'all' ? '🎲' : topic === 'weak' ? '🔁' : (STUDY[topic] ? STUDY[topic].icon : '📚');
  showPage('mode');
}

function playMode(mode) {
  state.mode = mode;
  let list;
  if (state.currentTopic === 'weak') list = loadWeak();
  else list = topicIndices(state.currentTopic);
  if (list.length === 0) { alert('ยังไม่มีข้อในชุดนี้ครับ'); return; }
  startWithList(shuffle(list));
}

function startReviewWeak() {
  const weak = loadWeak();
  if (weak.length === 0) { alert('ยินดีด้วย! คุณจำได้ครบทุกข้อแล้ว 🎉'); return; }
  selectMode('weak');
}

function startWithList(list) {
  state.currentList = list; state.index = 0; state.weakCards = []; state.isFlipped = false;
  if (state.mode === 'flashcard') { showPage('flashcard'); renderCard(); }
  else { showPage('choice'); renderChoice(); }
}

function retry() { startWithList(shuffle(state.currentList)); }
function goHome() { renderHome(); }
function resetProgress() {
  if (!confirm('ลบประวัติข้อที่ยังไม่แม่นทั้งหมด?')) return;
  localStorage.removeItem(LS_WEAK);
  renderHome();
}

// =========================================================
//  FLASHCARD
// =========================================================
function renderCard() {
  if (state.index >= state.currentList.length) { showResult(); return; }
  const q = QUESTIONS[state.currentList[state.index]];
  state.isFlipped = false;
  document.getElementById('cardInner').classList.remove('is-flipped');
  document.getElementById('controls').classList.add('hidden');
  document.getElementById('cardProgress').textContent = `ใบที่ ${state.index + 1} / ${state.currentList.length}`;
  document.getElementById('progressFill').style.width = `${(state.index / state.currentList.length) * 100}%`;
  document.getElementById('cardTopic').textContent = q.topic;
  document.getElementById('cardTopicBack').textContent = q.topic;
  document.getElementById('questionText').textContent = q.q;
  document.getElementById('answerText').textContent = q.choices[q.answer];
  document.getElementById('explainText').textContent = q.explain;
}

function flipCard() {
  state.isFlipped = !state.isFlipped;
  const cardInner = document.getElementById('cardInner');
  if (state.isFlipped) {
    cardInner.classList.add('is-flipped');
    setTimeout(() => { document.getElementById('controls').classList.remove('hidden'); }, 300);
  } else { cardInner.classList.remove('is-flipped'); }
}

function markCard(isRemembered) {
  const qIndex = state.currentList[state.index];
  if (isRemembered) removeWeak(qIndex); else { addWeak(qIndex); state.weakCards.push(qIndex); }
  state.index++; renderCard();
}

function prevCard() {
  if (state.index > 0) { state.index--; renderCard(); }
  else { alert('นี่คือข้อแรกสุดแล้วครับ'); }
}

// =========================================================
//  CHOICE
// =========================================================
function renderChoice() {
  if (state.index >= state.currentList.length) { showResult(); return; }
  const q = QUESTIONS[state.currentList[state.index]];
  state.isFlipped = false;
  document.getElementById('choiceProgress').textContent = `ข้อที่ ${state.index + 1} / ${state.currentList.length} · ${q.topic}`;
  document.getElementById('choiceProgressFill').style.width = `${(state.index / state.currentList.length) * 100}%`;
  document.getElementById('choiceQuestionText').textContent = q.q;
  document.getElementById('choiceFeedback').classList.add('hidden');
  document.getElementById('choiceNextBtn').classList.add('hidden');
  const optDiv = document.getElementById('choiceOptions');
  optDiv.innerHTML = '';
  q.choices.forEach((c, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.innerHTML = `<span class="opt-num">${i + 1}</span> ${c}`;
    btn.onclick = () => answerChoice(i);
    optDiv.appendChild(btn);
  });
}

function answerChoice(selected) {
  if (state.isFlipped) return;
  state.isFlipped = true;
  const q = QUESTIONS[state.currentList[state.index]];
  const isCorrect = selected === q.answer;
  document.querySelectorAll('#choiceOptions .choice-btn').forEach((b, i) => {
    b.disabled = true;
    if (i === q.answer) b.classList.add('correct');
    if (i === selected && !isCorrect) b.classList.add('wrong');
  });
  if (isCorrect) removeWeak(state.currentList[state.index]);
  else { addWeak(state.currentList[state.index]); state.weakCards.push(state.currentList[state.index]); }
  const fb = document.getElementById('choiceFeedback');
  fb.classList.remove('hidden');
  fb.innerHTML = `
    <div class="fb-head ${isCorrect ? 'ok' : 'no'}">${isCorrect ? '✅ ถูกต้อง' : '❌ ยังไม่ถูก — ข้อนี้จะถูกเพิ่มใน “ยังไม่แม่น”'}</div>
    <div class="explanation"><b>💡 คำอธิบาย:</b> ${q.explain}</div>`;
  document.getElementById('choiceNextBtn').classList.remove('hidden');
}

function nextChoiceCard() { state.index++; renderChoice(); }

// =========================================================
//  RESULT
// =========================================================
function showResult() {
  showPage('result');
  const total = state.currentList.length;
  const missed = state.weakCards.length;
  const correct = total - missed;
  const pct = total ? Math.round(correct / total * 100) : 0;
  const comment = pct >= 80 ? '🎉 สุดยอด! คุณแม่นมาก' : pct >= 50 ? '👍 ดีแล้ว ทบทวนอีกนิดนะ' : '📚 ยังต้องฝึกอีกหน่อย สู้ๆ!';
  // per-topic breakdown
  const byTopic = {};
  state.currentList.forEach((qi, pos) => {
    const t = QUESTIONS[qi].topic;
    byTopic[t] = byTopic[t] || { total: 0, missed: 0 };
    byTopic[t].total++;
    if (state.weakCards.includes(qi)) byTopic[t].missed++;
  });
  const rows = Object.keys(byTopic).map(t => {
    const b = byTopic[t];
    const p = Math.round((b.total - b.missed) / b.total * 100);
    return `<div class="res-row"><span>${STUDY[t] ? STUDY[t].icon : '📚'} ${t}</span><span><b>${p}%</b> <span class="small">(${b.total - b.missed}/${b.total})</span></span></div>
      <div class="mini-bar"><div class="mini-fill" style="width:${p}%"></div></div>`;
  }).join('');
  document.getElementById('resultText').innerHTML = `
    <div class="res-score">${pct}%</div>
    <div class="small" style="text-align:center;margin-bottom:10px">${comment}</div>
    <div class="small" style="text-align:center">ทบทวน ${total} ข้อ · จำได้ ${correct} ข้อ · ยังไม่แม่น ${missed} ข้อ</div>
    <hr>${rows}`;
}

// =========================================================
//  THEME
// =========================================================
function changeTheme(v) {
  document.documentElement.setAttribute('data-theme', v);
  localStorage.setItem('fundcom_theme', v);
}
function loadTheme() {
  const t = localStorage.getItem('fundcom_theme') || 'pastel';
  document.documentElement.setAttribute('data-theme', t);
  document.getElementById('themeSelector').value = t;
}

// =========================================================
//  KEYBOARD SHORTCUTS
// =========================================================
document.addEventListener('keydown', e => {
  if (state.page === 'flashcard') {
    if (e.code === 'Space' || e.code === 'Enter') { e.preventDefault(); flipCard(); }
    else if (state.isFlipped && e.code === 'ArrowRight') markCard(true);
    else if (state.isFlipped && e.code === 'ArrowLeft') markCard(false);
  } else if (state.page === 'choice' && !state.isFlipped) {
    const n = parseInt(e.key, 10);
    if (n >= 1 && n <= 4) {
      const btns = document.querySelectorAll('#choiceOptions .choice-btn');
      if (btns[n - 1]) answerChoice(n - 1);
    }
  }
});

// =========================================================
loadTheme();
renderHome();
