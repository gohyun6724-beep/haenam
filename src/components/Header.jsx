import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: '학원 소개', href: '#intro' },
        { name: '관리 시스템', href: '#management' },
        { name: '후기', href: '#success' },
        { name: '커리큘럼', href: '#curriculum' },
        { name: '입학 안내', href: '#contact' },
    ];

    return (
        <>
            <header style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '80px',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(12px)',
                borderBottom: '1px solid rgba(0,0,0,0.05)',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div className="container" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    padding: '0 20px'
                }}>
                    <a href="#" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                        <img src="/images/logo.png" alt="해냄수학 로고" style={{ height: '40px', width: 'auto' }} />
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="nav-link" style={{ fontSize: '16px', fontWeight: '500' }}>{link.name}</a>
                        ))}
                        <button className="blue-gradient btn-interaction" style={{
                            padding: '10px 20px',
                            borderRadius: '50px',
                            color: 'white',
                            fontWeight: '600',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            boxShadow: 'var(--shadow-md)',
                            fontSize: '15px'
                        }}>
                            <Phone size={16} />
                            <span>상담 신청</span>
                        </button>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button className="mobile-only-bar" style={{ display: 'none', color: 'var(--text-main)' }} onClick={() => setIsMobileMenuOpen(true)}>
                        <Menu size={28} />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            width: '80%',
                            maxWidth: '300px',
                            backgroundColor: 'white',
                            zIndex: 2000,
                            boxShadow: '-10px 0 30px rgba(0,0,0,0.1)',
                            padding: '30px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '30px'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                            <span style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-main)' }}>MENU</span>
                            <button onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'var(--text-sub)' }}>
                                <X size={28} />
                            </button>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    style={{
                                        fontSize: '18px',
                                        fontWeight: '600',
                                        color: 'var(--text-main)',
                                        textDecoration: 'none',
                                        borderBottom: '1px solid #f1f5f9',
                                        paddingBottom: '12px'
                                    }}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                        <div style={{ marginTop: 'auto' }}>
                            <a href="tel:01073766040" className="blue-gradient" style={{
                                width: '100%',
                                padding: '16px',
                                borderRadius: '12px',
                                color: 'white',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                textDecoration: 'none',
                                boxShadow: 'var(--shadow-md)'
                            }}>
                                <Phone size={20} />
                                전화 상담 연결
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {/* Backdrop */}
            {isMobileMenuOpen && (
                <div
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 1500 }}
                />
            )}
        </>
    );
};

export default Header;
