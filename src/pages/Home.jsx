import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO'; // New SEO Component
import { BookOpen, Calendar, Clock, MapPin, PhoneCall, Check, MessageSquare, Star, Award, TrendingUp, HelpCircle, Triangle, Box } from 'lucide-react';
import CountUp from '../components/CountUp';
import StickyCTA from '../components/StickyCTA';
import DirectorIntro from '../components/DirectorIntro';
import SuccessReviews from '../components/SuccessReviews';
import ParentFAQ from '../components/ParentFAQ';

// Fade Up Animation Variant
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } // Apple-style Ease
};

// Floating Animation for Background Elements
const floating = {
    animate: {
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

const Home = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    // Hero Slideshow Logic
    const [currentBgIndex, setCurrentBgIndex] = useState(0);
    const heroImages = [
        '/images/hero_bg_students.png',
        '/images/students.png',
        '/images/evidence.png'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBgIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <SEO />
            <Header />
            <div style={{ paddingTop: '100px' }}> {/* Wrapper to push content below fixed header */}
            </div>

            <main className="bg-math-grid" style={{ fontFamily: '"Pretendard", sans-serif', overflowX: 'hidden' }}>

                {/* 1. Hero: Centerede & Impactful - Full Screen */}
                <section
                    style={{
                        backgroundColor: 'transparent',
                        minHeight: '100vh',
                        paddingTop: '80px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        borderBottom: '1px solid var(--border-color)',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden' // Contain floating elements
                    }}
                >
                    {/* Abstract 3D-like Background Elements (Silicon Valley Logic) */}
                    <div className="desktop-only" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                        {/* Premium 3D Background */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '120%',
                            height: '120%',
                            backgroundImage: 'url(/images/hero_3d.png)',
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            opacity: 0.8,
                            filter: 'blur(30px) saturate(1.2)', /* Background Ambience */
                        }}></div>

                        {/* Sharp 3D Floating Element (Parallax feel) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            style={{
                                position: 'absolute',
                                top: '10%',
                                right: '5%',
                                width: '600px',
                                height: '600px',
                                backgroundImage: 'url(/images/hero_3d.png)',
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                zIndex: 0,
                                filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.3))'
                            }}
                            animate={{
                                y: [0, -20, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </div>

                    <div className="container" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 10 }}>
                        <div style={{ maxWidth: '900px', textAlign: 'center' }}>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.2, // Stagger timing
                                            delayChildren: 0.1
                                        }
                                    }
                                }}
                            >
                                <motion.div variants={fadeInUp}>
                                    <span className="badge-pill badge-gold" style={{ marginBottom: '24px', display: 'inline-block', fontSize: '16px', padding: '10px 24px' }}>
                                        부산 동래구 명장동 / 안락동
                                    </span>
                                </motion.div>

                                <motion.h1 variants={fadeInUp} className="hero-title" style={{
                                    fontSize: 'clamp(24px, 5vw, 42px)', // Reduced size
                                    fontWeight: '600',
                                    marginBottom: '20px',
                                    lineHeight: '1.3',
                                    letterSpacing: '-0.02em',
                                    color: 'var(--text-sub)', // Slightly softer color
                                    textShadow: 'none'
                                }}>
                                    더 이상 수학 때문에<br />
                                    <span style={{ position: 'relative', display: 'inline-block' }}>
                                        꿈을 포기하지 않도록.
                                    </span>
                                </motion.h1>

                                <motion.p variants={fadeInUp} className="hero-desc" style={{
                                    fontSize: 'clamp(36px, 7vw, 64px)', // Increased size (Main Impact)
                                    fontWeight: '900',
                                    marginBottom: '50px',
                                    color: 'var(--text-main)',
                                    lineHeight: '1.2',
                                    wordBreak: 'keep-all',
                                    letterSpacing: '-0.03em',
                                    textShadow: '0 0 40px rgba(255,255,255,0.8)'
                                }}>
                                    결과를 바꾸는<br className="mobile-only" /> <span style={{ color: 'var(--primary-blue)' }}>디테일의 차이</span>, 해냄수학.
                                </motion.p>

                                <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                    <a href="#contact" className="btn-interaction" style={{
                                        backgroundColor: 'var(--primary-blue)',
                                        color: 'white',
                                        padding: '22px 56px',
                                        borderRadius: '50px',
                                        fontWeight: '700',
                                        fontSize: '20px',
                                        boxShadow: '0 20px 40px -10px rgba(26, 86, 219, 0.5)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        border: '1px solid rgba(255,255,255,0.2)'
                                    }}>
                                        <MessageSquare size={24} fill="currentColor" />
                                        무료 레벨테스트 신청
                                    </a>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                    {/* Hall Of Fame - Docked at Bottom of Hero */}
                    {/* Hall Of Fame Removed */}
                </section>

                {/* [NEW] Director's Philosophy */}
                <div id="intro" style={{ scrollMarginTop: '100px' }}>
                    <DirectorIntro />
                </div>

                {/* 2. Happy Memories (Portfolio) - Moved to bottom */}

                {/* [NEW] Real Success Reviews - Moved Up for Trust Flow */}
                <div id="success">
                    <SuccessReviews />
                </div>

                {/* 3. Management System (Timeline Style) */}
                <motion.section
                    id="management"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="section-padding"
                    style={{ backgroundColor: 'var(--bg-section)' }}
                >
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">독한 관리 시스템</h2>
                            <p className="section-subtitle">학원에 들어오는 순간부터 나가는 순간까지 빈틈없이 관리합니다.</p>
                        </div>

                        <div className="responsive-grid-4" style={{ position: 'relative' }}>
                            {/* Connecting Line (Desktop) */}
                            <div className="desktop-only" style={{
                                position: 'absolute',
                                top: '40px',
                                left: '50px',
                                right: '50px',
                                height: '2px',
                                background: 'linear-gradient(90deg, var(--primary-blue), var(--accent-gold))',
                                opacity: 0.3,
                                zIndex: 0
                            }}></div>

                            {[
                                { time: "01", title: "출석 & 반납", desc: "등원 즉시 학부모님께 문자 전송 & 휴대폰 반납", icon: <Clock size={24} /> },
                                { time: "02", title: "일일 테스트", desc: "지난 시간 배운 내용 확인 (80점 미만 재시험)", icon: <Check size={24} /> },
                                { time: "03", title: "1:1 맞춤 수업", desc: "개별 진도 및 수준별 맞춤 교재 심층 학습", icon: <BookOpen size={24} /> },
                                { time: "04", title: "오답 클리닉", desc: "틀린 문제 선생님께 역설명 통과 시 하원", icon: <MessageSquare size={24} /> }
                            ].map((item, idx) => (
                                <div key={idx} className="premium-card" style={{ padding: '30px', position: 'relative', overflow: 'hidden', backgroundColor: 'white', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        backgroundColor: idx % 2 === 0 ? '#EFF6FF' : '#FFFBEB',
                                        color: idx % 2 === 0 ? 'var(--primary-blue)' : 'var(--accent-gold)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontWeight: '800', fontSize: '18px',
                                        boxShadow: 'var(--shadow-sm)'
                                    }}>
                                        {item.time}
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '20px', marginBottom: '8px', fontWeight: '800' }}>{item.title}</h3>
                                        <p style={{ color: 'var(--text-sub)', lineHeight: '1.5', fontSize: '15px' }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* 3. Curriculum (Course Catalog Style) */}
                <motion.section
                    id="curriculum"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="section-padding"
                    style={{ backgroundColor: 'transparent' }}
                >
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">등급을 바꾸는 결정적 로드맵</h2>
                            <p className="section-subtitle">지금 우리 아이에게 필요한 것은 '더 많은 수업'이 아니라 '정확한 전략'입니다.</p>
                        </div>

                        <div className="responsive-grid-3">
                            {/* Course 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1, duration: 0.5 }}
                            >
                                <Link to="/curriculum/basic" className="premium-card" style={{ display: 'block', cursor: 'pointer', textDecoration: 'none', color: 'inherit', height: '100%' }}>
                                    <div style={{ padding: '30px', borderBottom: '1px solid var(--border-color)', background: '#F8FAFC' }}>
                                        <div className="badge-pill badge-gold" style={{ marginBottom: '12px' }}>기초 부족 학생 추천</div>
                                        <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>개념 완성반</h3>
                                        <p style={{ fontSize: '15px', color: '#64748B' }}>수학에 대한 거부감을 없애고 기본기를 다집니다.</p>
                                    </div>
                                    <div style={{ padding: '30px' }}>
                                        <div style={{ fontSize: '13px', fontWeight: '700', color: '#94A3B8', marginBottom: '12px', textTransform: 'uppercase' }}>Main Textbooks</div>
                                        <div className="textbook-tag-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '30px' }}>
                                            <span className="textbook-tag tag-school">개념+유형</span>
                                            <span className="textbook-tag tag-school">라이트쎈</span>
                                            <span className="textbook-tag tag-school">자체 프린트</span>
                                        </div>
                                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '15px', color: 'var(--text-sub)' }}>
                                            <li style={{ display: 'flex', gap: '10px' }}><Check size={18} color="var(--primary-blue)" /> <span>교과서 핵심 개념 정리</span></li>
                                            <li style={{ display: 'flex', gap: '10px' }}><Check size={18} color="var(--primary-blue)" /> <span>연산 및 기초 유형 반복</span></li>
                                            <li style={{ display: 'flex', gap: '10px' }}><Check size={18} color="var(--primary-blue)" /> <span>학교 수행평가 전담 관리</span></li>
                                        </ul>
                                    </div>
                                </Link>
                            </motion.div>

                            {/* Course 2 (Featured) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                whileHover={{ y: -8 }} /* Added Hover Effect */
                            >
                                <Link to="/curriculum/standard" className="premium-card" style={{
                                    borderColor: 'var(--primary-blue)',
                                    transform: 'scale(1.02)', /* Base scale */
                                    boxShadow: 'var(--shadow-card)',
                                    display: 'block',
                                    cursor: 'pointer',
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    height: '100%',
                                    transition: 'all 0.3s ease' /* Smooth transition */
                                }}>
                                    <div style={{ background: 'var(--primary-blue)', color: 'white', textAlign: 'center', padding: '8px', fontSize: '13px', fontWeight: '700' }}>MOST POPULAR</div>
                                    <div style={{ padding: '30px', borderBottom: '1px solid var(--border-color)' }}>
                                        <div className="badge-pill badge-blue" style={{ marginBottom: '12px' }}>중상위권 도약</div>
                                        <h3 style={{ fontSize: '24px', marginBottom: '8px', color: 'var(--primary-blue)' }}>내신 만점반</h3>
                                        <p style={{ fontSize: '15px', color: '#64748B' }}>유형별 문제 해결력을 기르고 고난도 문제에 도전합니다.</p>
                                    </div>
                                    <div style={{ padding: '30px' }}>
                                        <div style={{ fontSize: '13px', fontWeight: '700', color: '#94A3B8', marginBottom: '12px', textTransform: 'uppercase' }}>Main Textbooks</div>
                                        <div className="textbook-tag-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '30px' }}>
                                            <span className="textbook-tag tag-essen">쎈 (B/C)</span>
                                            <span className="textbook-tag tag-essen">RPM</span>
                                            <span className="textbook-tag tag-school">학교별 기출</span>
                                        </div>
                                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '15px', color: 'var(--text-main)', fontWeight: '500' }}>
                                            <li style={{ display: 'flex', gap: '10px' }}><Check size={18} color="var(--primary-blue)" /> <span>필수 유형 완전 정복</span></li>
                                            <li style={{ display: 'flex', gap: '10px' }}><Check size={18} color="var(--primary-blue)" /> <span>서술형 답안 작성 훈련</span></li>
                                            <li style={{ display: 'flex', gap: '10px' }}><Check size={18} color="var(--primary-blue)" /> <span>오답 노트 & 유사 문제 체화</span></li>
                                        </ul>
                                    </div>
                                </Link>
                            </motion.div>

                            {/* Course 3 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                whileHover={{ y: -5 }}
                            >
                                <Link to="/curriculum/advanced" className="premium-card" style={{ display: 'block', cursor: 'pointer', textDecoration: 'none', color: 'inherit', height: '100%' }}>
                                    <div style={{ padding: '30px', borderBottom: '1px solid var(--border-color)', background: '#F8FAFC' }}>
                                        <div className="badge-pill badge-black" style={{ marginBottom: '12px' }}>최상위권 목표</div>
                                        <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>심화 1등급반</h3>
                                        <p style={{ fontSize: '15px', color: '#64748B' }}>킬러 문항을 정복하고 흔들리지 않는 1등급을 만듭니다.</p>
                                    </div>
                                    <div style={{ padding: '30px' }}>
                                        <div style={{ fontSize: '13px', fontWeight: '700', color: '#94A3B8', marginBottom: '12px', textTransform: 'uppercase' }}>Main Textbooks</div>
                                        <div className="textbook-tag-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '30px' }}>
                                            <span className="textbook-tag tag-black">블랙라벨</span>
                                            <span className="textbook-tag tag-black">일품</span>
                                            <span className="textbook-tag tag-black">고쟁이</span>
                                        </div>
                                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '15px', color: 'var(--text-sub)' }}>
                                            <li style={{ display: 'flex', gap: '10px' }}><Check size={18} color="var(--primary-blue)" /> <span>심화 개념 & 킬러 문항 분석</span></li>
                                            <li style={{ display: 'flex', gap: '10px' }}><Check size={18} color="var(--primary-blue)" /> <span>모의고사 기출 변형 풀이</span></li>
                                            <li style={{ display: 'flex', gap: '10px' }}><Check size={18} color="var(--primary-blue)" /> <span>1:1 프리미엄 첨삭</span></li>
                                        </ul>
                                    </div>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* 2. Happy Memories (Portfolio) */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    style={{ padding: '80px 0', backgroundColor: 'var(--bg-section)' }}
                > {/* Soft Blue instead of Yellow */}
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">웃으면서 공부하는 아이들</h2>
                            <p className="section-subtitle">"수학 학원이 재밌어요!" 아이들의 밝은 표정이 해냄수학의 가장 큰 자랑입니다.</p>
                        </div>

                        <div style={{
                            maxWidth: '1000px',
                            margin: '0 auto',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-float)',
                            border: '8px solid white',
                            backgroundColor: 'white'
                        }}>
                            <img
                                src="/images/memories.jpg"
                                alt="해냄수학 아이들의 즐거운 모습"
                                style={{ width: '100%', display: 'block' }}
                            />
                            <div style={{ padding: '40px', backgroundColor: 'white', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--text-main)' }}>"작은 성취가 모여 큰 꿈이 됩니다"</h3>
                                <p style={{ fontSize: '16px', color: 'var(--text-sub)', lineHeight: '1.8' }}>
                                    시험 기간엔 치열하게 공부하지만, 평소엔 간식도 나눠 먹고 장난도 치며<br />
                                    선생님과 아이들이 <strong>가족처럼 지내는 따뜻한 학원</strong>입니다.<br />
                                    아이들이 학원 오는 발걸음이 즐거워야 성적도 오릅니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* [NEW] FAQ Section */}
                <ParentFAQ />

                {/* 4. Contact & Location (Solid Box) */}
                <motion.section
                    id="contact"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    style={{ padding: '80px 0', backgroundColor: 'var(--bg-section)' }}
                >
                    <div className="container">
                        <div className="premium-card contact-grid" style={{ padding: '0', background: 'white', overflow: 'hidden', display: 'flex' }}>
                            {/* Left: Info */}
                            <div style={{ padding: '50px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <h3 style={{ fontSize: '32px', marginBottom: '20px', fontWeight: '800' }}>궁금한 점이 있으신가요?</h3>
                                <p style={{ fontSize: '18px', color: 'var(--text-sub)', marginBottom: '40px', wordBreak: 'keep-all', lineHeight: '1.6' }}>
                                    원장님이 직접 친절하게 상담해 드립니다.<br className="desktop-only" />
                                    부담 없이 연락 주셔서<br className="mobile-only" /> 우리 아이 성적 고민을 털어놓으세요.
                                </p>
                                <div className="contact-info-row" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                                    <div className="interactive-area">
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '4px', letterSpacing: '0.05em' }}>CONSULTATION</div>
                                        <div style={{ fontSize: '26px', fontWeight: '800', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '12px', letterSpacing: '-0.02em' }}>
                                            <PhoneCall size={28} color="var(--primary-blue)" /> 010.7376.6040
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '4px', letterSpacing: '0.05em' }}>LOCATION</div>
                                        <div style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '12px', letterSpacing: '-0.02em' }}>
                                            <MapPin size={28} color="var(--primary-blue)" /> 부산 명장로127번길 10
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Map Image (Static) */}
                            <div
                                style={{
                                    flex: '1',
                                    minHeight: '400px',
                                    background: '#F8FAFC',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                <img
                                    src="/images/map_preview.png"
                                    alt="학원 위치 지도"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                                {/* Location Label Overlay */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '20px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: 'white',
                                    padding: '10px 20px',
                                    borderRadius: '30px',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                    fontWeight: '700',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontSize: '14px',
                                    color: 'var(--text-main)'
                                }}>
                                    <MapPin size={16} fill="var(--primary-blue)" color="var(--primary-blue)" />
                                    부산 동래구 명장로127번길 10, 4층
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                <StickyCTA />

                {/* Mobile Bar */}
                <div style={{
                    position: 'fixed', bottom: 0, left: 0, right: 0,
                    backgroundColor: 'white', borderTop: '1px solid #E2E8F0',
                    padding: '12px 20px 30px', display: 'flex', gap: '10px',
                    zIndex: 100, boxShadow: '0 -4px 6px -1px rgba(0,0,0,0.05)',
                    display: 'none'
                }} className="mobile-only-bar">
                    <a href="tel:01073766040" style={{ flex: 1, backgroundColor: 'var(--primary-blue)', color: 'white', textAlign: 'center', padding: '14px', borderRadius: '8px', fontWeight: '700' }}>전화걸기</a>
                    <a href="sms:01073766040" style={{ flex: 1, backgroundColor: '#F1F5F9', color: '#1E293B', textAlign: 'center', padding: '14px', borderRadius: '8px', fontWeight: '700', border: '1px solid #E2E8F0' }}>문자문의</a>
                </div>
            </main >
            <Footer />
        </>
    );
};

export default Home;
