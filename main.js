/**
 * Main JavaScript file for Kasbeet Engineering Studios
 * Implements clean code practices and professional functionality
 */

'use strict';

/**
 * Configuration object for application settings
 */
const config = {
    animationDuration: 300,
    scrollOffset: 80
};

/**
 * DOM utility functions
 */
const dom = {
    /**
     * Safely query a single element
     * @param {string} selector - CSS selector
     * @returns {Element|null} - The found element or null
     */
    querySelector(selector) {
        return document.querySelector(selector);
    },

    /**
     * Safely query multiple elements
     * @param {string} selector - CSS selector
     * @returns {NodeList} - Collection of found elements
     */
    querySelectorAll(selector) {
        return document.querySelectorAll(selector);
    }
};

/**
 * Smooth scroll functionality for navigation links
 */
const navigation = {
    /**
     * Initialize navigation event listeners
     */
    init() {
        const navLinks = dom.querySelectorAll('nav a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', this.handleNavClick.bind(this));
        });
    },

    /**
     * Handle navigation link clicks
     * @param {Event} event - Click event
     */
    handleNavClick(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetElement = dom.querySelector(`#${targetId}`);

        if (targetElement) {
            this.scrollToElement(targetElement);
        }
    },

    /**
     * Scroll smoothly to target element
     * @param {Element} element - Target element to scroll to
     */
    scrollToElement(element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - config.scrollOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

/**
 * Form validation and handling
 */
const formHandler = {
    /**
     * Initialize form event listeners
     */
    init() {
        const form = dom.querySelector('form');
        if (form) {
            form.addEventListener('submit', this.handleSubmit.bind(this));
        }
    },

    /**
     * Handle form submission
     * @param {Event} event - Submit event
     */
    handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        if (this.validateForm(data)) {
            this.processForm(data);
        }
    },

    /**
     * Validate form data
     * @param {Object} data - Form data object
     * @returns {boolean} - Validation result
     */
    validateForm(data) {
        const { name, email, message } = data;

        if (!name || name.trim().length === 0) {
            this.showError('Name is required');
            return false;
        }

        if (!email || !this.isValidEmail(email)) {
            this.showError('Valid email is required');
            return false;
        }

        if (!message || message.trim().length === 0) {
            this.showError('Message is required');
            return false;
        }

        return true;
    },

    /**
     * Validate email format
     * @param {string} email - Email address to validate
     * @returns {boolean} - Validation result
     */
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    /**
     * Process valid form data
     * @param {Object} data - Validated form data
     */
    processForm(data) {
        console.log('Form submitted successfully:', data);
        this.showSuccess('Thank you for your message! We will get back to you soon.');

        // Reset form after successful submission
        const form = dom.querySelector('form');
        if (form) {
            form.reset();
        }
    },

    /**
     * Display error message
     * @param {string} message - Error message to display
     */
    showError(message) {
        this.showNotification(message, 'error');
    },

    /**
     * Display success message
     * @param {string} message - Success message to display
     */
    showSuccess(message) {
        this.showNotification(message, 'success');
    },

    /**
     * Display notification message to user
     * @param {string} message - Message to display
     * @param {string} type - Type of notification ('success' or 'error')
     */
    showNotification(message, type = 'info') {
        // Remove any existing notification
        const existingNotification = dom.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.setAttribute('role', 'alert');
        notification.setAttribute('aria-live', 'polite');

        // Insert at the top of main content
        const main = dom.querySelector('main');
        if (main) {
            main.insertBefore(notification, main.firstChild);

            // Auto-dismiss after 5 seconds
            setTimeout(() => {
                notification.remove();
            }, 5000);
        }
    }
};

/**
 * Application initialization
 */
const app = {
    /**
     * Initialize the application
     */
    init() {
        document.addEventListener('DOMContentLoaded', () => {
            navigation.init();
            formHandler.init();
            console.log('Kasbeet Engineering Studios - Application initialized');
        });
    }
};

// Initialize application
app.init();
