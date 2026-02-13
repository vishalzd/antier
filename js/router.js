    handleRoute() {
        let path = window.location.pathname;
        
        // Handle GitHub Pages base path (e.g., /antierenterprise/)
        // Remove trailing slash for consistency
        path = path.replace(/\/$/, '') || '/';
        
        // If path ends with /antierenterprise (GitHub Pages root), treat as home
        if (path.endsWith('/antierenterprise') || path === '/antierenterprise') {
            path = '/';
        }
        
        // Remove /antierenterprise prefix if present for routing
        if (path.startsWith('/antierenterprise/')) {
            path = path.replace('/antierenterprise', '');
        }
        
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
