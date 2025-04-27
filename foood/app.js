// Simple router for handling navigation
class Router {
    constructor(routes) {
        this.routes = routes;
        this.currentRoute = '';
        
        // Handle back/forward navigation
        window.addEventListener('popstate', () => {
            this.navigate(window.location.pathname, false);
        });
        
        // Initialize with current URL
        this.navigate(window.location.pathname, false);
    }
    
    navigate(path, addToHistory = true) {
        // Default to home if path is root
        if (path === '/') {
            path = '/home';
        }
        
        // Find matching route
        const route = this.routes.find(r => r.path === path);
        
        // If route exists, render it
        if (route) {
            this.currentRoute = path;
            const appDiv = document.getElementById('app');
            appDiv.innerHTML = route.template();
            
            // Bind any route-specific event handlers
            if (route.init) {
                route.init();
            }
            
            // Update browser history
            if (addToHistory) {
                window.history.pushState({}, '', path);
            }
            
            // Scroll to top
            window.scrollTo(0, 0);
        } else {
            // Fallback to home page if route not found
            this.navigate('/home');
        }
    }
}

// Initialize the router when DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    const routes = [
        {
            path: '/home',
            template: () => `
                <div class="home-container">
                    <header>
                        <a href="#" class="logo" data-link="/home">FOODEAT</a>
                        <div class="nav-links">
                            <a href="#" data-link="/home">HOME</a>
                            <a href="#" data-link="/menu">MENU</a>
                            <a href="#" data-link="/about">ABOUT</a>
                        </div>
                        <div class="user-actions">
                            <i class="fas fa-shopping-cart cart-icon"></i>
                            <button class="login-btn" data-link="/login">Login</button>
                        </div>
                    </header>
                    
                    <section class="hero">
                        <div class="hero-content">
                            <h1 class="hero-title">Delicious Food Is Waiting For You</h1>
                            <p class="hero-text">Our team of registered nurses and skilled healthcare professionals provide in-home nursing</p>
                            <div class="hero-buttons">
                                <a href="#" class="hero-btn primary-btn" data-link="/menu">Food Menu</a>
                                <a href="#" class="hero-btn secondary-btn" data-link="/booking">Book a Table</a>
                            </div>
                        </div>
                        <div class="hero-image">
                            <img src="pics/Korean_Bibimbap_Recipe__A_Delicious_and_Colorful_Dish-removebg-preview.png" alt="Bowl of nutritious food">
                        </div>
                    </section>
                    
                    <section class="menu-section">
                        <h2 class="section-title">Top List</h2>
                        <p class="section-subtitle">Our mainstay menu</p>
                        
                        <div class="menu-items">
                            <div class="menu-item">
                                <div class="menu-image">
                                    <img src="pics/Delicious Shrimp Scampi Pasta Recipe.jpeg" alt="Noodles three">
                                </div>
                                <div class="menu-rating">
                                    <i class="fas fa-star star-icon"></i>
                                    <span>4.5</span>
                                </div>
                                <div class="menu-details">
                                    <h3 class="menu-name">Noodles three</h3>
                                    <p class="menu-description">White plate with dried shrimps</p>
                                    <div class="menu-footer">
                                        <span class="menu-price">12$</span>
                                        <div class="add-btn">
                                            <i class="fas fa-plus"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="menu-item">
                                <div class="menu-image">
                                    <img src="pics/nooooodle.jpeg" alt="Noodles one">
                                </div>
                                <div class="menu-rating">
                                    <i class="fas fa-star star-icon"></i>
                                    <span>4.2</span>
                                </div>
                                <div class="menu-details">
                                    <h3 class="menu-name">Noodles one</h3>
                                    <p class="menu-description">Noodles spicy boil with seafood and pork in hot pot</p>
                                    <div class="menu-footer">
                                        <span class="menu-price">20$</span>
                                        <div class="add-btn">
                                            <i class="fas fa-plus"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="menu-item">
                                <div class="menu-image">
                                    <img src="pics/noodlesoup.jpeg" alt="Noodles two">
                                </div>
                                <div class="menu-rating">
                                    <i class="fas fa-star star-icon"></i>
                                    <span>4.7</span>
                                </div>
                                <div class="menu-details">
                                    <h3 class="menu-name">Noodles two</h3>
                                    <p class="menu-description">Noodles prawn spicy soup</p>
                                    <div class="menu-footer">
                                        <span class="menu-price">16$</span>
                                        <div class="add-btn">
                                            <i class="fas fa-plus"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section class="fries-section">
                        <div class="fries-image">
                            <img src="pics/Free_French_Fries_Transparent_png__Snack_Menu__Fast_Food-removebg-preview.png" alt="French Fries">
                        </div>
                        <div class="fries-content">
                            <h2 class="fries-title">Best Potatoes For French Fries</h2>
                            <p class="fries-text">Russet potatoes are ideal. Since they're dense, they don't contain as much water inside, which allows them to get extra crispy.</p>
                        </div>
                    </section>
                    
                    <section class="services-section">
                        <h2 class="services-title">Our services</h2>
                        <div class="services-grid">
                            <div class="service-item">
                                <i class="fas fa-mobile-alt service-icon"></i>
                                <span class="service-name">Online booking</span>
                            </div>
                            <div class="service-item">
                                <i class="fas fa-utensils service-icon"></i>
                                <span class="service-name">Catering service</span>
                            </div>
                            <div class="service-item">
                                <i class="fas fa-user-friends service-icon"></i>
                                <span class="service-name">Membership</span>
                            </div>
                            <div class="service-item">
                                <i class="fas fa-truck service-icon"></i>
                                <span class="service-name">Delivery service</span>
                            </div>
                        </div>
                    </section>
                    
                    <footer>
                        <div class="footer-logo">FOODEAT</div>
                        <div class="footer-links">
                            <a href="#" data-link="/home">Home</a>
                            <a href="#" data-link="/menu">Menu</a>
                            <a href="#" data-link="/about">About</a>
                            <a href="#" data-link="/contact">Contact</a>
                        </div>
                        <div class="social-icons">
                            <a href="#" class="social-icon"><i class="fab fa-facebook"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
                        </div>
                        <p class="copyright">© 2025 FoodEat. All rights reserved.</p>
                    </footer>
                </div>
            `,
            init: () => {
                // Add event listeners for navigation links
                document.querySelectorAll('[data-link]').forEach(link => {
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        router.navigate(this.getAttribute('data-link'));
                    });
                });
                
                // Add event listeners for add-to-cart buttons
                document.querySelectorAll('.add-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        this.classList.add('added');
                        setTimeout(() => {
                            this.classList.remove('added');
                        }, 1000);
                    });
                });
            }
        },
        {
            path: '/menu',
            template: () => `
                <div class="home-container">
                    <header>
                        <a href="#" class="logo" data-link="/home">FOODEAT</a>
                        <div class="nav-links">
                            <a href="#" data-link="/home">HOME</a>
                            <a href="#" data-link="/menu">MENU</a>
                            <a href="#" data-link="/about">ABOUT</a>
                        </div>
                        <div class="user-actions">
                            <i class="fas fa-shopping-cart cart-icon"></i>
                            <button class="login-btn" data-link="/login">Login</button>
                        </div>
                    </header>
                    
                    <section class="menu-section">
                        <h2 class="section-title">Our Full Menu</h2>
                        <p class="section-subtitle">Explore our delicious offerings</p>
                        
                        <div class="menu-items">
                            <div class="menu-item">
                                <div class="menu-image">
                                    <img src="pics/Delicious Shrimp Scampi Pasta Recipe.jpeg" alt="Noodles three">
                                </div>
                                <div class="menu-rating">
                                    <i class="fas fa-star star-icon"></i>
                                    <span>4.5</span>
                                </div>
                                <div class="menu-details">
                                    <h3 class="menu-name">Noodles three</h3>
                                    <p class="menu-description">White plate with dried shrimps</p>
                                    <div class="menu-footer">
                                        <span class="menu-price">12$</span>
                                        <div class="add-btn">
                                            <i class="fas fa-plus"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="menu-item">
                                <div class="menu-image">
                                    <img src="pics/nooooodle.jpeg" alt="Noodles one">
                                </div>
                                <div class="menu-rating">
                                    <i class="fas fa-star star-icon"></i>
                                    <span>4.2</span>
                                </div>
                                <div class="menu-details">
                                    <h3 class="menu-name">Noodles one</h3>
                                    <p class="menu-description">Noodles spicy boil with seafood and pork in hot pot</p>
                                    <div class="menu-footer">
                                        <span class="menu-price">20$</span>
                                        <div class="add-btn">
                                            <i class="fas fa-plus"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="menu-item">
                                <div class="menu-image">
                                    <img src="pics/noodlesoup.jpeg" alt="Noodles two">
                                </div>
                                <div class="menu-rating">
                                    <i class="fas fa-star star-icon"></i>
                                    <span>4.7</span>
                                </div>
                                <div class="menu-details">
                                    <h3 class="menu-name">Noodles two</h3>
                                    <p class="menu-description">Noodles prawn spicy soup</p>
                                    <div class="menu-footer">
                                        <span class="menu-price">16$</span>
                                        <div class="add-btn">
                                            <i class="fas fa-plus"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="menu-item">
                                <div class="menu-image">
                                    <img src="pics/frenchfries.jpeg" alt="French Fries">
                                </div>
                                <div class="menu-rating">
                                    <i class="fas fa-star star-icon"></i>
                                    <span>4.8</span>
                                </div>
                                <div class="menu-details">
                                    <h3 class="menu-name">Crispy French Fries</h3>
                                    <p class="menu-description">Made with russet potatoes, extra crispy</p>
                                    <div class="menu-footer">
                                        <span class="menu-price">8$</span>
                                        <div class="add-btn">
                                            <i class="fas fa-plus"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="menu-item">
                                <div class="menu-image">
                                    <img src="pics/Sticky Chicken Rice Bowls.jpeg" alt="Chicken Bowl">
                                </div>
                                <div class="menu-rating">
                                    <i class="fas fa-star star-icon"></i>
                                    <span>4.9</span>
                                </div>
                                <div class="menu-details">
                                    <h3 class="menu-name">
                                    <h3 class="menu-name">Protein Bowl</h3>
                                    <p class="menu-description">Chicken, carrots, seaweed, and beans with rice</p>
                                    <div class="menu-footer">
                                        <span class="menu-price">18$</span>
                                        <div class="add-btn">
                                            <i class="fas fa-plus"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="menu-item">
                                <div class="menu-image">
                                    <img src="pics/Pasta.jpeg" alt="Seafood Pasta">
                                </div>
                                <div class="menu-rating">
                                    <i class="fas fa-star star-icon"></i>
                                    <span>4.6</span>
                                </div>
                                <div class="menu-details">
                                    <h3 class="menu-name">Seafood Pasta</h3>
                                    <p class="menu-description">Pasta with fresh shrimp and herbs</p>
                                    <div class="menu-footer">
                                        <span class="menu-price">22$</span>
                                        <div class="add-btn">
                                            <i class="fas fa-plus"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <button class="hero-btn primary-btn" data-link="/order">Place Order</button>
                    </section>
                    
                    <footer>
                        <div class="footer-logo">FOODEAT</div>
                        <div class="footer-links">
                            <a href="#" data-link="/home">Home</a>
                            <a href="#" data-link="/menu">Menu</a>
                            <a href="#" data-link="/about">About</a>
                            <a href="#" data-link="/contact">Contact</a>
                        </div>
                        <div class="social-icons">
                            <a href="#" class="social-icon"><i class="fab fa-facebook"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
                        </div>
                        <p class="copyright">© 2025 FoodEat. All rights reserved.</p>
                    </footer>
                </div>
            `,
            init: () => {
                // Add event listeners for navigation links
                document.querySelectorAll('[data-link]').forEach(link => {
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        router.navigate(this.getAttribute('data-link'));
                    });
                });
                
                // Add event listeners for add-to-cart buttons
                document.querySelectorAll('.add-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        this.classList.add('added');
                        setTimeout(() => {
                            this.classList.remove('added');
                        }, 1000);
                    });
                });
            }
        },
        {
            path: '/about',
            template: () => `
                <div class="home-container">
                    <header>
                        <a href="#" class="logo" data-link="/home">FOODEAT</a>
                        <div class="nav-links">
                            <a href="#" data-link="/home">HOME</a>
                            <a href="#" data-link="/menu">MENU</a>
                            <a href="#" data-link="/about">ABOUT</a>
                        </div>
                        <div class="user-actions">
                            <i class="fas fa-shopping-cart cart-icon"></i>
                            <button class="login-btn" data-link="/login">Login</button>
                        </div>
                    </header>
                    
                    <section class="hero">
                        <div class="hero-content">
                            <h1 class="hero-title">About Us</h1>
                            <p class="hero-text">We started as a small family restaurant in 2010 and have grown to serve thousands of happy customers. Our mission is to provide delicious, healthy food with exceptional service.</p>
                        </div>
                        <div class="hero-image">
                            <img src="pics/restaurant.jpeg" alt="Restaurant interior">
                        </div>
                    </section>
                    
                    <footer>
                        <div class="footer-logo">FOODEAT</div>
                        <div class="footer-links">
                            <a href="#" data-link="/home">Home</a>
                            <a href="#" data-link="/menu">Menu</a>
                            <a href="#" data-link="/about">About</a>
                            <a href="#" data-link="/contact">Contact</a>
                        </div>
                        <div class="social-icons">
                            <a href="#" class="social-icon"><i class="fab fa-facebook"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
                        </div>
                        <p class="copyright">© 2025 FoodEat. All rights reserved.</p>
                    </footer>
                </div>
            `,
            init: () => {
                // Add event listeners for navigation links
                document.querySelectorAll('[data-link]').forEach(link => {
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        router.navigate(this.getAttribute('data-link'));
                    });
                });
            }
        },
        {
            path: '/login',
            template: () => `
                <div class="auth-container">
                    <div class="auth-card">
                        <div class="auth-header">
                            <div class="auth-logo">FOODEAT</div>
                            <p>Welcome back!</p>
                        </div>
                        <div class="auth-tabs">
                            <div class="auth-tab login-tab active" data-tab="login">Login</div>
                            <div class="auth-tab signup-tab" data-tab="signup">Sign Up</div>
                        </div>
                        <div class="auth-form login-form active">
                            <div class="form-group">
                                <label class="form-label">Email</label>
                                <input type="email" class="form-input" placeholder="Enter your email">
                            </div>
                            <div class="form-group">
                                <label class="form-label">Password</label>
                                <input type="password" class="form-input" placeholder="Enter your password">
                            </div>
                            <button class="auth-btn" data-link="/home">Login</button>
                        </div>
                        <div class="auth-form signup-form">
                            <div class="form-group">
                                <label class="form-label">Name</label>
                                <input type="text" class="form-input" placeholder="Enter your name">
                            </div>
                            <div class="form-group">
                                <label class="form-label">Email</label>
                                <input type="email" class="form-input" placeholder="Enter your email">
                            </div>
                            <div class="form-group">
                                <label class="form-label">Password</label>
                                <input type="password" class="form-input" placeholder="Create a password">
                            </div>
                            <div class="form-group">
                                <label class="form-label">Confirm Password</label>
                                <input type="password" class="form-input" placeholder="Confirm your password">
                            </div>
                            <button class="auth-btn" data-link="/home">Sign Up</button>
                        </div>
                        <div class="auth-footer">
                            <a href="#" data-link="/home" class="auth-link">Back to Home</a>
                        </div>
                    </div>
                </div>
            `,
            init: () => {
                // Add event listeners for navigation links
                document.querySelectorAll('[data-link]').forEach(link => {
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        router.navigate(this.getAttribute('data-link'));
                    });
                });
                
                // Add tab switching functionality
                document.querySelectorAll('.auth-tab').forEach(tab => {
                    tab.addEventListener('click', function() {
                        // Remove active class from all tabs and forms
                        document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
                        document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
                        
                        // Add active class to clicked tab and corresponding form
                        this.classList.add('active');
                        const formClass = this.getAttribute('data-tab') + '-form';
                        document.querySelector(`.${formClass}`).classList.add('active');
                    });
                });
            }
        },
        {
            path: '/order',
            template: () => `
                <div class="home-container">
                    <header>
                        <a href="#" class="logo" data-link="/home">FOODEAT</a>
                        <div class="nav-links">
                            <a href="#" data-link="/home">HOME</a>
                            <a href="#" data-link="/menu">MENU</a>
                            <a href="#" data-link="/about">ABOUT</a>
                        </div>
                        <div class="user-actions">
                            <i class="fas fa-shopping-cart cart-icon"></i>
                            <button class="login-btn" data-link="/login">Login</button>
                        </div>
                    </header>
                    
                    <section class="auth-container" style="min-height: 80vh; padding: 2rem 0;">
                        <div class="auth-card" style="width: 600px;">
                            <div class="auth-header">
                                <div class="auth-logo">Order Now</div>
                                <p>Complete your order details</p>
                            </div>
                            <div class="auth-form">
                                <div class="form-group">
                                    <label class="form-label">Full Name</label>
                                    <input type="text" class="form-input" placeholder="Enter your full name">
                                </div>
                                <div class="form-group">
                                    <label class="form-label">Phone Number</label>
                                    <input type="tel" class="form-input" placeholder="Enter your phone number">
                                </div>
                                <div class="form-group">
                                    <label class="form-label">Delivery Address</label>
                                    <input type="text" class="form-input" placeholder="Enter your delivery address">
                                </div>
                                <div class="form-group">
                                    <label class="form-label">Order Notes (Optional)</label>
                                    <textarea class="form-input" rows="3" placeholder="Any special instructions"></textarea>
                                </div>
                                <button class="auth-btn" data-link="/home">Place Order</button>
                            </div>
                            <div class="auth-footer">
                                <a href="#" data-link="/menu" class="auth-link">Back to Menu</a>
                            </div>
                        </div>
                    </section>
                    
                    <footer>
                        <div class="footer-logo">FOODEAT</div>
                        <div class="footer-links">
                            <a href="#" data-link="/home">Home</a>
                            <a href="#" data-link="/menu">Menu</a>
                            <a href="#" data-link="/about">About</a>
                            <a href="#" data-link="/contact">Contact</a>
                        </div>
                        <div class="social-icons">
                            <a href="#" class="social-icon"><i class="fab fa-facebook"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
                        </div>
                        <p class="copyright">© 2025 FoodEat. All rights reserved.</p>
                    </footer>
                </div>
            `,
            init: () => {
                // Add event listeners for navigation links
                document.querySelectorAll('[data-link]').forEach(link => {
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        router.navigate(this.getAttribute('data-link'));
                    });
                });
            }
        },
        {
            path: '/booking',
            template: () => `
                <div class="home-container">
                    <header>
                        <a href="#" class="logo" data-link="/home">FOODEAT</a>
                        <div class="nav-links">
                            <a href="#" data-link="/home">HOME</a>
                            <a href="#" data-link="/menu">MENU</a>
                            <a href="#" data-link="/about">ABOUT</a>
                        </div>
                        <div class="user-actions">
                            <i class="fas fa-shopping-cart cart-icon"></i>
                            <button class="login-btn" data-link="/login">Login</button>
                        </div>
                    </header>
                    
                    <section class="auth-container" style="min-height: 80vh; padding: 2rem 0;">
                        <div class="auth-card" style="width: 600px;">
                            <div class="auth-header">
                                <div class="auth-logo">Book a Table</div>
                                <p>Reserve your table now</p>
                            </div>
                            <div class="auth-form">
                                <div class="form-group">
                                    <label class="form-label">Full Name</label>
                                    <input type="text" class="form-input" placeholder="Enter your full name">
                                </div>
                                <div class="form-group">
                                    <label class="form-label">Phone Number</label>
                                    <input type="tel" class="form-input" placeholder="Enter your phone number">
                                </div>
                                <div class="form-group">
                                    <label class="form-label">Email</label>
                                    <input type="email" class="form-input" placeholder="Enter your email">
                                </div>
                                <div class="form-group">
                                    <label class="form-label">Date</label>
                                    <input type="date" class="form-input">
                                </div>
                                <div class="form-group">
                                    <label class="form-label">Time</label>
                                    <input type="time" class="form-input">
                                </div>
                                <div class="form-group">
                                    <label class="form-label">Number of Guests</label>
                                    <input type="number" class="form-input" min="1" max="10" placeholder="Enter number of guests">
                                </div>
                                <div class="form-group">
                                    <label class="form-label">Special Requests (Optional)</label>
                                    <textarea class="form-input" rows="3" placeholder="Any special requests"></textarea>
                                </div>
                                <button class="auth-btn" data-link="/home">Book Table</button>
                            </div>
                            <div class="auth-footer">
                                <a href="#" data-link="/home" class="auth-link">Back to Home</a>
                            </div>
                        </div>
                    </section>
                    
                    <footer>
                        <div class="footer-logo">FOODEAT</div>
                        <div class="footer-links">
                            <a href="#" data-link="/home">Home</a>
                            <a href="#" data-link="/menu">Menu</a>
                            <a href="#" data-link="/about">About</a>
                            <a href="#" data-link="/contact">Contact</a>
                        </div>
                        <div class="social-icons">
                            <a href="#" class="social-icon"><i class="fab fa-facebook"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
                        </div>
                        <p class="copyright">© 2025 FoodEat. All rights reserved.</p>
                    </footer>
                </div>
            `,
            init: () => {
                // Add event listeners for navigation links
                document.querySelectorAll('[data-link]').forEach(link => {
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        router.navigate(this.getAttribute('data-link'));
                    });
                });
            }
        }
    ];
    
    // Initialize the router
    window.router = new Router(routes);
});

// Main application script

// Apply animations when elements come into view
document.addEventListener('DOMContentLoaded', () => {
    // Set up animation observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });
    
    // Delayed initialization to ensure DOM is fully loaded with router content
    setTimeout(() => {
        // Observe menu items for animation
        document.querySelectorAll('.menu-item').forEach(item => {
            observer.observe(item);
            // Add animation class with delay based on index
            const index = Array.from(item.parentNode.children).indexOf(item);
            item.style.animationDelay = `${index * 0.1}s`;
        });
        
        // Observe service items for animation
        document.querySelectorAll('.service-item').forEach(item => {
            observer.observe(item);
            // Add animation class with delay based on index
            const index = Array.from(item.parentNode.children).indexOf(item);
            item.style.animationDelay = `${index * 0.1}s`;
        });
        
        // Add floating animation to hero image and fries image
        const heroImage = document.querySelector('.hero-image');
        if (heroImage) {
            heroImage.classList.add('floating');
        }
        
        const friesImage = document.querySelector('.fries-image');
        if (friesImage) {
            friesImage.classList.add('floating');
        }
        
        // Add hover effects to buttons
        document.querySelectorAll('.hero-btn, .add-btn, .login-btn').forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                this.classList.add('hover');
            });
            
            btn.addEventListener('mouseleave', function() {
                this.classList.remove('hover');
            });
        });
        
        // Add click effects to add buttons
        document.querySelectorAll('.add-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                // Create a notification element
                const notification = document.createElement('div');
                notification.className = 'notification';
                notification.textContent = 'Added to cart!';
                document.body.appendChild(notification);
                
                // Add animation class
                setTimeout(() => {
                    notification.classList.add('show');
                }, 10);
                
                // Remove notification after animation completes
                setTimeout(() => {
                    notification.classList.remove('show');
                    setTimeout(() => {
                        document.body.removeChild(notification);
                    }, 300);
                }, 2000);
                
                // Add item counter to cart icon
                const cartIcon = document.querySelector('.cart-icon');
                if (cartIcon) {
                    let counter = cartIcon.getAttribute('data-count') || 0;
                    counter = parseInt(counter) + 1;
                    cartIcon.setAttribute('data-count', counter);
                    
                    // Add or update cart counter element
                    let counterElement = cartIcon.querySelector('.cart-counter');
                    if (!counterElement) {
                        counterElement = document.createElement('span');
                        counterElement.className = 'cart-counter';
                        cartIcon.appendChild(counterElement);
                    }
                    counterElement.textContent = counter;
                    counterElement.classList.add('pulse');
                    setTimeout(() => {
                        counterElement.classList.remove('pulse');
                    }, 300);
                }
            });
        });
        
        // Add keyframe animations for various elements
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes fadeInLeft {
                from {
                    opacity: 0;
                    transform: translateX(-50px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            
            @keyframes fadeInRight {
                from {
                    opacity: 0;
                    transform: translateX(50px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            
            @keyframes float {
                0% {
                    transform: translateY(0px);
                }
                50% {
                    transform: translateY(-15px);
                }
                100% {
                    transform: translateY(0px);
                }
            }
            
            @keyframes pulse {
                0% {
                    transform: scale(1);
                }
                50% {
                    transform: scale(1.2);
                }
                100% {
                    transform: scale(1);
                }
            }
            
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            .menu-item.animate {
                animation: fadeInUp 0.6s ease-out forwards;
            }
            
            .service-item.animate {
                animation: fadeInUp 0.6s ease-out forwards;
            }
            
            .hero-content {
                animation: fadeInLeft 1s ease-out;
            }
            
            .floating {
                animation: float 3s ease-in-out infinite;
            }
            
            .hero-btn.hover, .add-btn.hover, .login-btn.hover {
                transform: translateY(-3px);
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            }
            
            .add-btn.added {
                animation: pulse 0.3s;
            }
            
            .notification {
                position: fixed;
                top: 20px;
                right: -300px;
                background-color: #FFA500;
                color: white;
                padding: 1rem;
                border-radius: 5px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                z-index: 1000;
                transition: right 0.3s ease-out;
            }
            
            .notification.show {
                right: 20px;
            }
            
            .cart-icon {
                position: relative;
            }
            
            .cart-counter {
                position: absolute;
                top: -10px;
                right: -10px;
                background-color: #FFA500;
                color: white;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.8rem;
            }
            
            .cart-counter.pulse {
                animation: pulse 0.3s;
            }
        `;
        document.head.appendChild(style);
    }, 100);
});

// Handle form submissions (prevent default for demo purposes)
document.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());
    
    // For demo purposes, just log the form data
    console.log('Form submitted:', formObject);
    
    // Show success message
    alert('Form submitted successfully!');
    
    // Redirect to home page after successful submission
    if (window.router) {
        window.router.navigate('/home');
    }
});

// Initialize images with placeholders
function initPlaceholderImages() {
    // Replace placeholder URLs with actual images (in a real app, these would be your actual image URLs)
    document.querySelectorAll('img[src^="https://via.placeholder.com/"]').forEach(img => {
        // Get the size from the placeholder URL
        const size = img.src.split('/').pop();
        const alt = img.alt.toLowerCase();
        
        // Set background color based on image content for better visual appearance
        let bgColor = 'f4f4f4';
        
        if (alt.includes('noodles')) {
            if (alt.includes('one')) {
                img.src = `/api/placeholder/${size}?text=Noodles+One&bg=e0c9a9`;
            } else if (alt.includes('two')) {
                img.src = `/api/placeholder/${size}?text=Noodles+Two&bg=d5a26f`;
            } else {
                img.src = `/api/placeholder/${size}?text=Noodles+Three&bg=e0d8a9`;
            }
        } else if (alt.includes('bowl')) {
            img.src = `/api/placeholder/${size}?text=Rice+Bowl&bg=b9d8e0`;
        } else if (alt.includes('fries')) {
            img.src = `/api/placeholder/${size}?text=French+Fries&bg=ffd391`;
        } else if (alt.includes('pasta')) {
            img.src = `/api/placeholder/${size}?text=Seafood+Pasta&bg=f0d0d0`;
        } else if (alt.includes('interior')) {
            img.src = `/api/placeholder/${size}?text=Our+Restaurant&bg=e0e0e0`;
        } else {
            img.src = `/api/placeholder/${size}?text=Food+Image&bg=f4f4f4`;
        }
    });
}

// Call after a slight delay to ensure router has completed initial navigation
setTimeout(initPlaceholderImages, 200);