/* ==========================================================
   Efes Anatolian Kitchen: site script
   ========================================================== */

/* ---------- 1. EASY-EDIT SETTINGS ----------
   Replace the URLs below with your direct store links.
   Leave a url as "" and that card will show "Call to order" instead. */
const ORDER_LINKS = [
  {
    name: 'DoorDash',
    note: 'Delivery & pickup',
    color: '#eb1700',
    mark: 'D',
    url: 'https://www.doordash.com/store/efes-anatolian-kitchen-levittown-50894364/117588169/'
  },
  {
    name: 'Uber Eats',
    note: 'Delivery & pickup',
    color: '#06c167',
    mark: 'U',
    url: 'https://www.ubereats.com/store/efes-anatolian-kitchen-levittown/cdq5oiPtVnC3Ol5fQWdBog'
  },
  {
    name: 'Grubhub',
    note: 'Delivery & pickup',
    color: '#f63440',
    mark: 'G',
    url: 'https://www.grubhub.com/restaurant/efes-anatolian-kitchen-1538-haines-rd-levittown/15419360'
  },
  {
    name: 'Order Direct',
    note: 'Pickup only, straight from the restaurant',
    color: '#a98a5f',
    mark: 'E',
    url: 'https://efesanatolian.cloveronline.com/menu/all'
  }
];

const PHONE_TEL = 'tel:+12675944617';

/* Opening hours: leave empty to hide the Hours row. Add one row per day group, e.g.
   [['Mon - Thu', '11:00 AM - 9:00 PM'], ['Fri - Sat', '11:00 AM - 10:00 PM']] */
const HOURS = [['Every day', '6:00 AM - 12:00 AM']];

/* ---------- 2. MENU DATA ---------- */
const MENU = [
  {
    id: 'appetizers', name: 'Appetizers', items: [
      ['Hummus', 4.99, 'Chickpea puree with tahini, lemon and olive oil'],
      ['Spicy Tomato Dip', 4.99, 'Fresh tomato, pepper, onion and herbs'],
      ['Stuffed Grape Leaves', 4.99, 'Stuffed grape leaves with rice and herbs'],
      ['Turkish Tzatziki', 4.99, 'Yogurt with cucumber, garlic and mint'],
      ['Carrot Tarator', 4.99, 'Shredded carrots with yogurt and garlic'],
      ['Cheese Rolls (6)', 6.99, 'Crispy phyllo rolls with feta cheese'],
      ['Russian Salad', 4.99],
      ['Mozzarella Sticks (6)', 7.99],
      ['French Fries', 4.99],
      ['Cheese Fries', 5.99],
      ['Onion Rings', 5.99]
    ]
  },
  {
    id: 'soups', name: 'Soups', items: [
      ['Soup of the Day', 7.99]
    ]
  },
  {
    id: 'salads', name: 'Salads', items: [
      ['Shepherd Salad', 10.99, 'Fresh chopped vegetables, parsley, lemon and olive oil'],
      ['Caesar Salad', 9.99],
      ['Caesar Salad with Chicken', 14.99]
    ]
  },
  {
    id: 'sandwiches', name: 'Sandwiches & Wraps', note: 'Served with French fries', items: [
      ['Meatball', 11.99],
      ['Chicken or Beef Gyro', 11.99],
      ['Adana Kebab', 11.99],
      ['Lamb Shish', 12.99],
      ['Chicken Shish', 11.99],
      ['Grilled Chicken', 11.99],
      ['Crispy Fried Chicken', 11.99],
      ['Liver', 11.99],
      ['Cheeseburger', 12.99],
      ['Hamburger', 11.99],
      ['Mix-up Burger', 12.99, 'Onion, mushrooms, peppers and cheese'],
      ['Cheesesteak', 11.99],
      ['Mix-up Cheesesteak', 12.99, 'Onion, mushrooms, peppers and cheese']
    ]
  },
  {
    id: 'breakfast', name: 'Breakfast', note: 'Served with French fries or mixed greens, and fresh Turkish loaf bread', items: [
      ['Turkish Scrambled Eggs', 11.99, 'Turkish scrambled eggs with tomato and pepper'],
      ['Cheese Toast', 10.99],
      ['Sausage Toast', 11.99, 'Toast with spicy Turkish sausage'],
      ['Everything Toast', 12.99, 'Toast with spicy Turkish sausage and cheese'],
      ['Egg Platter (3 Eggs)', 10.99, '3 eggs any style'],
      ['Turkish Sausage and Eggs', 12.99, 'Eggs any style with Turkish sausage'],
      ['Ground Beef and Eggs', 12.99, 'Eggs any style with ground beef'],
      ['Cheese Omelette', 10.99, 'Your choice of American, feta or cheddar cheese'],
      ['Vegetable Omelette', 11.99, 'Tomatoes, peppers, onions, broccoli and mushrooms'],
      ['Turkish Omelette', 12.99, 'Spinach, tomato, feta and black olives'],
      ['Turkish Breakfast Platter', 14.99, 'Turkish breakfast plate served with Turkish tea']
    ]
  },
  {
    id: 'quesadillas', name: 'Quesadillas', note: 'Served with French fries', items: [
      ['Chicken', 12.99],
      ['Steak', 13.99],
      ['Vegetable', 11.99],
      ['Cheese', 9.99]
    ]
  },
  {
    id: 'mains', name: 'Main Courses', note: 'All main courses are served with salad and rice', items: [
      ['Adana Kebab', 17.99, 'Spicy lamb skewer cooked over charcoal'],
      ['Grilled Chicken', 15.99, 'Charcoal-grilled chicken'],
      ['Doner (Gyro) Platter', 17.99],
      ['Meatball Platter', 15.99],
      ['Lamb Chops', 24.99, "Shepherd's beef sauté"],
      ['Efes Mixed Grill', 31.99, '2 meatballs, 2 wings, 1 Adana kebab, 1 lamb chop, 1 chicken cutlet'],
      ['Chicken Skewers', 15.99],
      ['Beef Stir Fry', 19.99],
      ['Chicken Stir Fry', 17.99],
      ['Beyti Kebab', 22.99],
      ['Lamb Skewers', 19.99],
      ['Ali Nazik', 23.99, 'Sautéed meat over eggplant yogurt puree'],
      ['Turkish Dumplings', 15.99],
      ['Grilled Wings (10)', 15.99],
      ['Casserole Meatballs', 17.99],
      ['Coban Kavurma', 20.99, 'Turkish-style sautéed beef'],
      ['Liver Saute', 17.99],
      ['Creamy Mushroom Chicken Casserole', 18.99],
      ['Sac Kebab (Beef or Chicken)', 20.99, 'Sautéed beef or chicken cubes with peppers and tomatoes'],
      ['Grilled Lamb Ribs', 23.99, 'Charcoal-grilled lamb ribs'],
      ["Chef's Daily Special", 14.99, "Ask your server for today's selection"]
    ]
  },
  {
    id: 'fish', name: 'Fish', note: "Chef's weekly selection of the freshest catch. Served with salad and seasonal vegetables.", items: [
      ['Sea Bream', 'Market Price'],
      ['Sea Bass', 'Market Price'],
      ['Whiting', 'Market Price'],
      ['Salmon', 'Market Price']
    ]
  },
  {
    id: 'oven', name: 'From the Oven', items: [
      ['Turkish Pizza - Lahmacun (1)', 4.99],
      ['Turkish Flatbread with Turkish Sausage', 17.99],
      ['Turkish Flatbread with Mozzarella', 14.99],
      ['Turkish Flatbread with Ground Beef', 17.99],
      ['Spinach & Feta Flatbread', 14.99],
      ['Turkish Flatbread with Braised Beef', 21.99],
      ['Everything Flatbread', 19.99, 'Pide with ground beef, cubed meat, Turkish sausage and mozzarella cheese'],
      ['Turkish Flatbread with Cubed Meat', 19.99, 'Pide with cubed meat'],
      ['Black Sea-Style Butter Flatbread', 15.99]
    ]
  },
  {
    id: 'desserts', name: 'Desserts', items: [
      ['Baklava', 4.99],
      ['Rice Pudding', 4.99],
      ['Turkish Caramelized Milk Pudding', 5.99],
      ['Tiramisu', 5.99],
      ['Cheesecake', 5.99],
      ['Candied Pumpkin Dessert', 4.99],
      ['Tres Leches Cake', 4.99],
      ['Turkish Semolina Cake', 4.99]
    ]
  },
  {
    id: 'beverages', name: 'Beverages', items: [
      ['Juice', 1.99],
      ['Bottled Water', 0.99],
      ['Soda', 1.99],
      ['Fermented Turnip Juice', 2.99],
      ['Yogurt Drink', 1.99],
      ['Red Bull', 2.99],
      ['Tea (Small)', 0.99],
      ['Tea (Large)', 1.99],
      ['Turkish Coffee', 2.99]
    ]
  }
];

/* ---------- 3. HELPERS ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const money = p => (typeof p === 'number' ? '$' + p.toFixed(2) : p);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ---------- 4. MENU RENDERING ---------- */
const tabsEl = $('#menu-tabs');
const contentEl = $('#menu-content');
const searchEl = $('#menu-search');
let activeCat = MENU[0].id;

function itemHTML([name, price, desc]) {
  return `
    <article class="item">
      <div class="item-top">
        <span class="item-name">${esc(name)}</span>
        <span class="item-dots" aria-hidden="true"></span>
        <span class="item-price">${money(price)}</span>
      </div>
      ${desc ? `<p class="item-desc">${esc(desc)}</p>` : ''}
    </article>`;
}

function categoryHTML(cat, items) {
  return `
    <section class="menu-category" aria-labelledby="cat-${cat.id}">
      <div class="cat-head">
        <h3 id="cat-${cat.id}">${esc(cat.name)}</h3>
        ${cat.note ? `<p class="cat-note">${esc(cat.note)}</p>` : ''}
      </div>
      <div class="items">${items.map(itemHTML).join('')}</div>
    </section>`;
}

function renderTabs() {
  tabsEl.innerHTML = MENU.map(c =>
    `<button class="tab${c.id === activeCat ? ' active' : ''}" role="tab" aria-selected="${c.id === activeCat}" data-cat="${c.id}">${esc(c.name)}</button>`
  ).join('');
}

function renderMenu() {
  const q = searchEl.value.trim().toLowerCase();

  if (q) {
    tabsEl.classList.add('dim');
    const results = MENU.map(cat => ({
      cat,
      items: cat.items.filter(([n, , d]) => n.toLowerCase().includes(q) || (d && d.toLowerCase().includes(q)))
    })).filter(r => r.items.length);

    contentEl.innerHTML = results.length
      ? results.map(r => categoryHTML(r.cat, r.items)).join('')
      : `<p class="empty">No dishes found for &ldquo;${esc(searchEl.value.trim())}&rdquo;. Try another word.</p>`;
    return;
  }

  tabsEl.classList.remove('dim');
  const cat = MENU.find(c => c.id === activeCat);
  contentEl.innerHTML = categoryHTML(cat, cat.items);
}

tabsEl.addEventListener('click', e => {
  const btn = e.target.closest('.tab');
  if (!btn) return;
  activeCat = btn.dataset.cat;
  searchEl.value = '';
  renderTabs();
  renderMenu();
  btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
});

let searchTimer;
searchEl.addEventListener('input', () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(renderMenu, 120);
});

renderTabs();
renderMenu();

/* ---------- 5. ORDER CARDS ---------- */
$('#order-grid').innerHTML = ORDER_LINKS.map(o => {
  const hasUrl = Boolean(o.url);
  const href = hasUrl ? o.url : PHONE_TEL;
  const ext = hasUrl ? ' target="_blank" rel="noopener noreferrer"' : '';
  return `
    <a class="order-card" href="${esc(href)}"${ext}>
      <span class="mark" style="background:${o.color}">${esc(o.mark)}</span>
      <h3>${esc(o.name)}</h3>
      <p>${esc(hasUrl ? o.note : 'Online ordering coming soon')}</p>
      <span class="go">${hasUrl ? 'Order now &rarr;' : 'Call to order &rarr;'}</span>
    </a>`;
}).join('');

/* ---------- 6. HOURS (optional) ---------- */
if (HOURS.length) {
  $('#hours-list').innerHTML = HOURS.map(([d, t]) =>
    `<div class="hours-row"><span>${esc(d)}</span><span>${esc(t)}</span></div>`).join('');
  $('#hours-item').hidden = false;
}

/* ---------- 7. NAV, HEADER, SCROLL EFFECTS ---------- */
const header = $('.site-header');
const nav = $('#main-nav');
const toggle = $('#nav-toggle');
const toTop = $('#to-top');

function setNav(open) {
  nav.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
}
toggle.addEventListener('click', () => setNav(!nav.classList.contains('open')));
nav.addEventListener('click', e => { if (e.target.closest('a')) setNav(false); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') setNav(false); });
window.addEventListener('resize', () => { if (window.innerWidth > 880) setNav(false); });

function onScroll() {
  const y = window.scrollY;
  header.classList.toggle('scrolled', y > 30);
  toTop.classList.toggle('show', y > 700);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* Highlight the nav link of the section in view */
const links = [...document.querySelectorAll('.main-nav a[href^="#"]')];
if ('IntersectionObserver' in window) {
  const sectionObs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  ['about', 'menu', 'order', 'visit'].forEach(id => { const s = document.getElementById(id); if (s) sectionObs.observe(s); });

  /* Reveal on scroll */
  const revealObs = new IntersectionObserver((entries, obs) => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('in'); obs.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = (i % 3) * 90 + 'ms';
    revealObs.observe(el);
  });
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
}

$('#year').textContent = new Date().getFullYear();
