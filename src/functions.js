/**
 * Creat alert
 */

const creatAlert = (msg, type = "danger") => {
  return ` <div
    class="alert alert-${type} d-flex justify-content-between mx-3"
    role="alert"
  >
    <div>${msg}</div>
    <button class="btn-close" data-bs-dismiss="alert"></button>
  </div>`;
};

/**
 * phone number match
 */

const isMobile = (phone) => {
  const pattern = /^[a-zA-Z0-9-().\s]{10,15}$/;
  return pattern.test(phone);
};

/**
 * Email Validation
 */

const isEmail = (email) => {
  const pattern =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return pattern.test(email);
};
