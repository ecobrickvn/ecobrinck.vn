// Simple client-side navigation between sections (single page app feel)
document.addEventListener('DOMContentLoaded', () => {
    const navButtons = Array.from(document.querySelectorAll('.nav-item'));
    const pages = Array.from(document.querySelectorAll('.page'));
  
    function setActive(targetId){
      // pages
      pages.forEach(p => {
        if (p.id === targetId) p.classList.add('active-page');
        else p.classList.remove('active-page');
      });
      // nav
      navButtons.forEach(btn => {
        if (btn.dataset.target === targetId) btn.classList.add('active');
        else btn.classList.remove('active');
      });
      // update topbar title
      const title = document.querySelector('.page-title');
      const label = navButtons.find(b => b.dataset.target === targetId)?.textContent || '';
      if (title) title.textContent = label;
      // scroll top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  
    navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        setActive(btn.dataset.target);
      });
    });
  
    // explore button from hero -> products
    const explore = document.getElementById('explore-products');
    if (explore) explore.addEventListener('click', () => setActive('products'));
  
    // optional: smooth anchor for "view all"
    const viewAll = document.getElementById('view-all');
    if (viewAll) viewAll.addEventListener('click', (e) => {
      e.preventDefault();
      setActive('products');
    });
  });
  document.querySelector('.search-close').addEventListener('click', () => {
    document.querySelector('.search-input').value = '';
    document.querySelector('.search-close').style.display = 'none';
  });

  const searchClose = document.querySelector('.search-close');
const searchInput = document.querySelector('.search-input');
searchClose.addEventListener('click', () => {
  searchInput.value = '';
  searchInput.focus(); // Giữ focus để placeholder hiện lại
});
document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.fade-in, .slide-left, .slide-right');

  function checkPosition() {
    const windowHeight = window.innerHeight;
    elements.forEach(el => {
      const position = el.getBoundingClientRect().top;
      if (position < windowHeight - 100) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('load', checkPosition);
});
// ======================================
// HIỆU ỨNG HOÁN ĐỔI ẢNH CHÍNH ↔ THUMBNAIL
// ======================================
document.addEventListener("DOMContentLoaded", function() {
  const mainImage = document.getElementById("mainProductImage");
  const thumbnails = document.querySelectorAll(".thumb");

  if (!mainImage || thumbnails.length === 0) return;

  thumbnails.forEach(thumb => {
    thumb.addEventListener("click", () => {
      const mainSrc = mainImage.getAttribute("src");
      const thumbSrc = thumb.getAttribute("src");

      // Nếu bấm vào ảnh đang hiển thị thì bỏ qua
      if (mainSrc === thumbSrc) return;

      // Hiệu ứng mờ dần
      mainImage.classList.add("fade-out");

      // Sau khi ảnh chính mờ, hoán đổi src
      setTimeout(() => {
        mainImage.setAttribute("src", thumbSrc);
        thumb.setAttribute("src", mainSrc);

        // Xóa hiệu ứng fade-out, thêm fade-in
        mainImage.classList.remove("fade-out");
        mainImage.classList.add("fade-in");

        setTimeout(() => {
          mainImage.classList.remove("fade-in");
        }, 400);
      }, 300);
    });
  });
});





