'use strict';

/* ───────────────────────────────────────────────
   Cookiemonster Portfolio — SPA controller
   ─────────────────────────────────────────────── */

const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ── Sidebar toggle (mobile) ──────────────────── */
const sidebar = $('[data-sidebar]');
const sidebarBtn = $('[data-sidebar-btn]');
if (sidebar && sidebarBtn) {
    sidebarBtn.addEventListener('click', () => sidebar.classList.toggle('active'));
}

/* ── Page navigation ──────────────────────────── */
const navLinks = $$('[data-nav-link]');
const pages = $$('[data-page]');

function showPage(name) {
    pages.forEach(page => {
        const match = page.dataset.page === name;
        page.classList.toggle('active', match);
    });
    navLinks.forEach(link => {
        link.classList.toggle('active', link.textContent.trim().toLowerCase() === name);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (name === 'resume') animateSkills();
}

navLinks.forEach(link => {
    link.addEventListener('click', () => showPage(link.textContent.trim().toLowerCase()));
});

/* ── Skill bar animation ──────────────────────── */
let skillsAnimated = false;
function animateSkills() {
    if (skillsAnimated) return;
    skillsAnimated = true;
    $$('.skill-progress-fill').forEach(fill => {
        const target = fill.style.width;
        fill.style.setProperty('--target', target);
        // force reflow then apply
        requestAnimationFrame(() => {
            fill.style.width = '0';
            requestAnimationFrame(() => fill.classList.add('filled'));
        });
    });
}

/* ── Portfolio filtering ──────────────────────── */
const filterBtns = $$('[data-filter-btn]');
const filterItems = $$('[data-filter-item]');
const selectBtn = $('[data-select]');
const selectValue = $('[data-select-value]');
const selectList = $('.select-list');
const selectItems = $$('[data-select-item]');

function applyFilter(category) {
    const key = category.toLowerCase();
    filterItems.forEach(item => {
        const show = key === 'all' || item.dataset.category === key;
        item.classList.toggle('active', show);
    });
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        applyFilter(btn.textContent.trim());
    });
});

if (selectBtn && selectList) {
    selectBtn.addEventListener('click', () => {
        selectBtn.classList.toggle('active');
        selectList.classList.toggle('active');
    });
    selectItems.forEach(item => {
        item.addEventListener('click', () => {
            const value = item.textContent.trim();
            selectValue.textContent = value;
            selectBtn.classList.remove('active');
            selectList.classList.remove('active');
            applyFilter(value);
            // keep desktop pill row in sync
            filterBtns.forEach(b => b.classList.toggle('active', b.textContent.trim() === value));
        });
    });
}

/* ── Avatar lightbox ──────────────────────────── */
const avatarBtn = $('[data-avatar-btn]');
const lightbox = $('[data-lightbox]');
const lightboxClosers = $$('[data-lightbox-close]');

function openLightbox() {
    if (!lightbox) return;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
}
function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    document.body.style.overflow = '';
}
if (avatarBtn) avatarBtn.addEventListener('click', openLightbox);
lightboxClosers.forEach(el => el.addEventListener('click', closeLightbox));
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && lightbox && !lightbox.hidden) closeLightbox();
});

/* ── Blog: render markdown + expand/collapse ──── */
(function initBlog() {
    const dedent = text => {
        const lines = text.replace(/\t/g, '    ').split('\n');
        const nonEmpty = lines.filter(l => l.trim().length);
        if (!nonEmpty.length) return '';
        const indent = Math.min(...nonEmpty.map(l => (l.match(/^\s*/) || [''])[0].length));
        return lines.map(l => l.slice(indent)).join('\n').trim();
    };

    const parser = window.marked ? window.marked : { parse: t => `<p>${t}</p>` };
    const sanitize = (window.DOMPurify && typeof window.DOMPurify.sanitize === 'function')
        ? html => window.DOMPurify.sanitize(html)
        : html => html;
    if (window.marked && typeof window.marked.setOptions === 'function') {
        window.marked.setOptions({ gfm: true, breaks: false, headerIds: false, mangle: false });
    }

    $$('[data-post]').forEach(post => {
        const src = $('.post-markdown', post);
        const target = $('.markdown-body', post);
        const toggle = $('.post-toggle', post);
        const label = $('.post-toggle-label', post);
        const content = $('.post-content', post);
        if (src && target) target.innerHTML = sanitize(parser.parse(dedent(src.textContent || '')));

        toggle.addEventListener('click', () => {
            const expanded = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', String(!expanded));
            label.textContent = expanded ? 'expand' : 'collapse';
            content.hidden = expanded;
        });
    });
})();
