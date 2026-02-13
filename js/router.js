// Antier Solutions - Client-Side Router

class Router {
    constructor() {
        this.routes = {
            '/': this.renderHome,
            '/enterprise-blockchain': this.renderBlockchainOverview,
            '/enterprise-blockchain/:category': this.renderCategory,
            '/enterprise-blockchain/:category/:solution': this.renderSolution,
            '/ai-automation': this.renderAIAutomation,
            '/carbon-esg': this.renderCarbonESG,
            '/industries': this.renderIndustries,
            '/insights': this.renderInsights,
            '/about': this.renderAbout,
            '/contact': this.renderContact
        };
        
        this.hasNavigated = false;
        this.init();
    }
    
    init() {
        // Handle initial page load
        window.addEventListener('load', () => {
            this.handleRoute();
        });
        
        // Handle browser back/forward
        window.addEventListener('popstate', () => {
            this.handleRoute();
        });
        
        // Intercept all link clicks
        document.addEventListener('click', (e) => {
            // Find the closest anchor tag (in case user clicked on child element)
            const link = e.target.closest('a');
            
            if (link && link.hasAttribute('href')) {
                const href = link.getAttribute('href');
                if (href.startsWith('/') && !href.startsWith('/#')) {
                    e.preventDefault();
                    this.navigateTo(href);
                }
            }
        });
    }
    
    navigateTo(path) {
        this.hasNavigated = true;
        window.history.pushState({}, '', path);
        this.handleRoute();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    handleRoute() {
        const path = window.location.pathname;
        
        // Try exact match first
        if (this.routes[path]) {
            this.routes[path].call(this);
            return;
        }
        
        // Try pattern matching
        for (const route in this.routes) {
            const routeRegex = new RegExp('^' + route.replace(/:[^\s/]+/g, '([\\w-]+)') + '$');
            const match = path.match(routeRegex);
            
            if (match) {
                const params = this.extractParams(route, match);
                this.routes[route].call(this, params);
                return;
            }
        }
        
        // 404 - show home
        this.renderHome();
    }
    
    extractParams(route, match) {
        const paramNames = route.match(/:[^\s/]+/g) || [];
        const params = {};
        
        paramNames.forEach((param, index) => {
            const paramName = param.substring(1);
            params[paramName] = match[index + 1];
        });
        
        return params;
    }
    
    renderHome() {
        // If we're already on a fresh page load at home, do nothing
        if (window.location.pathname === '/' && !this.hasNavigated) {
            this.hasNavigated = false;
            document.body.className = 'font-sans antialiased';
            return;
        }
        
        // Otherwise, reload to show home page
        if (window.location.pathname === '/') {
            window.location.reload();
        }
    }
    
    renderBlockchainOverview() {
        const content = `
            <section class="pt-32 pb-20 bg-gradient-to-br from-primary via-slate-800 to-slate-900 text-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="breadcrumb mb-6 text-blue-300">
                        <a href="/">Home</a>
                        <span class="separator">/</span>
                        <span>Enterprise Blockchain</span>
                    </div>
                    <div class="max-w-4xl">
                        <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Enterprise Blockchain Solutions<br>
                            <span class="text-blue-400">Across Industries</span>
                        </h1>
                        <p class="text-xl text-gray-300 mb-8 leading-relaxed">
                            Discover 50 proven blockchain solutions organized into 8 strategic domains. 
                            From supply chain to finance, identity to ESG—we deliver enterprise-grade platforms that transform operations.
                        </p>
                        <div class="grid grid-cols-3 gap-6 mb-8">
                            <div class="stat-card">
                                <div class="stat-number">50+</div>
                                <div class="stat-label">Blockchain Solutions</div>
                            </div>
                            <div class="stat-card">
                                <div class="stat-number">8</div>
                                <div class="stat-label">Solution Domains</div>
                            </div>
                            <div class="stat-card">
                                <div class="stat-number">15+</div>
                                <div class="stat-label">Industries Served</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Search and Filter -->
            <section class="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <input type="text" id="searchSolutions" placeholder="Search solutions..." 
                               class="search-input flex-1">
                        <div class="flex gap-2 flex-wrap">
                            <button class="filter-btn active" data-filter="all">All Categories</button>
                            <button class="filter-btn" data-filter="supply-chain">Supply Chain</button>
                            <button class="filter-btn" data-filter="finance">Finance</button>
                            <button class="filter-btn" data-filter="identity">Identity</button>
                            <button class="filter-btn" data-filter="healthcare">Healthcare</button>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Category Cards -->
            <section class="py-20 bg-gray-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div id="categoryGrid" class="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        ${this.renderCategoryCards()}
                    </div>
                </div>
            </section>
        `;
        
        this.replaceMainContent(content);
        this.attachSearchFilters();
    }
    
    renderCategoryCards() {
        return blockchainData.categories.map(category => `
            <a href="/enterprise-blockchain/${category.slug}" 
               class="category-card block bg-white rounded-xl p-8 shadow-md hover:shadow-xl"
               data-category="${category.slug}">
                <div class="flex items-start mb-4">
                    <div class="icon-box" style="background-color: ${category.color}20; color: ${category.color};">
                        <i class="fas ${category.icon}"></i>
                    </div>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-3">${category.name}</h3>
                <p class="text-gray-600 mb-4">${category.description}</p>
                <div class="flex items-center justify-between">
                    <span class="badge">${category.solutionCount} Solutions</span>
                    <span class="text-secondary font-semibold">
                        Explore Solutions →
                    </span>
                </div>
            </a>
        `).join('');
    }
    
    renderCategory(params) {
        const category = blockchainData.categories.find(cat => cat.slug === params.category);
        
        if (!category) {
            this.renderHome();
            return;
        }
        
        const content = `
            <section class="pt-32 pb-12 bg-gradient-to-br from-primary via-slate-800 to-slate-900 text-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="breadcrumb mb-6 text-blue-300">
                        <a href="/">Home</a>
                        <span class="separator">/</span>
                        <a href="/enterprise-blockchain">Enterprise Blockchain</a>
                        <span class="separator">/</span>
                        <span>${category.name}</span>
                    </div>
                    <div class="flex items-start mb-8">
                        <div class="text-6xl mr-6" style="color: ${category.color};">
                            <i class="fas ${category.icon}"></i>
                        </div>
                        <div>
                            <h1 class="text-4xl md:text-5xl font-bold mb-4">${category.name}</h1>
                            <p class="text-xl text-gray-300">${category.description}</p>
                        </div>
                    </div>
                    <div class="inline-block bg-white/10 px-4 py-2 rounded-full">
                        <span class="text-blue-300 font-semibold">${category.solutionCount} Solutions</span>
                    </div>
                </div>
            </section>
            
            <!-- Solutions Grid -->
            <section class="py-16 bg-gray-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        ${this.renderSolutionCards(category)}
                    </div>
                </div>
            </section>
            
            <!-- CTA -->
            <section class="py-16 bg-white">
                <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 class="text-3xl font-bold text-gray-900 mb-4">Ready to Implement These Solutions?</h2>
                    <p class="text-xl text-gray-600 mb-8">
                        Schedule a consultation with our blockchain experts to discuss your specific requirements
                    </p>
                    <a href="/contact" class="bg-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
                        Schedule Consultation
                        <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </section>
        `;
        
        this.replaceMainContent(content);
    }
    
    renderSolutionCards(category) {
        return category.solutions.map(solution => `
            <a href="/enterprise-blockchain/${category.slug}/${solution.slug}" 
               class="service-card block bg-white rounded-lg p-6 hover:shadow-lg transition-all">
                <h3 class="text-xl font-bold text-gray-900 mb-2">${solution.name}</h3>
                <p class="text-gray-600 text-sm mb-3">${solution.shortDesc}</p>
                <div class="mb-3">
                    <div class="text-xs text-gray-500 mb-1">Example:</div>
                    <div class="text-sm font-medium text-secondary">${solution.example}</div>
                </div>
                <div class="flex flex-wrap gap-1 mb-3">
                    ${solution.industry.slice(0, 2).map(ind => 
                        `<span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">${ind}</span>`
                    ).join('')}
                </div>
                <div class="text-secondary font-semibold text-sm">
                    View Details →
                </div>
            </a>
        `).join('');
    }
    
    renderSolution(params) {
        const category = blockchainData.categories.find(cat => cat.slug === params.category);
        if (!category) {
            this.renderHome();
            return;
        }
        
        const solution = category.solutions.find(sol => sol.slug === params.solution);
        if (!solution) {
            this.renderCategory(params);
            return;
        }
        
        const content = `
            <section class="pt-32 pb-12 bg-gradient-to-br from-primary via-slate-800 to-slate-900 text-white">
                <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="breadcrumb mb-6 text-blue-300">
                        <a href="/">Home</a>
                        <span class="separator">/</span>
                        <a href="/enterprise-blockchain">Enterprise Blockchain</a>
                        <span class="separator">/</span>
                        <a href="/enterprise-blockchain/${category.slug}">${category.name}</a>
                        <span class="separator">/</span>
                        <span>${solution.name}</span>
                    </div>
                    <h1 class="text-4xl md:text-5xl font-bold mb-4">${solution.name}</h1>
                    <p class="text-xl text-gray-300 mb-6">${solution.shortDesc}</p>
                    <div class="flex flex-wrap gap-3 mb-6">
                        ${solution.industry.map(ind => 
                            `<span class="bg-white/10 text-blue-300 px-4 py-2 rounded-full text-sm">${ind}</span>`
                        ).join('')}
                    </div>
                    <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                        <div class="text-sm text-blue-300 mb-2">Market Reference:</div>
                        <div class="text-lg font-semibold">${solution.example}</div>
                    </div>
                </div>
            </section>
            
            <!-- Solution Details -->
            <section class="py-16 bg-white">
                <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <!-- Business Problem -->
                    <div class="solution-section fade-in">
                        <h3>Business Problem</h3>
                        <p class="text-gray-700 text-lg leading-relaxed">${solution.businessProblem}</p>
                    </div>
                    
                    <!-- Antier Solution -->
                    <div class="solution-section fade-in">
                        <h3>Antier Solution Approach</h3>
                        <p class="text-gray-700 text-lg leading-relaxed">${solution.solution}</p>
                    </div>
                    
                    <!-- Key Capabilities -->
                    <div class="solution-section fade-in">
                        <h3>Key Capabilities</h3>
                        <div class="capability-grid">
                            ${solution.capabilities.map(cap => `
                                <div class="capability-item">
                                    <i class="fas fa-check-circle text-secondary mr-2"></i>
                                    <span class="text-gray-700">${cap}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <!-- Architecture -->
                    <div class="solution-section fade-in">
                        <h3>Architecture Overview</h3>
                        <div class="architecture-box">
                            <i class="fas fa-project-diagram text-4xl text-gray-400 mb-3"></i>
                            <p class="text-gray-700 text-lg">${solution.architecture}</p>
                        </div>
                    </div>
                    
                    <!-- Industry Applications -->
                    <div class="solution-section fade-in">
                        <h3>Industry Applications</h3>
                        <div class="grid md:grid-cols-2 gap-4">
                            ${solution.industries.map(ind => `
                                <div class="flex items-center p-4 bg-gray-50 rounded-lg">
                                    <i class="fas fa-industry text-secondary text-2xl mr-4"></i>
                                    <span class="text-gray-800 font-medium">${ind}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <!-- CTA -->
                    <div class="mt-12 bg-gradient-to-r from-secondary to-blue-600 rounded-xl p-8 text-white text-center">
                        <h3 class="text-2xl font-bold mb-4">Ready to Implement This Solution?</h3>
                        <p class="text-blue-100 mb-6">
                            Our enterprise blockchain consultants will work with you to customize this solution for your specific needs
                        </p>
                        <a href="/contact" class="bg-white text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                            Schedule Consultation
                            <i class="fas fa-calendar-alt ml-2"></i>
                        </a>
                    </div>
                    
                    <!-- Related Solutions -->
                    <div class="mt-16">
                        <h3 class="text-2xl font-bold text-gray-900 mb-6">More Solutions in ${category.name}</h3>
                        <div class="grid md:grid-cols-3 gap-4">
                            ${this.renderRelatedSolutions(category, solution)}
                        </div>
                    </div>
                </div>
            </section>
        `;
        
        this.replaceMainContent(content);
    }
    
    renderRelatedSolutions(category, currentSolution) {
        return category.solutions
            .filter(sol => sol.id !== currentSolution.id)
            .slice(0, 3)
            .map(solution => `
                <a href="/enterprise-blockchain/${category.slug}/${solution.slug}" 
                   class="service-card block bg-gray-50 rounded-lg p-4 hover:bg-white">
                    <h4 class="font-semibold text-gray-900 mb-2">${solution.name}</h4>
                    <p class="text-sm text-gray-600 mb-2">${solution.shortDesc}</p>
                    <span class="text-secondary text-sm font-medium">Learn More →</span>
                </a>
            `).join('');
    }
    
    renderAIAutomation() {
        const content = `
            <section class="pt-32 pb-20 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="max-w-4xl">
                        <h1 class="text-5xl md:text-6xl font-bold mb-6">
                            AI & Automation<br>
                            <span class="text-purple-300">Intelligent Enterprise Solutions</span>
                        </h1>
                        <p class="text-xl text-purple-100 mb-8">
                            Transform operations with machine learning, intelligent automation, and predictive analytics 
                            that drive efficiency and insights.
                        </p>
                        <a href="/contact" class="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                            Discuss AI Solutions
                            <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
            </section>
            
            <section class="py-20 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">AI & Automation Capabilities</h2>
                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="p-6 border border-gray-200 rounded-lg">
                            <i class="fas fa-robot text-4xl text-purple-600 mb-4"></i>
                            <h3 class="text-xl font-bold mb-3">Process Automation</h3>
                            <p class="text-gray-600">Intelligent RPA and workflow automation for operational efficiency</p>
                        </div>
                        <div class="p-6 border border-gray-200 rounded-lg">
                            <i class="fas fa-chart-line text-4xl text-purple-600 mb-4"></i>
                            <h3 class="text-xl font-bold mb-3">Predictive Analytics</h3>
                            <p class="text-gray-600">ML models for forecasting, anomaly detection, and decision support</p>
                        </div>
                        <div class="p-6 border border-gray-200 rounded-lg">
                            <i class="fas fa-comments text-4xl text-purple-600 mb-4"></i>
                            <h3 class="text-xl font-bold mb-3">NLP & Conversational AI</h3>
                            <p class="text-gray-600">Chatbots, document processing, and intelligent assistants</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
        this.replaceMainContent(content);
    }
    
    renderCarbonESG() {
        const content = `
            <section class="pt-32 pb-20 bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="max-w-4xl">
                        <h1 class="text-5xl md:text-6xl font-bold mb-6">
                            Carbon & ESG Platforms<br>
                            <span class="text-green-300">Sustainable Digital Infrastructure</span>
                        </h1>
                        <p class="text-xl text-green-100 mb-8">
                            Build transparent ESG frameworks with blockchain-verified sustainability data. 
                            Track, measure, and report carbon emissions with confidence.
                        </p>
                        <a href="/contact" class="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                            Explore ESG Solutions
                            <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
            </section>
            
            <section class="py-20 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">ESG Platform Capabilities</h2>
                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="p-6 border border-gray-200 rounded-lg">
                            <i class="fas fa-leaf text-4xl text-green-600 mb-4"></i>
                            <h3 class="text-xl font-bold mb-3">Carbon Tracking</h3>
                            <p class="text-gray-600">Scope 1, 2, and 3 emissions measurement and reporting</p>
                        </div>
                        <div class="p-6 border border-gray-200 rounded-lg">
                            <i class="fas fa-certificate text-4xl text-green-600 mb-4"></i>
                            <h3 class="text-xl font-bold mb-3">ESG Compliance</h3>
                            <p class="text-gray-600">Automated reporting for regulatory and investor requirements</p>
                        </div>
                        <div class="p-6 border border-gray-200 rounded-lg">
                            <i class="fas fa-exchange-alt text-4xl text-green-600 mb-4"></i>
                            <h3 class="text-xl font-bold mb-3">Carbon Markets</h3>
                            <p class="text-gray-600">Carbon credit trading and offset management platforms</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
        this.replaceMainContent(content);
    }
    
    renderIndustries() {
        const content = `
            <section class="pt-32 pb-20 bg-gradient-to-br from-primary via-slate-800 to-slate-900 text-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 class="text-5xl md:text-6xl font-bold mb-6">Industries We Transform</h1>
                    <p class="text-xl text-gray-300 mb-8 max-w-3xl">
                        Delivering specialized blockchain, AI, and ESG solutions for enterprises across diverse sectors
                    </p>
                </div>
            </section>
            
            <section class="py-20 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid md:grid-cols-3 gap-8">
                        ${this.renderIndustryCards()}
                    </div>
                </div>
            </section>
        `;
        this.replaceMainContent(content);
    }
    
    renderIndustryCards() {
        const industries = [
            { name: 'Supply Chain & Logistics', icon: 'fa-boxes', color: '#3B82F6' },
            { name: 'Financial Services', icon: 'fa-university', color: '#8B5CF6' },
            { name: 'Healthcare & Life Sciences', icon: 'fa-heartbeat', color: '#EF4444' },
            { name: 'Energy & Utilities', icon: 'fa-bolt', color: '#059669' },
            { name: 'Manufacturing', icon: 'fa-industry', color: '#F59E0B' },
            { name: 'Real Estate', icon: 'fa-building', color: '#6366F1' },
            { name: 'Telecommunications', icon: 'fa-signal', color: '#8B5CF6' },
            { name: 'Insurance', icon: 'fa-shield-alt', color: '#F59E0B' },
            { name: 'Retail & E-commerce', icon: 'fa-shopping-cart', color: '#10B981' }
        ];
        
        return industries.map(ind => `
            <div class="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div class="text-4xl mb-4" style="color: ${ind.color};">
                    <i class="fas ${ind.icon}"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">${ind.name}</h3>
                <p class="text-gray-600 mb-4">Specialized solutions for digital transformation</p>
                <a href="/contact" class="text-secondary font-semibold hover:text-blue-700">
                    Learn More →
                </a>
            </div>
        `).join('');
    }
    
    renderInsights() {
        const content = `
            <section class="pt-32 pb-20 bg-gradient-to-br from-primary via-slate-800 to-slate-900 text-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 class="text-5xl md:text-6xl font-bold mb-6">Insights & Thought Leadership</h1>
                    <p class="text-xl text-gray-300 mb-8 max-w-3xl">
                        Latest trends, case studies, and insights from enterprise blockchain and AI implementations
                    </p>
                </div>
            </section>
            
            <section class="py-20 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div class="max-w-2xl mx-auto">
                        <i class="fas fa-newspaper text-6xl text-gray-300 mb-6"></i>
                        <h2 class="text-2xl font-bold text-gray-900 mb-4">Content Coming Soon</h2>
                        <p class="text-gray-600 mb-8">
                            We're preparing insightful content about enterprise blockchain, AI, and ESG platforms. 
                            Check back soon or contact us for more information.
                        </p>
                        <a href="/contact" class="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        `;
        this.replaceMainContent(content);
    }
    
    renderAbout() {
        const content = `
            <section class="pt-32 pb-20 bg-gradient-to-br from-primary via-slate-800 to-slate-900 text-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="max-w-4xl">
                        <h1 class="text-5xl md:text-6xl font-bold mb-6">About Antier Solutions</h1>
                        <p class="text-xl text-gray-300 mb-8">
                            Leading enterprise technology consulting firm specializing in Blockchain, AI, and ESG platforms
                        </p>
                    </div>
                </div>
            </section>
            
            <section class="py-20 bg-white">
                <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="prose prose-lg max-w-none">
                        <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                        <p class="text-gray-700 text-lg mb-8">
                            Antier Solutions empowers global enterprises to harness the transformative potential of blockchain, 
                            artificial intelligence, and ESG technology. We deliver enterprise-grade platforms that drive operational 
                            efficiency, transparency, and sustainable growth.
                        </p>
                        
                        <h2 class="text-3xl font-bold text-gray-900 mb-6">Why Antier?</h2>
                        <div class="grid md:grid-cols-2 gap-6 mb-8">
                            <div class="bg-gray-50 p-6 rounded-lg">
                                <h3 class="font-bold text-xl mb-3">50+ Proven Solutions</h3>
                                <p class="text-gray-700">Comprehensive blockchain solutions across 8 strategic domains</p>
                            </div>
                            <div class="bg-gray-50 p-6 rounded-lg">
                                <h3 class="font-bold text-xl mb-3">Enterprise Focus</h3>
                                <p class="text-gray-700">Built for CIOs, CTOs, and innovation leaders</p>
                            </div>
                            <div class="bg-gray-50 p-6 rounded-lg">
                                <h3 class="font-bold text-xl mb-3">Industry Expertise</h3>
                                <p class="text-gray-700">Deep knowledge across 15+ industries</p>
                            </div>
                            <div class="bg-gray-50 p-6 rounded-lg">
                                <h3 class="font-bold text-xl mb-3">Outcome-Driven</h3>
                                <p class="text-gray-700">Focus on measurable business results</p>
                            </div>
                        </div>
                        
                        <div class="bg-secondary text-white rounded-xl p-8 text-center mt-12">
                            <h3 class="text-2xl font-bold mb-4">Ready to Transform Your Enterprise?</h3>
                            <p class="text-blue-100 mb-6">Let's discuss how we can help you achieve your digital transformation goals</p>
                            <a href="/contact" class="bg-white text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
                                Contact Our Team
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        `;
        this.replaceMainContent(content);
    }
    
    renderContact() {
        const content = `
            <section class="pt-32 pb-20 bg-gradient-to-br from-primary via-slate-800 to-slate-900 text-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 class="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
                    <p class="text-xl text-gray-300 max-w-3xl">
                        Ready to explore how blockchain, AI, or ESG platforms can transform your enterprise? 
                        Schedule a consultation with our technology experts.
                    </p>
                </div>
            </section>
            
            <section class="py-20 bg-white">
                <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 class="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                            <div class="space-y-4">
                                <div class="flex items-start">
                                    <i class="fas fa-envelope text-secondary text-xl mr-4 mt-1"></i>
                                    <div>
                                        <div class="font-semibold">Email</div>
                                        <div class="text-gray-600">info@antiersolutions.com</div>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <i class="fas fa-phone text-secondary text-xl mr-4 mt-1"></i>
                                    <div>
                                        <div class="font-semibold">Phone</div>
                                        <div class="text-gray-600">+1 (555) 123-4567</div>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <i class="fas fa-map-marker-alt text-secondary text-xl mr-4 mt-1"></i>
                                    <div>
                                        <div class="font-semibold">Headquarters</div>
                                        <div class="text-gray-600">Global Enterprise Technology Hub</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="mt-8">
                                <h3 class="font-bold text-lg mb-4">Connect With Us</h3>
                                <div class="flex space-x-4 text-2xl">
                                    <a href="#" class="text-gray-600 hover:text-secondary transition-colors">
                                        <i class="fab fa-linkedin"></i>
                                    </a>
                                    <a href="#" class="text-gray-600 hover:text-secondary transition-colors">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" class="text-gray-600 hover:text-secondary transition-colors">
                                        <i class="fab fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <h2 class="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                            <form id="contactForm" class="space-y-4">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input type="text" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent">
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input type="email" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent">
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Company</label>
                                    <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent">
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Interest Area</label>
                                    <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent">
                                        <option>Enterprise Blockchain</option>
                                        <option>AI & Automation</option>
                                        <option>Carbon & ESG</option>
                                        <option>General Inquiry</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea rows="4" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"></textarea>
                                </div>
                                <button type="submit" class="w-full bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        `;
        this.replaceMainContent(content);
        this.attachContactForm();
    }
    
    replaceMainContent(content) {
        const body = document.querySelector('body');
        const nav = document.querySelector('nav');
        const footer = document.querySelector('footer');
        
        // Save nav and footer
        const navHTML = nav.outerHTML;
        const footerHTML = footer.outerHTML;
        
        // Replace body content
        body.innerHTML = navHTML + content + footerHTML;
        
        // Reinitialize nav functionality
        this.initNav();
    }
    
    initNav() {
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
        
        // Scroll effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('mainNav');
            if (window.scrollY > 50) {
                nav.classList.add('nav-scrolled');
            } else {
                nav.classList.remove('nav-scrolled');
            }
        });
    }
    
    attachSearchFilters() {
        const searchInput = document.getElementById('searchSolutions');
        const filterBtns = document.querySelectorAll('.filter-btn');
        
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.filterSolutions(e.target.value.toLowerCase(), 'all');
            });
        }
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.dataset.filter;
                this.filterSolutions('', filter);
            });
        });
    }
    
    filterSolutions(searchTerm, category) {
        const cards = document.querySelectorAll('.category-card');
        
        cards.forEach(card => {
            const cardCategory = card.dataset.category;
            const cardText = card.textContent.toLowerCase();
            
            const matchesSearch = !searchTerm || cardText.includes(searchTerm);
            const matchesCategory = category === 'all' || cardCategory === category;
            
            if (matchesSearch && matchesCategory) {
                card.style.display = 'block';
                card.classList.add('fade-in');
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    attachContactForm() {
        const form = document.getElementById('contactForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you for your interest! We will contact you shortly.');
                form.reset();
            });
        }
    }
}

// Initialize router when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.antierRouter = new Router();
});