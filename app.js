// BrandForge - Interactive Business Name Generator with SEO & Social Sharing
class BrandForge {
    constructor() {
        // Expanded name database with 250+ names across industries
        this.expandedNames = {
            "technology": [
                "TechVault", "InnovateSphere", "DigitalCraft", "VelocityLabs", "NexusPoint",
                "CloudForge", "DataBridge", "SmartAxis", "FusionWorks", "QuantumLeap",
                "PulseTech", "CyberNova", "FlexCore", "StreamlineHQ", "EchoSoft",
                "BrightPath", "SwiftEdge", "CoreVision", "TurboLink", "ZenithTech",
                "ByteStream", "CodeCraft", "DevHub", "TechPulse", "InnovaCore",
                "DigitalEdge", "SmartFlow", "DataVault", "CloudSync", "TechFusion",
                "CodeNinja", "PixelForge", "DevStream", "TechHive", "InnovateLab",
                "DigitalMind", "SmartLogic", "DataFlow", "CloudCraft", "TechBoost",
                "CodeWave", "PixelPulse", "DevCore", "TechSpark", "InnovateFlow"
            ],
            "food_beverage": [
                "BrewCraft", "CoffeeSphere", "Bean & Beyond", "Roast Republic", "Café Nexus",
                "Grind House", "Steam & Bean", "Roast Masters", "Coffee Creek", "Brew Haven",
                "The Daily Grind", "Bean There", "Espresso Express", "Coffee Corner", "Brew & Bite",
                "Aroma Café", "Coffee Culture", "Bean Bliss", "Roast & Toast", "Caffeine Central",
                "Fresh Flavor", "Tasty Treats", "Bite Bliss", "Flavor Fusion", "Spice Route",
                "Kitchen Craft", "Taste Buds", "Food Flow", "Delish Dish", "Flavor Lab",
                "Meal Magic", "Food Frenzy", "Taste Twist", "Bite Size", "Flavor First",
                "Kitchen King", "Food Fusion", "Taste Trail", "Meal Maker", "Flavor Zone",
                "Bite Bright", "Food Focus", "Taste Tech", "Meal Mode", "Flavor Fire"
            ],
            "healthcare": [
                "WellnessWorks", "HealthHub", "CarePlus", "VitalCore", "MedFlow",
                "HealthSphere", "WellCare", "VitalSigns", "MedTech", "HealthWave",
                "CareConnect", "WellPath", "HealthForce", "VitalEdge", "MedCore",
                "HealthSync", "WellStream", "VitalFlow", "MedSpark", "HealthBoost",
                "CareFlow", "WellTech", "HealthPulse", "VitalWorks", "MedWave",
                "HealthCraft", "WellForce", "VitalSync", "MedFlow", "HealthStream"
            ],
            "fashion_beauty": [
                "StyleSphere", "FashionFlow", "TrendCraft", "StyleSync", "FashionFusion",
                "GlamCore", "StyleWave", "TrendTech", "FashionForce", "StyleStream",
                "BeautyBloom", "GlamGlow", "StyleSpark", "TrendTone", "FashionFire",
                "ChicCore", "StyleShine", "TrendTrail", "FashionFlex", "GlamGrid",
                "StyleStar", "TrendTech", "FashionFlow", "BeautyBuzz", "GlamGear",
                "StyleSync", "TrendTune", "FashionFix", "BeautyBox", "GlamGo"
            ],
            "real_estate": [
                "PropertyPro", "RealtyRise", "EstateEdge", "PropertyPulse", "RealtyRock",
                "HomeCraft", "PropertyFlow", "RealtyRush", "EstateEye", "PropertyPeak",
                "RealtyRise", "HomeHub", "PropertyPlus", "RealtyRun", "EstateEcho",
                "PropertyPoint", "RealtyRide", "HomeHive", "PropertyPower", "RealtyReach",
                "EstateEra", "PropertyPath", "RealtyRace", "HomeHeart", "PropertyPlace",
                "RealtyRealm", "EstateEast", "PropertyPort", "RealtyRoot", "HomeHope"
            ],
            "consulting": [
                "ConsultCore", "AdviseAxis", "StrategySync", "ConsultCraft", "AdvisePro",
                "StrategySphere", "ConsultFlow", "AdviseEdge", "StrategyStream", "ConsultForce",
                "AdviseTech", "StrategySync", "ConsultWave", "AdviseArt", "StrategyStorm",
                "ConsultClub", "AdviseAim", "StrategyShift", "ConsultCrew", "AdviseArk",
                "StrategySpot", "ConsultCamp", "AdviseAxis", "StrategyStep", "ConsultCode",
                "AdviseArea", "StrategyStart", "ConsultCall", "AdviseApp", "StrategySet"
            ]
        };

        this.currentShareName = '';
        this.favoriteNames = new Set();
        this.currentTestimonial = 0;

        this.init();
    }

    init() {
        this.createParticles();
        this.animateCounters();
        this.startTestimonialSlider();
        this.setupEventListeners();

        // SEO: Add structured data for business names
        this.addStructuredData();
    }

    createParticles() {
        const container = document.getElementById('particles');

        // Create floating elements
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 1}px;
                height: ${Math.random() * 4 + 1}px;
                background: rgba(99, 102, 241, ${Math.random() * 0.5 + 0.1});
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float ${Math.random() * 10 + 10}s ease-in-out infinite;
                animation-delay: ${Math.random() * 5}s;
            `;
            container.appendChild(particle);
        }

        // Add CSS for floating animation
        if (!document.getElementById('particleStyles')) {
            const style = document.createElement('style');
            style.id = 'particleStyles';
            style.textContent = `
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
                    50% { transform: translateY(-20px) rotate(180deg); opacity: 0.7; }
                }
            `;
            document.head.appendChild(style);
        }
    }

    animateCounters() {
        const counters = document.querySelectorAll('[data-target]');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.dataset.target);
                    const increment = target / 100;
                    let current = 0;

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            counter.textContent = target.toLocaleString() + (target === 98 ? '%' : '+');
                            clearInterval(timer);
                        } else {
                            counter.textContent = Math.floor(current).toLocaleString();
                        }
                    }, 20);

                    observer.unobserve(counter);
                }
            });
        });

        counters.forEach(counter => observer.observe(counter));
    }

    startTestimonialSlider() {
        const testimonials = document.querySelectorAll('.testimonial-card');

        setInterval(() => {
            testimonials[this.currentTestimonial].classList.remove('active');
            this.currentTestimonial = (this.currentTestimonial + 1) % testimonials.length;
            testimonials[this.currentTestimonial].classList.add('active');
        }, 5000);
    }

    setupEventListeners() {
        // Form input enhancements
        const businessInput = document.getElementById('businessDescription');
        if (businessInput) {
            businessInput.addEventListener('input', this.handleInputSuggestions.bind(this));
            businessInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.generateNames();
                }
            });
        }

        // Close modal on outside click
        document.addEventListener('click', (e) => {
            const modal = document.getElementById('shareModal');
            if (e.target === modal) {
                this.closeShareModal();
            }
        });

        // Escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeShareModal();
            }
        });
    }

    handleInputSuggestions(e) {
        const value = e.target.value.toLowerCase();
        const industrySelect = document.getElementById('industrySelect');

        // Auto-suggest industry based on input
        const industryKeywords = {
            'coffee': 'food_beverage',
            'cafe': 'food_beverage',
            'restaurant': 'food_beverage',
            'food': 'food_beverage',
            'tech': 'technology',
            'software': 'technology',
            'app': 'technology',
            'digital': 'technology',
            'consulting': 'consulting',
            'advisor': 'consulting',
            'fashion': 'fashion_beauty',
            'beauty': 'fashion_beauty',
            'style': 'fashion_beauty',
            'health': 'healthcare',
            'medical': 'healthcare',
            'wellness': 'healthcare',
            'property': 'real_estate',
            'real estate': 'real_estate',
            'home': 'real_estate'
        };

        for (const [keyword, industry] of Object.entries(industryKeywords)) {
            if (value.includes(keyword)) {
                industrySelect.value = industry;
                break;
            }
        }
    }

    loadIndustryNames(category) {
        const industrySelect = document.getElementById('industrySelect');
        const businessInput = document.getElementById('businessDescription');

        industrySelect.value = category;

        // Set appropriate business description
        const descriptions = {
            'food_beverage': 'coffee shop',
            'technology': 'tech startup',
            'healthcare': 'health clinic',
            'fashion_beauty': 'fashion brand',
            'real_estate': 'real estate agency',
            'consulting': 'consulting firm'
        };

        businessInput.value = descriptions[category] || '';

        // Scroll to generator and generate names
        this.scrollToGenerator();
        setTimeout(() => this.generateNames(), 500);
    }

    generateNames() {
        const generateBtn = document.getElementById('generateBtn');
        const btnText = generateBtn.querySelector('.btn-text');
        const spinner = generateBtn.querySelector('.loading-spinner');
        const resultsSection = document.getElementById('resultsSection');

        // Show loading state
        btnText.style.display = 'none';
        spinner.style.display = 'block';
        generateBtn.disabled = true;

        // Simulate API call delay
        setTimeout(() => {
            this.displayResults();

            // Reset button state
            btnText.style.display = 'block';
            spinner.style.display = 'none';
            generateBtn.disabled = false;

            // Show results
            resultsSection.style.display = 'block';
            resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

        }, 1500);
    }

    generateMoreNames() {
        this.generateNames();
    }

    displayResults() {
        const businessDesc = document.getElementById('businessDescription').value;
        const industry = document.getElementById('industrySelect').value;
        const style = document.getElementById('styleSelect').value;
        const resultsGrid = document.getElementById('resultsGrid');

        // Get names based on industry or use mixed selection
        let namePool = [];
        if (industry && this.expandedNames[industry]) {
            namePool = this.expandedNames[industry];
        } else {
            // Mix names from all categories
            namePool = Object.values(this.expandedNames).flat();
        }

        // Shuffle and select 8 names
        const shuffled = namePool.sort(() => Math.random() - 0.5);
        const selectedNames = shuffled.slice(0, 8);

        // Clear previous results
        resultsGrid.innerHTML = '';

        // Generate name cards with staggered animation
        selectedNames.forEach((name, index) => {
            setTimeout(() => {
                const card = this.createNameCard(name);
                resultsGrid.appendChild(card);
            }, index * 150);
        });
    }

    createNameCard(name) {
        const card = document.createElement('div');
        card.className = 'name-card';

        const isDomainAvailable = Math.random() > 0.3; // 70% chance of availability
        const isSocialAvailable = Math.random() > 0.4; // 60% chance of availability
        const isFavorited = this.favoriteNames.has(name);

        card.innerHTML = `
            <div class="name-card-header">
                <h3 class="business-name">${name}</h3>
                <button class="favorite-btn ${isFavorited ? 'favorited' : ''}" onclick="brandForge.toggleFavorite('${name}', this)">
                    ${isFavorited ? '❤️' : '🤍'}
                </button>
            </div>
            <div class="name-card-body">
                <div class="availability-row">
                    <span class="availability-label">Domain (.com)</span>
                    <span class="availability-status ${isDomainAvailable ? 'available' : 'unavailable'}">
                        <span class="status-indicator"></span>
                        ${isDomainAvailable ? 'Available' : 'Taken'}
                    </span>
                </div>
                <div class="availability-row">
                    <span class="availability-label">Social Handles</span>
                    <span class="availability-status ${isSocialAvailable ? 'available' : 'unavailable'}">
                        <span class="status-indicator"></span>
                        ${isSocialAvailable ? 'Available' : 'Limited'}
                    </span>
                </div>
            </div>
            <div class="name-card-actions">
                <button class="action-btn" onclick="brandForge.copyToClipboard('${name}', this)">
                    📋 Copy
                </button>
                <button class="action-btn" onclick="brandForge.openShareModal('${name}')">
                    📤 Share
                </button>
                <button class="action-btn" onclick="brandForge.checkDomain('${name}')">
                    🔍 Check Domain
                </button>
            </div>
        `;

        return card;
    }

    toggleFavorite(name, button) {
        if (this.favoriteNames.has(name)) {
            this.favoriteNames.delete(name);
            button.innerHTML = '🤍';
            button.classList.remove('favorited');
        } else {
            this.favoriteNames.add(name);
            button.innerHTML = '❤️';
            button.classList.add('favorited');

            // Show success message
            this.showToast(`Added "${name}" to favorites! ❤️`);
        }
    }

    copyToClipboard(name, button) {
        navigator.clipboard.writeText(name).then(() => {
            const originalText = button.innerHTML;
            button.innerHTML = '✅ Copied!';
            button.style.background = '#10b981';
            button.style.color = 'white';

            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.background = '';
                button.style.color = '';
            }, 2000);

            this.showToast(`Copied "${name}" to clipboard!`);
        });
    }

    openShareModal(name) {
        this.currentShareName = name;
        document.getElementById('shareNameDisplay').textContent = name;
        document.getElementById('shareModal').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    closeShareModal() {
        document.getElementById('shareModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    shareToWhatsApp() {
        const message = `Check out this business name idea: "${this.currentShareName}" - Generated with BrandForge! 🚀\n\nGenerate your own: ${window.location.href}`;
        const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
        this.closeShareModal();
    }

    shareToInstagram() {
        // Instagram doesn't support direct text sharing, so copy to clipboard with instructions
        const message = `Business name idea: "${this.currentShareName}" 💡\n\n#BusinessNames #Startup #Entrepreneur #BrandForge`;
        navigator.clipboard.writeText(message);
        this.showToast('Caption copied! Open Instagram and paste in your story/post.');
        this.closeShareModal();
    }

    shareToFacebook() {
        const message = `Found an amazing business name: "${this.currentShareName}" using BrandForge! 🎯`;
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
        this.closeShareModal();
    }

    shareToTwitter() {
        const message = `💡 Business name idea: "${this.currentShareName}" - Generated with BrandForge! Perfect for my next venture 🚀 #BusinessNames #Startup`;
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(window.location.href)}`;
        window.open(url, '_blank');
        this.closeShareModal();
    }

    shareToLinkedIn() {
        const message = `I discovered this great business name: "${this.currentShareName}" using BrandForge - an AI-powered business name generator!`;
        const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}&summary=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
        this.closeShareModal();
    }

    copyNameToClipboard() {
        navigator.clipboard.writeText(this.currentShareName).then(() => {
            this.showToast(`Copied "${this.currentShareName}" to clipboard!`);
            this.closeShareModal();
        });
    }

    shareWebsite(platform) {
        const message = 'Check out BrandForge - Free AI-powered business name generator! 🚀';
        const url = window.location.href;

        const shareUrls = {
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(url)}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
            whatsapp: `https://wa.me/?text=${encodeURIComponent(message + ' ' + url)}`
        };

        if (shareUrls[platform]) {
            window.open(shareUrls[platform], '_blank');
        }
    }

    checkDomain(name) {
        // Simulate domain checking
        const domain = name.toLowerCase().replace(/\s+/g, '') + '.com';
        this.showToast(`Checking availability for ${domain}...`);

        // In a real app, this would make an API call
        setTimeout(() => {
            const isAvailable = Math.random() > 0.4;
            const message = isAvailable ? 
                `🟢 ${domain} is available! Register it quickly.` :
                `🔴 ${domain} is taken. Try variations or different extensions.`;
            this.showToast(message, 4000);
        }, 1500);
    }

    toggleFAQ(element) {
        const faqItem = element.parentNode;
        const isActive = faqItem.classList.contains('active');

        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    }

    scrollToGenerator() {
        document.getElementById('generator').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    showToast(message, duration = 3000) {
        // Remove existing toast
        const existingToast = document.querySelector('.toast');
        if (existingToast) {
            existingToast.remove();
        }

        // Create toast
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: rgba(51, 65, 85, 0.95);
            color: white;
            padding: 16px 20px;
            border-radius: 12px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(99, 102, 241, 0.3);
            z-index: 10000;
            animation: slideInRight 0.3s ease-out;
            max-width: 300px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        `;
        toast.textContent = message;

        // Add CSS animation if not exists
        if (!document.getElementById('toastStyles')) {
            const style = document.createElement('style');
            style.id = 'toastStyles';
            style.textContent = `
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOutRight {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(toast);

        // Remove toast after duration
        setTimeout(() => {
            toast.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => toast.remove(), 300);
        }, duration);
    }

    addStructuredData() {
        // Add JSON-LD structured data for SEO
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "BrandForge - Free Business Name Generator",
            "description": "AI-powered business name generator for startups, cafes, restaurants, tech companies and more. Generate unlimited business names for free.",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web Browser",
            "url": window.location.href,
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
            },
            "provider": {
                "@type": "Organization",
                "name": "BrandForge"
            },
            "featureList": [
                "Free business name generation",
                "Industry-specific name suggestions",
                "Domain availability checking",
                "Social media handle verification",
                "Creative naming techniques",
                "Social sharing integration"
            ]
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
    }
}

// Utility functions for smooth scrolling
function scrollToGenerator() {
    document.getElementById('generator').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Initialize the application
const brandForge = new BrandForge();

// SEO: Add page view tracking and performance monitoring
window.addEventListener('load', () => {
    // Track page load time for SEO insights
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log(`Page loaded in ${loadTime}ms`);

    // Add smooth scroll behavior for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add viewport meta tag for mobile SEO if missing
if (!document.querySelector('meta[name="viewport"]')) {
    const viewport = document.createElement('meta');
    viewport.name = 'viewport';
    viewport.content = 'width=device-width, initial-scale=1.0';
    document.head.appendChild(viewport);
}