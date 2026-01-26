import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BookOpen, Calendar, Clock, MapPin, PhoneCall, Check, MessageSquare, Star, Award, TrendingUp } from 'lucide-react';
import CountUp from '../components/CountUp';
import HallOfFame from '../components/HallOfFame';
import StickyCTA from '../components/StickyCTA';
import DirectorIntro from '../components/DirectorIntro';
import SuccessReviews from '../components/SuccessReviews';
import ParentFAQ from '../components/ParentFAQ';

// Fade Up Animation Variant
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Home = () => {
    return (
        <>
            <Header />
            <div style={{ paddingTop: '100px' }}> {/* Wrapper to push content below fixed header */}
            </div>

            <main className="bg-math-grid" style={{ fontFamily: '"Pretendard", sans-serif' }}>


                {/* 0. Urgent Notice Removed as per request */}

                {/* 1. Hero: Centerede & Impactful - Full Screen */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    style={{
                        backgroundColor: 'transparent',
                        minHeight: '100vh', /* Full viewport height */
                        paddingTop: '100px', /* Account for header */
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottom: '1px solid var(--border-color)',
                        textAlign: 'center',
                        position: 'relative'
                    }}
                >
                    <div className="container">
                        <motion.div style={{ maxWidth: '800px', margin: '0 auto' }}>
                            <div className="badge-pill badge-blue" style={{ marginBottom: '24px', display: 'inline-flex' }}>부산 명장동 수학 전문</div>
                            <h1 style={{ fontSize: '56px', marginBottom: '30px', color: 'var(--text-main)', lineHeight: '1.3', letterSpacing: '-0.04em' }}>
                                수학의 완성은 수식이 아닌<br />
                                <span style={{ color: 'var(--primary-blue)', textDecoration: 'underline', textDecorationThickness: '5px', textUnderlineOffset: '10px' }}>문해력</span>에서 시작됩니다.
                            </h1>
                            <p style={{ fontSize: '22px', color: 'var(--text-sub)', lineHeight: '1.8', marginBottom: '60px', fontWeight: '500' }}>
                                개념을 읽고 이해하는 힘이 문제 해결력의 본질입니다.<br />
                                <strong>결국 스스로 해내는 힘 (HAENAM)</strong>을 기를 때까지,<br />
                                엄마의 마음으로 끝까지 함께하겠습니다.
                            </p>

                            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                                <a href="#contact" className="btn-interaction" style={{
                                    backgroundColor: 'var(--primary-blue)',
                                    color: 'white',
                                    padding: '20px 50px',
                                    borderRadius: '50px',
                                    fontWeight: '700',
                                    fontSize: '20px',
                                    boxShadow: '0 10px 20px -5px rgba(37, 99, 235, 0.4)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}>
                                    <MessageSquare size={24} fill="currentColor" />
                                    카카오톡 상담 문의
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Overlapping Hall of Fame - Glass Bar */}
                <div style={{ position: 'relative', marginTop: '-52px', zIndex: 20 }}>
                    <HallOfFame />
                </div>

                {/* [NEW] Director's Philosophy */}
                <DirectorIntro />

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
                    style={{ padding: '100px 0', backgroundColor: 'var(--bg-section)' }}
                >
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">독한 관리 시스템</h2>
                            <p className="section-subtitle">학원에 들어오는 순간부터 나가는 순간까지 빈틈없이 관리합니다.</p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
                            {[
                                { time: "STEP 01", title: "출석 확인", desc: "등원 즉시 학부모님께 문자 전송 & 휴대폰 반납" },
                                { time: "STEP 02", title: "일일 테스트", desc: "지난 시간 배운 내용 확인 (80점 미만 재시험)" },
                                { time: "STEP 03", title: "1:1 수업", desc: "개별 진도 및 수준별 맞춤 교재 학습" },
                                { time: "STEP 04", title: "오답 클리닉", desc: "틀린 문제 선생님께 역설명 통과 시 하원" }
                            ].map((item, idx) => (
                                <div key={idx} className="premium-card" style={{ padding: '40px 30px', position: 'relative', overflow: 'hidden' }}>
                                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: idx % 2 === 0 ? 'var(--primary-blue)' : 'var(--accent-gold)' }}></div>
                                    <div style={{ fontSize: '14px', fontWeight: '800', color: '#94A3B8', marginBottom: '16px' }}>{item.time}</div>
                                    <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>{item.title}</h3>
                                    <p style={{ color: 'var(--text-sub)', lineHeight: '1.6' }}>{item.desc}</p>
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
                    style={{ padding: '100px 0', backgroundColor: 'transparent' }}
                >
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">등급을 바꾸는 결정적 로드맵</h2>
                            <p className="section-subtitle">지금 우리 아이에게 필요한 것은 '더 많은 수업'이 아니라 '정확한 전략'입니다. (과정 클릭)</p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
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
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '30px' }}>
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
                            >
                                <Link to="/curriculum/standard" className="premium-card" style={{
                                    borderColor: 'var(--primary-blue)',
                                    transform: 'scale(1.02)',
                                    boxShadow: 'var(--shadow-card)',
                                    display: 'block',
                                    cursor: 'pointer',
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    height: '100%'
                                }}>
                                    <div style={{ background: 'var(--primary-blue)', color: 'white', textAlign: 'center', padding: '8px', fontSize: '13px', fontWeight: '700' }}>MOST POPULAR</div>
                                    <div style={{ padding: '30px', borderBottom: '1px solid var(--border-color)' }}>
                                        <div className="badge-pill badge-blue" style={{ marginBottom: '12px' }}>중상위권 도약</div>
                                        <h3 style={{ fontSize: '24px', marginBottom: '8px', color: 'var(--primary-blue)' }}>내신 만점반</h3>
                                        <p style={{ fontSize: '15px', color: '#64748B' }}>다양한 유형을 익히고 실수를 줄이는 훈련을 합니다.</p>
                                    </div>
                                    <div style={{ padding: '30px' }}>
                                        <div style={{ fontSize: '13px', fontWeight: '700', color: '#94A3B8', marginBottom: '12px', textTransform: 'uppercase' }}>Main Textbooks</div>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '30px' }}>
                                            <span className="textbook-tag tag-essen">쎈 (B/C)</span>
                                            <span className="textbook-tag tag-essen">RPM</span>
                                            <span className="textbook-tag tag-school">학교별 기출</span>
                                        </div>
                                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '15px', color: 'var(--text-main)', fontWeight: '500' }}>
                                            <li style={{ display: 'flex', gap: '10px' }}><Check size={18} color="var(--primary-blue)" /> <span>내신 빈출 유형 완벽 분석</span></li>
                                            <li style={{ display: 'flex', gap: '10px' }}><Check size={18} color="var(--primary-blue)" /> <span>서술형 감점 방지 훈련</span></li>
                                            <li style={{ display: 'flex', gap: '10px' }}><Check size={18} color="var(--primary-blue)" /> <span>시험 4주 전 집중 대비</span></li>
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
                            >
                                <Link to="/curriculum/advanced" className="premium-card" style={{ display: 'block', cursor: 'pointer', textDecoration: 'none', color: 'inherit', height: '100%' }}>
                                    <div style={{ padding: '30px', borderBottom: '1px solid var(--border-color)', background: '#F8FAFC' }}>
                                        <div className="badge-pill badge-red" style={{ marginBottom: '12px' }}>최상위권 목표</div>
                                        <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>심화 선행반</h3>
                                        <p style={{ fontSize: '15px', color: '#64748B' }}>고난도 킬러 문제를 정복하고 고등 과정을 준비합니다.</p>
                                    </div>
                                    <div style={{ padding: '30px' }}>
                                        <div style={{ fontSize: '13px', fontWeight: '700', color: '#94A3B8', marginBottom: '12px', textTransform: 'uppercase' }}>Main Textbooks</div>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '30px' }}>
                                            <span className="textbook-tag tag-black">블랙라벨</span>
                                            <span className="textbook-tag tag-black">일품</span>
                                            <span className="textbook-tag tag-black">고쟁이</span>
                                        </div>
                                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '15px', color: 'var(--text-sub)' }}>
                                            <li style={{ display: 'flex', gap: '10px' }}><Check size={18} color="var(--primary-blue)" /> <span>특목고/자사고 대비</span></li>
                                            <li style={{ display: 'flex', gap: '10px' }}><Check size={18} color="var(--primary-blue)" /> <span>고등 공통수학 선행</span></li>
                                            <li style={{ display: 'flex', gap: '10px' }}><Check size={18} color="var(--primary-blue)" /> <span>모의고사 1등급 목표</span></li>
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
                                <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '8px' }}>
                                    <span className="badge-pill badge-gold">#어린이날_파티</span>
                                    <span className="badge-pill badge-gold">#간식데이</span>
                                    <span className="badge-pill badge-gold">#칭찬_포인트_마켓</span>
                                    <span className="badge-pill badge-gold">#자존감_수업</span>
                                </div>
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
                        <div className="premium-card" style={{ padding: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'white' }}>
                            <div>
                                <h3 style={{ fontSize: '28px', marginBottom: '16px' }}>궁금한 점이 있으신가요?</h3>
                                <p style={{ fontSize: '18px', color: 'var(--text-sub)', marginBottom: '30px' }}>
                                    원장님이 직접 친절하게 상담해 드립니다.<br />
                                    부담 없이 연락 주셔서 우리 아이 성적 고민을 털어놓으세요.
                                </p>
                                <div style={{ display: 'flex', gap: '40px' }}>
                                    <div className="interactive-area">
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: '#94A3B8', marginBottom: '8px' }}>CONSULTATION</div>
                                        <div style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <PhoneCall size={24} color="var(--primary-blue)" /> 010.7376.6040
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: '#94A3B8', marginBottom: '8px' }}>LOCATION</div>
                                        <div style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <MapPin size={24} color="var(--primary-blue)" /> 부산 명장로127번길 10
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder -> Real Visual Map */}
                            <div style={{ width: '100%', maxWidth: '500px', height: '320px', background: '#F1F5F9', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-card)', border: '1px solid #E2E8F0' }}>
                                <iframe
                                    title="해냄수학 위치"
                                    src="https://maps.google.com/maps?q=부산광역시%20동래구%20명장로127번길%2010&t=&z=17&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
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
