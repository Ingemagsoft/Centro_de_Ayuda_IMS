window.IMS = (function () {
  function openSearch(query = "") {
    // Componente de búsqueda de Material
    const search = document.querySelector('[data-md-component="search"]');
    const input  = document.querySelector('input[data-md-component="search-query"]');
    if (!search || !input) return;

    // Enfocar/abrir overlay y escribir consulta
    input.value = "";
    input.dispatchEvent(new Event("input"));
    input.focus();
    if (query) {
      // tiny delay para asegurar enfoque antes de inyectar texto
      setTimeout(() => {
        input.value = query;
        input.dispatchEvent(new Event("input"));
        input.focus();
      }, 10);
    }
  }
  function keyOpen(ev){
    if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); openSearch(); }
  }
  return { openSearch, keyOpen };
})();