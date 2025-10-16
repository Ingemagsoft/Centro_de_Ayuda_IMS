(function () {
  const input = document.getElementById('hc-input');
  const resultsEl = document.getElementById('hc-results');
  const chips = document.querySelectorAll('.hc-chip');
  if (!input || !resultsEl) return;

  const INDEX_URL = new URL('search/search_index.json', document.baseURI).href;
  let index = null;

  // Utilidades
  const norm = s => (s || '')
    .toString().toLowerCase()
    .normalize('NFD').replace(/\p{Diacritic}/gu,'');
  const scoreEntry = (e, terms) => {
    const t = norm(e.title), b = norm(e.text);
    let s = 0;
    for (const term of terms) {
      if (!term) continue;
      const re = new RegExp(`\\b${term}`, 'g');
      s += (t.match(re)?.length || 0) * 3;
      s += (b.match(re)?.length || 0);
    }
    return s;
  };
  const snippet = (text, q) => {
    const n = norm(text), i = n.indexOf(q);
    if (i < 0) return text.slice(0, 160) + (text.length > 160 ? '…' : '');
    const start = Math.max(0, i - 50);
    const end = Math.min(text.length, i + 110);
    return (start > 0 ? '…' : '') + text.slice(start, end) + (end < text.length ? '…' : '');
  };

  // Cargar índice
  fetch(INDEX_URL).then(r => r.json()).then(json => { index = json.docs || json; });

  // Buscar
  const doSearch = (q) => {
    resultsEl.innerHTML = '';
    q = norm(q);
    if (!index || !q || q.length < 2) return;
    const terms = q.split(/\s+/);
    const scored = index
      .map(e => ({ e, s: scoreEntry(e, terms) }))
      .filter(x => x.s > 0)
      .sort((a,b) => b.s - a.s)
      .slice(0, 8);

    for (const { e } of scored) {
      const a = document.createElement('a');
      a.href = e.location;
      a.className = 'hc-result';
      const h3 = document.createElement('div');
      h3.className = 'hc-result__title';
      h3.textContent = e.title;
      const p = document.createElement('p');
      p.className = 'hc-result__snippet';
      p.textContent = snippet(e.text, terms[0]);
      a.appendChild(h3); a.appendChild(p);
      resultsEl.appendChild(a);
    }
  };

  // Debounce
  let t = null;
  input.addEventListener('input', () => {
    clearTimeout(t);
    t = setTimeout(() => doSearch(input.value), 160);
  });

  // Chips → rellenan input y buscan
  chips.forEach(c => c.addEventListener('click', () => {
    const q = c.getAttribute('data-q') || c.textContent.trim();
    input.value = q;
    doSearch(q);
    input.focus();
  }));
})();