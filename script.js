// স্ট্যাটাস এবং ব্যাজ আপডেট করা
function setStatus(button, status) {
  const card = button.closest('.card');
  const badge = card.querySelector('.badge');

  card.setAttribute('data-status', status);

  if (status === 'interview') {
    badge.innerText = 'INTERVIEWING';
    badge.className = 'badge badge-interview';
  } else if (status === 'rejected') {
    badge.innerText = 'REJECTED';
    badge.className = 'badge badge-rejected';
  }

  updateCounts();
}

// কার্ড ডিলিট করা
function deleteCard(btn) {
  if (confirm('Are you sure you want to delete this job application?')) {
    const card = btn.closest('.card');
    card.remove();
    updateCounts();
  }
}

// ফিল্টারিং করা
function filterJobs(type, btn) {
  const cards = document.querySelectorAll('.card');
  const tabs = document.querySelectorAll('.tabs button');
  let visibleCount = 0;

  tabs.forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  cards.forEach(card => {
    const cardStatus = card.getAttribute('data-status');
    if (type === 'all' || cardStatus === type) {
      card.style.display = 'block';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  // যদি কোনো কার্ড না থাকে মেসেজ দেখানো
  document.getElementById('noJobs').style.display =
    visibleCount === 0 ? 'block' : 'none';
}

// সব কাউন্ট একসাথে আপডেট করা
function updateCounts() {
  const allCards = document.querySelectorAll('.card');
  const interviews = document.querySelectorAll(
    '.card[data-status="interview"]',
  ).length;
  const rejections = document.querySelectorAll(
    '.card[data-status="rejected"]',
  ).length;

  // ড্যাশবোর্ড আপডেট
  document.getElementById('total').innerText = allCards.length;
  document.getElementById('interviewCount').innerText = interviews;
  document.getElementById('rejectedCount').innerText = rejections;

  // Available Jobs এর পাশে কাউন্ট আপডেট
  document.getElementById('jobTotalCount').innerText = allCards.length;
}

// প্রথমবার পেজ লোড হলে কাউন্ট রান করা
updateCounts();
