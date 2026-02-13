import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Data ────────────────────────────────────────────────────────────────────

const properties = [
  {
    id: 1,
    title: 'Пентхаус на Патриарших',
    price: '₽ 185 000 000',
    area: '280 м²',
    rooms: 5,
    type: 'Продажа',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop',
    location: 'Москва, Патриаршие пруды',
  },
  {
    id: 2,
    title: 'Лофт в историческом центре',
    price: '₽ 42 000 000',
    area: '145 м²',
    rooms: 3,
    type: 'Продажа',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
    location: 'Москва, Красный Октябрь',
  },
  {
    id: 3,
    title: 'Вилла с видом на море',
    price: '₽ 320 000 000',
    area: '450 м²',
    rooms: 7,
    type: 'Продажа',
    img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop',
    location: 'Сочи, Приморский район',
  },
  {
    id: 4,
    title: 'Апартаменты в Сити',
    price: '₽ 350 000 / мес',
    area: '95 м²',
    rooms: 2,
    type: 'Аренда',
    img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop',
    location: 'Москва, Москва-Сити',
  },
  {
    id: 5,
    title: 'Таунхаус в Барвихе',
    price: '₽ 95 000 000',
    area: '320 м²',
    rooms: 5,
    type: 'Продажа',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop',
    location: 'Московская обл., Барвиха',
  },
  {
    id: 6,
    title: 'Студия в Хамовниках',
    price: '₽ 180 000 / мес',
    area: '55 м²',
    rooms: 1,
    type: 'Аренда',
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop',
    location: 'Москва, Хамовники',
  },
]

const services = [
  { icon: '🏠', title: 'Покупка недвижимости', desc: 'Подберём идеальный объект под ваши требования и бюджет. Полное сопровождение сделки.' },
  { icon: '💰', title: 'Продажа недвижимости', desc: 'Профессиональная оценка, маркетинг и продажа вашего объекта по лучшей цене.' },
  { icon: '🔑', title: 'Аренда', desc: 'Элитная аренда квартир, апартаментов и загородных домов для требовательных клиентов.' },
  { icon: '🏦', title: 'Ипотечный брокеридж', desc: 'Подберём лучшие условия ипотеки среди 30+ банков-партнёров.' },
  { icon: '📋', title: 'Оценка недвижимости', desc: 'Независимая экспертная оценка рыночной стоимости объекта.' },
  { icon: '⚖️', title: 'Юридическое сопровождение', desc: 'Проверка юридической чистоты, подготовка документов, регистрация сделки.' },
]

const reviews = [
  { name: 'Александр К.', text: 'Благодаря VERTEX Estate нашли квартиру мечты за 2 недели. Профессиональный подход и внимание к деталям на высшем уровне.', rating: 5 },
  { name: 'Мария С.', text: 'Продали загородный дом по цене выше рыночной. Команда VERTEX сделала потрясающую фотосессию и презентацию объекта.', rating: 5 },
  { name: 'Дмитрий В.', text: 'Юридическое сопровождение на высоте — все документы были оформлены безупречно. Рекомендую!', rating: 5 },
]

const stats = [
  { value: '12+', label: 'лет на рынке' },
  { value: '3 500+', label: 'сделок закрыто' },
  { value: '₽ 98 млрд', label: 'объём продаж' },
  { value: '98%', label: 'довольных клиентов' },
]

const navLinks = [
  { label: 'Каталог', href: '#catalog' },
  { label: 'Услуги', href: '#services' },
  { label: 'О нас', href: '#about' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Контакты', href: '#contacts' },
]

// ─── Styles ──────────────────────────────────────────────────────────────────

const gold = '#c9a96e'
const darkBg = '#08080e'
const cardBg = 'rgba(255,255,255,0.03)'
const glassBorder = 'rgba(255,255,255,0.08)'

const glassCard = {
  background: cardBg,
  border: `1px solid ${glassBorder}`,
  backdropFilter: 'blur(20px)',
  borderRadius: '24px',
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function App() {
  const [filter, setFilter] = useState('Все')
  const [mobileMenu, setMobileMenu] = useState(false)

  const filtered = filter === 'Все' ? properties : properties.filter(p => p.type === filter)

  return (
    <div style={{ background: darkBg, minHeight: '100vh' }}>

      {/* ─── Header ─────────────────────────────────────────────── */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          background: 'rgba(8,8,14,0.85)', backdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${glassBorder}`,
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: 8 }}>
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 26, fontWeight: 700, color: 'white', letterSpacing: 2 }}>VERTEX</span>
            <span style={{ fontSize: 11, color: gold, letterSpacing: '0.25em', fontWeight: 500 }}>ESTATE</span>
          </a>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="hidden md:flex">
            {navLinks.map(l => (
              <a key={l.label} href={l.href} style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: 14, fontWeight: 500, transition: 'color 0.3s', letterSpacing: '0.02em' }}
                onMouseOver={e => e.target.style.color = gold}
                onMouseOut={e => e.target.style.color = '#a0a0a0'}>
                {l.label}
              </a>
            ))}
            <a href="#contacts" style={{
              background: `linear-gradient(135deg, ${gold}, #b8943f)`, color: '#0a0a0f', padding: '10px 28px',
              borderRadius: 50, fontSize: 13, fontWeight: 600, textDecoration: 'none', letterSpacing: '0.05em',
            }}>
              КОНСУЛЬТАЦИЯ
            </a>
          </nav>

          {/* Mobile burger */}
          <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}>
            <div style={{ width: 24, height: 2, background: 'white', marginBottom: 6, transition: 'all 0.3s', transform: mobileMenu ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <div style={{ width: 24, height: 2, background: 'white', marginBottom: 6, opacity: mobileMenu ? 0 : 1, transition: 'all 0.3s' }} />
            <div style={{ width: 24, height: 2, background: 'white', transition: 'all 0.3s', transform: mobileMenu ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden"
              style={{ overflow: 'hidden', background: 'rgba(8,8,14,0.95)', borderTop: `1px solid ${glassBorder}` }}
            >
              <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                {navLinks.map(l => (
                  <a key={l.label} href={l.href} onClick={() => setMobileMenu(false)}
                    style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: 16, fontWeight: 500 }}>
                    {l.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ─── Hero ───────────────────────────────────────────────── */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden', padding: '120px 24px 80px',
      }}>
        {/* Background image */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'brightness(0.25)',
        }} />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(180deg, ${darkBg} 0%, transparent 30%, transparent 70%, ${darkBg} 100%)`,
        }} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ position: 'relative', textAlign: 'center', maxWidth: 800 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ color: gold, fontSize: 13, letterSpacing: '0.35em', fontWeight: 500, display: 'block', marginBottom: 24 }}
          >
            ПРЕМИАЛЬНАЯ НЕДВИЖИМОСТЬ В МОСКВЕ И СОЧИ
          </motion.span>

          <h1 style={{
            fontFamily: 'Playfair Display, serif', fontSize: 'clamp(36px, 6vw, 72px)',
            fontWeight: 600, lineHeight: 1.1, marginBottom: 24, color: 'white',
          }}>
            Найдите дом
            <br />
            <span style={{ color: gold }}>вашей мечты</span>
          </h1>

          <p style={{ color: '#a0a0a0', fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: 1.7, marginBottom: 48, maxWidth: 560, margin: '0 auto 48px' }}>
            Более 12 лет мы помогаем клиентам находить идеальную недвижимость.
            Индивидуальный подход, эксклюзивные объекты, безупречный сервис.
          </p>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#catalog" style={{
              background: `linear-gradient(135deg, ${gold}, #b8943f)`, color: '#0a0a0f',
              padding: '16px 40px', borderRadius: 50, fontSize: 14, fontWeight: 600,
              textDecoration: 'none', letterSpacing: '0.08em', transition: 'transform 0.3s, box-shadow 0.3s',
            }}
              onMouseOver={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = `0 12px 40px ${gold}44` }}
              onMouseOut={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none' }}
            >
              СМОТРЕТЬ КАТАЛОГ
            </a>
            <a href="#contacts" style={{
              border: `1px solid ${gold}`, color: gold,
              padding: '16px 40px', borderRadius: 50, fontSize: 14, fontWeight: 600,
              textDecoration: 'none', letterSpacing: '0.08em', transition: 'all 0.3s',
            }}
              onMouseOver={e => { e.target.style.background = `${gold}15`; e.target.style.transform = 'translateY(-2px)' }}
              onMouseOut={e => { e.target.style.background = 'transparent'; e.target.style.transform = 'translateY(0)' }}
            >
              ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
            </a>
          </div>
        </motion.div>
      </section>

      {/* ─── Stats bar ──────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: 1100, margin: '-60px auto 0', padding: '0 24px', position: 'relative', zIndex: 10 }}
      >
        <div style={{
          ...glassCard, padding: '40px 20px',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20, textAlign: 'center',
        }}>
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: gold }}>{s.value}</div>
              <div style={{ color: '#808080', fontSize: 13, marginTop: 6, letterSpacing: '0.05em' }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ─── Catalog ────────────────────────────────────────────── */}
      <motion.section
        id="catalog"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: 1280, margin: '0 auto', padding: '100px 24px 80px' }}
      >
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <span style={{ color: gold, fontSize: 13, letterSpacing: '0.3em', fontWeight: 500 }}>ОБЪЕКТЫ</span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 600, color: 'white', marginTop: 10 }}>
            Каталог недвижимости
          </h2>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 40, flexWrap: 'wrap' }}>
          {['Все', 'Продажа', 'Аренда'].map(f => (
            <button key={f} onClick={() => setFilter(f)}
              style={{
                padding: '10px 28px', borderRadius: 50, fontSize: 13, fontWeight: 600,
                cursor: 'pointer', transition: 'all 0.3s', letterSpacing: '0.05em',
                border: filter === f ? 'none' : `1px solid ${glassBorder}`,
                background: filter === f ? `linear-gradient(135deg, ${gold}, #b8943f)` : 'transparent',
                color: filter === f ? '#0a0a0f' : '#a0a0a0',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Property grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: 24 }}>
          <AnimatePresence mode="popLayout">
            {filtered.map(p => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                style={{ ...glassCard, overflow: 'hidden', cursor: 'pointer', transition: 'border-color 0.3s' }}
                onMouseOver={e => e.currentTarget.style.borderColor = `${gold}44`}
                onMouseOut={e => e.currentTarget.style.borderColor = glassBorder}
              >
                <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/2' }}>
                  <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                    onMouseOver={e => e.target.style.transform = 'scale(1.08)'}
                    onMouseOut={e => e.target.style.transform = 'scale(1)'} />
                  <span style={{
                    position: 'absolute', top: 16, left: 16,
                    background: p.type === 'Продажа' ? `linear-gradient(135deg, ${gold}, #b8943f)` : 'linear-gradient(135deg, #4a90d9, #357abd)',
                    color: 'white', padding: '6px 16px', borderRadius: 50, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
                  }}>
                    {p.type.toUpperCase()}
                  </span>
                </div>
                <div style={{ padding: '24px 28px' }}>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 20, fontWeight: 600, marginBottom: 8, color: 'white' }}>{p.title}</h3>
                  <p style={{ color: '#808080', fontSize: 13, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#808080" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {p.location}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, borderTop: `1px solid ${glassBorder}` }}>
                    <span style={{ color: gold, fontFamily: 'Playfair Display, serif', fontSize: 18, fontWeight: 600 }}>{p.price}</span>
                    <div style={{ display: 'flex', gap: 16, color: '#808080', fontSize: 13 }}>
                      <span>{p.area}</span>
                      <span>{p.rooms} комн.</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.section>

      {/* ─── Services ───────────────────────────────────────────── */}
      <motion.section
        id="services"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 24px' }}
      >
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <span style={{ color: gold, fontSize: 13, letterSpacing: '0.3em', fontWeight: 500 }}>ЧТО МЫ ДЕЛАЕМ</span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 600, color: 'white', marginTop: 10 }}>
            Наши услуги
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ ...glassCard, padding: '36px 32px', transition: 'border-color 0.3s, transform 0.3s' }}
              onMouseOver={e => { e.currentTarget.style.borderColor = `${gold}44`; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseOut={e => { e.currentTarget.style.borderColor = glassBorder; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <div style={{ fontSize: 36, marginBottom: 16 }}>{s.icon}</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 20, fontWeight: 600, marginBottom: 12, color: 'white' }}>{s.title}</h3>
              <p style={{ color: '#808080', fontSize: 14, lineHeight: 1.7 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ─── About ──────────────────────────────────────────────── */}
      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 24px' }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 60, alignItems: 'center' }}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ borderRadius: 24, overflow: 'hidden', aspectRatio: '4/3' }}
          >
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&h=500&fit=crop" alt="Офис VERTEX Estate"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span style={{ color: gold, fontSize: 13, letterSpacing: '0.3em', fontWeight: 500 }}>О КОМПАНИИ</span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 600, color: 'white', marginTop: 10, marginBottom: 24 }}>
              Мы создаём будущее<br />рынка недвижимости
            </h2>
            <p style={{ color: '#a0a0a0', fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>
              VERTEX Estate — это команда из 45+ профессионалов с глубокой экспертизой в премиальном сегменте недвижимости.
              Мы работаем с 2012 года и за это время помогли тысячам клиентов найти идеальный дом, выгодно продать или арендовать недвижимость.
            </p>
            <p style={{ color: '#a0a0a0', fontSize: 15, lineHeight: 1.8, marginBottom: 32 }}>
              Наши принципы — прозрачность, индивидуальный подход и безупречное качество сервиса.
              Каждый клиент для нас — это долгосрочное партнёрство, основанное на доверии.
            </p>
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
              {[
                { val: '45+', lab: 'экспертов в команде' },
                { val: '15', lab: 'наград индустрии' },
              ].map((item, i) => (
                <div key={i}>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 32, fontWeight: 700, color: gold }}>{item.val}</div>
                  <div style={{ color: '#808080', fontSize: 13, marginTop: 4 }}>{item.lab}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ─── Reviews ────────────────────────────────────────────── */}
      <motion.section
        id="reviews"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 24px' }}
      >
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <span style={{ color: gold, fontSize: 13, letterSpacing: '0.3em', fontWeight: 500 }}>ОТЗЫВЫ</span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 600, color: 'white', marginTop: 10 }}>
            Что говорят клиенты
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              style={{ ...glassCard, padding: '36px 32px' }}
            >
              <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
                {Array.from({ length: r.rating }).map((_, j) => (
                  <svg key={j} width="18" height="18" viewBox="0 0 24 24" fill={gold}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
              <p style={{ color: '#c0c0c0', fontSize: 15, lineHeight: 1.7, marginBottom: 24, fontStyle: 'italic' }}>
                &ldquo;{r.text}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${gold}, #b8943f)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#0a0a0f', fontWeight: 700, fontSize: 16,
                }}>
                  {r.name[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15, color: 'white' }}>{r.name}</div>
                  <div style={{ color: '#808080', fontSize: 12 }}>Клиент VERTEX Estate</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ─── Contacts / CTA ─────────────────────────────────────── */}
      <motion.section
        id="contacts"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 24px 100px' }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 40 }}>
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span style={{ color: gold, fontSize: 13, letterSpacing: '0.3em', fontWeight: 500 }}>КОНТАКТЫ</span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 600, color: 'white', marginTop: 10, marginBottom: 32 }}>
              Свяжитесь с нами
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[
                { icon: '📍', label: 'Адрес', value: 'Москва, Пресненская наб., 12, Башня Федерация' },
                { icon: '📞', label: 'Телефон', value: '+7 (495) 123-45-67' },
                { icon: '✉️', label: 'Email', value: 'info@vertex-estate.ru' },
                { icon: '🕐', label: 'Время работы', value: 'Пн–Пт: 9:00–21:00 | Сб–Вс: 10:00–18:00' },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 16,
                    background: `${gold}15`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 20, flexShrink: 0,
                  }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ color: '#808080', fontSize: 12, marginBottom: 4, letterSpacing: '0.05em' }}>{c.label}</div>
                    <div style={{ color: 'white', fontSize: 15 }}>{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div style={{ ...glassCard, padding: '40px 36px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 24, fontWeight: 600, color: 'white', marginBottom: 8 }}>
                Получить консультацию
              </h3>
              <p style={{ color: '#808080', fontSize: 14, marginBottom: 28, lineHeight: 1.6 }}>
                Оставьте заявку и наш эксперт свяжется с вами в течение 15 минут
              </p>

              <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { placeholder: 'Ваше имя', type: 'text' },
                  { placeholder: '+7 (___) ___-__-__', type: 'tel' },
                  { placeholder: 'Email', type: 'email' },
                ].map((inp, i) => (
                  <input key={i} type={inp.type} placeholder={inp.placeholder}
                    style={{
                      background: 'rgba(255,255,255,0.05)', border: `1px solid ${glassBorder}`,
                      borderRadius: 16, padding: '14px 20px', color: 'white', fontSize: 14,
                      outline: 'none', transition: 'border-color 0.3s',
                    }}
                    onFocus={e => e.target.style.borderColor = gold}
                    onBlur={e => e.target.style.borderColor = glassBorder}
                  />
                ))}

                <select style={{
                  background: 'rgba(255,255,255,0.05)', border: `1px solid ${glassBorder}`,
                  borderRadius: 16, padding: '14px 20px', color: '#a0a0a0', fontSize: 14,
                  outline: 'none', appearance: 'none', cursor: 'pointer',
                }}>
                  <option value="">Что вас интересует?</option>
                  <option value="buy">Покупка недвижимости</option>
                  <option value="sell">Продажа недвижимости</option>
                  <option value="rent">Аренда</option>
                  <option value="consult">Консультация</option>
                </select>

                <button type="submit" style={{
                  background: `linear-gradient(135deg, ${gold}, #b8943f)`, color: '#0a0a0f',
                  border: 'none', padding: '16px', borderRadius: 16, fontSize: 14,
                  fontWeight: 700, cursor: 'pointer', letterSpacing: '0.08em',
                  transition: 'transform 0.3s, box-shadow 0.3s', marginTop: 8,
                }}
                  onMouseOver={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = `0 12px 40px ${gold}44` }}
                  onMouseOut={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none' }}
                >
                  ОТПРАВИТЬ ЗАЯВКУ
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ─── Footer ─────────────────────────────────────────────── */}
      <footer style={{ borderTop: `1px solid ${glassBorder}`, padding: '40px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 8 }}>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 20, fontWeight: 700, color: 'white', letterSpacing: 2 }}>VERTEX</span>
              <span style={{ fontSize: 10, color: gold, letterSpacing: '0.25em', fontWeight: 500 }}>ESTATE</span>
            </div>
            <div style={{ color: '#606060', fontSize: 12 }}>&copy; 2024 VERTEX Estate. Все права защищены.</div>
          </div>

          <div style={{ display: 'flex', gap: 24 }}>
            {navLinks.map(l => (
              <a key={l.label} href={l.href} style={{ color: '#606060', textDecoration: 'none', fontSize: 13, transition: 'color 0.3s' }}
                onMouseOver={e => e.target.style.color = gold}
                onMouseOut={e => e.target.style.color = '#606060'}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>

    </div>
  )
}
