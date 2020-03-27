/* eslint-disable no-tabs */
import $ from 'jquery';

const { INFO } = CUSTOM_MESSAGES;
const { PHONES, EMAILS, SOCIAL_MEDIA } = INFO;

function initPhones() {
  const $footerphones = $('.footer .phone');

  PHONES.map((number) => {
    $footerphones.append(`
      <a href="tel:${number}" class="phone-item">${number}</a>
    `);
  });

  const $headerphones = $('.header .phone');

  PHONES.map((number) => {
    $headerphones.append(`
      <a href="tel:${number}" class="phone-item">${number}</a>
    `);
  });
}

function initEmails() {
  const $feedbacks = $('.footer .emails');

  EMAILS.map((email) => {
    $feedbacks.append(`
      <a class="footer-link" href="mailto:${email}">${email}</a>
    `);
  });
}

function initSocialMedia() {
  const $feedbacks = $('.footer .social-list');

  SOCIAL_MEDIA.map(({ ICON, HREF }) => {
    $feedbacks.append(`
      <li class="social-el">
        <a href="${HREF}" target="_blank" class="social-link">
          <i class="${ICON}"></i>
        </a>
      </li>
    `);
  });
}

function initInfo() {
  initPhones();
  initEmails();
  initSocialMedia();
}

export default initInfo;
