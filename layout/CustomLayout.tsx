import React, { ReactNode, useEffect } from 'react';

type CustomLayoutProps = {
    children: ReactNode;
};

export const CustomLayout = ({ children }: CustomLayoutProps) => {
    useEffect(() => {
        // Avoid running on server
        if (typeof window === 'undefined' || typeof document === 'undefined') return;

        const addCopyButtons = () => {
            const pres = Array.from(document.querySelectorAll('pre')) as HTMLPreElement[];

            pres.forEach((pre) => {
                // Ensure only one button per pre
                if (pre.querySelector('.__copy-btn')) return;

                const code = pre.querySelector('code');
                if (!code) return;

                // Ensure pre is positioned for absolute button placement
                const currentPos = window.getComputedStyle(pre).position;
                if (currentPos === 'static') {
                    pre.style.position = 'relative';
                }

                const btn = document.createElement('button');
                btn.className = '__copy-btn';
                btn.type = 'button';
                btn.textContent = 'Copy';
                btn.setAttribute('aria-label', 'Copy code to clipboard');
                Object.assign(btn.style, {
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    padding: '4px 8px',
                    fontSize: '12px',
                    lineHeight: '1',
                    borderRadius: '6px',
                    border: '1px solid rgba(0,0,0,0.1)',
                    background: 'rgba(255,255,255,0.8)',
                    cursor: 'pointer',
                    zIndex: '1',
                    backdropFilter: 'blur(2px)'
                } as CSSStyleDeclaration);

                btn.addEventListener('click', async () => {
                    try {
                        const text = code.textContent || '';
                        await navigator.clipboard.writeText(text);
                        const prev = btn.textContent;
                        btn.textContent = 'Copied!';
                        btn.style.background = 'rgba(34,197,94,0.85)'; // green-ish
                        btn.style.color = '#fff';
                        setTimeout(() => {
                            btn.textContent = prev || 'Copy';
                            btn.style.background = 'rgba(255,255,255,0.8)';
                            btn.style.color = '';
                        }, 1200);
                    } catch (e) {
                        const prev = btn.textContent;
                        btn.textContent = 'Failed';
                        btn.style.background = 'rgba(239,68,68,0.85)'; // red-ish
                        btn.style.color = '#fff';
                        setTimeout(() => {
                            btn.textContent = prev || 'Copy';
                            btn.style.background = 'rgba(255,255,255,0.8)';
                            btn.style.color = '';
                        }, 1200);
                    }
                });

                pre.appendChild(btn);
            });
        };

        // Initial run after content mounts
        addCopyButtons();

        // Observe for future content changes (client-side nav)
        const observer = new MutationObserver((mutations) => {
            for (const m of mutations) {
                if (m.addedNodes && m.addedNodes.length > 0) {
                    addCopyButtons();
                    break;
                }
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });

        return () => observer.disconnect();
    }, []);

    return (
        <div className='relative'>
            {children}
        </div>
    );
};