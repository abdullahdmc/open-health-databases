// Client-side filtering over the pre-rendered cards. State is mirrored in the
// URL (?q=&cat=&access=) so filtered views can be shared.
(() => {
  const q = document.getElementById("q");
  const cards = [...document.querySelectorAll(".card")];
  const sections = [...document.querySelectorAll(".cat")];
  const count = document.getElementById("count");
  const reset = document.getElementById("reset");
  const empty = document.getElementById("empty");
  const catChips = [...document.querySelectorAll("[data-filter-cat]")];
  const accessChips = [...document.querySelectorAll("[data-filter-access]")];
  const filtersBtn = document.getElementById("toggle-filters");
  const filters = document.getElementById("filters");
  const total = cards.length;

  const state = { q: "", cats: new Set(), access: new Set() };

  function readUrl() {
    const p = new URLSearchParams(location.search);
    state.q = p.get("q") || "";
    state.cats = new Set((p.get("cat") || "").split(",").filter(Boolean));
    state.access = new Set((p.get("access") || "").split(",").filter(Boolean));
    q.value = state.q;
  }

  function writeUrl() {
    const p = new URLSearchParams();
    if (state.q) p.set("q", state.q);
    if (state.cats.size) p.set("cat", [...state.cats].join(","));
    if (state.access.size) p.set("access", [...state.access].join(","));
    const qs = p.toString();
    history.replaceState(null, "", (qs ? "?" + qs : location.pathname) + location.hash);
  }

  function apply() {
    const terms = state.q.toLowerCase().split(/\s+/).filter(Boolean);
    let shown = 0;
    for (const c of cards) {
      const ok =
        (!state.cats.size || state.cats.has(c.dataset.cat)) &&
        (!state.access.size || state.access.has(c.dataset.access)) &&
        terms.every((t) => c.dataset.search.includes(t));
      c.hidden = !ok;
      if (ok) shown++;
    }
    for (const s of sections) s.hidden = !s.querySelector(".card:not([hidden])");
    for (const b of catChips) b.setAttribute("aria-pressed", state.cats.has(b.dataset.filterCat));
    for (const b of accessChips) b.setAttribute("aria-pressed", state.access.has(b.dataset.filterAccess));
    const filtered = state.q || state.cats.size || state.access.size;
    count.textContent = filtered ? `Showing ${shown} of ${total}` : `Showing all ${total}`;
    reset.hidden = !filtered;
    empty.hidden = shown > 0;
    const active = state.cats.size + state.access.size;
    filtersBtn.innerHTML = active ? `Filters <span class="n">${active}</span>` : "Filters";
    writeUrl();
  }

  function toggle(set, key) {
    set.has(key) ? set.delete(key) : set.add(key);
    apply();
  }

  let timer;
  q.addEventListener("input", () => {
    clearTimeout(timer);
    timer = setTimeout(() => { state.q = q.value.trim(); apply(); }, 120);
  });
  catChips.forEach((b) => b.addEventListener("click", () => toggle(state.cats, b.dataset.filterCat)));
  accessChips.forEach((b) => b.addEventListener("click", () => toggle(state.access, b.dataset.filterAccess)));

  const clearAll = () => { state.q = ""; q.value = ""; state.cats.clear(); state.access.clear(); apply(); };
  reset.addEventListener("click", clearAll);
  document.querySelectorAll("[data-reset]").forEach((b) => b.addEventListener("click", clearAll));

  // Filter panel: open at the top of the page on wide screens, folded away
  // once the reader scrolls into the list (unless they opened it themselves).
  const setOpen = (open) => {
    filters.classList.toggle("open", open);
    filtersBtn.setAttribute("aria-expanded", open);
  };
  let userOpened = false;
  filtersBtn.addEventListener("click", () => {
    const open = !filters.classList.contains("open");
    userOpened = open;
    setOpen(open);
  });
  const hero = document.querySelector(".hero");
  new IntersectionObserver(([e]) => {
    if (e.isIntersecting && innerWidth >= 720) setOpen(true);
    else if (!e.isIntersecting && !userOpened) setOpen(false);
  }).observe(hero);

  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== q) { e.preventDefault(); q.focus(); }
    if (e.key === "Escape" && document.activeElement === q) { q.value = ""; state.q = ""; apply(); }
  });

  readUrl();
  apply();
})();
