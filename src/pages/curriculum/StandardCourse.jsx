import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { BookOpen, Check, Trophy, Target, FileText } from 'lucide-react';

const StandardCourse = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <main style={{ paddingTop: '100px', backgroundColor: '#F8FAFC', minHeight: '100vh', paddingBottom: '80px' }}>
                <div className="container" style={{ maxWidth: '1000px' }}>

                    <div style={{ textAlign: 'center', margin: '60px 0' }}>
                        <div className="badge-pill badge-blue" style={{ marginBottom: '16px' }}>Flagship Course</div>
                        <h1 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '20px', color: '#1E293B' }}>내신 만점반</h1>
                        <p style={{ fontSize: '20px', color: '#64748B' }}>"해냄수학에서 가장 많은 학생들이 수강하는 메인 커리큘럼입니다."</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px', alignItems: 'start' }}>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

                            <div className="premium-card" style={{ padding: '40px' }}>
                                <h3 style={{ fontSize: '24px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Trophy size={24} color="var(--primary-blue)" fill="var(--primary-blue)" /> Class Objective
                                </h3>
                                <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#334155' }}>
                                    <strong>학교 시험 100점</strong>을 목표로 합니다. <br />
                                    대부분의 학교 시험 문제는 '유형서'에서 크게 벗어나지 않습니다. <br />
                                    대표 유형서인 '쎈(SSEN)'의 B단계를 완벽하게 마스터하고, 오답을 줄이는 훈련을 통해 어떤 시험 문제가 나와도 당황하지 않는 실력을 만듭니다.
                                </p>
                            </div>

                            <div className="premium-card" style={{ padding: '40px' }}>
                                <h3 style={{ fontSize: '24px', marginBottom: '24px' }}>3단계 학습법</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    {[
                                        { step: "TYPE", title: "유형별 문제 풀이", text: "쎈/RPM 등 유형서를 통해 시험에 나오는 모든 패턴을 익힙니다." },
                                        { step: "ERROR", title: "오답 역추적", text: "틀린 문제는 선생님에게 말로 설명해야 통과됩니다. (메타인지 학습)" },
                                        { step: "REAL", title: "실전 모의고사", text: "시험 4주 전부터 학교 기출문제로 시간 관리 훈련을 합니다." }
                                    ].map((item, idx) => (
                                        <div key={idx} style={{ display: 'flex', gap: '20px', paddingBottom: idx !== 2 ? '20px' : 0, borderBottom: idx !== 2 ? '1px solid #E2E8F0' : 'none' }}>
                                            <div style={{ fontWeight: '800', color: 'var(--primary-blue)', minWidth: '60px' }}>{item.step}</div>
                                            <div>
                                                <div style={{ fontWeight: '700', fontSize: '18px', marginBottom: '6px' }}>{item.title}</div>
                                                <div style={{ color: '#64748B', fontSize: '15px' }}>{item.text}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div className="premium-card" style={{ padding: '30px', borderTop: '4px solid var(--primary-blue)' }}>
                                <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px' }}>Main Textbooks</h4>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px' }}>
                                        <BookOpen size={18} color="#94A3B8" /> 쎈 (SSEN) 수학
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px' }}>
                                        <BookOpen size={18} color="#94A3B8" /> RPM / 개념원리
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px' }}>
                                        <FileText size={18} color="#94A3B8" /> 명장/안락중 기출 족보
                                    </li>
                                </ul>
                            </div>

                            <div className="premium-card" style={{ padding: '30px', backgroundColor: '#EFF6FF', border: '1px solid #BFDBFE' }}>
                                <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px', color: '#1E40AF' }}>이런 학생에게 추천!</h4>
                                <ul style={{ fontSize: '15px', color: '#1E40AF', lineHeight: '1.8' }}>
                                    <li>✔ 80점대에서 성적이 정체된 학생</li>
                                    <li>✔ 아는 문제인데 계산 실수로 틀리는 학생</li>
                                    <li>✔ 내신 기간에만 바짝 공부하는 학생</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default StandardCourse;
