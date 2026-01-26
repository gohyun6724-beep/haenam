import React from 'react';
import { Phone } from 'lucide-react';

const Header = () => {
    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '100px',
            backgroundColor: '#FFFFFF',
            borderBottom: '1px solid var(--border-color)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%'
            }}>
                <a href="#" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(135deg, var(--primary-blue), var(--primary-dark))',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: '900',
                        fontSize: '24px',
                        boxShadow: 'var(--shadow-sm)'
                    }}>H</div>
                    <span style={{ fontSize: '26px', fontWeight: '900', color: 'var(--text-main)', letterSpacing: '-0.02em', fontFamily: '"Pretendard", sans-serif' }}>
                        해냄<span style={{ color: 'var(--primary-blue)' }}>수학</span>
                    </span>
                </a>

                <nav style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
                    <a href="#management" className="nav-link">관리 시스템</a>
                    <a href="#success" className="nav-link">성적 향상 후기</a>
                    <a href="#curriculum" className="nav-link">커리큘럼</a>
                    <a href="#contact" className="nav-link">입학 안내</a>
                    <button className="blue-gradient btn-interaction" style={{
                        padding: '12px 24px',
                        borderRadius: '50px',
                        color: 'white',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: 'var(--shadow-md)'
                    }}>
                        <Phone size={18} />
                        <span>상담 신청</span>
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
