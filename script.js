/* ==========================================================================
   ADITYA MEDICARE HOSPITALS - INTERACTIVE LOGIC & SCRIPT SYSTEM
   ========================================================================== */

// SPECIALTIES DATASET
const specialtiesData = [
  { name: "Cardiology", icon: "🫀", description: "Comprehensive cardiac care, Cath Lab & interventional cardiology." },
  { name: "Orthopedics", icon: "🦴", description: "Joint replacement, spine, arthroscopy & trauma surgery." },
  { name: "Pulmonology", icon: "🫁", description: "Advanced respiratory care, sleep medicine & bronchoscopy." },
  { name: "Neurology", icon: "🧠", description: "Brain & spine surgery, stroke management & neuro ICU." },
  { name: "Gastroenterology", icon: "🧬", description: "Advanced GI endoscopy, hepatology & HPB surgery." },
  { name: "Urology", icon: "🩺", description: "Kidney stone care, endourology & reconstructive urology." },
  { name: "Pediatrics", icon: "👶", description: "Child health, neonatal intensive care (NICU) & pediatric surgery." },
  { name: "Mother & Child", icon: "🤱", description: "Obstetrics, gynecology, high-risk pregnancy & fertility." },
  { name: "Nephrology", icon: "🩺", description: "Dialysis, kidney care & nephrology consultation." },
  { name: "Critical Care", icon: "🏥", description: "24/7 100-bed ICU, trauma & emergency critical care." },
  { name: "General Medicine", icon: "🩺", description: "Internal medicine, infectious disease & adult care." },
  { name: "ENT", icon: "👂", description: "Ear, nose, throat, micro-ear & head/neck surgery." },
  { name: "Radiology", icon: "📷", description: "3T MRI, 128-Slice CT Scan, Ultrasound & Digital X-Ray." }
];

// DOCTORS DATABASE
const doctorsData = [
  {
    name: "Dr. Krishna Sravanth Pakanati",
    department: "Orthopedics",
    qualification: "MBBS, DNB Orthopedics, MCh Ortho, FJR, FSS",
    designation: "Consultant Senior Orthopedic Surgeon",
    image: "images/doctors/krishna-sravanth.jpg",
    summary: "Orthopedic surgeon specializing in joint replacement, trauma and arthroscopy.",
    treatments: ["Joint Replacement", "Arthroscopy", "Spine & Trauma Care", "Fracture Surgery"]
  },
  {
    name: "Dr. Ramakoteswara Rao K",
    department: "Orthopedics",
    qualification: "D Ortho, Fellowship in Arthroplasty and Arthroscopy",
    designation: "Consultant Orthopaedic Surgeon",
    image: "images/doctors/ramakoteswara-rao.jpg",
    summary: "Expert in knee/hip replacement and arthroscopic surgeries.",
    treatments: ["Knee & Hip Replacement", "Arthroscopy", "Joint Pain Care", "Trauma"]
  },
  {
    name: "Dr. Sai Krishna Katakam",
    department: "Gastroenterology",
    qualification: "MBBS, MS, MCh (SGPGIMS)",
    designation: "Consultant Surgical Gastroenterologist & GI Onco-surgeon",
    image: "images/doctors/sai-krishna-katakam.jpeg",
    summary: "Specialist in GI, HPB and surgical gastroenterology.",
    treatments: ["GI Surgery", "HPB Surgery care", "Laparoscopic Gastro", "Onco-surgery"]
  },
  {
    name: "Dr. Raghu Sarath Punukollu",
    department: "Urology",
    qualification: "MBBS, DNB, MCh Urology",
    designation: "Consultant Urologist and Andrologist",
    image: "images/doctors/raghu-sarath.jpg",
    summary: "Specialist in kidney stone treatment, endourology and male fertility.",
    treatments: ["Kidney Stone Care", "Urinary Surgery", "Andrology", "Endourology"]
  },
  {
    name: "Dr. Guttikonda Bhanu Vijay",
    department: "Cardiology",
    qualification: "MBBS, MD General Medicine, DM Cardiology",
    designation: "Consultant Interventional Cardiologist",
    image: "images/doctors/dr-guttikonda.jpeg",
    summary: "Senior cardiologist for angioplasty, heart attack management & pacemaker implantation.",
    treatments: ["Angioplasty & Stenting", "Cath Lab Procedures", "Heart Failure Care", "ECG & Echo"]
  },
  {
    name: "Dr. Viswa Jyothi Yakkala",
    department: "Neurology",
    qualification: "MBBS, MD, DM Neurology",
    designation: "Consultant Neurologist",
    image: "images/doctors/dr-viswa-jyothi.jpeg",
    summary: "Specialist in stroke care, epilepsy, headache management & movement disorders.",
    treatments: ["Stroke Care", "Epilepsy", "Headache & Migraine", "Neuro Care"]
  },
  {
    name: "Dr. Sajila",
    department: "Mother & Child",
    qualification: "MBBS, MS (OBG), DNB",
    designation: "Consultant Obstetrician & Gynecologist",
    image: "images/doctors/dr-sajila.jpeg",
    summary: "Specialist in high-risk pregnancy, laparoscopic gynecology & women's health.",
    treatments: ["High-Risk Pregnancy", "Normal & C-Section Delivery", "Laparoscopic Gynecology", "Infertility Care"]
  },
  {
    name: "Dr. Farha",
    department: "Pediatrics",
    qualification: "MBBS, DCH, DNB Pediatrics",
    designation: "Consultant Pediatrician & Neonatologist",
    image: "images/doctors/dr-farha.jpeg",
    summary: "Expert in newborn care, vaccination, pediatric emergencies & child nutrition.",
    treatments: ["Neonatal ICU (NICU)", "Child Vaccination", "Pediatric Growth Care", "Child Emergency"]
  },
  {
    name: "Dr. Dinesh",
    department: "Pulmonology",
    qualification: "MBBS, MD Pulmonology",
    designation: "Consultant Pulmonologist & Sleep Specialist",
    image: "images/doctors/dr-dinesh.jpeg",
    summary: "Expert in asthma, COPD, sleep apnea & advanced bronchoscopy.",
    treatments: ["Asthma & COPD", "Bronchoscopy", "Sleep Apnea Care", "Lung Infections"]
  },
  {
    name: "Dr. Sunil Kumar Thadigiri",
    department: "Critical Care",
    qualification: "MBBS, MD Anesthesia, IDCCM",
    designation: "Chief Intensivist & Critical Care Specialist",
    image: "images/doctors/dr-sunil-thadigiri.jpeg",
    summary: "Head of 100-bed ICU managing poly-trauma, sepsis & critical care patients.",
    treatments: ["ICU Critical Care", "Ventilator Support", "Poly-Trauma Care", "Sepsis Management"]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initActiveNavLink();
  initAppointmentModal();
  initDoctorFilters();
  initStatCounters();
  initBackToTop();
});

/* --------------------------------------------------------------------------
   1. MOBILE MENU TOGGLE
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('nav-toggle-btn');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-overlay');
  const closeBtn = document.getElementById('mobile-drawer-close');

  if (!toggleBtn || !drawer || !overlay) return;

  function openMenu() {
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeMenu();
    }
  });
}

/* --------------------------------------------------------------------------
   2. ACTIVE NAV LINK HIGHLIGHT
   -------------------------------------------------------------------------- */
function initActiveNavLink() {
  const links = document.querySelectorAll('.nav-links a, .mobile-nav-links a');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* --------------------------------------------------------------------------
   3. UNIVERSAL APPOINTMENT BOOKING MODAL
   -------------------------------------------------------------------------- */
function initAppointmentModal() {
  const modal = document.getElementById('appointment-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const form = document.getElementById('appointment-form');

  if (!modal) return;

  // Global trigger function
  window.openAppointmentModal = function(doctorName = '', department = '') {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    const deptSelect = document.getElementById('modal-department-select');
    const doctorSelect = document.getElementById('modal-doctor-select');

    if (deptSelect && department) {
      deptSelect.value = department;
    }
    if (doctorSelect && doctorName) {
      doctorSelect.value = doctorName;
    }
  };

  window.closeAppointmentModal = function() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) {
    closeBtn.addEventListener('click', window.closeAppointmentModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      window.closeAppointmentModal();
    }
  });

  // Attach click listener to all book buttons
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-open-modal]');
    if (trigger) {
      e.preventDefault();
      const doc = trigger.getAttribute('data-doctor') || '';
      const dept = trigger.getAttribute('data-department') || '';
      window.openAppointmentModal(doc, dept);
    }
  });

  // Form submission handler
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('modal-patient-name')?.value || 'Patient';
      const phone = document.getElementById('modal-patient-phone')?.value || '';

      if (!phone) {
        showToast('Please enter a valid contact phone number.');
        return;
      }

      showToast(`Thank you, ${name}! Your appointment request has been received. Our team will contact you shortly.`);
      form.reset();
      setTimeout(() => {
        window.closeAppointmentModal();
      }, 1200);
    });
  }
}

function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>✓</span> <div>${message}</div>`;
  toast.classList.add('active');

  setTimeout(() => {
    toast.classList.remove('active');
  }, 4500);
}

/* --------------------------------------------------------------------------
   4. DOCTOR FILTERS & DYNAMIC SEARCH
   -------------------------------------------------------------------------- */
function initDoctorFilters() {
  const doctorGrid = document.getElementById('doctors-grid-container');
  const searchInput = document.getElementById('doctor-search-input');
  const filterPillsContainer = document.getElementById('filter-pills-container');

  if (!doctorGrid) return; // Not on page with dynamic doctor grid

  let currentCategory = 'All';

  // Render filter pills
  if (filterPillsContainer) {
    const categories = ['All', 'Orthopedics', 'Cardiology', 'Gastroenterology', 'Neurology', 'Urology', 'Pulmonology', 'Pediatrics', 'Mother & Child', 'Critical Care'];
    filterPillsContainer.innerHTML = categories.map(cat => 
      `<button class="filter-pill ${cat === 'All' ? 'active' : ''}" data-category="${cat}">${cat}</button>`
    ).join('');

    filterPillsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-pill');
      if (!btn) return;
      document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      filterDoctors();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterDoctors);
  }

  function renderDoctors(list) {
    if (list.length === 0) {
      doctorGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
        <h3>No matching doctors found</h3>
        <p>Try searching for a different specialty or doctor name.</p>
      </div>`;
      return;
    }

    doctorGrid.innerHTML = list.map(doc => `
      <div class="doctor-card">
        <div class="doctor-img-wrap">
          <img src="${doc.image}" alt="${doc.name}" onerror="this.src='images/doctor-placeholder.svg';" />
          <span class="doctor-dept-badge">${doc.department}</span>
        </div>
        <div class="doctor-info">
          <h3 class="doctor-name">${doc.name}</h3>
          <div class="doctor-qualification">${doc.qualification}</div>
          <div class="doctor-designation">${doc.designation}</div>
          <div class="doctor-treatments">
            ${doc.treatments.map(t => `<span class="treatment-tag">${t}</span>`).join('')}
          </div>
          <button class="btn btn-primary doctor-card-action" data-open-modal="true" data-doctor="${doc.name}" data-department="${doc.department}">
            Book Appointment
          </button>
        </div>
      </div>
    `).join('');
  }

  function filterDoctors() {
    const query = (searchInput?.value || '').toLowerCase().trim();
    const filtered = doctorsData.filter(doc => {
      const matchesCategory = currentCategory === 'All' || doc.department.toLowerCase() === currentCategory.toLowerCase();
      const matchesSearch = !query || 
        doc.name.toLowerCase().includes(query) ||
        doc.department.toLowerCase().includes(query) ||
        doc.qualification.toLowerCase().includes(query) ||
        doc.designation.toLowerCase().includes(query) ||
        doc.treatments.some(t => t.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });

    renderDoctors(filtered);
  }

  // Initial render
  renderDoctors(doctorsData);
}

/* --------------------------------------------------------------------------
   5. STAT COUNTERS ANIMATION
   -------------------------------------------------------------------------- */
function initStatCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length === 0) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(num => {
          const target = parseInt(num.getAttribute('data-target') || '0', 10);
          if (!target) return;

          let count = 0;
          const step = Math.ceil(target / 40);
          const timer = setInterval(() => {
            count += step;
            if (count >= target) {
              count = target;
              clearInterval(timer);
            }
            const suffix = num.getAttribute('data-suffix') || '';
            num.innerHTML = count.toLocaleString() + `<span>${suffix}</span>`;
          }, 30);
        });
      }
    });
  }, { threshold: 0.2 });

  const statsGrid = document.querySelector('.stats-grid');
  if (statsGrid) observer.observe(statsGrid);
}

/* --------------------------------------------------------------------------
   6. BACK TO TOP BUTTON
   -------------------------------------------------------------------------- */
function initBackToTop() {
  let btn = document.getElementById('back-to-top');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'back-to-top';
    btn.className = 'back-to-top';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = '↑';
    document.body.appendChild(btn);
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
