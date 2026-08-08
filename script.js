/* ==========================================================================
   ADITYA MEDICARE HOSPITALS - INTERACTIVE LOGIC & FULL DOCTORS SYSTEM
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
  { name: "General Surgery", icon: "🔪", description: "Laparoscopic, laser & general surgical procedures." },
  { name: "ENT", icon: "👂", description: "Ear, nose, throat, micro-ear & head/neck surgery." },
  { name: "Dermatology", icon: "✨", description: "Skin, hair, laser treatment & clinical dermatology." },
  { name: "Radiology", icon: "📷", description: "3T MRI, 128-Slice CT Scan, Ultrasound & Digital X-Ray." }
];

// COMPREHENSIVE DOCTORS DATABASE (36 REAL CONSULTANTS & SURGEONS)
const doctorsData = [
  {
    name: "Dr. Krishna Sravanth Pakanati",
    department: "Orthopedics",
    qualification: "MBBS, DNB Orthopedics, MCh Ortho, FJR, FSS",
    designation: "Chief Consultant Orthopedic & Joint Replacement Surgeon",
    image: "images/doctors/krishna-sravanth.jpg",
    summary: "Senior orthopedic surgeon specializing in MISSO Robotic joint replacement, arthroscopy, and complex trauma care.",
    treatments: ["MISSO Robotic Knee", "Joint Replacement", "Arthroscopy", "Spine & Trauma Care"]
  },
  {
    name: "Dr. Ramakoteswara Rao K",
    department: "Orthopedics",
    qualification: "D Ortho, Fellowship in Arthroplasty and Arthroscopy",
    designation: "Senior Consultant Orthopaedic Surgeon",
    image: "images/doctors/ramakoteswara-rao.jpg",
    summary: "Expert in primary & revision hip and knee replacements and sports injury arthroscopic management.",
    treatments: ["Knee & Hip Replacement", "Arthroscopy", "Joint Pain Care", "Fracture Surgery"]
  },
  {
    name: "Dr. Sai Krishna Katakam",
    department: "Gastroenterology",
    qualification: "MBBS, MS, MCh (SGPGIMS Lucknow)",
    designation: "Consultant Surgical Gastroenterologist & GI Onco-surgeon",
    image: "images/doctors/sai-krishna-katakam.jpeg",
    summary: "Specialist in laparoscopic GI surgery, HPB liver procedures, and GI surgical oncology.",
    treatments: ["Laparoscopic GI Surgery", "HPB & Liver Care", "GI Onco-surgery", "Endoscopy"]
  },
  {
    name: "Dr. Raghu Sarath Punukollu",
    department: "Urology",
    qualification: "MBBS, DNB, MCh Urology",
    designation: "Consultant Urologist, Reconstructive Surgeon & Andrologist",
    image: "images/doctors/raghu-sarath.jpg",
    summary: "Expert in laser kidney stone removal (RIRS), prostate surgery, endourology, and male fertility.",
    treatments: ["Laser Stone Removal (RIRS)", "Prostate Surgery", "Andrology", "Endourology"]
  },
  {
    name: "Dr. Guttikonda Bhanu Vijay",
    department: "Cardiology",
    qualification: "MBBS, MD General Medicine, DM Cardiology",
    designation: "Consultant Interventional Cardiologist",
    image: "images/doctors/dr-guttikonda.jpeg",
    summary: "Senior cardiologist specializing in 24/7 emergency primary angioplasty, Cath Lab procedures, and heart failure.",
    treatments: ["Angioplasty & Stenting", "Cath Lab Interventions", "Heart Failure Care", "Pacemaker"]
  },
  {
    name: "Dr. Viswa Jyothi Yakkala",
    department: "Neurology",
    qualification: "MBBS, MD, DM Neurology",
    designation: "Consultant Neurologist & Stroke Specialist",
    image: "images/doctors/dr-viswa-jyothi.jpeg",
    summary: "Specialist in acute stroke thrombolysis, epilepsy, headache management, and neuro intensive care.",
    treatments: ["Acute Stroke Care", "Epilepsy Management", "Migraine & Headache", "Neuro ICU Care"]
  },
  {
    name: "Dr. Sajila",
    department: "Mother & Child",
    qualification: "MBBS, MS (OBG), DNB",
    designation: "Consultant Obstetrician & Gynecologist",
    image: "images/doctors/dr-sajila.jpeg",
    summary: "Specialist in high-risk pregnancy, laparoscopic gynecology surgery, painless delivery, and women's health.",
    treatments: ["High-Risk Pregnancy", "Laparoscopic Gynecology", "Painless Delivery", "Infertility Care"]
  },
  {
    name: "Dr. Farha",
    department: "Pediatrics",
    qualification: "MBBS, DCH, DNB Pediatrics",
    designation: "Consultant Pediatrician & Neonatologist",
    image: "images/doctors/dr-farha.jpeg",
    summary: "Expert in newborn NICU care, child vaccination, pediatric emergency management, and growth care.",
    treatments: ["Level-III NICU Care", "Child Vaccination", "Pediatric Emergency", "Growth & Nutrition"]
  },
  {
    name: "Dr. Dinesh",
    department: "Pulmonology",
    qualification: "MBBS, MD Pulmonology",
    designation: "Consultant Pulmonologist & Sleep Specialist",
    image: "images/doctors/dr-dinesh.jpeg",
    summary: "Expert in asthma, COPD, sleep apnea diagnosis, video bronchoscopy, and respiratory ICU care.",
    treatments: ["Asthma & COPD", "Video Bronchoscopy", "Sleep Apnea Care", "Respiratory ICU"]
  },
  {
    name: "Dr. Sunil Kumar Thadigiri",
    department: "Critical Care",
    qualification: "MBBS, MD Anesthesia, IDCCM",
    designation: "Chief Intensivist & Critical Care Specialist",
    image: "images/doctors/dr-sunil-thadigiri.jpeg",
    summary: "Head of 100-bed ICU managing multi-organ failure, poly-trauma, sepsis, and mechanical ventilation.",
    treatments: ["100-Bed ICU Care", "Ventilator Support", "Poly-Trauma Management", "Sepsis Care"]
  },
  {
    name: "Dr. Sravani Jakkireddy",
    department: "Mother & Child",
    qualification: "MBBS, MS (OBG), DNB",
    designation: "Consultant Gynecologic Surgeon & Fertility Specialist",
    image: "images/doctors/dr-sravani-jakkireddy.jpeg",
    summary: "Expert in minimally invasive gynecologic procedures, fertility workup, and maternity wellness.",
    treatments: ["Fertility Care", "Laparoscopic Surgery", "High-Risk Delivery", "Prenatal Care"]
  },
  {
    name: "Dr. Meena",
    department: "General Medicine",
    qualification: "MBBS, MD General Medicine",
    designation: "Consultant Physician & Diabetologist",
    image: "images/doctors/dr-meena.jpeg",
    summary: "Specialist in diabetes mellitus management, hypertension, infectious diseases, and adult health.",
    treatments: ["Diabetes Care", "Hypertension", "Infectious Diseases", "Preventive Checkups"]
  },
  {
    name: "Dr. Abhiram Katragadda",
    department: "Orthopedics",
    qualification: "MBBS, MS Ortho, FIJR",
    designation: "Consultant Joint Replacement & Trauma Surgeon",
    image: "images/doctors/abhiram-katragadda.png",
    summary: "Specialist in complex fracture reconstruction, sports medicine, and joint replacement.",
    treatments: ["Fracture Reconstruction", "Joint Replacement", "Sports Injuries", "Arthroscopy"]
  },
  {
    name: "Dr. Akif Baig",
    department: "Cardiology",
    qualification: "MBBS, MD, DM Cardiology",
    designation: "Consultant Cardiologist",
    image: "images/doctors/akif-baig.jpg",
    summary: "Consultant for adult cardiology, echocardiography, coronary angiogram, and hypertension care.",
    treatments: ["Echocardiography", "Coronary Angiogram", "Hypertension", "Preventive Heart Care"]
  },
  {
    name: "Dr. BCHV Akhilesh",
    department: "General Surgery",
    qualification: "MBBS, MS General Surgery, FMAS",
    designation: "Consultant Laparoscopic & General Surgeon",
    image: "images/doctors/bchv-akhilesh.png",
    summary: "Specialist in laparoscopic hernia repair, appendectomy, gallbladder surgery, and laser proctology.",
    treatments: ["Laparoscopic Hernia", "Appendectomy", "Gallbladder Surgery", "Laser Proctology"]
  },
  {
    name: "Dr. Bhumana Sai Srinivas",
    department: "Neurology",
    qualification: "MBBS, MD, DM Neurology",
    designation: "Consultant Neurologist",
    image: "images/doctors/bhumana-sai-srinivas.jpg",
    summary: "Specialist in peripheral neuropathy, neuromuscular disorders, stroke, and Parkinson's disease.",
    treatments: ["Neuropathy Care", "Parkinson's Care", "Stroke Recovery", "EEG & EMG"]
  },
  {
    name: "Dr. Ch. Amulya",
    department: "Pediatrics",
    qualification: "MBBS, MD Pediatrics",
    designation: "Consultant Pediatric Physician",
    image: "images/doctors/ch-amulya.jpg",
    summary: "Dedicated pediatrician focusing on pediatric infectious diseases, nutrition, and child growth.",
    treatments: ["Child Health Care", "Immunization", "Pediatric Infections", "Growth Monitoring"]
  },
  {
    name: "Dr. Bindesh",
    department: "Urology",
    qualification: "MBBS, MS, MCh Urology",
    designation: "Consultant Urologist & Kidney Transplant Surgeon",
    image: "images/doctors/dr-bindesh.png",
    summary: "Expert in endourological procedures, laparoscopic urology, and kidney stone management.",
    treatments: ["Endourology", "Kidney Stone Laser", "Laparoscopic Urology", "Prostate Care"]
  },
  {
    name: "Dr. Gamidi Anusha",
    department: "Mother & Child",
    qualification: "MBBS, DNB (OBG)",
    designation: "Consultant Obstetrician",
    image: "images/doctors/gamidi-anusha.jpg",
    summary: "Consultant obstetrician managing routine and complicated maternity deliveries and adolescent health.",
    treatments: ["Maternity Care", "Normal Delivery", "Postnatal Care", "Women's Wellness"]
  },
  {
    name: "Dr. Goli Kasiram",
    department: "Nephrology",
    qualification: "MBBS, MD, DM Nephrology",
    designation: "Consultant Nephrologist & Transplant Physician",
    image: "images/doctors/goli-kasiram.jpg",
    summary: "Specialist in acute renal failure, chronic kidney disease (CKD), hemodialysis, and kidney care.",
    treatments: ["Hemodialysis", "Chronic Kidney Disease", "Hypertensive Renal Care", "Kidney Health"]
  },
  {
    name: "Dr. Gopala Krishna Medarametla",
    department: "General Medicine",
    qualification: "MBBS, MD General Medicine",
    designation: "Senior Consultant Physician",
    image: "images/doctors/gopala-krishna-medarametla.jpg",
    summary: "Comprehensive internal medicine specialist for metabolic disorders, fever evaluation, and adult care.",
    treatments: ["Internal Medicine", "Fever & Infection", "Metabolic Care", "Geriatric Care"]
  },
  {
    name: "Dr. J. Ramesh",
    department: "Cardiology",
    qualification: "MBBS, MD, DM Cardiology",
    designation: "Consultant Clinical Cardiologist",
    image: "images/doctors/j-ramesh.jpg",
    summary: "Expert in non-invasive cardiac evaluation, treadmill stress testing (TMT), and arrhythmia management.",
    treatments: ["ECG & TMT", "Echocardiogram", "Arrhythmia Care", "Heart Health Checkup"]
  },
  {
    name: "Dr. Jinaga Nageswar Rao",
    department: "Pulmonology",
    qualification: "MBBS, DTCD, DNB Chest",
    designation: "Senior Consultant Chest Physician",
    image: "images/doctors/jinaga-nageswar-rao.jpg",
    summary: "Specialist in tuberculosis, lung fibrosis, chest infections, and occupational lung disorders.",
    treatments: ["Tuberculosis Care", "Lung Infections", "Chest Clinic", "Pulmonary Rehab"]
  },
  {
    name: "Dr. K. Suri Babu",
    department: "Orthopedics",
    qualification: "MBBS, MS Ortho",
    designation: "Senior Consultant Orthopedic Surgeon",
    image: "images/doctors/k-suri-babu.png",
    summary: "Experienced orthopedic surgeon specializing in complex joint trauma and bone deformity correction.",
    treatments: ["Trauma Surgery", "Deformity Correction", "Bone Fractures", "Joint Pain"]
  },
  {
    name: "Dr. Kesari Sravani",
    department: "Dermatology",
    qualification: "MBBS, DDVL",
    designation: "Consultant Dermatologist & Cosmetologist",
    image: "images/doctors/kesari-sravani.jpg",
    summary: "Expert in clinical dermatology, acne, psoriasis, eczema, and laser cosmetic treatments.",
    treatments: ["Acne & Psoriasis", "Laser Skin Care", "Hair Loss Treatment", "Dermatologic Surgery"]
  },
  {
    name: "Dr. Nimmagadda Bhanu Teja",
    department: "Critical Care",
    qualification: "MBBS, DA, IDCCM",
    designation: "Consultant Intensivist",
    image: "images/doctors/nimmagadda-bhanu-teja.jpg",
    summary: "Round-the-clock critical care consultant for trauma, respiratory failure, and post-operative monitoring.",
    treatments: ["ICU Monitoring", "Post-Op ICU Care", "Respiratory Failure", "Emergency Care"]
  },
  {
    name: "Dr. Pavan Badugu",
    department: "Gastroenterology",
    qualification: "MBBS, MD, DM Gastroenterology",
    designation: "Consultant Medical Gastroenterologist",
    image: "images/doctors/pavan-badugu.jpg",
    summary: "Specialist in diagnostic & therapeutic upper GI endoscopy, colonoscopy, GERD, and liver disorders.",
    treatments: ["Diagnostic Endoscopy", "Colonoscopy", "GERD & Acidity", "Liver Disease"]
  },
  {
    name: "Dr. Racha Madhavi",
    department: "Mother & Child",
    qualification: "MBBS, DGO",
    designation: "Consultant Gynecologist",
    image: "images/doctors/racha-madhavi.jpg",
    summary: "Consultant gynecologist for preventive cervical screening, fibroid management, and menopause care.",
    treatments: ["Gynec Care", "Pap Smear & Screening", "Fibroid Care", "Menopause Care"]
  },
  {
    name: "Dr. Sampara Sirish",
    department: "ENT",
    qualification: "MBBS, MS ENT",
    designation: "Consultant ENT, Head & Neck Surgeon",
    image: "images/doctors/sampara-sirish.jpg",
    summary: "Specialist in micro-ear surgery, endoscopic sinus surgery (FESS), tonsillectomy, and voice care.",
    treatments: ["Micro-Ear Surgery", "Endoscopic Sinus Surgery", "Tonsil & Adenoids", "Voice Disorders"]
  },
  {
    name: "Dr. Seshank Nuthi",
    department: "Radiology",
    qualification: "MBBS, MD Radiology",
    designation: "Chief Consultant Radiologist",
    image: "images/doctors/seshank-nuthi.jpg",
    summary: "Head of diagnostic radiology overseeing 3T MRI, 128-Slice CT scan, color Doppler, and ultrasound.",
    treatments: ["3T MRI Diagnostics", "128-Slice CT Scan", "Ultrasound & Doppler", "X-Ray Interpretation"]
  },
  {
    name: "Dr. Tejaswi Gogineni",
    department: "Pathology",
    qualification: "MBBS, MD Pathology",
    designation: "Consultant Pathologist & Lab Director",
    image: "images/doctors/tejaswi-gogineni.jpg",
    summary: "Director of central clinical pathology, histopathology, hematology, and biochemistry diagnostic lab.",
    treatments: ["Clinical Pathology", "Histopathology", "Hematology", "Diagnostic Lab"]
  },
  {
    name: "Dr. Unnam Yamuna",
    department: "General Surgery",
    qualification: "MBBS, MS General Surgery",
    designation: "Consultant General Surgeon",
    image: "images/doctors/unnam-yamuna.png",
    summary: "Consultant surgeon specializing in breast surgery, thyroid surgery, wound care, and diabetic foot management.",
    treatments: ["Breast & Thyroid Surgery", "Wound Care", "Diabetic Foot Care", "Minor Operations"]
  },
  {
    name: "Dr. V. Bhaskara Rao",
    department: "Orthopedics",
    qualification: "MBBS, D Ortho",
    designation: "Consultant Orthopedic Surgeon",
    image: "images/doctors/v-bhaskara-rao.jpg",
    summary: "Consultant for degenerative joint diseases, arthritis management, and emergency trauma fixation.",
    treatments: ["Arthritis Management", "Trauma Fixation", "Spine Pain Care", "Orthopedic OPD"]
  },
  {
    name: "Dr. V. Sai Krupa",
    department: "General Medicine",
    qualification: "MBBS, MD General Medicine",
    designation: "Consultant General Physician",
    image: "images/doctors/v-sai-krupa.jpg",
    summary: "General internal medicine consultant for routine ailments, preventive health screening, and chronic disease management.",
    treatments: ["General OPD", "Preventive Screening", "Chronic Disease Care", "Adult Health"]
  },
  {
    name: "Dr. Vaddi Viswanath",
    department: "Urology",
    qualification: "MBBS, MS, MCh Urology",
    designation: "Consultant Urologist",
    image: "images/doctors/vaddi-viswanath.jpg",
    summary: "Specialist in urinary tract infections, male urinary problems, bladder issues, and kidney stone management.",
    treatments: ["Urinary Tract Care", "Bladder Surgery", "Kidney Stones", "Prostate Health"]
  },
  {
    name: "Dr. Y.S. Himaja",
    department: "Mother & Child",
    qualification: "MBBS, MS (OBG)",
    designation: "Consultant Gynecologist & Fetal Medicine Specialist",
    image: "images/doctors/ys-himaja.jpg",
    summary: "Specialist in fetal ultrasound scans, high-risk maternity care, and genetic counseling.",
    treatments: ["Fetal Medicine", "Ultrasound Scans", "High-Risk Obstetrics", "Maternal Wellness"]
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
      window.closeAppointmentModal();
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
    const categories = ['All', 'Orthopedics', 'Cardiology', 'Gastroenterology', 'Neurology', 'Urology', 'Pulmonology', 'Pediatrics', 'Mother & Child', 'Critical Care', 'General Medicine', 'General Surgery', 'Nephrology', 'Dermatology', 'ENT', 'Radiology', 'Pathology'];
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
      doctorGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 50px 20px; background: #ffffff; border-radius: 16px; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm);">
        <div style="font-size: 2.5rem; margin-bottom: 12px;">🩺</div>
        <h3 style="margin-bottom: 8px; color: var(--navy); font-size: 1.3rem;">No matching doctors found</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem;">Try searching for another specialty, doctor name, or qualification.</p>
      </div>`;
      return;
    }

    doctorGrid.innerHTML = list.map(doc => `
      <div class="doctor-card doctor-card-horizontal">
        <div class="doctor-card-main">
          <div class="doctor-photo-wrap">
            <img src="${doc.image}" alt="${doc.name}" loading="lazy" onerror="this.src='images/doctor-placeholder.svg';" />
            <span class="doctor-opd-badge"><span class="opd-dot"></span> OPD Mon - Sat</span>
          </div>

          <div class="doctor-details-wrap">
            <div class="doctor-meta-header">
              <span class="doctor-dept-badge">${doc.department}</span>
            </div>
            <h3 class="doctor-name">${doc.name}</h3>
            <div class="doctor-qualification">${doc.qualification}</div>
            <div class="doctor-designation">${doc.designation}</div>
            <div class="doctor-treatments">
              ${doc.treatments.slice(0, 3).map(t => `<span class="treatment-tag">${t}</span>`).join('')}
            </div>
          </div>
        </div>

        <div class="doctor-card-footer">
          <button class="btn btn-primary doctor-card-action" data-open-modal="true" data-doctor="${doc.name}" data-department="${doc.department}">
            <span>📅 Book Appointment</span>
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

  // Initial render of all doctors into grid
  filterDoctors();
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
