/* ==========================================================================
   IND AMICUS LEGAL — Interactive Functionality
   - BCI Rule 36 Disclaimer State Management (Session / LocalStorage)
   - Mobile Navigation Hamburger Toggle
   - Smooth Scroll & Header Elevate
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. BCI Disclaimer Modal Logic
  const bciModal = document.getElementById('bciModal');
  const bciAcceptBtn = document.getElementById('bciAcceptBtn');
  const bciDeclineBtn = document.getElementById('bciDeclineBtn');
  const DISCLAIMER_STORAGE_KEY = 'ind_amicus_bci_accepted_v1';

  // Check if previously accepted
  const isDisclaimerAccepted = localStorage.getItem(DISCLAIMER_STORAGE_KEY);

  if (isDisclaimerAccepted === 'true') {
    bciModal.classList.add('hidden');
    document.body.style.overflow = '';
  } else {
    bciModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Lock background scroll
  }

  // Accept Handler
  if (bciAcceptBtn) {
    bciAcceptBtn.addEventListener('click', () => {
      localStorage.setItem(DISCLAIMER_STORAGE_KEY, 'true');
      bciModal.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }

  // Decline Handler
  if (bciDeclineBtn) {
    bciDeclineBtn.addEventListener('click', () => {
      // Redirect out to a neutral search engine or standard tab
      window.location.href = 'https://www.google.com';
    });
  }

  // 2. Mobile Navigation Toggle
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });

    // Close mobile nav when clicking any nav link
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
      });
    });
  }

  // 3. Header Scroll Shadow
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
    } else {
      header.style.boxShadow = 'none';
    }
  });
});
