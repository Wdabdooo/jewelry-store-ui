const cartCount = document.getElementById('cartCount');
const addButtons = document.querySelectorAll('.add-to-cart');
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');
const newsForm = document.querySelector('.newsletter-form');

let count = 0;

addButtons.forEach((button) => {
  button.addEventListener('click', () => {
    count += 1;
    cartCount.textContent = count;

    button.textContent = 'تمت الإضافة';
    button.disabled = true;

    setTimeout(() => {
      button.textContent = 'أضف إلى السلة';
      button.disabled = false;
    }, 1000);
  });
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;

    productCards.forEach((card) => {
      const category = card.dataset.category;
      const shouldShow = filter === 'all' || category === filter;
      card.style.display = shouldShow ? 'block' : 'none';
    });
  });
});

newsForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = newsForm.querySelector('button');
  const input = newsForm.querySelector('input');

  button.textContent = 'تم التسجيل';
  button.disabled = true;
  input.value = '';

  setTimeout(() => {
    button.textContent = 'اشترك الآن';
    button.disabled = false;
  }, 1500);
});
