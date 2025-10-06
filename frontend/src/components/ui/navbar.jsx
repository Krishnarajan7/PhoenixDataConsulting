import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Equal, X } from 'lucide-react'
import { Button } from '@/components/ui/liquid-glass-button'
import { cn } from '@/lib/utils' 

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    // { name: 'ODC', href: '/odc' },
    // { name: 'Team', href: '/team' },
    { name: 'Projects', href: '/projects' },
    { name: 'Infrastructure', href: '/infrastructure' },
    { name: 'Training', href: '/training' },
    { name: 'Clients', href: '/clients' },
    { name: 'Contact', href: '/contact' },
]

export const Header = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const location = useLocation()

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    React.useEffect(() => {
        if (menuState) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '0px';
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }

        return () => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        };
    }, [menuState]);

    const handleNavClick = () => {
        setMenuState(false);
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    };

    const isActive = (path) => location.pathname === path;

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed left-0 w-full z-40 px-2">
                <div className={cn('mx-auto mt-2 w-full max-w-7xl px-4 transition-all duration-300 lg:px-8', isScrolled && 'bg-background/50 max-w-6xl rounded-2xl border backdrop-blur-lg lg:px-6')}>
                    <div className="relative flex items-center justify-between py-3">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link
                                to="/"
                                aria-label="home"
                                onClick={handleNavClick}
                                className="flex gap-2 items-center">
                            <p className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">  Phoenix Data Consulting</p>

                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex lg:items-center lg:space-x-1">
                            <ul className="flex gap-1 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            to={item.href}
                                            onClick={handleNavClick}
                                            className={`px-3 py-2 rounded-md duration-150 block transition-colors ${
                                                isActive(item.href)
                                                    ? "text-primary font-medium bg-primary/10"
                                                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                                            }`}>
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Desktop CTA & Mobile Menu Button */}
                        <div className="flex items-center gap-4">
                            <div className="hidden lg:block">
                                <Button
                                    asChild
                                    size="sm">
                                    <Link to="/contact" onClick={handleNavClick}>
                                        <span>Get Quote</span>
                                    </Link>
                                </Button>
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 block cursor-pointer p-2.5 lg:hidden">
                                {menuState ? (
                                    <X className="size-6 duration-200" />
                                ) : (
                                    <Equal className="size-6 duration-200" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`lg:hidden fixed inset-0 z-[100] transition-all duration-300 ease-in-out ${
                    menuState ? 'visible opacity-100' : 'invisible opacity-0'
                }`}>
                    {/* Backdrop */}
                    <div 
                        className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
                            menuState ? 'opacity-100' : 'opacity-0'
                        }`}
                        onClick={() => setMenuState(false)}
                    />
                    
                    {/* Menu Panel */}
                    <div className={`absolute top-0 right-0 h-full w-80 bg-background border-l border-border shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
                        menuState ? 'translate-x-0' : 'translate-x-full'
                    }`}>
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-border">
                            <div className="text-lg font-bold text-primary">Phoenix Data</div>
                            <button
                                onClick={() => setMenuState(false)}
                                className="h-10 w-10 hover:bg-muted rounded-lg flex items-center justify-center transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                        
                        {/* Navigation Menu */}
                        <nav className="flex-1 p-6 overflow-y-auto">
                            <div className="space-y-3">
                                {menuItems.map((item, index) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className={`block py-3 px-4 rounded-lg text-base font-medium transition-all duration-200 ${
                                            isActive(item.href)
                                                ? "bg-primary text-primary-foreground shadow-sm"
                                                : "text-foreground hover:bg-muted hover:text-primary"
                                        }`}
                                        onClick={handleNavClick}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </nav>
                        
                        {/* CTA Button */}
                        <div className="p-6 border-t border-border">
                            <Button asChild className="w-full h-12">
                                <Link to="/contact" onClick={handleNavClick}>
                                    Get Quote
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}